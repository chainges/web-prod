const { isFuture } = require("date-fns");
const { languages, baseLanguage } = require('./src/intl/languages');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createSchemaCustomization = ({ actions, schema }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: "SanityPost",
      interfaces: ["Node"],
      fields: {
        isPublished: {
          type: "Boolean!",
          resolve: source => new Date(source.publishedAt) <= new Date()
        }
      }
    })
  ]);
};

async function createLandingPages(pathPrefix = "/", graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityRoute(filter: { slug: { current: { ne: null } }, page: { id: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);
  if (result.errors) throw result.errors;

  const routeEdges = (result.data.allSanityRoute || {}).edges || [];
  routeEdges.forEach(edge => {
    const { id, slug = {} } = edge.node;
    const path = [pathPrefix, slug.current, "/"].join("");
    reporter.info(`Creating landing page: ${path}`);
    createPage({
      path,
      component: require.resolve("./src/templates/page.js"),
      context: { id }
    });
  });
}

async function createBlogPostPages(pathPrefix = "/blog", graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } }, isPublished: { eq: true } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];
  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach(edge => {
      const { id, slug = {} } = edge.node;
      const path = `${pathPrefix}/${slug.current}/`;
      reporter.info(`Creating blog post page: ${path}`);
      createPage({
        path,
        component: require.resolve("./src/templates/blog-post.js"),
        context: { id, slug: slug.current }
      });
    });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createLandingPages("/", graphql, actions, reporter);
  await createBlogPostPages("/blog", graphql, actions, reporter);
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);

  const getLocale = (path) => {
    let locale = "en";
    const pathname = path.split('/');
    if (pathname.length >= 2) {
      languages.forEach((language) => {
        if (pathname[1] == language.name) {
          locale = language.name
        }
      })
    }
    return locale;
  }
  const locale = getLocale(page.path);
  createPage({
    ...page,
    context: {
      ...page.context,
      locale: locale,
    },
  });

};
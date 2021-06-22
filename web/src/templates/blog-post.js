import BlogPost from "../components/blog-post";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import React, { useEffect } from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { toPlainText } from "../lib/helpers";
import { useIntl } from "gatsby-plugin-intl";

export const query = graphql`
  query BlogPostTemplateQuery($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } } ) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        ...SanityImage
        alt
      }
      title {
        en
        no
      }
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
    }
  }
`;

const BlogPostTemplate = props => {
  const { data, errors } = props;
  const post = data && data.post;
  const intl = useIntl();
  return (
    <Layout textWhite={true}>
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <SEO
          title={post.title[intl.locale] || "Untitled"}
          description={toPlainText(post._rawExcerpt)}
          image={post.mainImage}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <BlogPost {...post} />}
    </Layout>
  );
};

export default BlogPostTemplate;

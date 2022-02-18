import { BottomWave, TopWave } from "../components/wave";
import React, { useState, useEffect } from "react";

import CTA from "../components/cta";
import CTAColumns from "../components/cta-columns";
import GraphQLErrorList from "../components/graphql-error-list";
import Hero from "../components/hero";
import InfoRows from "../components/InfoRows";
import Layout from "../containers/layout";
import Pricing from "../components/pricing";
import SEO from "../components/seo";
import SignupEmail from "../components/signupEmail";
import { graphql } from "gatsby";
import Paper from "../components/Paper";
import RichTextRender from "../components/RichTextRender";
import Contact from "../components/Contact";
import BuilderRenderer from "../components/BuilderRenderer";

// Add import of a custom component

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityRoute(id: { eq: $id }) {
      slug {
        current
      }
      useSiteTitle
      page {
        ...PageInfo
      }
    }
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      primaryColor {
        hex
      }
      secondaryColor {
        hex
      }
      title
      openGraph {
        title
        description
        image {
          ...SanityImage
        }
      }
    }
  }
`;

const Page = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const [headerHeight, setHeaderHeight] = useState("73px");
  useEffect(() => {
    setHeaderHeight(document.getElementById("header").clientHeight + "px");
  }, []);

  const page = data.page || data.route.page;

  const content = (page._rawContent || [])
    .filter(c => !c.disabled)
    .map((c, i) => {
      let el = null;
      switch (c._type) {
        case "pricing":
          el = <Pricing key={c._key} {...c} />;
          break;
        case "infoRows":
          el = <InfoRows key={c._key} {...c} />;
          break;
        case "hero":
          el = <Hero key={c._key} {...c} />;
          break;
        case "ctaColumns":
          el = <CTAColumns key={c._key} {...c} />;
          break;
        case "ctaPlug":
          el = <CTA key={c._key} {...c} />;
          break;
        case "uiComponentRef":
          switch (c.name) {
            case "topWave":
              el = <TopWave />;
              break;
            case "bottomWave":
              el = <BottomWave />;
              break;
            // Add possibility to insert custom component as UI-component reference
            case "signupEmail":
              el = <SignupEmail />;
              break;
            case "paper":
              el = <Paper />;
              break;
            case "contact":
              el = <Contact />;
              break;
            default:
              break;
          }
          break;
        case "richText":
          el = <RichTextRender key={c._key} {...c} />;
          break;
        case "builderio":
          el = <BuilderRenderer key={c._key} {...c} />;
          break;
        default:
          el = null;
      }
      return el;
    });

  const gradient = {
    from: (site.primaryColor && site.primaryColor.hex) || "#d53369",
    to: (site.secondaryColor && site.secondaryColor.hex) || "#daae51"
  };

  const menuItems = page.navMenu && (page.navMenu.items || []);
  const pageTitle = (data.route && !data.route.useSiteTitle && page.title) || "";

  return (
    <Layout navMenuItems={menuItems} textWhite={true}>
      <SEO
        title={pageTitle}
        description={site.description}
        keywords={site.keywords}
        bodyAttr={{
          class: "leading-normal tracking-normal text-white gradient"
        }}
        gradient={gradient}
      />
      {/* <div className="pt-24">{content}</div> */}
      <div style={{ paddingTop: headerHeight }}>{content}</div>
    </Layout>
  );
};

export default Page;

import Errors from "../components/errors";
import Page from "../templates/page";
import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    alt
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
      metadata {
        lqip
        dimensions {
          aspectRatio
          width
          height
        }
      }
    }
  }

  query FrontpageQuery($locale: String!) {
    page: sanityPage(_id: { regex: "/(drafts.|)frontpage/" } i18n_lang: { eq: $locale }) {
      ...PageInfo
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

const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return <Errors errors={errors} />;
  }

  return <Page data={data} />;
};

export default IndexPage;

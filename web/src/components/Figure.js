import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import clientConfig from "../../client-config";
import { getGatsbyImageData } from "gatsby-source-sanity";

export default ({ node }) => {
  if (!node || !node.asset || !node.asset._id) {
    return null;
  }
  const imageDate = getGatsbyImageData(node, { maxWidth: 675 }, clientConfig.sanity);
  return (
    <figure>
      <GatsbyImage image={imageDate} alt={node.alt} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  );
};

import * as styles from "./blog-post-preview-list.module.css";

import BlogPostPreview from "./blog-post-preview";
// import { Link } from "gatsby";
import { Link, useIntl } from "gatsby-plugin-intl";
import React from "react";

function BlogPostPreviewGrid(props) {
  const intl = useIntl();
  return (
    <div className={styles.root}>
      {props.title && props.title[intl.locale] && <h2 className={styles.headline}>{props.title[intl.locale]}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default BlogPostPreviewGrid;

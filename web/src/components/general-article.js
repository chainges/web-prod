import * as styles from "./general-article.module.css";

// import { Link } from "gatsby";
import { Link } from "gatsby-plugin-intl";
import PortableText from "./portableText";
import React from "react";
import { cn } from "../lib/helpers";
import { responsiveTitle3 } from "./typography.module.css";

function GeneralArticle(props) {
  return (
    <div>
      <div className={styles.text}>
        <h2 className={cn(responsiveTitle3, styles.title)}>{props.title}</h2>
        {props.subtitle && (
          <div className={styles.excerpt}>
            <PortableText blocks={props.subtitle} />
          </div>
        )}
        <PortableText blocks={props.content} />
      </div>
    </div>
  );
}

export default GeneralArticle;

import React from "react";
// import { Link } from "gatsby";
import { Link } from "gatsby-plugin-intl";

const CTAction = ({ kind, title, link }) => (
  { kind === "button" && (
    <button className="">
      {title}
    </button>
  )}
{ kind === "link" && <Link to={link}>{title}</Link> }
);

export default CTAction;

import "katex/dist/katex.min.css";

import React, { useCallback, useMemo, useState } from "react";

import KaTeX from "katex";

const LatexRender = ({ isInline = false, latex = "" }) => {
  const [html, setHtml] = useState("");
  const createHtml = () => {
    setHtml(
      KaTeX.renderToString(latex, {
        displayMode: !isInline,
        throwOnError: false
      })
    );
  };

  useMemo(createHtml, [latex, isInline]);
  if (isInline) {
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default LatexRender;

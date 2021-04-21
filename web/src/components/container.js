import * as styles from "./container.module.css";

import React from "react";

const Container = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Container;

import React from "react";
import classes from "./Loader.styles.module.css";

export const Loader = () => {
  return (
    <div className={classes.spinner}>
      <div className={classes.bounce1}></div>
      <div className={classes.bounce2}></div>
      <div></div>
    </div>
  );
};

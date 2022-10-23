import React, { FC } from "react";
import classes from "./Navbar.styles.module.css";

export const Navbar: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={`${classes.wrapper}`}>
      <nav>
        <ul className={`${classes.elementsWrapper}`}>{children}</ul>
      </nav>
    </div>
  );
};

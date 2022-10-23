import React, { FC } from "react";
import classes from "./Navbar.styles.module.css";
import { IClickable } from "../../utils";

export interface INavbarElementProps extends IClickable {
  title: string;
}

export const NavbarElement: FC<INavbarElementProps> = ({ title, onClick }) => {
  return (
    <div className={`${classes.elementWrapper}`} onClick={onClick}>
      <span className={`${classes.elementTitle}`}>{title}</span>
    </div>
  );
};

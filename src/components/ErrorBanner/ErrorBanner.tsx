import React, { FC } from "react";
import classes from "./ErrorBanner.styles.module.css";
import { ISizeable } from "../../utils";

export interface IErrorBannerProps extends ISizeable {
  text?: string;
}

const Styles = {
  wrapper: {
    sizes: {
      s: classes.s,
      m: classes.m,
      l: classes.l,
    },
  },
};

export const ErrorBanner: FC<IErrorBannerProps> = ({
  size = "m",
  text = "Что-то пошло не так",
}) => {
  const styles = {
    wrapper: {
      size: (() => {
        if (size === "s") {
          return Styles.wrapper.sizes.s;
        }
        if (size === "m") {
          return Styles.wrapper.sizes.m;
        }
        if (size === "l") {
          return Styles.wrapper.sizes.l;
        }
      })(),
    },
  };
  return (
    <div className={`${classes.wrapper} ${styles.wrapper.size}`}>{text}</div>
  );
};

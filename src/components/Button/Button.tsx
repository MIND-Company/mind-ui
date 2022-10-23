import React, { FC } from "react";
import classes from "./Button.styles.module.css";
import { IOptionalSizeable } from "../../utils";

export interface IButtonProps extends IOptionalSizeable {
  title: string;
  onClick: () => void;
  type?: "primary" | "secondary";
  onHover?: () => void;
  onLoseHover?: () => void;
}

const Styles = {
  wrapper: {
    sizes: {
      s: classes.s,
      m: classes.m,
      l: classes.l,
    },
    types: {
      primary: classes.primary,
      secondary: classes.secondary,
    },
    main: classes.wrapper,
  },
  text: {
    sizes: {
      s: classes.textSizeS,
      m: classes.textSizeS,
      l: classes.textSizeS,
    },
    types: {
      primary: classes.textTypePrimary,
      secondary: classes.textTypeSecondary,
    },
    main: classes.textWrapper,
  },
};

export const Button: FC<IButtonProps> = ({
  title,
  onClick,
  type = "primary",
  size = "m",
  onLoseHover,
  onHover,
}) => {
  const styles = {
    wrapper: {
      main: Styles.wrapper.main,
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
      type: (() => {
        if (type === "primary") {
          return Styles.wrapper.types.primary;
        }
        if (type === "secondary") {
          return Styles.wrapper.types.secondary;
        }
      })(),
    },
    text: {
      main: Styles.text.main,
      size: (() => {
        if (size === "s") {
          return Styles.text.sizes.s;
        }
        if (size === "m") {
          return Styles.text.sizes.m;
        }
        if (size === "l") {
          return Styles.text.sizes.l;
        }
      })(),
      type: (() => {
        if (type === "primary") {
          return Styles.text.types.primary;
        }
        if (type === "secondary") {
          return Styles.text.types.secondary;
        }
      })(),
    },
  };
  return (
    <button
      onMouseLeave={onLoseHover}
      onMouseEnter={onHover}
      className={`${styles.wrapper.main} ${styles.wrapper.size} ${styles.wrapper.type}`}
      onClick={onClick}
    >
      <span
        className={`${styles.text.main} ${styles.text.size} ${styles.text.type}`}
      >
        {title}
      </span>
    </button>
  );
};

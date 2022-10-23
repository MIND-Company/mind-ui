import React, { FC } from "react";
import classes from "./LoaderWrapper.styles.module.css";
import { Loader } from "../Loader";

export interface ILoaderWrapperProps {
  elementSizes?: {
    widthCss: string;
    heightCss: string;
  };
  isLoading: boolean;
  children: React.ReactNode;
}

export const LoaderWrapper: FC<ILoaderWrapperProps> = ({
  children,
  elementSizes = { widthCss: "200px", heightCss: "200px" },
  isLoading,
}) => {
  return (
    <>
      {isLoading ? (
        <div
          className={classes.wrapper}
          style={{
            width: elementSizes.widthCss,
            height: elementSizes.heightCss,
          }}
        >
          <Loader />
        </div>
      ) : (
        children
      )}
    </>
  );
};

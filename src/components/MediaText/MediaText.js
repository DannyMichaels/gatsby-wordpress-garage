import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export const MediaText = ({
  verticalAlignment,
  style,
  className,
  mediaPosition,
  gatsbyImage,
  children,
}) => {
  const contentJSX = (
    <div
      className={`flex p-4 ${
        verticalAlignment === "center" ? "items-center" : ""
      }`}
    >
      <div>{children}</div>
    </div>
  );

  // getStyles() returns an object with the styles for the block defined in the wp cms
  return (
    <div style={style} className={className}>
      {mediaPosition === "right" && contentJSX}

      <div>
        <GatsbyImage image={gatsbyImage} alt="" />
      </div>

      {mediaPosition !== "right" && contentJSX}
    </div>
  );
};

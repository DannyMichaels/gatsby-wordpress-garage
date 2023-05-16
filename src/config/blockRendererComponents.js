import React from "react";
import {
  BlockRenderer,
  getStyles,
  getClasses,
} from "@webdeveducation/wp-block-tools";
import MediaText from "../components/MediaText";

export const blockRendererComponents = (block) => {
  // any block that isn't included will default to the core renderer
  switch (block.name) {
    case "core/media-text": {
      return (
        <MediaText
          key={block.id}
          className={getClasses(block)}
          style={getStyles(block)}
          verticalAlignment={block.attributes.verticalAlignment}
          mediaPosition={block.attributes.mediaPosition}
          gatsbyImage={block.attributes.gatsbyImage}
        >
          <BlockRenderer blocks={block.innerBlocks} />
        </MediaText>
      );
    }

    default:
      return null;
  }
};

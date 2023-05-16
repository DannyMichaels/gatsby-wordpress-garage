import React from "react";
import {
  BlockRendererProvider,
  BlockRenderer,
  getStyles,
  getClasses,
} from "@webdeveducation/wp-block-tools";
import { GatsbyImage } from "gatsby-plugin-image";

function Page(props) {
  // pageContext is passed from gatsby-node.js in the createPage function (context property)
  // you don't need renderComponent if you don't want any custom react components for these blocks
  // using renderComponent specifically for images so gatsby can optimize them
  return (
    <div>
      <BlockRendererProvider
        allBlocks={props.pageContext.blocks}
        renderComponent={(block) => {
          // any block that isn't included will default to the core renderer
          switch (block.name) {
            case "core/media-text": {
              console.log("RENDER COMPONENT", block);

              const contentJSX = (
                <div
                  className={`flex p-4 ${
                    block.attributes.verticalAlignment === "center"
                      ? "items-center"
                      : ""
                  }`}
                >
                  <div>
                    <BlockRenderer blocks={block.innerBlocks} />
                  </div>
                </div>
              );

              // getStyles() returns an object with the styles for the block defined in the wp cms
              return (
                <div
                  key={block.id}
                  style={getStyles(block)}
                  className={getClasses(block)}
                >
                  {block.attributes.mediaPosition === "right" && contentJSX}

                  <div>
                    <GatsbyImage alt="" image={block.attributes.gatsbyImage} />
                  </div>

                  {block.attributes.mediaPosition !== "right" && contentJSX}
                </div>
              );
            }
          }
        }}
      />
    </div>
  );
}

export default Page;

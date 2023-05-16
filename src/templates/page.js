import React from "react";
import { BlockRendererProvider } from "@webdeveducation/wp-block-tools";
import { blockRendererComponents } from "../config/blockRendererComponents";

function Page(props) {
  // pageContext is passed from gatsby-node.js in the createPage function (context property)
  // you don't need renderComponent if you don't want any custom react components for these blocks
  // using renderComponent specifically for images so gatsby can optimize them
  return (
    <div>
      <BlockRendererProvider
        allBlocks={props.pageContext.blocks}
        renderComponent={blockRendererComponents}
      />
    </div>
  );
}

export default Page;

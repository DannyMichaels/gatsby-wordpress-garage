import React from "react";
import { BlockRendererProvider } from "@webdeveducation/wp-block-tools";

function Page(props) {
  // pageContext is passed from gatsby-node.js in the createPage function (context property)
  return <BlockRendererProvider allBlocks={props.pageContext.blocks} />;
}

export default Page;

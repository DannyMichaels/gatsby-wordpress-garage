import React from "react";
import { BlockRendererProvider } from "@webdeveducation/wp-block-tools";

function Page(props) {
  return <BlockRendererProvider allBlocks={props.pageContext.blocks} />;
}

export default Page;

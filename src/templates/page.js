import React from "react";
import { BlockRendererProvider } from "@webdeveducation/wp-block-tools";
import { blockRendererComponents } from "../config/blockRendererComponents";
import { Link } from "gatsby";

function Page(props) {
  // pageContext is passed from gatsby-node.js in the createPage function (context property)
  // you don't need renderComponent if you don't want any custom react components for these blocks
  // using renderComponent specifically for images so gatsby can optimize them
  return (
    <div>
      <BlockRendererProvider
        allBlocks={props.pageContext.blocks}
        renderComponent={blockRendererComponents}
        siteDomain={process.env.GATSBY_WP_URL}
        customInternalLinkComponent={(
          { children, internalHref, className },
          index
        ) => {
          return (
            <Link key={index} to={internalHref} className={className}>
              {children}
            </Link>
          );
        }}
      />
    </div>
  );
}

export default Page;

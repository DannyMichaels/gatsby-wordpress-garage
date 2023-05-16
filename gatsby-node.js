const path = require("path");
const {
  assignIds,
  assignGatsbyImage,
} = require("@webdeveducation/wp-block-tools");
const fs = require("fs");

exports.createPages = async ({ graphql, actions }) => {
  const pageTemplate = path.resolve("./src/templates/page.js");
  const { createPage } = actions;

  // get all pages from the graphql api and the theme stylesheet
  const { data } = await graphql(`
    query AllPagesQuery {
      wp {
        themeStylesheet
      }
      allWpPage {
        nodes {
          databaseId
          uri
          blocks
        }
      }
    }
  `);

  const pages = data.allWpPage.nodes;

  try {
    // taking the theme stylesheet and writing it to a file
    fs.writeFileSync("./public/themeStylesheet.css", data.wp.themeStylesheet);
  } catch (e) {}

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    let blocks = page.blocks;
    blocks = assignIds(blocks);
    blocks = await assignGatsbyImage({
      blocks,
      graphql,
      coreMediaText: true, // assign it on all media & text blocks
    });

    createPage({
      path: page.uri,
      component: pageTemplate,
      context: {
        blocks,
      },
    });
  }
};

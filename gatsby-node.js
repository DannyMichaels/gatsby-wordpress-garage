const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const pageTemplate = path.resolve("./src/templates/page.js");
  const { createPage } = actions;

  const { data } = await graphql(`
    query AllPagesQuery {
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

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    createPage({
      path: page.uri,
      component: pageTemplate,
    });
  }
};

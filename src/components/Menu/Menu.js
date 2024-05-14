import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const mainMenuQuery = graphql`
  query MainMenuQuery {
    wp {
      acfOptionsMainMenu {
        mainMenu {
          callToActionButton {
            destination {
              ... on WpPage {
                uri
              }
            }
            label
          }
          menuItems {
            root {
              label
              destination {
                ... on WpPage {
                  uri
                }
              }
            }
            subMenuItems {
              label
              destination {
                ... on WpPage {
                  uri
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const Menu = () => {
  const data = useStaticQuery(mainMenuQuery);

  console.log("MAIN MENU DATA", data);
  return (
    <div className="sticky top-0 z-20 h-16 bg-emerald-900 px-4 font-bold text-white">
      Menu
    </div>
  );
};

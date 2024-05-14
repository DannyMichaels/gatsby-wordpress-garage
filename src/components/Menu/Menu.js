import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

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

  const { menuItems = [] } = data.wp.acfOptionsMainMenu.mainMenu;

  return (
    <div
      className="sticky 
    top-0 z-20
    flex
    h-16 
    items-center
    justify-between bg-emerald-900 px-4 font-bold text-white"
    >
      <div>logo</div>
      <div className="flex h-full space-x-4">
        {menuItems.map((menuItem, idx) => (
          <div
            key={idx}
            className="group relative flex h-full cursor-pointer hover:bg-emerald-800"
          >
            <Link
              to={menuItem.root.destination.uri}
              className="
              flex
              h-full
              items-center
              px-4
              text-white
              no-underline
            "
            >
              {menuItem.root.label}
            </Link>

            {menuItem.subMenuItems && (
              <div className="absolute right-0 top-full hidden bg-emerald-800 text-right group-hover:block">
                {menuItem.subMenuItems.map((subMenuItem, idx) => (
                  <Link
                    key={idx}
                    to={subMenuItem.destination.uri}
                    className="
                   block 
                   whitespace-nowrap
                   p-4
                   text-white
                   no-underline
                   hover:bg-emerald-700
                  "
                  >
                    {subMenuItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

import React from "react";
import { Link } from "gatsby";

export const CallToActionButton = ({ label, destination }) => {
  return (
    <Link
      to={destination}
      className="inline-block cursor-pointer rounded-sm bg-yellow-500 px-4 py-2 font-bold uppercase no-underline
      transition-colors
      duration-300
      hover:bg-yellow-400
      "
    >
      {label}
    </Link>
  );
};

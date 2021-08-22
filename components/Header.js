import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

import SearchIcon from "@material-ui/icons/Search";
import HelpIcon from "@material-ui/icons/Help";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

import { useState } from "react";

// sm:justify-between sm:items-center items-start md:flex-row flex-col
const Header = () => {
  const [isNavbar, setIsNavbar] = useState(false);

  const handleNavbar = () => {
    setIsNavbar(!isNavbar);
  };

  return (
    <div className="sm:py-3 py-5 sm:px-2 px-5 bg-gray-800">
      <div className="mx-auto md:w-11/12  flex sm:flex-grow sm:items-center items-start md:flex-row flex-col">
        {/* Nav logo */}
        <div className="md:mb-0 mb-5 flex-grow mr-5">
          <img src="Logo.svg" alt="logo" width="300" className="sm:w-80 w-48" />
        </div>

        {/* NavLinks */}
        <div
          className={`flex items-center sm:flex-row flex-col mx-auto ${
            isNavbar ? `navbar_close` : `navbar_open`
          }`}
        >
          <a
            href="#"
            className="flex items-center mr-5 text-gray-300 font-semibold hover:text-white transition-colors sm:mb-0  mb-8"
          >
            <SearchIcon /> Find
          </a>
          <a
            href="#"
            className="flex items-center mr-5 text-gray-300 font-semibold hover:text-white transition-colors sm:mb-0 mb-8"
          >
            <AssignmentIndIcon />
            Tech
          </a>
          <a
            href="#"
            className="flex items-center mr-5 text-gray-300 font-semibold hover:text-white transition-colors sm:mb-0 mb-8"
          >
            <HelpIcon />
            Help
          </a>
          <a
            href="#"
            className="flex items-center mr-5 text-gray-300 font-semibold hover:text-white transition-colors sm:mb-0 mb-8"
          >
            <ExitToAppIcon />
            Login
          </a>
          <button className="bg-green-500 p-3 px-4 rounded font-semibold text-white sm:mb-0 mb-5">
            Join For Free
          </button>
        </div>

        <div className="sm:hidden block absolute top-0 right-0 m-5 mt-8 text-white">
          <MenuIcon
            className="text-3xl cursor-pointer"
            onClick={handleNavbar}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

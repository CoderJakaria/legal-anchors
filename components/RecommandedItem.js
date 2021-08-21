import React from "react";

import StarIcon from "@material-ui/icons/Star";
import MenuIcon from "@material-ui/icons/Menu";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const RecommandedItem = () => {
  return (
    <div className="border border-gray-200 rounded-sm">
      <img
        src="https://fiverr-res.cloudinary.com/video/upload/so_0.215594,t_gig_cards_web/fub8nqzbfy6ngk6phssc.png"
        alt="recommanded_person_gig_photo"
        className="w-full"
      />

      <div className="text-left px-4 pt-3">
        <a href="#" className="text-sm hover:text-green-500 transition-colors">
          I will develop you website using react and next js
        </a>
      </div>

      <div className="flex items-center px-4 pt-3 text-sm text-yellow-500">
        <StarIcon />
        <span>
          5.0
          <span className="text-sm text-gray-500 font-medium">(5 Reviews)</span>
        </span>
      </div>

      <div className="flex items-center p-3 pb-0">
        <div>
          <img
            src="assets/search-header/avatar.jpg"
            alt="recommaned_user_avatar"
            className="h-8 w-8 rounded-full"
          />
          <span></span>
        </div>
        <span className="ml-2 mr-2 text-md font-semibold">Elizabeth Keen</span>-
        <span className="text-sm font-medium ml-2 text-gray-400">Pro</span>
      </div>

      <div className="px-12">
        <span className="text-sm text-gray-500 font-medium">Lawyer. MSC</span>
        <p className="text-sm text-gray-500 font-medium">
          5 Years of Exprerience
        </p>
      </div>

      <div className="flex items-center justify-between text-gray-400 mt-3 pb-2 pt-3 px-4 bg-green-500">
        <div className="text-sm text-white">
          <MenuIcon className="mr-2 text-base" />
          <FavoriteBorderIcon />
        </div>

        <div className="flex items-center text-sm text-white">
          <span>STARTING AT</span>
          <p className="font-semibold ml-2">$10</p>
        </div>
      </div>
    </div>
  );
};

export default RecommandedItem;

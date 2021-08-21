import React from "react";

// MuI Here
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MenuIcon from "@material-ui/icons/Menu";

const GigItemBox = () => {
  return (
    <div className="bg-white border border-gray-300 rounded-md overflow-hidden">
      <div>
        <img src="assets/card_images/otg.png" alt="gig_image" className="w" />
      </div>

      <div>
        <div className="flex items-center p-3">
          <div>
            <img
              src="assets/search-header/avatar.jpg"
              alt="seller_avatar"
              className="h-8 w-8 rounded-full mr-2"
            />
            <span />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-medium">Elezabeth Keen</span>
            <span className="text-sm font-medium text-gray-500">
              Level 2 Seller
            </span>
          </div>
        </div>

        <div className="px-3 mb-2">
          <a
            href="#"
            className="text-lg leading-normal font-medium text-black hover:text-green-500"
          >
            I will design logo for you website. and you facebook
          </a>
        </div>

        <div className="px-3 flex items-center text-yellow-500 text-sm font-medium">
          <span className="flex items-center ">
            <FavoriteIcon />
            4.8
          </span>
          <span className="text-gray-400 ml-2">(1)</span>
        </div>

        <div className="flex items-center justify-between mt-3 pb-2 pt-2 px-4 border-t border-gray-300">
          <div className="text-sm text-gray-500">
            <MenuIcon className="mr-2 text-base cursor-pointer" />
            <FavoriteBorderIcon className="cursor-pointer" />
          </div>

          <div className="flex flex-col items-end text-sm">
            <span className="text-gray-500 font-medium">STARTING AT</span>
            <p className="font-semibold ml-2 text-xl text-black">$10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigItemBox;

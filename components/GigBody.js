// Own Packages here
import React, { useEffect, useState } from "react";

// MuI Here
import FavoriteIcon from "@material-ui/icons/Favorite";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import ShareIcon from "@material-ui/icons/Share";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

// All Components Here
import GigDetails from "./GigDetails";
import PricingBox from "./PricingBox";

const GigBody = () => {
  // States here
  const [show, handleShow] = useState(false);

  // Fixed the pricing box when 250px scrolled
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        handleShow(true);
      } else {
        handleShow(false);
      }

      if (window.scrollY > 4500) {
        handleShow(false);
      }
    });
  }, []);

  return (
    <div className="py-5">
      <div className="w-11/12 mx-auto grid grid-cols-3 gap-7 pt-10">
        {/* Left */}
        <div className="md:col-span-2 col-span-3">
          {/* Category are here */}
          <ul className="category-breadcrumbs flex items-center">
            <li className="text-xs text-blue-700">
              <a href="#">
                Programming & Tech <ArrowForwardIosIcon className="text-sm" />
              </a>
            </li>
            <li className="text-xs text-blue-700">
              <a href="#">
                Web Programming <ArrowForwardIosIcon className="text-sm" />
              </a>
            </li>
            <li className="text-xs text-blue-700">
              <a href="#">Web Application</a>
            </li>
          </ul>

          {/* Right side body mean gig image area */}
          <GigDetails />
        </div>

        {/* Right */}
        <div className="md:col-span-1 col-span-3">
          {/* Topbars */}
          <div>
            <ul className="flex items-center">
              <li className="mr-2 border-gray-400 border py-1 px-2 rounded-md cursor-pointer">
                <MenuOutlinedIcon />
              </li>
              <li className="mr-2 border-gray-400 border py-1 px-2 rounded-md cursor-pointer">
                <FavoriteIcon />
              </li>
              <li className="mr-2 border-gray-400 border py-1 px-2 rounded-md cursor-pointer">
                243
              </li>
              <li className="mr-2 border-gray-400 border py-1 px-2 rounded-md cursor-pointer">
                <ShareIcon />
              </li>
              <li className="mr-2 border-gray-400 border py-1 px-2 rounded-md cursor-pointer">
                <FlagOutlinedIcon />
              </li>
            </ul>
          </div>

          {/* Pricing box */}
          <div
            className={`${show && `pricebox_fixed md:fixed relative`} pricebox`}
          >
            {/* The box where client find pricing thing */}
            <PricingBox />

            {/* Contact Seller */}
            <div className="m-5">
              <div className="flex items-center justify-center border border-gray-500 p-2 rounded-md cursor-pointer">
                <button className="border-none outline-none mr-2">
                  Contact Seller
                </button>
                <ExpandMoreIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigBody;

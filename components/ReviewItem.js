import React from "react";

import StarIcon from "@material-ui/icons/Star";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";

const ReviewItem = () => {
  return (
    <div className="border-b pb-8 mb-7 border-gray-300">
      <div>
        <div className="flex items-center">
          <div>
            <img
              src="/assets/search-header/avatar.jpg"
              alt="revieser_avatar"
              className="h-7 w-7 rounded-full mr-3"
            />
            <span></span>
          </div>
          <span className="text-sm font-semibold text-black">josemarle02</span>
          <div className="ml-3 flex items-center text-yellow-500 font-semibold">
            <StarIcon className="mr-1" /> 5
          </div>
        </div>

        <div className="flex items-center ml-10">
          <img
            src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
            alt="country_flag"
            className="w-6 mr-2"
          />
          <span className="text-sm font-medium ">United States</span>
        </div>

        <p className="ml-10 text-sm my-3">helpful and exactly what i wanted!</p>

        <div className="ml-10 text-xs text-gray-700 mb-3">
          Published Just now
        </div>

        <div className="flex items-center ml-10">
          <div className="flex items-center mr-3 text-sm cursor-pointer text-gray-600 font-semibold">
            <ThumbUpOutlinedIcon className="mr-1" />
            Helpful
          </div>
          <div className="flex items-center mr-3 text-sm cursor-pointer text-gray-600 font-semibold">
            <ThumbDownOutlinedIcon className="mr-1" />
            Not Helpfull
          </div>
        </div>
      </div>

      {/* Seller Response */}
      <div className="ml-10 my-3 mt-10">
        <div className="flex items-center">
          <div>
            <img
              src="/assets/search-header/avatar.jpg"
              alt="revieser_avatar"
              className="h-7 w-7 rounded-full mr-3"
            />
            <span></span>
          </div>
          <span className="text-sm font-semibold text-black">
            Seller's Response
          </span>
        </div>
      </div>

      <p className="ml-20 text-sm my-3">helpful and exactly what i wanted!</p>

      <div className="ml-20 text-xs text-gray-700 mb-3">Published Just now</div>
    </div>
  );
};

export default ReviewItem;

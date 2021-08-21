import React from "react";
import StarIcon from "@material-ui/icons/Star";

const RatingByText = ({ text, review }) => {
  return (
    <div className="flex items-center  mb-2">
      <span className="text-sm font-medium text-gray-500">{text}</span>

      <div className="flex items-center">
        <span className="mr-2 ml-2 text-sm font-medium text-gray-500">
          {review}
        </span>
        <StarIcon className="text-yellow-500" />
      </div>
    </div>
  );
};

export default RatingByText;

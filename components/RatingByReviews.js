import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const RatingByReviews = ({ star, percentage, starser }) => {
  return (
    <div className="flex items-center mb-2">
      <span className="text-sm mr-3 font-medium text-blue-500 cursor-pointer rounded-md p-1 hover:bg-blue-100">
        {star} {star == "1" ? "Stars" : "Stars"}
      </span>
      <div className="w-32">
        <ProgressBar
          completed={percentage}
          bgColor="#FFB33E"
          height="8px"
          isLabelVisible={false}
          borderRadius="20px"
        />
      </div>
      <span className="text-sm font-medium ml-3 text-blue-500">
        ({starser})
      </span>
    </div>
  );
};

export default RatingByReviews;

import React from "react";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const AvailableTimeBox = ({ date, timestamp, place }) => {
  return (
    <div className="border-r border-gray-400 text-center">
      <h1 className="text-2xl font-medium mb-5">Wed, Aug 11</h1>
      <p>Meets once</p>
      <p>3:30px - 4pm</p>
      <p>Kolkata time</p>

      <div className="flex justify-center my-5">
        <span className="flex items-center text-base font-medium text-green-500">
          Show Details
          <ExpandMoreIcon />
        </span>
      </div>

      <button className="py-2 px-10 mt-7 text-white bg-green-500 text-base rounded-md">
        Enroll
      </button>
    </div>
  );
};

export default AvailableTimeBox;

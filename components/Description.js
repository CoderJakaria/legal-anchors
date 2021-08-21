import React from "react";
import GigDescription from "./GigDescription";

const Description = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto grid grid-cols-3 gap-7 pt-10">
        {/* Left */}
        <div className="md:col-span-2 col-span-3">
          <GigDescription />
        </div>
      </div>
    </div>
  );
};

export default Description;

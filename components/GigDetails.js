import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const GigDetails = () => {
  return (
    <div>
      <h1 className="text-black font-semibold text-3xl mt-5 mb-2">
        I will do front end web development in react js, next js
      </h1>

      {/* Info */}
      <div className="flex items-center">
        <div className="mr-1">
          <img
            src="assets/search-header/avatar.jpg"
            alt="avatar"
            className="h-7 w-7 rounded-full"
          />
          <span></span>
        </div>
        <h3 className="font-semibold text-black text-xl mr-1">
          Elizabeth Keen
        </h3>
        <span className="text-gray-400 text-sm">| 1 Orders in Queue</span>
      </div>

      {/* Slider */}
      <div className="relative p-4">
        <div className="slider_main w-full" />
        <Carousel
          autoPlay={false}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          <div>
            <img
              loading="lazy"
              src="./assets/character/Man3.jpg"
              alt="slider-1"
            />
          </div>

          <div>
            <img
              loading="lazy"
              src="./assets/character/Students.png"
              alt="slider-2"
            />
          </div>

          <div>
            <img
              loading="lazy"
              src="./assets/character/Man3.jpg"
              alt="slider-3"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default GigDetails;

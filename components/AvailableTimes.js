import React from "react";

import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import CakeOutlinedIcon from "@material-ui/icons/CakeOutlined";
import PeopleIcon from "@material-ui/icons/People";
import PublicIcon from "@material-ui/icons/Public";

import AvailableTimeBox from "./AvailableTimeBox";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

const AvailableTimes = () => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-3 gap-7 pt-10">
      <div className="md:col-span-2 col-span-3">
        <div className="flex items-center mb-10 flex-wrap">
          <div className="flex items-center lg:justify-between justify-center flex-grow bg-gray-100 rounded-md border bordr-gray-400 py-3 px-8 flex-wrap">
            <div>
              <div className="mb-4 text-gray-600">
                One-Time Class <HelpOutlineOutlinedIcon />
              </div>
              <div className="flex items-center mb-4">
                <ScheduleOutlinedIcon />
                <h3 className="text-2xl font-medium ml-2 mr-2 text-gray-700">
                  30 minutes
                </h3>
                <span className="text-md text-gray-700">per class</span>
              </div>
              <div className="flex items-center mb-4">
                <DateRangeOutlinedIcon />
                <h3 className="text-2xl font-medium ml-2 mr-2 text-gray-700">
                  Meets once
                </h3>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <CakeOutlinedIcon />
                <h3 className="text-2xl font-medium ml-2 mr-2 text-gray-700">
                  10-16
                </h3>
                <span>years old</span>
              </div>
              <div className="flex items-center">
                <PeopleIcon />
                <h3 className="text-2xl font-medium ml-2 mr-2 text-gray-700">
                  6-10
                </h3>
                <span>learners per class</span>
              </div>
            </div>
          </div>

          <div className="bg-green-100 rounded-md border bordr-gray-400 py-3 px-8 lg:ml-4 ml-0 lg:mt-0 mt-5 text-center lg:w-auto w-full">
            <span className="text-md text-gray-700 mb-5 pt-2">Price-USD</span>
            <h2 className="text-3xl font-medium ml-2 mr-2 py-6 text-gray-700">
              $12 total
            </h2>
            <span className="text-md text-gray-700 mb-5">per learner</span>
          </div>
        </div>

        {/* for horizontal row line */}
        <hr />
        {/* Head text */}
        <div className="text-center mt-5">
          <h1 className="text-3xl font-medium mb-3">Available Times</h1>
          <div className="flex justify-center">
            <div className="flex items-center text-md text-gray-700">
              <PublicIcon className="mr-2" />
              This teacher may live in different time zon
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="py-10 shadow-2xl">
          <Swiper navigation={true}>
            <SwiperSlide>
              <div className="other_gigs_items grid grid-cols-4 gap-7 px-auto">
                <AvailableTimeBox />
                <AvailableTimeBox />
                <AvailableTimeBox />
                <AvailableTimeBox />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="other_gigs_items grid grid-cols-4 gap-7 px-auto">
                <AvailableTimeBox />
                <AvailableTimeBox />
                <AvailableTimeBox />
                <AvailableTimeBox />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Bottom texts */}
        <div className="text-center mt-5">
          <h1 className="text-2xl mb-3 font-medium">
            Dont see a time that works for you?
          </h1>
          <button className="border border-green-500 rounded-md text-green-500 px-10 py-2">
            Show Alternative Times
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailableTimes;

import RecommandedItem from "./RecommandedItem";

import React from "react";
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

export default () => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-3 gap-7 pt-10">
      <div className="md:col-span-2 col-span-3">
        <div className="border border-gray-300 mt-10 px-7 py-7 pb-10 rounded-md">
          <h1 className="text-xl font-semibold mb-3 text-gray-600">
            Recommended For You
          </h1>
          <Swiper navigation={true}>
            <SwiperSlide>
              <div className="grid grid-cols-2 gap-7">
                <RecommandedItem />
                <RecommandedItem />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-2 gap-7">
                <RecommandedItem />
                <RecommandedItem />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-2 gap-7">
                <RecommandedItem />
                <RecommandedItem />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-2 gap-7">
                <RecommandedItem />
                <RecommandedItem />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

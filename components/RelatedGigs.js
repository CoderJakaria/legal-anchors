import React from "react";
import GigItemBox from "./GigItemBox";

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

const RelatedGigs = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-11/12 mx-auto  p-5 py-10">
        <h1 className="text-2xl font-bold mb-5">Related Gigs</h1>

        {/* All Items here */}
        <div>
          <Swiper navigation={true}>
            <SwiperSlide>
              <div className="other_gigs_items grid grid-cols-4 gap-7 px-auto">
                <GigItemBox />
                <GigItemBox />
                <GigItemBox />
                <GigItemBox />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="other_gigs_items grid grid-cols-4 gap-7 px-auto">
                <GigItemBox />
                <GigItemBox />
                <GigItemBox />
                <GigItemBox />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="other_gigs_items grid  grid-cols-4 gap-7 px-auto">
                <GigItemBox />
                <GigItemBox />
                <GigItemBox />
                <GigItemBox />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RelatedGigs;

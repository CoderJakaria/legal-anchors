import React from "react";
import BrowsingItemCard from "./BrowsingItemCard";

import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";

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

const BrowserHistory = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-11/12 mx-auto  p-5 py-10 pb-16">
        <h1 className="flex items-center text-2xl font-bold mb-5">
          <HistoryOutlinedIcon className="text-green-500 mr-3" />
          Recent Browsing
        </h1>

        <div>
          <Swiper navigation={true}>
            <SwiperSlide>
              <div className="other_gigs_items grid grid-cols-4 gap-7 px-auto">
                <BrowsingItemCard />
                <BrowsingItemCard />
                <BrowsingItemCard />
                <BrowsingItemCard />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BrowserHistory;

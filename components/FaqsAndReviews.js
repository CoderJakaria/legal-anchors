import React, { useState } from "react";

import StarIcon from "@material-ui/icons/Star";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";

import Faq from "react-faq-component";
import RatingByReviews from "./RatingByReviews";
import RatingByText from "./RatingByText";

import Switch from "@material-ui/core/Switch";

import Reviews from "./Reviews";

// This is dummy object is for faq data
const data = {
  rows: [
    {
      title: "What is the process to get started?",
      content:
        "Its simple, just select your preferred pack and place the gig. Once you are done with that you just answer few questions about your design requirement and its DONE.",
    },
    {
      title: "What is vector source files?",
      content:
        "Its editable print ready high resolution files. I will share in three different formats Ai, EPS and PDF. You can save them for your current or future usage.",
    },
    {
      title:
        "What is the standard first delivery & modification delivery time?",
      content:
        "I usually deliver in rapid speed of 24 hours for first time delivery. For revisions i request you to wait for 24-48 hours once i receive your revision request.",
    },
    {
      title: "What you offer in social media and stationery pack?",
      content:
        "Stationery pack includes professional two sided business card with letterhead. In social media you will get super eye catchy FB and Twitter cover images.",
    },
  ],
};

const FaqsAndReviews = () => {
  // All states here
  const [sortBy, setSortBy] = useState("Most relevant");
  const [showSortByBox, setShowSortByBox] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // Handle when relevant is change
  const handleRelevantCng = type => {
    setSortBy(type);
    setShowSortByBox(false);
  };

  return (
    <div className="w-11/12 mx-auto grid grid-cols-3 gap-7 pt-10">
      <div className="md:col-span-2 col-span-3">
        <div className="py-10">
          <h1 className="font-semibold text-lg">FAQ</h1>

          {/* All Faq Question Here */}
          <div>
            <Faq data={data} />
          </div>

          {/* Rating top header */}
          <div className="py-7 mb-5">
            <div className="flex items-center justify-between px-4">
              <div className="flex items-center">
                <span className="text-lg font-semibold mr-2">
                  9,999 Reviews
                </span>
                <div className="text-yellow-500 mr-2">
                  <StarIcon className="sm:block hidden" />
                  <StarIcon className="sm:block hidden" />
                  <StarIcon className="sm:block hidden" />
                  <StarIcon className="sm:block hidden" />
                  <StarIcon />
                  <span className="mt-1 ml-1 text-lg font-semibold">4.9</span>
                </div>
              </div>

              <div className="relative flex items-center">
                <span className="mr-2 font-medium">Sort By</span>
                <b>{sortBy}</b>
                <ExpandMoreIcon
                  className="cursor-pointer"
                  style={{
                    transform: showSortByBox && "rotate(180deg)",
                    transition: "0.5s",
                  }}
                  onClick={() => setShowSortByBox(!showSortByBox)}
                />

                {/* PopUp on click */}
                {showSortByBox && (
                  <div className="reviews_sort_by_box absolute z-50 bg-white right-3 top-8  flex flex-col border border-gray-300">
                    <button
                      className="p-3 text-sm hover:bg-gray-100 font-medium"
                      onClick={() => handleRelevantCng("Most recent")}
                    >
                      {sortBy == "Most recent" && <DoneOutlinedIcon />} Most
                      recent
                    </button>
                    <button
                      className="p-3 text-sm hover:bg-gray-100 font-medium"
                      onClick={() => handleRelevantCng("Most relevant")}
                    >
                      {sortBy == "Most relevant" && <DoneOutlinedIcon />} Most
                      relevant
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Rating detail in view */}
          <div className="flex justify-between px-5 sm:flex-row flex-col">
            <div className="sm:mb-0 mb-5">
              <RatingByReviews star={5} starser={299} percentage={70} />
              <RatingByReviews star={4} starser={56} percentage={60} />
              <RatingByReviews star={3} starser={20} percentage={40} />
              <RatingByReviews star={2} starser={10} percentage={30} />
              <RatingByReviews star={1} starser={5} percentage={10} />
            </div>

            <div>
              <h2 className="text-base mb-3 font-semibold text-gray-600">
                Rating Breakdown
              </h2>
              <RatingByText text="Seller communication level" review="4.9" />
              <RatingByText text="Recommend to a friend" review="4.3" />
              <RatingByText text="Service as described" review="3.2" />
            </div>
          </div>

          <div className="flex items-center mt-4 pb-3 border-b border-gray-400">
            <Switch
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              color="primary"
            />

            <span>
              <p className="text-sm font-medium text-gray-700 cursor-default">
                4.9 Show only reviews with delivery images ({50})
              </p>
            </span>
          </div>

          {/* All Reviews and seller response */}
          <Reviews />

          {/* See more */}
          <div>
            <a
              href="#"
              className="text-sm font-semibold text-green-500 hover:underline"
            >
              + See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqsAndReviews;

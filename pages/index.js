import React from "react";
import Category from "../components/Category";
import GigBody from "../components/GigBody";
import Description from "../components/Description";
import Header from "../components/Header";
import SearchHeader from "../components/SearchHeader";
import AboutTheSeller from "../components/AboutTheSeller";
import ComparePackage from "../components/ComparePackage";
import RecommandedForYou from "../components/RecommandedForYou";
import FaqsAndReviews from "../components/FaqsAndReviews";
import OtherGigsByThisSeller from "../components/OtherGigsByThisSeller";
import RelatedGigs from "../components/RelatedGigs";
import BrowserHistory from "../components/BrowserHistory";
import AvailableTimes from "../components/AvailableTimes";

const index = () => {
  return (
    <div>
      <Header />
      <Category />
      <SearchHeader />
      <GigBody />
      <Description />
      <AboutTheSeller />
      <ComparePackage />
      <AvailableTimes />
      <RecommandedForYou />
      <FaqsAndReviews />
      <OtherGigsByThisSeller />
      <RelatedGigs />
      <BrowserHistory />
    </div>
  );
};

export default index;

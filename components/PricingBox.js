import React, { useState } from "react";
import ScheduleIcon from "@material-ui/icons/Schedule";
import RepeatIcon from "@material-ui/icons/Repeat";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";

const basic = {
  type: "BRONSE",
  price: "400",
  description:
    "Web api with role based authentication - 20 features - react dashboard",
  deliverTime: "5",
  revision: "5",
  requirement: {
    sourceCode: true,
    designCustomize: true,
    contentUpload: true,
    responsiveDesign: true,
  },
};
const standard = {
  type: "GOLD",
  price: "30",
  description:
    "5 page front end web development in react js with redux and next js",
  deliverTime: "3",
  revision: "unlimited",
  requirement: {
    sourceCode: true,
    designCustomize: true,
    contentUpload: true,
    responsiveDesign: true,
  },
};
const premium = {
  type: "PLATINUM",
  price: "50",
  description:
    "Multiple page front end web development in react js with redux and next js (pro feature)",
  deliverTime: "10",
  revision: "unlimited",
  requirement: {
    sourceCode: true,
    designCustomize: true,
    contentUpload: true,
    responsiveDesign: true,
  },
};

const PricingBox = () => {
  const [active, setActive] = useState(basic);
  const [buttonActive, setButtonActive] = useState("basic");

  const comps = (data, ac) => {
    setActive(data);
    setButtonActive(ac);
  };

  return (
    <div className="mt-4 border border-gray-400 rounded-md bg-white">
      <div className="pricing flex items-center">
        <button
          onClick={() => comps(basic, "basic")}
          className={`${
            buttonActive == "basic" && "button_active"
          } pricing_button outline-none font-semibold text-md  p-2 w-4/12 border-b border-r border-gray-400`}
        >
          Basic
        </button>
        <button
          onClick={() => comps(standard, "standard")}
          className={`${
            buttonActive == "standard" && "button_active"
          } pricing_button outline-none font-semibold text-md  p-2 w-4/12 border-b border-r border-gray-400`}
        >
          Standard
        </button>
        <button
          onClick={() => comps(premium, "premium")}
          className={`${
            buttonActive == "premium" && "button_active"
          } pricing_button outline-none font-semibold text-md  p-2 w-4/12 border-b border-gray-400`}
        >
          Premium
        </button>
      </div>

      <div className="flex justify-between py-6 px-4">
        <span className="text-md font-semibold">{active.type}</span>
        <span className="text-md font-semibold">${active.price}</span>
      </div>

      <p className="px-4 text-sm font-medium mb-5">{active.description}</p>

      <div className="flex px-3">
        <div className="flex items-center mr-3 text-sm font-medium text-gray-500">
          <ScheduleIcon /> {active.deliverTime} Days Delivery
        </div>
        <div className="flex items-center text-sm font-medium text-gray-500">
          <RepeatIcon /> {active.revision} Revision
        </div>
      </div>

      <div className="py-3 px-3">
        <ul>
          {active.requirement.designCustomize && (
            <li className="flex items-center text-sm text-gray-400">
              <DoneOutlinedIcon className="text-green-400" />
              <span>Design Customization</span>
            </li>
          )}
          {active.requirement.contentUpload && (
            <li className="flex items-center text-sm text-gray-400">
              <DoneOutlinedIcon className="text-green-400" />
              <span>Content Upload</span>
            </li>
          )}
          {active.requirement.responsiveDesign && (
            <li className="flex items-center text-sm text-gray-400">
              <DoneOutlinedIcon className="text-green-400" />
              <span>Responsive Design</span>
            </li>
          )}
          {active.requirement.sourceCode && (
            <li className="flex items-center text-sm text-gray-400">
              <DoneOutlinedIcon className="text-green-400" />
              <span>Include Source Code</span>
            </li>
          )}
        </ul>
      </div>

      <div className="flex flex-col ">
        <button className="bg-green-500 mx-4 text-white p-2 py-3 text-sm font-medium rounded-md">
          Continue (${active.price})
        </button>
        <a href="#" className="w-ful text-center text-green-500 py-3">
          Compare Packages
        </a>
      </div>
    </div>
  );
};

export default PricingBox;

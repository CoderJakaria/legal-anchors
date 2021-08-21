import React from "react";
import StarIcon from "@material-ui/icons/Star";

const AboutTheSeller = () => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-3 gap-7 pt-10">
      <div className="md:col-span-2 col-span-3">
        <h1 className="text-2xl font-semibold my-4">About The Seller</h1>

        <div className="about_the_seller flex items-center mb-5">
          <img
            src="./assets/character/Man3.jpg"
            alt="user_photo"
            className="w-36 h-36 rounded-full mr-3"
          />
          <div className="about_the_seller_per">
            <h3 className="text-md font-semibold mb-2">Elizabeth Keen</h3>
            <p className="text-sm font-normal text-gray-600 mb-2">
              Web Developer
            </p>
            <div className="flex items-center mb-3 text-yellow-500 text-lg font-base">
              <div className="mr-2">
                {Array(5)
                  .fill()
                  .map((_, idx) => (
                    <StarIcon key={idx} />
                  ))}
              </div>
              <span>5.0 (75)</span>
            </div>
            <button className="py-3 px-7 bg-green-500 text-sm text-white rounded-md">
              Contact Me
            </button>
          </div>
        </div>

        <div className="border border-gray-300 py-3 px-5 pb-14 rounded-sm">
          <div className="mb-5">
            <div className="flex items-center mb-5">
              <div className="mr-10">
                <p className="text-md font-medium text-gray-500">From:</p>
                <p className="text-md font-medium">New Delhi, India</p>
              </div>
              <div>
                <p className="text-md font-medium text-gray-500">
                  Member Since:
                </p>
                <p className="text-md font-medium">May 2021</p>
              </div>
            </div>

            <div className="flex items-centerm flex-wrap">
              <div className="mr-10 mb-3">
                <p className="text-md font-medium text-gray-500">
                  Available on:
                </p>
                <p className="text-md font-medium">Sun: 6:30PM - 8:30PM</p>
              </div>
              <div className="mr-10 mb-3">
                <p className="text-md font-medium text-gray-500">
                  Avg. response time:
                </p>
                <p className="text-md font-medium">1 hour</p>
              </div>
              <div className="mr-10 mb-3">
                <p className="text-md font-medium text-gray-500">
                  Last delivery:
                </p>
                <p className="text-md font-medium">1 year</p>
              </div>
            </div>
          </div>

          <hr className="mb-5" />
          <div>
            <p className="text-gray-500 text-sm">
              Hi, I am a creative UI/UX designer with years of experience of
              designing mobile applications and websites in Figma and Adobe XD.
              I have worked with many small to medium-sized businesses in recent
              years and helped them grow. I also have experience of development
              in React/React Native so I know the needs of developers. I love my
              field, do creative stuff, and help businesses. Check through my
              gigs, shoot me a message, let's discuss your requirements, and
              start working together towards success!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTheSeller;

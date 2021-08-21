import React, { useState } from "react";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";

const BrowsingItemCard = () => {
  const [text] = useState(
    "Staatlich geprüfte Grafikdesignerin mit Fachhochschulreife. Ich habe ein halbes Jahr als Aushilfe bei Heimann Werbung gearbeitet und habe bereits 2 Jahre Berufserfahrung als Webdesignerin bei einer Webagentur. In den Firmen dquardat und Das Schauwerk konnte ich zudem Erfahrung in der praktischen Projektumsetzung sammeln."
  );

  const [showMore, setShowMore] = useState(false);

  return (
    <div className="shadow-xl rounded-md overflow-hidden">
      <div className="relative">
        <img
          src="https://cloudinary-a.akamaihd.net/hopwork/image/upload/h_360,w_360,c_thumb,g_face,z_0.4,dpr_2.0,f_auto/i7idsg5ttrv4h2llkpqw.jpg"
          alt="user_photo"
          className="h-48 w-full"
        />

        <div className="absolute top-0 left-0 w-full flex items-center justify-between py-2 px-2">
          <div className="flex items-center bg-blue-100 rounded-2xl p-1">
            <p className="h-4 w-4 rounded-full bg-green-400 mr-2"></p>
            <p className="text-sm font-medium">Available</p>
          </div>

          <FavoriteBorderIcon className="text-white cursor-pointer" />
        </div>

        <div className="absolute bottom-0 left-0 text-white px-2 pb-8">
          <h2 className="text-xl font-semibold ">Puja Sabaghi</h2>
          <div className="flex items-center text-sm">
            <LocationOnOutlinedIcon /> <p>India, Delhi</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 bg-white p-2 -bottom-3 rounded-2xl mx-2 text-sm shadow-md">
          <span className="font-semibold text-base">300$</span>
          <span>/day</span>
        </div>
      </div>

      {/* Reviews */}
      <div className="flex items-center py-5">
        <div className="px-3 flex items-center text-yellow-500 text-sm font-medium">
          <span className="flex items-center ">
            <FavoriteIcon />
            4.8
          </span>
          <span className="text-gray-400 ml-2">(1)</span>
        </div>

        <p>23 yearn of experience</p>
      </div>

      {/* Category */}
      <div className="flex items-center justify-between flex-wrap px-3">
        <a
          href="#"
          className="bg-green-100 rounded-sm text-blue-600 py-1 px-4 text-sm mb-3 "
        >
          HTML
        </a>
        <a
          href="#"
          className="bg-green-100 rounded-sm text-blue-600 py-1 px-4 text-sm mb-3 "
        >
          CSS
        </a>
        <a
          href="#"
          className="bg-green-100 rounded-sm text-blue-600 py-1 px-4 text-sm mb-3 "
        >
          JS
        </a>
        <a
          href="#"
          className="bg-green-100 rounded-sm text-blue-600 py-1 px-4 text-sm mb-3 "
        >
          PHP
        </a>
      </div>

      {/* Description */}
      <div className="px-6 py-5">
        <p className="text-sm">
          {text.substr(1, `${!showMore ? 120 : 200}`)}
          {text.length > 200 && !showMore ? <span>...</span> : null}
          {text.length > 200 && (
            <a
              className="text-sm text-green-500 font-medium cursor-pointer"
              onClick={() => setShowMore(!showMore)}
            >
              {!showMore ? "Read More" : "Read Less"}
            </a>
          )}
        </p>
      </div>
    </div>
  );
};

export default BrowsingItemCard;

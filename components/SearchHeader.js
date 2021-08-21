import React from "react";

import SearchIcon from "@material-ui/icons/Search";

const SearchHeader = () => {
  return (
    <div
      className="bg-cover bg-no-repeat w-screen py-3 px-2 sm:pr-3 pr-6"
      style={{ backgroundImage: `url(./assets/search-header/illust.png)` }}
    >
      <div className="w-100 mx-auto flex justify-between items-center ">
        {/* Nav items */}
        <ul className="scrollbar p-0 my-0 flex justify-between max md:max-w-lg max-w-md  overflow-x-auto sm:flex hidden ">
          <li className="relative inline-block flex-shrink-0 px-2 font-medium text-white">
            <a href="#">Overview</a>
          </li>
          <li className="relative inline-block flex-shrink-0 px-2 font-medium text-white">
            <a href="#">Description</a>
          </li>
          <li className="relative inline-block flex-shrink-0 px-2 font-medium text-white">
            <a href="#">About the Seller</a>
          </li>
          <li className="relative inline-block flex-shrink-0 px-2 font-medium text-white">
            <a href="#">Compare Packages</a>
          </li>
          <li className="relative inline-block flex-shrink-0 px-2 font-medium text-white">
            <a href="#">Reviews</a>
          </li>
        </ul>
        {/* Search field */}
        <div className="relative sm:w-auto w-full">
          <div className="flex items-center  bg-white h-9 pl-1  rounded-lg overflow-hidden">
            <SearchIcon />
            <input
              type="search"
              placeholder="Find Mentors and Services"
              className="outline-none border-none h-full sm:w-60 w-20 flex-grow sm:text-base text-sm "
            />
            <button className="bg-green-400 h-full text-xs p-1 px-3">
              Search
            </button>
          </div>

          <div className="select_search_filter flex items-center justify-center rounded-md absolute sm:w-auto w-5/6">
            <div className="mr-2 flex items-center">
              <label htmlFor="services" className="mr-1">
                Services
              </label>
              <input type="radio" name="search" id="services" />
            </div>
            <div className="flex items-center">
              <label htmlFor="mentors" className="mr-1">
                Mentors
              </label>
              <input type="radio" name="search" id="mentors" />
            </div>
          </div>
        </div>
        {/* Sellers details sections */}
        <div className="items-center sm:flex hidden">
          <ul className="flex items-center">
            <li className="relative inline-block flex-shrink-0 px-2 font-medium text-white">
              <a href="#">Messages</a>
            </li>
            <li className="relative inline-block flex-shrink-0 px-2 font-medium text-white">
              <a href="#">Lists</a>
            </li>
            <li className="relative inline-block flex-shrink-0 px-2 font-medium text-white">
              <a href="#">Orders</a>
            </li>
            <li>
              <div className="mr-2">
                <img
                  src="./assets/search-header/avatar.jpg"
                  alt="avatar-photo"
                  className="h-10 w-10 rounded-full"
                />
                <span></span>
              </div>
            </li>
          </ul>

          <h4 className="p-1 font-bold border-2 border-green-500 rounded-lg text-green-500">
            $980
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;

// import React from "react";

// import SearchIcon from "@material-ui/icons/Search";

// const SearchHeader = () => {
//   return (
//     <div style={{ backgroundImage: `url(./assets/search-header/illust.png)` }}>
//       <div>
//         {/* Nav items */}
//         <ul>
//           <li>
//             <a href="#">Overview</a>
//           </li>
//           <li>
//             <a href="#">Description</a>
//           </li>
//           <li>
//             <a href="#">About the Seller</a>
//           </li>
//           <li>
//             <a href="#">Compare Packages</a>
//           </li>
//           <li>
//             <a href="#">Reviews</a>
//           </li>
//         </ul>
//         {/* Search field */}
//         <div>
//           <div>
//             <SearchIcon />
//             <input type="search" placeholder="Find Mentors and Services" />
//             <button>Search</button>
//           </div>

//           <div>
//             <div>
//               <label htmlFor="services" className="mr-1">
//                 Services
//               </label>
//               <input type="radio" name="search" id="services" />
//             </div>
//             <div>
//               <label htmlFor="mentors" className="mr-1">
//                 Mentors
//               </label>
//               <input type="radio" name="search" id="mentors" />
//             </div>
//           </div>
//         </div>
//         {/* Sellers details sections */}
//         <div>
//           <ul>
//             <li>
//               <a href="#">Messages</a>
//             </li>
//             <li>
//               <a href="#">Lists</a>
//             </li>
//             <li>
//               <a href="#">Orders</a>
//             </li>
//             <li>
//               <div className="mr-2">
//                 <img
//                   src="./assets/search-header/avatar.jpg"
//                   alt="avatar-photo"
//                 />
//                 <span></span>
//               </div>
//             </li>
//           </ul>

//           <h4>$980</h4>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchHeader;

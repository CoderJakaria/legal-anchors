import React from "react";

const Category = () => {
  //   const myRef = useRef(null);

  //   const scrolling = () => {
  //     myRef.current.scrollBy(20, 0);
  //   };

  return (
    <div className="bg-gray-300 py-3 px-5">
      <div className="mx-auto w-11/12 relative">
        <ul
          className="category_lists p-0 my-0 mx-auto flex justify-between max-w-7xl overflow-x-auto"
          //   ref={myRef}
        >
          <li className="relative inline-block flex-shrink-0 px-3 font-medium text-gray-500">
            <a href="#">Graphics & Design</a>
          </li>
          <li className="relative inline-block flex-shrink-0 px-3 font-medium text-gray-500">
            <a href="#">Digital Marketing</a>
          </li>
          <li className="relative inline-block flex-shrink-0 px-3 font-medium text-gray-500">
            <a href="#">Writing & Translation</a>
          </li>
          <li className="relative inline-block flex-shrink-0 px-3 font-medium text-gray-500">
            <a href="#">Video & Animation</a>
          </li>
          <li className="relative inline-block flex-shrink-0 px-3 font-medium text-gray-500">
            <a href="#">Music & Audio</a>
          </li>
          <li className="relative inline-block flex-shrink-0 px-3 font-medium text-gray-500">
            <a href="#">Programming & Tech</a>
          </li>
          <li className="relative inline-block flex-shrink-0 px-3 font-medium text-gray-500">
            <a href="#">Data</a>
          </li>
          <li className="relative inline-block flex-shrink-0 px-3 font-medium text-gray-500">
            <a href="#">Business</a>
          </li>
          <li className="relative inline-block flex-shrink-0 px-3 font-medium text-gray-500">
            <a href="#">Lifestyle</a>
          </li>
        </ul>
      </div>

      {/* <button onClick={scrolling}>Scroll</button> */}
    </div>
  );
};

export default Category;

import React from "react";
import { FaHeart } from "react-icons/fa6";

const DetailpageCountryName = () => {
  return (
    <div className="">
      <div className="mt-3 lg:mt-0 mb-2 lg:mb-0 flex justify-between">
        <h1 class="font-semibold text-gray-800">Nottingham Two Nottingham</h1>
        <div className="te-savep flex items-center pr-4 cursor-pointer">
          <span className="shadow-2xl fill-[#000] opacity-60 w-5 h-4 cursor-pointer te-savep">
            <FaHeart></FaHeart>
          </span>
          <p className="te-savep text-base text-theme-gray-text font-normal pl-1 hover:underline cursor-pointer sm:block hidden">
            Wishlist
          </p>
        </div>
      </div>
    </div>
  );
};
export default DetailpageCountryName;

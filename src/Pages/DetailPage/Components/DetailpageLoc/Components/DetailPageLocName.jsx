import React, { useEffect } from "react";
/////////
import "../../../Styles/DetailpageLocName.css";
/////////
const DetailPageLocName = ({cords}) => {

  const scrollToOverview = () => {
    cords.scrollIntoView({
      behavior: 'smooth', 
      block: 'start',     
      inline: 'nearest'  
    });
  }


  return (
    <div className=" px-0 sm:px-5 sticky top-header-mobile lg:top-header-desktop bg-white z-[2]">
      <div className=" container-fluid">
        <ul className="flex pt-4 px-4 md:px-0 overflow-x-auto max-w-full no-scrollbar">
          <li className="mr-8 font-semibold cursor-pointer pb-3.5 whitespace-nowrap DetailPageLocNameActive ">
            Overview
          </li>
          <li className="mr-8 font-semibold cursor-pointer pb-3.5 whitespace-nowrap  te-roomtype " onClick={scrollToOverview}>
            Room Types
          </li>
        </ul>
      </div>
      <div className="divider"></div>
    </div>
  );
};
export default DetailPageLocName;

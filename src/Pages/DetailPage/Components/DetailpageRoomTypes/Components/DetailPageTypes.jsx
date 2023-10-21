import React, { useEffect } from "react";
/////////
import "../../../Styles/DetailpageTypes.css";
/////////
const DetailPageTypes = ({types,currentIndex,setCurrentIndex}) => {


  const setCurrentBedRoomHandler = (index) => {
    setCurrentIndex(index)
  }
  return (
      <div className="py-1 w-full   bg-white z-[1] drop-shadow-md">
        <div className=" DetailTypes flex overflow-x-auto no-scrollbar container false">
          
          {
            types
            &&
            types.map((data,index) => {
            
              return (
            <button key={index}
                onClick={() => setCurrentBedRoomHandler(index)}
            className={`${ currentIndex === index ? 'DetailpageTypesActive' : ''} mx-2 w-36 content-font flex-shrink-0 te-Ensuite my-1 px-4 py-2 rounded-md text-base  border transition-colors disabled:opacity-70 disabled:cursor-not-allowed`}
            // type="button"
            >
            <div className="flex items-center justify-center gap-2 truncate te-Ensuite">
             {data} 
            </div>
          </button>
              )
            })
          }
          
          </div>
    </div>
  );
};
export default DetailPageTypes;

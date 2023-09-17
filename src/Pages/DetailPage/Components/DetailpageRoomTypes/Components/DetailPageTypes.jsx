import React from "react";
/////////
import "../../../Styles/DetailpageTypes.css";
/////////
const DetailPageTypes = () => {
  return (
    <div>
      <div class="py-1 w-full sticky top-[125px] lg:top-[140px] bg-white z-[1] drop-shadow-md">
        <div class=" DetailTypes flex overflow-x-auto no-scrollbar container false">
          <button
            class=" DetailpageTypesActive mr-2 w-36 content-font flex-shrink-0 te-All my-1 px-4 py-2 rounded-md text-base   border  transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            // type="button"
          >
            <div class="flex items-center justify-center gap-2 truncate te-All">
              All
            </div>
          </button>
          <button
            class="  mx-2 w-36 content-font flex-shrink-0 te-Ensuite my-1 px-4 py-2 rounded-md text-base  border transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            // type="button"
          >
            <div class="flex items-center justify-center gap-2 truncate te-Ensuite">
              Ensuite
            </div>
          </button>
          <button
            class="  mx-2 w-36 content-font flex-shrink-0 te-Studio my-1 px-4 py-2 rounded-md text-base  border transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            // type="button"
          >
            <div class="flex items-center justify-center gap-2 truncate te-Studio">
              Studio
            </div>
          </button>
          <button
            class="  mx-2 w-36 content-font flex-shrink-0 te-Apartments my-1 px-4 py-2 rounded-md text-base  border transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            // type="button"
          >
            <div class="flex items-center justify-center gap-2 truncate te-Apartments">
              Apartments
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default DetailPageTypes;

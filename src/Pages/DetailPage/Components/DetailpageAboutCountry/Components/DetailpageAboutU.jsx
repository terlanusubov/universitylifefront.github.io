import React from "react";
////////
import "../../../Styles/DetailpageAboutU.css";
const DetailpageAboutU = ({description}) => {
  return (
      <div className="relative">
        <div className="content-font text-gray-700 leading-7 text-justify content_area">
          {description}
        </div>
      </div>
  );
};
export default DetailpageAboutU;

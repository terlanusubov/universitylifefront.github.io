import React from "react";
/////////
import DetailpageCountryName from "./Components/DetailpageCountryName";
import DetailpageAboutU from "./Components/DetailpageAboutU";
import DetailpageAboutLocation from "./Components/DetailpageAboutLocation";
/////////
import "../../Styles/DetailpageAboutCountry.css";
const DetailpageAboutCountry = () => {
  return (
    <div className="mt-5 px-5 md:w-4/6 md:pr-8">
      <DetailpageCountryName></DetailpageCountryName>
      <DetailpageAboutU></DetailpageAboutU>
      <DetailpageAboutLocation></DetailpageAboutLocation>
    </div>
  );
};
export default DetailpageAboutCountry;

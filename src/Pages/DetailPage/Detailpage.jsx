import React from "react";
import DetailPhoto from "./Components/DetailpagePhoto/DetailPhoto";
import DetailPageNav from "./Components/DetailpageNav/DetailPageNav";
import DetailPageLoc from "./Components/DetailpageLoc/DetailPageLoc";
import DetailpageAboutCountry from "./Components/DetailpageAboutCountry/DetailpageAboutCountry";
const Detailpage = () => {
  return (
    <div>
      <DetailPhoto></DetailPhoto>
      <DetailPageNav></DetailPageNav>
      <DetailPageLoc></DetailPageLoc>
      <DetailpageAboutCountry></DetailpageAboutCountry>
    </div>
  );
};
export default Detailpage;

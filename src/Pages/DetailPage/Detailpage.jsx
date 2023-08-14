import React from "react";
/////////
import DetailPhoto from "./Components/DetailpagePhoto/DetailPhoto";
import DetailPageNav from "./Components/DetailpageNav/DetailPageNav";
import DetailPageLoc from "./Components/DetailpageLoc/DetailPageLoc";
import DetailpageAboutCountry from "./Components/DetailpageAboutCountry/DetailpageAboutCountry";
import DetailpageRoomTypes from "./Components/DetailpageRoomTypes/DetailpageRoomTypes";
/////////
import "./Styles/Detailpage.css";
/////////
const Detailpage = () => {
  return (
    <div>
      <DetailPhoto></DetailPhoto>
      <DetailPageNav></DetailPageNav>
      <DetailPageLoc></DetailPageLoc>
      <DetailpageAboutCountry></DetailpageAboutCountry>
      <DetailpageRoomTypes></DetailpageRoomTypes>
    </div>
  );
};
export default Detailpage;

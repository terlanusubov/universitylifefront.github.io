import React, { useState } from "react";
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
  const [roomTypeCords,setRoomsTypeCords] = useState(0);

  return (
    <div>
      <DetailPhoto ></DetailPhoto>
      <DetailPageNav></DetailPageNav>
      <DetailPageLoc cords={roomTypeCords}></DetailPageLoc>
      <DetailpageAboutCountry></DetailpageAboutCountry>
      <DetailpageRoomTypes setCords={setRoomsTypeCords}></DetailpageRoomTypes>
    </div>
  );
};
export default Detailpage;

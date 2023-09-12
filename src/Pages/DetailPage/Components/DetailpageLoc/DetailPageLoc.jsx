import React from "react";
/////////
import DetailPageLocName from "./Components/DetailPageLocName";
/////////
import "../../Styles/DetailpageLoc.css";
/////////
const DetailPageLoc = ({cords}) => {
  return (
    <div>
      <DetailPageLocName cords={cords}></DetailPageLocName>
    </div>
  );
};
export default DetailPageLoc;

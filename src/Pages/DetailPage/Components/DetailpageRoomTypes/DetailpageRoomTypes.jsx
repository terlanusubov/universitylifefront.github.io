import React from "react";
/////////
import DetailPageTypesHead from "./Components/DetailPageTypesHead";
import DetailPageTypes from "./Components/DetailPageTypes";
import DetailPageRooms from "./Components/DetailPageRooms";
/////////
import "../../Styles/DetailpageRoomTypes.css";
const DetailpageRoomTypes = () => {
  return (
    <div className="px-5">
      <DetailPageTypesHead></DetailPageTypesHead>
      <DetailPageTypes></DetailPageTypes>
      <DetailPageRooms></DetailPageRooms>
    </div>
  );
};
export default DetailpageRoomTypes;

import React, { useEffect, useRef } from "react";
/////////
import DetailPageTypesHead from "./Components/DetailPageTypesHead";
import DetailPageTypes from "./Components/DetailPageTypes";
import DetailPageRooms from "./Components/DetailPageRooms";
/////////
import "../../Styles/DetailpageRoomTypes.css";
const DetailpageRoomTypes = ({setCords,types,typeIds}) => {

  const RoomtypeRef = useRef();
  useEffect(() => {
    setCords(RoomtypeRef.current)
  },[])

  return (
    <div className="px-5" ref={RoomtypeRef}>
      <DetailPageTypesHead></DetailPageTypesHead>
      <DetailPageTypes types={types}></DetailPageTypes>
      <DetailPageRooms></DetailPageRooms>
    </div>
  )
}

export default DetailpageRoomTypes;

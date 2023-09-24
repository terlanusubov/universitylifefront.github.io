import React, { useEffect, useRef, useState } from "react";
/////////
import DetailPageTypesHead from "./Components/DetailPageTypesHead";
import DetailPageTypes from "./Components/DetailPageTypes";
import DetailPageRooms from "./Components/DetailPageRooms";
/////////
import "../../Styles/DetailpageRoomTypes.css";
const DetailpageRoomTypes = ({setCords,types,typeIds,userId,bedRoomId}) => {

  const RoomtypeRef = useRef();
  useEffect(() => {
    setCords(RoomtypeRef.current)
  },[])
  const [currentFilterIndex,setCurrentFilterIndex] = useState(0);

  return (
    <div className="px-5" ref={RoomtypeRef}>
      <DetailPageTypesHead></DetailPageTypesHead>
      <DetailPageTypes currentFilterIndex={currentFilterIndex}  setCurrentFilterIndex={setCurrentFilterIndex} types={types}></DetailPageTypes>
      <DetailPageRooms typeIds={typeIds} currentFilterIndex={currentFilterIndex} bedRoomId={bedRoomId} bedRoomTypeIds={typeIds} userId={userId}></DetailPageRooms>
    </div>
  )
}

export default DetailpageRoomTypes;

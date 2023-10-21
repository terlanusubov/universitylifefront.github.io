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
  const [currentIndex,setCurrentIndex] = useState(0);
  const [currentFilterId,setCurrentFilterId] = useState(typeIds?.[0]);
  
  return (
    <div className="px-5" ref={RoomtypeRef}>
      <DetailPageTypesHead></DetailPageTypesHead>
      <DetailPageTypes currentIndex={currentIndex}  setCurrentIndex={setCurrentIndex} types={types}></DetailPageTypes>
      <DetailPageRooms types={types} typeIds={typeIds} currentIndex={currentIndex} bedRoomId={bedRoomId} bedRoomTypeIds={typeIds} userId={userId}></DetailPageRooms>
    </div>
  )
}

export default DetailpageRoomTypes;

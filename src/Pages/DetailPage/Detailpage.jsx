import React, { useState } from "react";
/////////
import DetailPhoto from "./Components/DetailpagePhoto/DetailPhoto";
import DetailPageNav from "./Components/DetailpageNav/DetailPageNav";
import DetailPageLoc from "./Components/DetailpageLoc/DetailPageLoc";
import DetailpageAboutCountry from "./Components/DetailpageAboutCountry/DetailpageAboutCountry";
import DetailpageRoomTypes from "./Components/DetailpageRoomTypes/DetailpageRoomTypes";
/////////
import "./Styles/Detailpage.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
/////////
const Detailpage = () => {
  const [roomTypeCords,setRoomsTypeCords] = useState(0);
  const {bedRoomId} = useParams();
  
  const fetchBedRoomDetails = async () => {
    const promise = await fetch(import.meta.env.VITE_API_KEY + `/bedroomroom?BedRoomRoomTypeId=x&BedRoomRoomId=y`)
    const result = await promise.json();
    console.log(result);
  }

  useEffect(() => {
    fetchBedRoomDetails();
    
  },[])

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

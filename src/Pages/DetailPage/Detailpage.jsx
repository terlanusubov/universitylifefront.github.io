import React, { useState } from "react";
/////////
import DetailPhoto from "./Components/DetailpagePhoto/DetailPhoto";
import DetailPageNav from "./Components/DetailpageNav/DetailPageNav";
import DetailPageLoc from "./Components/DetailpageLoc/DetailPageLoc";
import DetailpageAboutCountry from "./Components/DetailpageAboutCountry/DetailpageAboutCountry";
import DetailpageRoomTypes from "./Components/DetailpageRoomTypes/DetailpageRoomTypes";
import { Toaster } from "react-hot-toast";
/////////
import "./Styles/Detailpage.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
/////////
const Detailpage = () => {
  const [roomTypeCords,setRoomsTypeCords] = useState(0);
  const {bedRoomId} = useParams();
  const [apiResponse,setApiResponse] = useState([]);

  const fetchBedRoomDetails = async () => {
    const promise = await fetch(import.meta.env.VITE_API_KEY + `/bedroom/${bedRoomId}`, {
      headers: {
        'Content-type':'text/plain'
      }
    })
    const {response} = await promise.json();
    setApiResponse(response)
  }


  const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }
  const [{id:userId},setUserId] = useState(localStorage.getItem('tokenId') ? parseJwt(localStorage.getItem('tokenId')) : false)

  useEffect(() => {
    fetchBedRoomDetails();
    
    setTimeout(() => {
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
    }, 100);
  },[])


  



  return (
    <div>
      <Toaster/>
      <DetailPhoto photos={apiResponse.bedRoomImages} ></DetailPhoto>
      {/* <DetailPageNav></DetailPageNav> */}
      <DetailPageLoc cords={roomTypeCords}></DetailPageLoc>
      <DetailpageAboutCountry bedRoomName={apiResponse.name} userId={userId} bedRoomId={bedRoomId} description={apiResponse.description}></DetailpageAboutCountry>
      <DetailpageRoomTypes bedRoomId={bedRoomId} userId={userId} types={[...new Set(apiResponse.bedRoomRoomTypes)]} typeIds={apiResponse.bedRoomRoomTypeIds} setCords={setRoomsTypeCords}></DetailpageRoomTypes>
    </div>
  );
};
export default Detailpage;

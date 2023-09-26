import React, { useEffect, useState } from "react";
/////////
import "../../../Styles/DetailPageRooms.css";
import Booking from "../../DetailpageAboutCountry/Components/Booking";
/////////

const DetailPageRooms = ({userId,bedRoomTypeIds,bedRoomId,currentIndex,typeIds}) => {
  const [bedRoomRooms,setBedRoomRooms] = useState([]);

  const getBedroomsByTypeId = async () => {
      if (typeIds === undefined) {
        return false;
      }
      console.log(import.meta.env.VITE_API_KEY + `/bedroomroom?BedRoomRoomTypeId${typeIds[currentIndex]}`);
      const promise = await fetch(import.meta.env.VITE_API_KEY + `/bedroomroom?BedRoomRoomTypeId=${typeIds[currentIndex]}`)
      const response = await promise.json();
      console.log(response);
      setBedRoomRooms(response);
  }
  useEffect(() => {
    getBedroomsByTypeId();
  },[currentIndex])

  useEffect(() => {
    if (typeIds) {
      getBedroomsByTypeId();
    }
  },[typeIds])

  useEffect(function() {
    getBedroomsByTypeId();
  },[])



  return (
    <div className="mt-5">
        
      {
        bedRoomRooms.length
        ?
        bedRoomRooms.map((data) => {
          return (
            <Booking bedRoomRoomIds={data.bedRoomRoomIds}  bedRoomId={data.bedRoomId} type={data.name} userId={userId} key={data.id} id={data.id}  price={data.price} description={`space. Also, the students living in the apartment get access to all the communal facilities.`} bedroomName={data.bedRoomName} images={data.image}/>
          )
        })
        :
        <div className="rounded-[10px] m-[10px] mb-[20px]  w-[100%] h-[200px] animate-pulse bg-gray-300"></div>
      }
    </div>
  );
};
export default DetailPageRooms;

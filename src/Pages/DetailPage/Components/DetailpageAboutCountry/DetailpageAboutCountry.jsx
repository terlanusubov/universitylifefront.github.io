import React from "react";
/////////
import DetailpageCountryName from "./Components/DetailpageCountryName";
import DetailpageAboutU from "./Components/DetailpageAboutU";
import DetailpageAboutLocation from "./Components/DetailpageAboutLocation";
/////////
import "../../Styles/DetailpageAboutCountry.css";
const DetailpageAboutCountry = ({description,userId,bedRoomId}) => {
  return (
    <div className="mt-5 px-5 ">
      <DetailpageCountryName bedRoomId={bedRoomId} userId={userId}></DetailpageCountryName>
      <DetailpageAboutU description={description}></DetailpageAboutU>
      <DetailpageAboutLocation></DetailpageAboutLocation>
    </div>
  );
};
export default DetailpageAboutCountry;

import React from "react";
/////////
import DetailPhotoCollage from "./Components/DetailPhotoCollage";
/////////
import "../../Styles/DetailpagePhoto.css";
/////////
const DetailPhoto = ({photos}) => {
  return (
    <div className="">
      <DetailPhotoCollage photos={photos}></DetailPhotoCollage>
    </div>
  );
};

export default DetailPhoto;

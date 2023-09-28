import React from "react";
import "../../../Styles/ContactsectionPhoto.css";
import contactBanner from '../../../Assets/download.png'
export const ContactsectionPhoto = () => {
  return (
    <div className="ContactsectionPhoto text-center flex justify-center">
      <img
        src={contactBanner}
        alt=""
        decoding="async"
        data-nimg="1"
        loading="lazy"
      />
    </div>
  );
};

export default ContactsectionPhoto;

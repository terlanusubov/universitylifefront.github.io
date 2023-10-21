import React from "react";

import "../../../Styles/ContactsectionElement.css";
export const ContactsectionElement = () => {
  return (
    <div className="ContactsectionElement px-4 lg:px-16 md:px-10 flex flex-col items-center gap-2 md:items-start md:gap-4">
      <div className="ContactsectionHead items-center flex flex-col py-4">
        <h2 className="text-customBlue mb-1 font-semibold text-lg md:text-xl lg:text-2xl">
          Got A Question?
        </h2>
      </div>

      <p className="ContactsectionP content-font font-light lg:text-lg text-gray-500">
        We covered all your basic questions in detail for you so you need to
        call us for basic things. If you are still unclear we are available in
        phone and chat support as well.
      </p>

      <a
        href=""
        className="bg-customOrange ContactsectionBtn   my-1 px-16 py-2 rounded-md text-base  text-white hover:bg-theme-orange-hover border border-theme-orange transition-colors disabled:opacity-70 disabled:cursor-not-allowed "
      >
        Browse FAQ
      </a>
    </div>
  );
};
export default ContactsectionElement;

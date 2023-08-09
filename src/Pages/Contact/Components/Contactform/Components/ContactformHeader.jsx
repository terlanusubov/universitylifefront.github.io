import React from "react";

import "../../../Styles/ContactformHeader.css";

export const ContactformHeader = () => {
  return (
    <div className="mb-5  items-center flex flex-col py-4">
      <h2 className="text-customBlue w-44 text-center md:w-full mb-1 font-semibold text-lg md:text-xl lg:text-2xl">
        Still got a question? Write to us
      </h2>
    </div>
  );
};
export default ContactformHeader;

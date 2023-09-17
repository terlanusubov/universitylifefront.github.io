// Hooks...
import { useEffect, useState } from "react";
// Components...
import { PhoneInput } from "react-international-phone";
// Pages...

// Stylings...
import "../../../Styles/ContactInputApp.css";
// import "./test1.css";

function ContactInput({setInputValue,inputValue}) {

  return (
    <div className="App mb-4">
      <div className=" international_input form-floating relative">
        <PhoneInput
        value={inputValue}
          className="border outline-none w-[100%] rounded-[4px]  p-[7px]"
          onChange={(e) => setInputValue(e)}
        
        />
        <label
          className=" flag block text-gray-700 content-font mb-2 truncate"
          htmlFor=""
        >
          Phone Number<sup className="text-customOrange">*</sup>
        </label>
      </div>
    </div>
  );
}

export default ContactInput;

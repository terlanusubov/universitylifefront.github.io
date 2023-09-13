// Hooks...
import { useEffect, useState } from "react";
// Components...
import { PhoneInput } from "react-international-phone";
// Pages...

// Stylings...
import "../../../Styles/ContactInputApp.css";
// import "./test1.css";

function ContactInput() {
  const [value, setValue] = useState();

  return (
    <div className="App mb-4">
      <div className=" international_input form-floating relative">
        <PhoneInput
          className="form-control flex  content-font appearance-none border rounded w-full py-2 px-3 h-11 placeholder:text-gray-400 text-gray-700 leading-tight focus:outline-none "
          value={value}
          onChange={(e) => setValue(e)}
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

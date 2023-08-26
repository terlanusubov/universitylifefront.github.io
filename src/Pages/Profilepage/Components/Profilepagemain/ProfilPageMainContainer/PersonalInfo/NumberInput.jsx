// Hooks...
import { useEffect,useState } from "react";
// Components...
import { PhoneInput } from "react-international-phone";
// Pages...

// Stylings...


function NumbersInput({inputValue,setInputValue}) {
  return (
    <div className="rounded-[4px] international_input_profile_page max-w-[300px] w-[100%]">
      <div className="rounded-[4px] international_input  relative">
      <PhoneInput
      value={inputValue} 
      onChange={(e) => setInputValue(e)}/>
      <span className="select-none input_text absolute top-[-10px] rounded-[2px] bg-white text-[13.3px] ease-out text-gray-500 duration-[.35s] px-[2px]  left-[16px] ">Phone Number</span>
    </div>
    </div>
  );
}

export default NumbersInput;
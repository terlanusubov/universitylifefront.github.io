import React from "react";
import { useState, useRef, useEffect } from "react";
const ContactInputComponent = ({
  inputTitle,
  inputId,
  inputValue,
  setInputValue,
  isFocused,
  setIsFocused,
}) => {
  // const [focused, setFocused] = useState(false);

  const focusHandler = () => {
    setIsFocused(true);
  };
  const blurHandler = () => {
    if (!inputValue) {
      setIsFocused(false);
    }
  };

  return (
    <div className="input_element_container relative w-[100%]">
      <input
        // autoComplete="off"
        autoComplete="new-password"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        id={inputId}
        onBlur={blurHandler}
        onFocus={focusHandler}
        type={
          inputTitle === "Password"
            ? "password"
            : inputTitle === "Email"
            ? "email"
            : "text"
        }
        className="border outline-none w-[100%] rounded-[4px]  p-[9px]"
      />
      <label
        htmlFor={inputId}
        className={`select-none  input_text absolute  rounded-[2px] bg-white translate-y-[-50%] ease-in-out text-gray-500 duration-[.25s] px-[4px]  left-[15px] ${
          isFocused ? "top-0 text-[11px]" : "top-[50%] text-[14px]"
        }`}
      >
        {inputTitle}
        <span className="absolute right-0 bottom-[3.5px] text-red-400">*</span>
      </label>
    </div>
  );
};

export default ContactInputComponent;

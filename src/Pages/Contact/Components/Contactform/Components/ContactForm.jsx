import React, { useRef, useState } from "react";
// import { useRef } from "react";
import { FaLocationDot } from "react-icons/fa6";
import ContactInput from "../Components/ContactInput";
import ContactInputComponent from "./ContactInputComponent";

import "../../../Styles/ContactInForm.css";
export const ContactForm = () => {
  // Toggles
  const [descriptionFocused, setDescriptionFocused] = useState(false);
  const [popUpOpened, setPopUpOpened] = useState(false);
  // Input Values
  const popupInputRef = useRef();
  const [labelGone, setLabelGone] = useState(false);
  const [inputCountryValue, setInputCountryValue] = useState("");
  const [contactDescription, setContactDescription] = useState("");
  // Input Values

  const showPopUp = (e) => {
    e.preventDefault();
    setPopUpOpened(true);
    setLabelGone(true);
  };

  const blurHandlerTextArea = (e) => {
    if (!contactDescription) {
      console.log("test");
      setDescriptionFocused(false);
    }
  };

  const focusHandlerTextArea = (e) => {
    setDescriptionFocused(true);
  };

  document.addEventListener("click", (e) => {
    try {
      if (!popupInputRef.current.contains(e.target)) {
        setPopUpOpened(false);
        setLabelGone(false);
      }
    } catch (e) {}
  });

  const setCurrentTravelCountry = (e) => {
    setInputCountryValue(e.target.dataset.value);
    const selectedCountry = e.target.dataset.value;
    setInputCountryValue(selectedCountry);
    setPopUpOpened(false);
  };
  const inputLabelHandler = () => {
    if (inputCountryValue) {
      console.log(132);
      setLabelGone(false);
    }
  };

  const [ContactFullName, setContactFullName] = useState("");
  const [ContactEmail, setContactEmail] = useState("");
  const [ContactTravveling, setContactTravveling] = useState("");

  console.log(inputCountryValue);
  return (
    <form action="">
      <div className="grid md:grid-cols-2 md:gap-4 ">
        <div className="mb-4">
          <ContactInputComponent
            setInputValue={setContactFullName}
            inputId={"ContactFullName"}
            inputTitle={"Full Name"}
            inputValue={ContactFullName}
          />
        </div>
        {/* <div className="form-floating mb-4 ">
          <input
            className="border outline-none w-[100%] rounded-[4px]  p-[9px]"
            //  form-control content-font appearance-none border rounded w-full py-2 px-3 h-11 placeholder:text-gray-400 text-gray-700 leading-tight focus:outline-none id="fullName"
            placeholder=""
            type="text"
            name="fullName"
            // autoComplete="off"
          />
          <label
            className="block text-gray-700 content-font mb-2 truncate"
            htmlFor="fullName"
          >
            Full Name<sup className="text-customOrange">*</sup>
          </label>
        </div> */}
        <div className="mb-4">
          <ContactInputComponent
            setInputValue={setContactEmail}
            inputId={"ContactEmail"}
            inputTitle={"Email"}
            inputValue={ContactEmail}
          />
        </div>
        {/* <div className="form-floating mb-4 ">
          <input
            className="border outline-none w-[100%] rounded-[4px]  p-[9px]"
            // form-control content-font appearance-none border rounded w-full py-2 px-3 h-11 placeholder:text-gray-400 text-gray-700 leading-tight focus:outline-none
            id="Email"
            placeholder=""
            type="text"
            name="Email"
            // autoComplete="off"
          />
          <label
            className="block text-gray-700 content-font mb-2 truncate"
            htmlFor="Email"
          >
            Email<sup className="text-customOrange">*</sup>
          </label>
        </div> */}
        {/* <div className="mb-4 relative z-[20] " ref={popupInputRef}>
          <ContactInputComponent
            setInputValue={setContactTravveling}
            inputId={"ContactTravveling"}
            inputTitle={"Travveling Country"}
            inputValue={ContactTravveling}
          />
        </div> */}
        <div className="mb-4">
          <ContactInput></ContactInput>
        </div>
        <div className="form-floating mb-4 relative z-[20]" ref={popupInputRef}>
          <input
            onFocus={showPopUp}
            // onBlur={inputLabelHandler}
            className="border outline-none w-[100%] rounded-[4px]  p-[9px]"
            // form-control content-font appearance-none border rounded w-full py-2 px-3 h-11 placeholder:text-gray-400 text-gray-700 leading-tight focus:outline-none
            id="traveled_country"
            placeholder=""
            type="text"
            name="traveled_country"
            // autoComplete="off"
            value={inputCountryValue}
            onChange={(e) => setInputCountryValue(e.target.value)}
          />
          <label
            className={`block text-gray-700 content-font mb-2 truncate
            ${
              labelGone
                ? "top-[-20px] left-[16px] text-[11px]"
                : "top-[10px]  left-[16px] text-[14px]"
            }`}
            htmlFor="traveled_country"
          >
            Travelling Country<sup className="text-customOrange">*</sup>
          </label>
          {popUpOpened ? (
            <div className="popup  w-[100%] bg-white border-solid border-[1px]  rounded-b h-[100px] absolute overflow-y-scroll">
              <div
                onClick={setCurrentTravelCountry}
                data-value={"China"}
                className="z-[20] flex items-center p-2.5 cursor-pointer"
              >
                <span className="text-customOrange mr-1.5">
                  <FaLocationDot></FaLocationDot>
                </span>{" "}
                China
              </div>
              <div
                onClick={setCurrentTravelCountry}
                data-value={"Spain"}
                className="z-[20] flex items-center p-2.5 cursor-pointer"
              >
                <span className="text-customOrange mr-1.5">
                  <FaLocationDot></FaLocationDot>
                </span>{" "}
                Spain
              </div>
              <div
                onClick={setCurrentTravelCountry}
                data-value={"Azerbaijan"}
                className="z-[20] flex items-center p-2.5 cursor-pointer"
              >
                <span className="text-customOrange mr-1.5">
                  <FaLocationDot></FaLocationDot>
                </span>{" "}
                Azerbaijan
              </div>
              <div
                onClick={setCurrentTravelCountry}
                data-value={"United States"}
                className="z-[20] flex items-center p-2.5 cursor-pointer"
              >
                <span className="text-customOrange mr-1.5">
                  <FaLocationDot></FaLocationDot>
                </span>{" "}
                United States
              </div>
              <div
                onClick={setCurrentTravelCountry}
                data-value={"United Kingdom"}
                className="z-[20] flex items-center p-2.5 cursor-pointer"
              >
                <span className="text-customOrange mr-1.5">
                  <FaLocationDot></FaLocationDot>
                </span>{" "}
                United Kingdom
              </div>
              <div
                onClick={setCurrentTravelCountry}
                data-value={"Turkey"}
                className="z-[20] flex items-center p-2.5 cursor-pointer"
              >
                <span className="text-customOrange mr-1.5">
                  <FaLocationDot></FaLocationDot>
                </span>{" "}
                Turkey
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="text-area-input mb-4 relative">
        <textarea
          id="textAreaContact"
          value={contactDescription}
          onChange={(e) => setContactDescription(e.target.value)}
          onFocus={focusHandlerTextArea}
          onBlur={blurHandlerTextArea}
          className="border outline-none w-[100%] rounded-[4px]  p-[9px]"
          // resize-none form-control border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline content-font no-scrollbarname="userMessage"
          placeholder=""
          cols="30"
          rows="5"
        ></textarea>
        <label
          htmlFor="textAreaContact"
          className={` select-none input_text absolute ease-in-out text-gray-500 
          text-gray-500 rounded-[2px]  top-[50%] bg-white mb-2 absolute duration-[.2s] ${
            descriptionFocused
              ? "top-[-9px] left-[16px] text-[11px] px-[0.5rem]"
              : "top-[10px]  left-[16px] text-[14px] "
          }`}
        >
          Comments/Description <sup className="text-customOrange">*</sup>
        </label>
      </div>
      <div className="w-full flex justify-center">
        <button
          className="w-full flex justify-center lg:w-auto lg:mx-auto my-5 te-cu-submit  my-1 px-16 py-2 rounded-md text-base bg-customOrange text-white hover:bg-theme-orange-hover border border-theme-orange transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          type="Submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

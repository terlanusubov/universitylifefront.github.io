import React, { useRef, useState } from "react";
// import { useRef } from "react";
import { FaLocationDot } from "react-icons/fa6";
import ContactInput from "../Components/ContactInput";

import "../../../Styles/ContactInForm.css";
export const ContactForm = () => {
  const [popUpOpened, setPopUpOpened] = useState(false);
  const popupInputRef = useRef();
  const [labelGone, setLabelGone] = useState(false);
  const [inputCountryValue, setInputCountryValue] = useState("");

  const showPopUp = (e) => {
    e.preventDefault();
    setPopUpOpened(true);
    setLabelGone(true);
  };

  document.addEventListener("click", (e) => {
    if (!popupInputRef.current.contains(e.target)) {
      setPopUpOpened(false);
      setLabelGone(false);
    }
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

  console.log(inputCountryValue);
  return (
    <form action="">
      <div className="grid md:grid-cols-2 md:gap-x-4 ">
        <div className="form-floating mb-4 ">
          <input
            className="form-control content-font appearance-none border rounded w-full py-2 px-3 h-11 placeholder:text-gray-400 text-gray-700 leading-tight focus:outline-none "
            id="fullName"
            placeholder=""
            type="text"
            name="fullName"
            autocomplete="off"
          />
          <label
            className="block text-gray-700 content-font mb-2 truncate"
            htmlFor="fullName"
          >
            Full Name<sup className="text-customOrange">*</sup>
          </label>
        </div>
        <div className="form-floating mb-4 ">
          <input
            className="form-control content-font appearance-none border rounded w-full py-2 px-3 h-11 placeholder:text-gray-400 text-gray-700 leading-tight focus:outline-none "
            id="Email"
            placeholder=""
            type="text"
            name="Email"
            autocomplete="off"
          />
          <label
            className="block text-gray-700 content-font mb-2 truncate"
            for="Email"
          >
            Email<sup className="text-customOrange">*</sup>
          </label>
        </div>
        <ContactInput></ContactInput>
        <div className="form-floating mb-4 relative z-[20]" ref={popupInputRef}>
          <input
            onFocus={showPopUp}
            // onBlur={inputLabelHandler}
            className="form-control content-font appearance-none border rounded w-full py-2 px-3 h-11 placeholder:text-gray-400 text-gray-700 leading-tight focus:outline-none "
            id="traveled_country"
            placeholder=""
            type="text"
            name="traveled_country"
            autocomplete="off"
            value={inputCountryValue}
            onChange={(e) => setInputCountryValue(e.target.value)}
          />
          <label
            className={`block text-gray-700 content-font mb-2 truncate ${
              labelGone ? "flag" : ""
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
                <p className="text-CustomBlue">China</p>
              </div>
              <div
                onClick={setCurrentTravelCountry}
                data-value={"China"}
                className="z-[20] flex items-center p-2.5 cursor-pointer"
              >
                <span className="text-customOrange mr-1.5">
                  <FaLocationDot></FaLocationDot>
                </span>{" "}
                <p className="text-CustomBlue">China</p>
              </div>
              <div
                onClick={setCurrentTravelCountry}
                data-value={"China"}
                className="z-[20] flex items-center p-2.5 cursor-pointer"
              >
                <span className="text-customOrange mr-1.5">
                  <FaLocationDot></FaLocationDot>
                </span>{" "}
                <p className="text-CustomBlue">China</p>
              </div>
              <div
                onClick={setCurrentTravelCountry}
                data-value={"China"}
                className="z-[20] flex items-center p-2.5 cursor-pointer"
              >
                <span className="text-customOrange mr-1.5">
                  <FaLocationDot></FaLocationDot>
                </span>{" "}
                <p className="text-CustomBlue">China</p>
              </div>
              <div
                onClick={setCurrentTravelCountry}
                data-value={"China"}
                className="z-[20] flex items-center p-2.5 cursor-pointer"
              >
                <span className="text-customOrange mr-1.5">
                  <FaLocationDot></FaLocationDot>
                </span>{" "}
                <p className="text-CustomBlue">China</p>
              </div>
              <div
                onClick={setCurrentTravelCountry}
                data-value={"China"}
                className="z-[20] flex items-center p-2.5 cursor-pointer"
              >
                <span className="text-customOrange mr-1.5">
                  <FaLocationDot></FaLocationDot>
                </span>{" "}
                <p className="text-CustomBlue">China</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="form-floating mb-4">
        <textarea
          className=" resize-none form-control border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline content-font no-scrollbar"
          name="userMessage"
          placeholder=""
          cols="30"
          rows="5"
        ></textarea>
        <label className="block text-gray-700 content-font mb-2">
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

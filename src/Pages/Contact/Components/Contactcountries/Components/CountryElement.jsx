import React from "react";
import "../../../Styles/CountryElement.css";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";

export const CountryElement = () => {
  return (
    <div className="CountryElement hover:shadow-xl">
      <div className="CountryElImg">
        <img
          src="https://cdn.universityliving.com/files/16662641010191.unitedkingdom.webp?w=128"
          alt=""
        />
      </div>
      <div className="CountryElLocation ">
        <h2 className=" text-customBlue text-base font-medium ">
          United Kingdom
        </h2>
        <p className="text-xs my-2 md:content-font text-gray-500">
          3rd Floor, 86-90 Paul Street, London - EC2A 4NE
        </p>
        <div className="CountryElContact flex place-items-center justify-between">
          {" "}
          <div className="CountryELNumber flex text-white items-center  bg-customOrange">
            <span className="mr-1.5">
              <FaPhone></FaPhone>
            </span>{" "}
            <a href="">+994 77 500 80 99</a>
          </div>
          <div className="CountryElWp text-customOrange">
            <a href="">
              <FaWhatsapp></FaWhatsapp>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryElement;

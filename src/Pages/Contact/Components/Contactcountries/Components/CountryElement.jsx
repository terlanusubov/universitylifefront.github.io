import React,{useEffect} from "react";
import "../../../Styles/CountryElement.css";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";

export const CountryElement = () => {

    
  useEffect(() => {
    setTimeout(() => {
          window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           });
        }, 100);
  },[])


  return (
    <div className="CountryElement  cursor-pointer">
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
        <p className="text-xs my-2 py-[6px] md:content-font text-gray-500 ">
        High Result Academy Ltd, Monomark House
        </p>
        <div className="CountryElContact flex place-items-center justify-between">
          {" "}
          <div className="CountryELNumber flex text-white items-center  hover:bg-customLightOrange bg-customOrange">
            <span className="mr-1.5">
              <FaPhone></FaPhone>
            </span>{" "}
            <a href="">+44 754 209 33 84</a>
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

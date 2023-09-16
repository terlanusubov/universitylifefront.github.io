import React from "react";
import "../Styles/Footercountry.css";
import { FaLocationDot, FaVoicemail, FaPhone } from "react-icons/fa6";
import { IoMdMail as Mail } from "react-icons/io";
const CountryComponent = (props) => {
  return (
    <div className="footer_country">
      <div>
        <div className="CountryName">
          <h2 className="text-white">{props.title}</h2>
        </div>

        <div className="CountryUl text-white">
          <ul>
            <li>
              <FaLocationDot className="CountryIcon"></FaLocationDot>{" "}
              <p className="max-w-[50%] max-[650px]:max-w-[70%] ">
                {props.location}
              </p>
            </li>
            <li>
              <Mail className="CountryIcon"></Mail>{" "}
              <a className="hover:text-customOrange" href="">
                {props.email}
              </a>
            </li>
            <li>
              <FaPhone className="CountryIcon"></FaPhone>{" "}
              <a className="hover:text-customOrange" href="">
                {props.phoneNumber}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryComponent;

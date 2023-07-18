import React from "react";
import "../Styles/Footercountry.css";
import { FaLocationDot, FaVoicemail, FaPhone } from "react-icons/fa6";
import { IoMdMail as Mail } from "react-icons/io";
const Country = () => {
  return (
    <div className="footer_country">
      <div>
        <div className="CountryName">
          <h2 className="text-white">Baku</h2>
        </div>
        <div className="CountryUl text-white">
          <ul>
            <li>
              <FaLocationDot className="CountryIcon"></FaLocationDot>{" "}
              <p className="max-w-[50%] max-[650px]:max-w-[70%] ">
                5 Great James Street Holborn, WC1N 3DB London / United Kingdom
              </p>
            </li>
            <li>
              <Mail className="CountryIcon"></Mail>{" "}
              <a className="hover:text-customOrange" href="">
                book@londonist.co.uk
              </a>
            </li>
            <li>
              <FaPhone className="CountryIcon"></FaPhone>{" "}
              <a className="hover:text-customOrange" href="">
                +44 20 7287 1912
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Country;

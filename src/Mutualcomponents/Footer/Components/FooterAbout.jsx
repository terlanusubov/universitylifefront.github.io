import React from "react";
import "../Styles/Footerabout.css";
const FooterAbout = () => {
  return (
    <div className="footer_about">
      <div>
        <ul className="text-white">
          <li>
            <a className="hover:text-customOrange" href="">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-customOrange" href="">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-customOrange" href="">
              Contakt Us
            </a>
          </li>
          <li>
            <a className="hover:text-customOrange" href="">
              Services
            </a>
          </li>
          <li>
            <a className="hover:text-customOrange" href="">
              Ibrahim
            </a>
          </li>
          <li>
            <a className="hover:text-customOrange" href="">
              Elnur
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterAbout;

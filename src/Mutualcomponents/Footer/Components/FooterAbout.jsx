import React from "react";
import "../Styles/Footerabout.css";
import { Link } from "react-router-dom";
const FooterAbout = () => {
  return (
    <div className="footer_about">
      <div>
        <ul className="text-white">
          <li>
            <Link to={'/'} className="hover:text-customOrange">
              Home
            </Link>
          </li>
          <li>
            <a className="hover:text-customOrange" href="">
              About
            </a>
          </li>
          <li>
            <Link to={'/contact-us'} className="hover:text-customOrange">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to={'/services'} className="hover:text-customOrange">
              Services
            </Link>
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

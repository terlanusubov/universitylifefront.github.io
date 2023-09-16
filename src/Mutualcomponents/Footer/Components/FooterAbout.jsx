import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footerabout.css";
const FooterAbout = () => {
  return (
    <div className="footer_about">
      <div>
        <ul className="text-white">
          <li>
            <Link className="hover:text-customOrange" to={'/contact-us'}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="hover:text-customOrange" to={'/contact-us'}>
              Services
            </Link>
          </li>
          <li>
            <Link className="hover:text-customOrange" to={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-customOrange" to={'/accomodations'}>
              BedRooms
            </Link>
          </li>
          <li>
           <Link className="hover:text-customOrange" to={'/'}>
            Careers
            </Link>
          </li>
          <li>
            <Link className="hover:text-customOrange" to={'/blog'}>
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterAbout;

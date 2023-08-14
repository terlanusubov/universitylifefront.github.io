import React from "react";
import FooterAbout from "./FooterAbout";
import Country from "./Country";
import "../Styles/footernav.css";

const FooterNav = () => {
  return (
    <div className="footer_nav">
      <Country></Country>
      <Country></Country>
      <FooterAbout></FooterAbout>
    </div>
  );
};

export default FooterNav;

import React from "react";
import FooterAbout from "./FooterAbout";
import CountryComponent from "./CountryComponent";
import "../Styles/footernav.css";

const FooterNav = () => {
  return (
    <div className="footer_nav flex justify-between">
      <CountryComponent
        location={
          "High Result Academy Ltd, Monomark House"
        }
        phoneNumber={"+44 754 209 33 84"}
        email={"hasan.azizov@hra.az"}
        title={"London"}
      />
      
      <FooterAbout></FooterAbout>
    </div>
  );
};

export default FooterNav;

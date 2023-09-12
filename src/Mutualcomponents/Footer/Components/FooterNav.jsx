import React from "react";
import FooterAbout from "./FooterAbout";
// import CountryBaku from "./CountryBaku";
// import CountryLondon from "./CountryLondon";
import CountryComponent from "./CountryComponent";
import "../Styles/footernav.css";

const FooterNav = () => {
  return (
    <div className="footer_nav">
      <CountryComponent
        location={
          "5 Great James Street Holborn, WC1N 3DB London / United Kingdom"
        }
        phoneNumber={"+994 (50) 500 80 28"}
        email={"book@londonist.az"}
        title={"Baku"}
      />
      <CountryComponent
        location={
          "5 Great James Street Holborn, WC1N 3DB London / United Kingdom"
        }
        phoneNumber={"+44 20 7287 1912"}
        email={"book@londonist.co.uk"}
        title={"London"}
      />
      <FooterAbout></FooterAbout>
    </div>
  );
};

export default FooterNav;

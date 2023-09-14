import React from "react";
import FooterNav from "./Components/FooterNav";
import FooterIcons from "./Components/FooterIcons";
import FooterBottom from "./Components/FooterBottom";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="Footer bg-customBlue">
      <div className="w-[100%]  max-w-[1440px] mx-auto">
        <FooterNav></FooterNav>
        <FooterIcons></FooterIcons>
        <FooterBottom></FooterBottom>
        {/* <div>
           <button className="text-white" onClick={showError}></button> 
        </div> */}
      </div>
    </footer>
  );
};
export default Footer;

import React from "react";
import FooterNav from "./Components/FooterNav";
import FooterIcons from "./Components/FooterIcons";
import FooterBottom from "./Components/FooterBottom";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="Footer bg-customBlue">
      <FooterNav></FooterNav>
      <FooterIcons></FooterIcons>
      <FooterBottom></FooterBottom>
    </footer>
  );
};
export default Footer;

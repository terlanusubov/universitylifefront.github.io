import React from "react";
import "../Styles/Footericons.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa6";

const FooterIcons = () => {
  const styles = {
    iconStyles: "FooterIcons",
  };
  const stylesA = {
    aStyles: " text-customBlue bg-white hover:scale-[1.15] duration-[.2s]",
  };

  return (
    <div className="footer_icons">
      <a className={stylesA.aStyles} href="">
        <FaFacebookF className={styles.iconStyles}></FaFacebookF>
      </a>
      <a className={stylesA.aStyles} href="">
        <FaInstagram className={styles.iconStyles}></FaInstagram>
      </a>
      <a className={stylesA.aStyles} href="">
        <FaYoutube className={styles.iconStyles}></FaYoutube>
      </a>
      <a className={stylesA.aStyles} href="">
        {" "}
        <FaWhatsapp className={styles.iconStyles}></FaWhatsapp>
      </a>
      <a className={stylesA.aStyles} href="">
        <FaLinkedinIn className={styles.iconStyles}></FaLinkedinIn>
      </a>
    </div>
  );
};

export default FooterIcons;

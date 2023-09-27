import React from "react";
import "../../Styles/Contactcountries.css";
// Components
import { CountryElement } from "./Components/CountryElement";

const Contactcountries = () => {
  return (
    <div className="contact_contries_container  my-8 flex justify-center">
      <CountryElement></CountryElement>
    </div>
  );
};

export default Contactcountries;

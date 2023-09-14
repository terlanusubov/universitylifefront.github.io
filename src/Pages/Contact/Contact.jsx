import React from "react";

import Contactcountries from "./Components/Contactcountries/Contactcountries";
import { Contactsection } from "./Components/Contactsection/Contactsection";
import Contactform from "./Components/Contactform/Contactform";
const Contact = () => {
  return (
    <div className="contact_page">
      <Contactcountries></Contactcountries>
      <Contactsection></Contactsection>
      <Contactform></Contactform>
    </div>
  );
};

export default Contact;

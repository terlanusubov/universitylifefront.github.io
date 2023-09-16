import React from "react";
import { ContactformHeader } from "../Contactform/Components/ContactformHeader";
import { ContactForm } from "../Contactform/Components/ContactForm";
import "../../Styles/Contactform.css";
export const Contactform = () => {
  return (
    <div className="mb-16 px-4 md:px-32 lg:px-40">
      <ContactformHeader></ContactformHeader>
      <ContactForm></ContactForm>
    </div>
  );
};
export default Contactform;

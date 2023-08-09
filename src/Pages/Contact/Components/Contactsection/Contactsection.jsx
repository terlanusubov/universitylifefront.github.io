import React from "react";

// Components
import { ContactsectionElement } from "./Components/ContactsectionElement";
import { ContactsectionPhoto } from "./Components/ContactsectionPhoto";
import "../../Styles/Contactsection.css";

export const Contactsection = () => {
  return (
    <div className="Contactsection bg-blue-50  ">
      <div className="text-center grid md:text-left md:gap-10 lg:gap-20 md:grid-cols-2 md:items-center">
        <ContactsectionElement></ContactsectionElement>
        <ContactsectionPhoto></ContactsectionPhoto>
      </div>
    </div>
  );
};

export default Contactsection;

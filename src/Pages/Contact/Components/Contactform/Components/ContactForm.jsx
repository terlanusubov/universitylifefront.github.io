import React, { useRef, useState,useEffect } from "react";
// import { useRef } from "react";
import { FaLocationDot } from "react-icons/fa6";
import ContactInput from "../Components/ContactInput";
import ContactInputComponent from "./ContactInputComponent";
import { toast,Toaster } from "react-hot-toast";
import "../../../Styles/ContactInForm.css";
export const ContactForm = () => {
  // Toggles
  const [descriptionFocused, setDescriptionFocused] = useState(false);
  const [popUpOpened, setPopUpOpened] = useState(false);
  // Input Values
  const popupInputRef = useRef();
  const [phoneInputValue,setPhoneInputValue] = useState('');
  const [labelGone, setLabelGone] = useState(false);
  const [inputCountryValue, setInputCountryValue] = useState("");
  const [contactDescription, setContactDescription] = useState("");
  // Input Values

const [countries,setCountries] = useState([]);


const submitFormHandler = async (e) => {
e.preventDefault()

const filteredPhone = phoneInputValue.replaceAll('-','').replaceAll(' ','').replaceAll('(','').replaceAll(')','')

const formInfos = {
  fullName:ContactFullName,
  email:ContactEmail,
  phone:filteredPhone,
  country:inputCountryValue,
  comment:contactDescription
}

const response = await fetch(import.meta.env.VITE_API_KEY + 'Contact', {
  headers: {
    'Content-type':'application/json'
  },
  method:'POST',
  body: JSON.stringify(formInfos)


})

const result = await response.json()
if (result.statusCode === 200) {
toast.success("Form Successfully Sent")
}
else {
  toast.error("Something Unknown Happened")
}

setContactDescription('')
setContactEmail('')
setContactFullName('')
setPhoneInputValue('')
setInputCountryValue('')
}


  const focusHandler = (e) => {
    setPopUpOpened(true);
    setLabelGone(true);
  };

  const blurHandlerTextArea = (e) => {
    if (!contactDescription) {
      setDescriptionFocused(false);
    }
  };

  const focusHandlerTextArea = (e) => {
    setDescriptionFocused(true);
  };

  const blurHandlerCountry = (e) => {
    if (inputCountryValue == '') {
      setLabelGone(false);
    }
  };

  document.addEventListener("click", (e) => {
    try {
      if (!popupInputRef.current.contains(e.target)) {
          setPopUpOpened(false);
        // setLabelGone(false);
        
      }
    } catch (e) {
    }
  });

  const setCurrentTravelCountry = (e,value) => {
    setInputCountryValue(value)
    setPopUpOpened(false)
  };

 

  // const inputLabelHandler = () => {
  //   if (inputCountryValue) {
  //     setLabelGone(false);
  //   }
  // };



  // silme

  // .filter((count) => inputCountryValue.includes(count.name))



  const [ContactFullName, setContactFullName] = useState("");
  const [ContactEmail, setContactEmail] = useState("");
  const [ContactTravveling, setContactTravveling] = useState("");


useEffect(() => {
fetch(import.meta.env.VITE_API_KEY + `countries`).then(data => data.json()).then((data) => setCountries(data));
},[])

  return (
    <>
    <Toaster/>
    <form action="">
      <div className="grid md:grid-cols-2 md:gap-4 ">
        <div className="mb-4">
          <ContactInputComponent
            setInputValue={setContactFullName}
            inputId={"ContactFullName"}
            inputTitle={"Full Name"}
            inputValue={ContactFullName}
            />
        </div>
        {/* <div className="form-floating mb-4 ">
          <input
            className="border outline-none w-[100%] rounded-[4px]  p-[9px]"
            //  form-control content-font appearance-none border rounded w-full py-2 px-3 h-11 placeholder:text-gray-400 text-gray-700 leading-tight focus:outline-none id="fullName"
            placeholder=""
            type="text"
            name="fullName"
            // autoComplete="off"
          />
          <label
            className="block text-gray-700 content-font mb-2 truncate"
            htmlFor="fullName"
            >
            Full Name<sup className="text-customOrange">*</sup>
            </label>
          </div> */}
        <div className="mb-4">
          <ContactInputComponent
            setInputValue={setContactEmail}
            inputId={"ContactEmail"}
            inputTitle={"Email"}
            inputValue={ContactEmail}
            />
        </div>
        {/* <div className="form-floating mb-4 ">
          <input
          className="border outline-none w-[100%] rounded-[4px]  p-[9px]"
          // form-control content-font appearance-none border rounded w-full py-2 px-3 h-11 placeholder:text-gray-400 text-gray-700 leading-tight focus:outline-none
          id="Email"
          placeholder=""
          type="text"
          name="Email"
          // autoComplete="off"
          />
          <label
          className="block text-gray-700 content-font mb-2 truncate"
          htmlFor="Email"
          >
          Email<sup className="text-customOrange">*</sup>
          </label>
        </div> */}
        {/* <div className="mb-4 relative z-[20] " ref={popupInputRef}>
          <ContactInputComponent
          setInputValue={setContactTravveling}
          inputId={"ContactTravveling"}
            inputTitle={"Travveling Country"}
            inputValue={ContactTravveling}
            />
          </div> */}
        <div className="mb-4">
          <ContactInput setInputValue={setPhoneInputValue} inputValue={phoneInputValue}/>
        </div>
        <div className="mb-4 relative z-[20]" ref={popupInputRef}>
          <input
            onBlur={blurHandlerCountry}
            onFocus={focusHandler}
            // onBlur={inputLabelHandler}
            className="border outline-none w-[100%] rounded-[4px]  p-[9px]"
            // form-control content-font appearance-none border rounded w-full py-2 px-3 h-11 placeholder:text-gray-400 text-gray-700 leading-tight focus:outline-none
            id="traveled_country"
            type="text"
            name="traveled_country"
            // autoComplete="off"
            value={inputCountryValue}
            onChange={(e) => setInputCountryValue(e.target.value)}
            />
          <label
            className={`duration-[.3s] bg-white px-[3px] text-gray-700  absolute
            ${
              inputCountryValue ? "top-[-10px] left-[16px] text-[11px]" 
              :
              labelGone
              ? "top-[-10px] left-[16px] text-[11px]"
              :   "top-[10px] left-[16px] text-[14px]"
            }
            `}
            htmlFor="traveled_country"
            >
            Travelling Country<sup className="text-customOrange">*</sup>
          </label>
          {popUpOpened ? (
            <div className="popup  w-[100%] bg-white border-solid border-[1px]  rounded-b h-[100px] absolute overflow-y-scroll">

        

              {
                countries.length
                && 
                countries.map(((country) => {
                  
                  return (
                    <div key={country.id}
                onClick={(e) => setCurrentTravelCountry(e,country.name)} 
                data-value={country.name}
                className="z-[20] flex items-center p-2.5 cursor-pointer"
                >
                <span className="text-customOrange mr-1.5">
                  <FaLocationDot></FaLocationDot>
                </span>{" "}
                {country.name}
              </div>
                )
                
              }))
            }


           
            </div>
          ) : (
            ""
            )}
        </div>
      </div>
      <div className="text-area-input mb-4 relative">
        <textarea
          id="textAreaContact"
          value={contactDescription}
          onChange={(e) => setContactDescription(e.target.value)}
          onFocus={focusHandlerTextArea}
          onBlur={blurHandlerTextArea}
          className="border outline-none w-[100%] rounded-[4px]  p-[9px]"
          // resize-none form-control border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline content-font no-scrollbarname="userMessage"
          placeholder=""
          cols="30"
          rows="5"
          ></textarea>
        <label
          htmlFor="textAreaContact"
          className={` select-none input_text absolute ease-in-out text-gray-500 
          text-gray-500 rounded-[2px]  bg-white mb-2 absolute duration-[.2s] ${
            descriptionFocused
              ? "top-[-9px] left-[16px] text-[11px] px-[0.5rem]"
              : "top-[10px]  left-[16px] text-[14px] "
          }`}
          >
          Comments/Description <sup className="text-customOrange">*</sup>
        </label>
      </div>
      <div className="w-full flex justify-center">
        <button
        onClick={submitFormHandler}
        className="w-full flex justify-center lg:w-auto lg:mx-auto my-5 te-cu-submit  my-1 px-16 py-2 rounded-md text-base bg-customOrange text-white hover:bg-theme-orange-hover border border-theme-orange transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        type="Submit"
        >
          Submit
        </button>
      </div>
    </form>
          </>
  );
};

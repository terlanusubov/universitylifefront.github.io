import './Styles/SignUpModal.css';
import './Styles/SignUpModalrespon.css';
import 'react-international-phone/style.css';


import { PhoneInput } from 'react-international-phone';


// Image
import Logo from "./Assets/144.png"

// Icons

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

// Router
import { Link } from "react-router-dom"
import React, { useState, useRef, useEffect } from 'react';

// Hooks
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import {useToaster} from 'react-hot-toast'
// Components
import { Toaster } from 'react-hot-toast';



function SignUpModal({ open, onClose }) {
  
  const [value, setValue] = useState('');

  // const assdas = async () => {
  //   const token = await fetch('api',{
  //     method:'POST',
  //     body: JSON.stringify()
  //   })
  //   localStorage.setItem('token',JSON.stringify(token))
  // }

  const nameInputRef = useRef()
  const surnameInputRef = useRef()
  const emailInputRef = useRef()
  const passwordInput = useRef()
  const [phone, setPhone] = useState('');

  const RegisterHandler = async (e) => {
    e.preventDefault();
    const filteredPhone = phone.split(" ").join().replaceAll('(', '').replaceAll(')', '').replaceAll(',', '')
    const registerInformations = {
      name: nameInputRef.current.value,
      surname: surnameInputRef.current.value,
      email: emailInputRef.current.value,
      phoneNumber: filteredPhone,
      password: passwordInput.current.value,

    }
    try {
   const response = await fetch(`http://elnurhz-001-site1.itempurl.com/api/v1/account/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerInformations)
      });
      
      const description = await response.json()
      if(description.statusCode === 200) {
        toast.success("Successfully registered.")
        console.log("Success")
        
      }
      // console.log(description.description);
      if (description.statusCode === 400) {
        toast.error(description.description);
      }
    
    }

    catch (err) {
      toast.error(err)
    }
  }

  
  const [isMail, setIsMail] = useState("");
  const isEmail = useRef("");
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   isEmail.current.value = "";
  //   // setIsMail("");
  // }

  const focusHanlder = e => {
    e.currentTarget.parentElement.classList.add('gone')
  }
  const blurHandler = e => {
    if (!e.currentTarget.value) {
      e.currentTarget.parentElement.classList.remove('gone')
    }

  }

  console.log(state.inputModalSlice.inputFocused);

  return (
    <>
      <Toaster/>
      <div className='modal-overlay'>

        < div className='login-signup' >
          <div onClick={onClose} className='close-icon'>
            <AiOutlineClose />
          </div>
          <div className='login-logo-image'>
            <img src={Logo} alt="" />
          </div>
          <div className='login-title'>
            <h2 className='text-customOrange'>Welcome to University Living</h2>
            <p>Please enter your email, we'll send you otp on your email address</p>
          </div>
          <form action="/" onSubmit={RegisterHandler}>
            <div className="input_container">
              <input ref={nameInputRef} onFocus={focusHanlder} onBlur={blurHandler} type="name" id='fname' name='fname' className=' border rounded-[10px] p-[10px]' />
              <span className='text-white'>Name</span>
            </div>
            <div className="input_container">
              <input ref={surnameInputRef} onFocus={focusHanlder} onBlur={blurHandler} type="name" id='lname' name='lname' className=' border rounded-[10px] p-[10px]' />
              <span className='text-white'>Surname</span>
            </div>
            <div className="input_container">
              <input ref={emailInputRef} onFocus={focusHanlder} onBlur={blurHandler} type="email" id='email' name='email' className=' border rounded-[10px] p-[10px]' />
              <span className='text-white'>Email</span>
            </div>
            <div className="input_container">
              <input ref={passwordInput} onFocus={focusHanlder} onBlur={blurHandler} type="password" id='pwd' name='pwd' className=' border rounded-[10px] p-[10px]' />
              <span className='text-white'>Password</span>
            </div>


            <div className='tel-input'>
              <PhoneInput
                defaultCountry="az"
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </div>
            <button onSubmit={RegisterHandler} type="submit" className='login bg-customOrange'>Register</button>
          </form>

          <div className='or'>
            <h3 className='text-customOrange'>OR</h3>
          </div>
          <div className='google-fb'>
            <div className='login-google'>
              <Link to="/"><FcGoogle /> <p>Continue with Google</p> </Link>
            </div>
            <div className='login-fb'>
              <Link to="/" className='text-center'><FaFacebookF className='color-customBlue' /><p>Continue with Facebook</p></Link>
            </div>
          </div>
        </div >
      </div>
    </>
  );
}

export default SignUpModal;
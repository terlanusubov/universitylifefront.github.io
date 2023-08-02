import './Styles/SignUpModal.css';
import './Styles/SignUpModalrespon.css';
import 'react-international-phone/style.css';


import { PhoneInput } from 'react-international-phone';


// Image
import Logo from "./Assets/144.png"

// Icons

import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";

// Router
import { Link } from "react-router-dom"
import React, { useState, useRef } from 'react';

// Hooks
import { useDispatch, useSelector } from 'react-redux';





function SignUpModal({ open, onClose }) {
  const [phone, setPhone] = useState('');
  const [value, setValue] = useState('');


  const [isMail, setIsMail] = useState("");
  const isEmail = useRef("");
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const handleLogin = (event) => {
    event.preventDefault();
    isEmail.current.value = "";
    // setIsMail("");
  }

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
        <div className="input_container">
          <input onFocus={focusHanlder} onBlur={blurHandler} type="name" id='name' name='name' className='border-[1px] border-solid border-black rounded-[10px] p-[10px]' />
          <span className='text-white'>Name</span>
        </div>
        <div className="input_container">
          <input onFocus={focusHanlder} onBlur={blurHandler} type="email" id='email' name='email' className='border-[1px] border-solid border-black rounded-[10px] p-[10px]' />
          <span className='text-white'>Email</span>
        </div>
        <div className="input_container">
          <input onFocus={focusHanlder} onBlur={blurHandler} type="password" id='pwd' name='pwd' className='border-[1px] border-solid border-black rounded-[10px] p-[10px]' />
          <span className='text-white'>Password</span>
        </div>


        <div className='tel-input'>
          <PhoneInput
            defaultCountry="az"
            value={phone}
            onChange={(phone) => setPhone(phone)}
          />
        </div>
        <button className='login bg-customOrange'>Login</button>
        <div className='or'>
          <h3 className='text-customOrange'>OR</h3>
        </div>
        <div className='google-fb'>
          <div className='login-google'>
            <Link to="/"><FcGoogle /> <p>Continue with Google</p> </Link>
          </div>
          <div className='login-fb'>
            <Link to="/" className='text-center'><ImFacebook2 className='color-customBlue' /><p>Continue with Facebook</p></Link>
          </div>
        </div>
      </div >
    </div>

  );
}

export default SignUpModal;

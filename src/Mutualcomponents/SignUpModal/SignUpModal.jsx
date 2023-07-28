import './Styles/SignUpModal.css';
import './Styles/SignUpModalrespon.css';

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
import { inputModalSlice } from '../../Redux/inputModalSlice';
function SignUpModal({ open, onClose }) {
  const [isMail, setIsMail] = useState("");
  const isEmail = useRef("");
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const handleLogin = (event) => {
    event.preventDefault();
    isEmail.current.value = "";
    // setIsMail("");
  }


  const inputRef = useRef(null)
  const [focused, setFocused] = useState(false)
  const focusHanlder = () => {

    setFocused(true)
    inputRef.current?.focus()
  }

  const blurHandler = () => {
    if (!inputRef.current?.value) {
      setFocused(false)
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
        <div className=' flex justify-center items-center relative'>
          <input onFocus={focusHanlder} onBlur={blurHandler} type="text" ref={inputRef} className='w-[100%]  border-[1px] border-solid border-black' />
          <span onClick={focusHanlder} className={`input_text duration-[0.3s] absolute top-2 left-4 bg-white ${focused ? 'translate-y-[-20px]' : ''}`}>Email</span>
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
            <Link to="/" className='text-center'><ImFacebook2 /><p>Continue with Facebook</p></Link>
          </div>
        </div>
      </div >
    </div>

  );
}

export default SignUpModal;

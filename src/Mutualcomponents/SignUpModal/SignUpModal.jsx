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

function SignUpModal({ open, onClose }) {
  const [isMail, setIsMail] = useState("");
  const isEmail = useRef("");

  const handleLogin = (event) => {
    event.preventDefault();
    isEmail.current.value = "";
    // setIsMail("");
  }


  // if (!open) return null;


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
          <h2>Welcome to University Living</h2>
          <p>Please enter your email, we'll send you otp on your email address</p>
        </div>
        <form onSubmit={handleLogin}>
          <input type="email" id='email' name='email' ref={isEmail} value={isMail} onChange={(e) => setIsMail(e.target.value)} required="required " />
          <span className='email'>Email</span>
          <button className='login'>Login</button>
        </form>
        <div className='or'>
          <h3>OR</h3>
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

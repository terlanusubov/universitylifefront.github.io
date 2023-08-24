import './Styles/SignUpModal.css';
import './Styles/SignUpModalrespon.css';
import 'react-international-phone/style.css';


import { PhoneInput } from 'react-international-phone';


// Image
import Logo from "./Assets/144.png"

// Icons

import { FcGoogle } from "react-icons/fc";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

// Router
import { Link } from "react-router-dom"
import React, { useState, useRef, useEffect } from 'react';

// Hooks
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useToaster } from 'react-hot-toast'
// Components
import { Toaster } from 'react-hot-toast';



function SignUpModal({ open, onClose }) {

  const [value, setValue] = useState('');


  const [loginLoading,setLoginLoading] = useState(false)


  const [loginEmailValue,setLoginEmailValue] = useState('')
  const [loginPasswordValue,setLoginPasswordValue] = useState('')

  const LoginHandler = async (e) => {
    e.preventDefault()
    setLoginLoading(true)

    const loginInformations = {
      email: loginEmailValue,
      password: loginPasswordValue,
    }
    console.log(JSON.stringify(loginInformations));
    const promise = await fetch(`${import.meta.env.VITE_API_KEY}/account/login`, {
      headers:{
        'Content-Type':'application/json'
      },
      method:'POST',
      body: JSON.stringify(loginInformations)
    })
   const response = await promise.json()

    if (response.statusCode === 400) {
      toast.error(response.description)
      setLoginLoading(false)
      return false;
    }

    if (response.statusCode === 200) {
      localStorage.setItem('tokenId',JSON.stringify(response.response.token))
    }
    
    
    setLoginLoading(false)
  }




  const [nameValue, setNameValue] = useState('')
  const [surnameValue, setSurnameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [phone, setPhone] = useState('');

  const [loading, setLoading] = useState(false)

  const RegisterHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    const filteredPhone = phone.split(" ").join().replaceAll('(', '').replaceAll(')', '').replaceAll(',', '').replaceAll('-', '');
    const registerInformations = {
      name: nameValue,
      surname: surnameValue,
      email: emailValue,
      phoneNumber: filteredPhone,
      password: passwordValue,
    }
    console.log(registerInformations);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/account/register`, {
        method: 'POST',
        // mode:'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerInformations)
      });

      const description = await response.json()
      console.log(description);
      if (description.statusCode === 200) {
        toast.success("Successfully registered.")


      }
      // console.log(description.description);
      if (description.statusCode === 400) {
        // toast.error(description.description);
        throw new Error(description.description)
        console.log(description.description);
      }

    }
    catch (err) {
      toast.error(err.message);
    }
    setLoading(false)
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

console.log(loginEmailValue,loginPasswordValue);

  const [toggle, setToggle] = useState(1);


  const toggleTab = (index) => {
    setToggle(index);
  }
  return (
    <>
      <Toaster />
      <div className='modal-overlay'>
        < div className={toggle === 1 ? "login-signup" : "content"} >
          <div onClick={onClose} className='close-icon'>
            <AiOutlineClose />
          </div>
          <div className='login-logo-image'>
            <img src={Logo} alt="" />
          </div>
          <div className='login-title'>
            <h2 className='text-customOrange'>Welcome to University Living</h2>
            <div className='register-login'>
              <button className={toggle === 1 ? "btn active" : "btn"} onClick={() => toggleTab(1)}>Register</button>
              <button className={toggle === 2 ? "btn active" : "btn"} onClick={() => toggleTab(2)}>Login</button>
            </div>
          </div>
          <form >

            <div className="input_container">
              <input onChange={(e) => setNameValue(e.target.value)} onFocus={focusHanlder} onBlur={blurHandler} type="name" id='fname' name='fname' className=' border rounded-[10px] p-[10px]' />
              <span className='text-white'>Name</span>
            </div>
            <div className="input_container">
              <input onChange={(e) => setSurnameValue(e.target.value)} onFocus={focusHanlder} onBlur={blurHandler} type="name" id='lname' name='lname' className=' border rounded-[10px] p-[10px]' />
              <span className='text-white'>Surname</span>
            </div>
            <div className="input_container">
              <input onChange={(e) => setEmailValue(e.target.value)} onFocus={focusHanlder} onBlur={blurHandler} type="email" id='email' name='email' className=' border rounded-[10px] p-[10px]' />
              <span className='text-white'>Email</span>
            </div>
            <div className="input_container">
              <input minLength={8} onChange={(e) => setPasswordValue(e.target.value)} onFocus={focusHanlder} onBlur={blurHandler} type="password" id='pwd' name='pwd' className=' border rounded-[10px] p-[10px]' />
              <span className='text-white'>Password</span>
            </div>

            <div className='tel-input'>
              <PhoneInput
                defaultCountry="az"
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </div>
            <button onClick={RegisterHandler} className='login bg-customOrange'>{loading ?
              <div className="loading_element flex justify-center">
                <div role="status">
                  <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-customOrange" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              : 'Register'}</button>
            <div className='or'>
              <h3 className='text-customOrange'>OR</h3>
            </div>
            <div className='google-fb'>
              <div className='login-google'>
                <Link to="/"><FcGoogle /> <p>Continue with Google</p> </Link>
              </div>
              <div className='login-fb'>
                <Link to="/" className='text-center'><CgFacebook className='color-customBlue' /><p>Continue with Facebook</p></Link>
              </div>
            </div>
          </form>
        </div >

        {/* ///////////////////////////////////////////////// */}
        < div className={toggle === 2 ? "login-signup c-login" : "content"} >
          <div onClick={onClose} className='close-icon'>
            <AiOutlineClose />
          </div>
          <div className='login-logo-image'>
            <img src={Logo} alt="" />
          </div>
          <div className='login-title'>
            <h2 className='text-customOrange'>Welcome to University Living</h2>
            <div className='register-login'>
              <button className={toggle === 1 ? "active" : "btn-reg"} onClick={() => toggleTab(1)}>Register</button>
              <button className={toggle === 2 ? "active" : "btn-log"} onClick={() => toggleTab(2)}>Login</button>
            </div>
          </div>
          <form >
            <div className="input_container">
              <input value={loginEmailValue} onChange={(e) => setLoginEmailValue(e.target.value)} onFocus={focusHanlder} onBlur={blurHandler} type="email" id='loginEmail' name='email' className=' border rounded-[10px] p-[10px]' />
              <span className='text-white'>Email</span>
            </div>
            <div className="input_container">
              <input value={loginPasswordValue} onChange={(e) => setLoginPasswordValue(e.target.value)} onFocus={focusHanlder} onBlur={blurHandler} type="password" id='loginPwd' name='pwd' className=' border rounded-[10px] p-[10px]' />
              <span className='text-white'>Password</span>
            </div>
            <button onClick={LoginHandler} className='login bg-customOrange'>{loginLoading ?
              <div className="loading_element flex justify-center">
                <div role="status">
                  <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-customOrange" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              : 'Login'}</button>
          </form>
        </div >
      </div >
    </>
  );
}

export default SignUpModal;
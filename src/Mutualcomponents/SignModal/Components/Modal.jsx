import React, { useEffect, useState } from 'react'

// Components
import InputComponent from './InputComponent'
import { PhoneInput } from 'react-international-phone'
import { Toaster,toast } from 'react-hot-toast'
// Assets
import Logo from '../../../Mutualcomponents/Header/Assets/modalLogo.png'

// Styles
import '../Styles/ModalStyle.scss'
// Icons
import {FcGoogle as GoogleIcon} from 'react-icons/fc'
import {BiLogoFacebook as FacebookIcon} from 'react-icons/bi'
import {AiFillCloseCircle as CloseIcon} from 'react-icons/ai'

// Hooks
import { ModalSlice, modalActions } from '../../../Redux/ModalSlice'
import { useDispatch } from 'react-redux'

const Modal = () => {
  const [modalPage,setModalPage] = useState('register');
  const dispatch = useDispatch();
  // RegisterValues
  const [nameValue,setNameValue] = useState('')
  const [EmailValueRegister,setEmailValueRegister] = useState('')
  const [phoneValue,setPhoneValue]= useState('');
  const [PasswordValueRegister,setPasswordValueRegister] = useState('')
  const [SurnameValue,setSurnameValue] = useState('')
  const [registerLoading,setRegisterLoading] = useState(false)
  
  // LoginValues
  const [emailValueLogin,setEmailValueLogin] = useState('');
  const [passwordValueLogin,setPasswordValueLogin] = useState('');
  const [loginLoading,setLoginLoading] = useState(false)

  const LoginHandler = async (e) => {
    e.preventDefault()
    if (emailValueLogin === '' || passwordValueLogin === '') {
      toast.error('Please Fill The Blanks')
      return false
    }
    
    setLoginLoading(true)

    const loginInformations = {
      email: emailValueLogin,
      password: passwordValueLogin
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
   console.log(response);
    if (response.statusCode === 400) {
      toast.error(response.description)
      setLoginLoading(false)
      return false;
    }

    if (response.statusCode === 200) {
    localStorage.setItem('tokenId',JSON.stringify(response.response.token))
    }
    
    
    setLoginLoading(false)
    dispatch(ModalSlice.actions.setModal(false))
    window.location.reload();
  }

  const registerHandler = async (e) => {
    e.preventDefault();
    if (nameValue === '' || SurnameValue === '' || phoneValue === '' || EmailValueRegister === '' || PasswordValueRegister === '') {
      toast.error('Please Fill The Blanks')
      return false
    }
    setRegisterLoading(true)
    const filteredPhone = phoneValue.split(" ").join().replaceAll('(', '').replaceAll(')', '').replaceAll(',', '').replaceAll('-', '');
    const registerInformations = {
      name: nameValue,
      surname: SurnameValue,
      email: EmailValueRegister,
      phoneNumber: filteredPhone,
      password: PasswordValueRegister,
    }
    console.log(registerInformations);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/account/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'mode':'no-cors'
        },
        body: JSON.stringify(registerInformations)
      });
        console.log(JSON.stringify(registerInformations));
      const description = await response.json()
      console.log(description)
      if (description.statusCode === 200) {
        toast.success("Successfully registered.")
        setModalPage('login')

      }
      // console.log(description.description);
      if (description.statusCode === 400) {
        // toast.error(description.description);
        throw new Error(description.description)
      }

    }
    catch (err) {
      toast.error(err.message);
    }
    setRegisterLoading(false)
  }



const closeModal = () => {
  dispatch(
  ModalSlice.actions.setModal(false)
  )
}
  return (
    <>
    <Toaster/>
    <div className='modal_container overflow-x-hidden relative   max-[495px]:max-w-[400px] max-w-[450px] w-[100%] bg-white h-[600px] rounded-[10px] z-[400] '>
      <div className="close_btn absolute top-[1.5px] right-[1.5px]">
        <button onClick={closeModal} className='text-[24px]'>
          <CloseIcon/>
        </button>
      </div>
      <div className="navigations_container py-[10px] flex flex-col items-center justify-center ">
        <div className="logo max-w-[40px] h-[65px] w-[100%] ">
         <img src={Logo} alt="" className=' w-[100%] h-[100%]'/>
        </div>
        <div className="modal_navigations w-[100%] flex justify-between relative">
          <button onClick={() => setModalPage('register')} className={`w-[50%] bg-white pb-[13px]`}>Register</button>
          <button onClick={() => setModalPage('login')} className={`w-[50%] bg-white pb-[13px]  `}>Login</button>
          <span className={`modal_line bg-customOrange absolute  ease-in-out duration-[.14s] bottom-0 w-[50%] h-[2px] ${modalPage === 'login' ? 'translate-x-[100%]' : ''}`}></span>
        </div>
      </div>   
    <div className={`modal_content_container flex   duration-[.3s] ${modalPage === 'login' ? 'translate-x-[-100%]' : 'translate-x-[0%]'}`}>  
    
        <form className='px-[20px] register_form flex min-w-[100%] flex-col gap-[20px] items-center '>
          <InputComponent inputValue={nameValue} setInputValue={setNameValue} inputTitle={'Name'} inputId={'nameInputId'}></InputComponent>
          <InputComponent inputValue={SurnameValue} setInputValue={setSurnameValue} inputTitle={'Surname'} inputId={'SurnameInputId'}></InputComponent>
          <InputComponent inputValue={EmailValueRegister} setInputValue={setEmailValueRegister} inputTitle={'Email'} inputId={'emailInputId'}></InputComponent>
          <InputComponent inputValue={PasswordValueRegister} setInputValue={setPasswordValueRegister} inputTitle={'Password'} inputId={'passwordInputId'}></InputComponent>
          <div className="rounded-[4px] international_input_register  w-[100%]">
            <div className="rounded-[4px] international_input  relative">
            <PhoneInput
            value={phoneValue} 
            onChange={(e) => setPhoneValue(e)}/>
            <span className="select-none input_text absolute top-[-10px] rounded-[2px] bg-white text-[13.3px] ease-out text-gray-500 duration-[.35s] px-[2px]  left-[16px] ">Phone Number</span>
            </div>
          </div>
          <button onClick={registerHandler} className='w-[100%] bg-customOrange hover:bg-[#dfb34d]  duration-[.1s] h-[40px] rounded-[10px] text-white flex items-center justify-center' ><span className="btn_text">{
          registerLoading 
          ?  
          <div className="loading_element flex justify-center">
                <div role="status">
                  <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-customOrange" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              :           
              'Submit'       
              }</span></button>
          {/* <div className="auth_social_media flex flex-col w-[100%] gap-[10px]">
          <button className='google_auth pl-[10px] rounded-[10px] flex gap-[20px] items-center justify-between border hover:bg-gray-200 h-[40px] w-[100%]'>
              <span className="google_logo text-[26px]">
                  <GoogleIcon/>
              </span>
              <span className="social_media_name mr-auto  text-[15px] max-[280px]:text-[13px]">
                Continue with Google
              </span>
          </button>
          <button className='facebook_auth  pl-[10px] rounded-[10px] flex gap-[20px] items-center justify-between border h-[40px] w-[100%] hover:bg-blue-800 bg-blue-900 text-white'>
              <span className="google_logo text-[26px]">
                  <FacebookIcon/>
              </span>
              <span className="social_media_name mr-auto  text-[15px] max-[280px]:text-[13px]">
                Continue with Facebook
              </span>
          </button>
          </div> */}
        </form>
        <form className='px-[20px] login_form flex min-w-[100%] flex-col gap-[20px] items-center'>
          <InputComponent inputValue={emailValueLogin} setInputValue={setEmailValueLogin} inputTitle={'Email'} inputId={'loginEmailInputId'}></InputComponent>
          <InputComponent inputValue={passwordValueLogin} setInputValue={setPasswordValueLogin} inputTitle={'Password'} inputId={'loginPasswordInputId'}></InputComponent>
          <button onClick={LoginHandler} className='w-[100%] bg-customOrange hover:bg-[#dfb34d]  duration-[.1s] h-[40px] rounded-[10px] text-white flex items-center justify-center' ><span className="btn_text">{
          loginLoading 
          
          ?  
          
          <div className="loading_element flex justify-center">
                <div role="status">
                  <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-customOrange" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              
              
              : 
              
              
              'Submit'
              
              
              }</span></button>
          {/* <div className="auth_social_media flex flex-col w-[100%] gap-[10px]">
          <button className='google_auth pl-[10px] rounded-[10px] flex gap-[20px] items-center justify-between border hover:bg-gray-200 h-[40px] w-[100%]'>
              <span className="google_logo text-[26px]">
                  <GoogleIcon/>
              </span>
              <span className="social_media_name mr-auto  text-[15px] max-[281px]:text-[13px]">
                Continue with Google
              </span>
          </button>
          <button className='facebook_auth  pl-[10px] rounded-[10px] flex gap-[20px] items-center justify-between border h-[40px] w-[100%] hover:bg-blue-800 bg-blue-900 text-white'>
              <span className="google_logo text-[26px]">
                  <FacebookIcon/>
              </span>
              <span className="social_media_name mr-auto  text-[15px] max-[281px]:text-[13px]">
                Continue with Facebook
              </span>
          </button>
          </div> */}
        </form>
    
      </div>
    </div>
    </>
  )
}

export default Modal
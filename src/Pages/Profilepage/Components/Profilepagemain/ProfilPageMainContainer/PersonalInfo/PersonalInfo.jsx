import React, { useEffect, useState } from 'react'

// Components
import InputComponent from './InputComponent'
import NumbersInput from './NumberInput'
import DateInput from './DateInput'
import Profile from '../Profile/Profile'
import UniversityInput from './UniversityInput'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import {userInformationSlice} from '../../../../../../Redux/userInformationSlice'

const PersonalInfo = () => {

    
    
    const parseJwt = (token) => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    }
    
    const returnCurrentUser = () => {
        
      const obj = parseJwt(localStorage.getItem('tokenId'))
      return   {
            email:obj.Email,
            userId:obj.id
        }
    }

    const [userInformations,setUserInformations] = useState([])

    const dispatch = useDispatch();
    dispatch(userInformationSlice.actions.setCurrentUserId(returnCurrentUser().userId))
    
    const [editOpen,setEditOpen] = useState(false);
    
    const [NameInputValue,setNameInputValue] = useState('');
    const [SurnameInputValue,setSurnameInputValue] = useState('');
    const [EmailInputValue,setEmailInputValue] = useState(returnCurrentUser().email ? returnCurrentUser().email : '');
    const [PhoneInputValue,setPhoneInputValue] = useState('');
    const [CountryInputValue,setCountryInputValue] = useState('');
    const [fullname,setFullname] = useState('')
    const [staticPhone,setStaticPhone] = useState('')
    
    const updateUserInfo = async () => {

        const updatedInfos = {
            userId: returnCurrentUser().userId,
            name: NameInputValue,
            surname: SurnameInputValue,
            phoneNumber: PhoneInputValue.replaceAll('(','').replaceAll(')','').replaceAll('-','').replaceAll(' ','')
          }

        if (NameInputValue === '' || SurnameInputValue === '' || PhoneInputValue === '') {

            toast.error("Please Fill All Blanks")
            return false;
        }
          console.log(updatedInfos);
        const promise = await fetch(import.meta.env.VITE_API_KEY + '/account/update', {
            headers: {
                'Content-type':'application/json'
            },
            method:'POST',
            body: JSON.stringify(updatedInfos)
        })
       const result = await promise.json();
       if (result.statusCode === 200) {
        toast.success('Your Information Updated Successfully')
        setTimeout(() => {
            window.location.reload()
        }, 500);
       }
       else {
        toast.error('Something Unknown Happened')
       }

    }
  

    const fetchUserInformations = async () => {
        const promise = await fetch(import.meta.env.VITE_API_KEY + `/account?UserId=${returnCurrentUser().userId}`)
        const result = await promise.json();
        setNameInputValue(result[0].name)
        setSurnameInputValue(result[0].sureName)
        setPhoneInputValue(result[0].phoneNumebr)
        setFullname(result[0].name + ' ' + result[0].sureName)
        setStaticPhone(result[0].phoneNumebr)
    }
    useEffect(() => {
    fetchUserInformations();
    },[])

  return (
    <>
    <Toaster/>
    <div className='profile_page_personal_info'>
        <div className="profile_part_nav  rounded-[14px] mt-[-23px] max-[1024px]:mt-[-20px] p-[20px] bg-white shadow-[1px_2px_10px_-5px_rgba(0,0,0,0.3)] font-[600]">
             Information  
        </div>
        <div className="profile_page_personal_info_container p-[25px] bg-white rounded-[14px]  shadow-[1px_2px_10px_-5px_rgba(0,0,0,0.3)] my-[20px]">
            <Profile  editMode={editOpen} fullName={fullname ? fullname : ''} phoneNumber={staticPhone ? staticPhone : ''} email={returnCurrentUser().email} setEditMode={setEditOpen}></Profile>

            {
                editOpen 
                &&
                
                 <div className="main_container">
                    <div className="container_title pb-[20px]">
                        Personal Detail
                    </div>
                    <div className="personal_details_container  grid grid-cols-2  justify-items-start gap-y-[40px] gap-x-[20px]">
                            <InputComponent setInputValue={setNameInputValue} inputValue={NameInputValue} inputId="nameInput" inputTitle={'Name'}></InputComponent>
                            <InputComponent setInputValue={setSurnameInputValue} inputValue={SurnameInputValue} inputId="surnameInput" inputTitle={'Surname'}></InputComponent>
                            <InputComponent setInputValue={setEmailInputValue} inputValue={EmailInputValue} inputId="emailInput" inputTitle={'Email'}></InputComponent>
                            <NumbersInput setInputValue={setPhoneInputValue} inputValue={PhoneInputValue}></NumbersInput>
                            <button onClick={updateUserInfo} className='max-w-[250px] h-[40px] w-[100%] bg-customOrange flex items-center justify-center rounded-[10px] duration-[.1s] hover:bg-customLightOrange text-white'>
                                <span className="btn_text">
                                    Save Details
                                </span>
                            </button>
                    </div>
                </div> 
            }
        </div>
    </div>
    </>
  )
}

export default PersonalInfo
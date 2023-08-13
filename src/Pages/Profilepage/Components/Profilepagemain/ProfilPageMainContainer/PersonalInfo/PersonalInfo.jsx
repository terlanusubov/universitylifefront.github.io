import React from 'react'

// Components
import InputComponent from './InputComponent'
import NumbersInput from './NumberInput'
import DateInput from './DateInput'
import UniversityInput from './UniversityInput'
const PersonalInfo = () => {

  return (
    <div className='profile_page_personal_info'>
        <div className="profile_part_nav  rounded-[14px] mt-[-23px] max-[1024px]:mt-[-20px] p-[20px] bg-white shadow-[1px_2px_10px_-5px_rgba(0,0,0,0.3)] font-[600]">
             Information  
        </div>
        <div className="profile_page_personal_info_container p-[25px] bg-white rounded-[14px]  shadow-[1px_2px_10px_-5px_rgba(0,0,0,0.3)] my-[20px]">
                <div className="main_container">
                    <div className="container_title pb-[20px]">
                        Personal Detail
                    </div>
                    <div className="personal_details_container  grid grid-cols-2  justify-items-start gap-y-[40px] max-[1330px]:gap-x-[20px]">

                            <InputComponent inputId="nameInput" inputTitle={'Name'}></InputComponent>
                            <InputComponent inputId="surnameInput" inputTitle={'Surname'}></InputComponent>
                            <InputComponent inputId="cityInput" inputTitle={'City'}></InputComponent>
                            <InputComponent inputId="addressInput" inputTitle={'Address'}></InputComponent>
                            <InputComponent inputId="stateInput" inputTitle={'State'}></InputComponent>
                            <InputComponent inputId="countryInput" inputTitle={'Country'}></InputComponent>
                            <InputComponent inputId="emailInput" inputTitle={'Email'}></InputComponent>
                            <NumbersInput></NumbersInput>
                            <InputComponent inputId="postalInput" inputTitle={'Postal Code'}></InputComponent>
                            <DateInput inputTitle={'Date of Birth'}></DateInput>
                    </div>
                    <div className="container_title py-[25px]">
                        University Details
                    </div>
                    <div className="university_details_container grid grid-cols-2  justify-items-start gap-y-[40px] max-[1330px]:gap-x-[20px]">
                        <UniversityInput inputId={'universitiesInput'} inputTitle={'Select University'}></UniversityInput>
                        <DateInput inputTitle={'Start Date'}></DateInput>
                        <DateInput inputTitle={'End Date'}></DateInput>
                        <InputComponent inputId={'courseNameInput'} inputTitle={'Course Name'}></InputComponent>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default PersonalInfo
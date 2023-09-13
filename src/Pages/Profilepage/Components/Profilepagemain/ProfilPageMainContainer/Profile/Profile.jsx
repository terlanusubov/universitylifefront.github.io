import React,{useState} from 'react'

// Icon
import {MdModeEditOutline as EditIcon} from 'react-icons/md'
const Profile = (props) => {
  const setEditMode = () => {
    props.setEditMode((prev) => !prev)
  }
  return (
    <div className={`profile_part bg-transparent pb-[20px] mb-[20px] ${props.editMode ? 'after:absolute after:block after:contents-none after:bottom-0 after:border after:right-0 after:left-0' : ''}  pb-[10px]  rounded-[10px] flex flex-col justify-between gap-[30px] w-[100%] relative`}>
      <div onClick={setEditMode} className=" edit_icon absolute cursor-pointer  right-[20px] w-[38px] h-[38px] flex items-center justify-center rounded-[50%] bottom-[20px] text-[25px] text-white bg-customBlue"><EditIcon/></div>
       
        <div className="profile_container rounded-[14px]  bg-white">
          <div className="title select-none pb-[20px]">
            Profile Information
          </div>
          <div className="profile informations flex flex-col gap-[14px]">
          <div className="profile_information_name">
            <div className="profile_user_name select-none  text-gray-400">
              First Name
            </div>
            <div className="user_name_text ">
              {props.fullName}
            </div>
          </div>
          <div className="profile_information_email">
            <div className="profile_user_mail text-gray-400 select-none ">
              Email
            </div>
            <div className="profile_user_mail_text ">
              {props.email}
            </div>
          </div>
          <div className="profile_information_number flex flex-col gap-[10px]">
            <div className="profile_information text-gray-400 select-none" >
              Contact Number
            </div>
            <div className="profile_information_text select-none ">
              {props.phoneNumber}
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Profile
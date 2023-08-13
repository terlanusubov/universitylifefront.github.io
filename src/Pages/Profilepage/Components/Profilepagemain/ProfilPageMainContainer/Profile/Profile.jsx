import React from 'react'

const Profile = (props) => {
  return (
    <div className='profile_part bg-transparent  rounded-[10px] flex flex-col justify-between gap-[30px] w-[100%]'>
        <div className="profile_part_nav  rounded-[14px] mt-[-20px] max-[1024px]:mt-[-20px] p-[20px] bg-white">
                Profile
        </div>
        <div className="profile_container rounded-[14px] p-[20px] bg-white shadow-[1px_4px_10px_-5px_rgba(0,0,0,0.3)]">
          <div className="title pb-[20px]">
            Profile Information
          </div>
          <div className="profile informations flex flex-col gap-[10px]">
          <div className="profile_information_name">
            <div className="profile_user_name text-gray-400">
              First Name
            </div>
            <div className="user_name_text">
              {props.fullName}
            </div>
          </div>
          <div className="profile_information_email">
            <div className="profile_user_mail text-gray-400">
              Email
            </div>
            <div className="profile_user_mail_text">
              {props.email}
            </div>
          </div>
          <div className="profile_information_number">
            <div className="profile_information text-gray-400">
              Contact Number
            </div>
            <div className="profile_information_text">
              +1 210 314 3224
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Profile
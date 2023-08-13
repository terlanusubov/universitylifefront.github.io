import React from 'react'



// Assets
import User from '../Assets/joebiden.jpg'
const ProfilePageSideTop = (props) => {
  return (
    <div className='profile_page_sidebar_top flex flex-col items-center justify-center'>
        <div className="user_profile_picture rounded-[50%] h-[120px] w-[120px]">
            <img className='w-[100%] h-[100%] rounded-[50%] object-cover' src={User} alt="" />
        </div>
        <div className="user_information pb-[25px]">
          <div className="text-center user_fullname font-[600] text-[20px]">
          </div>
          <div className="text-center user_mail">
            example@mail.com
          </div>
          
        </div>
    </div>
  )
}

export default ProfilePageSideTop
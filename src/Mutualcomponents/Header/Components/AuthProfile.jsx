import React from 'react'
// Icons
import {BsFillPersonFill as PersonIcon} from 'react-icons/bs'

const AuthProfile = () => {
  return (
        <div className='authenticated_profile_controller absolute right-[20px] max-[400px]:right-[10px]'>
    
        
        <div className="profile_icon w-[40px] h-[40px] rounded-[50%] bg-gray-300 relative">
            <PersonIcon className='text-[20px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white'></PersonIcon>
        </div>
        

        </div>
  )
}

export default AuthProfile
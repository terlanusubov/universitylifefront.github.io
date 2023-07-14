import React from 'react'


// Icons
import {BsFillPersonFill as PersonIcon} from 'react-icons/bs'



const profile = () => {
  return (
    <div className='profile absolute right-[20px] max-[400px]:right-[10px] hidden max-[1024px]:flex items-center gap-[14 px]'>
        <span className="profile_text mr-[10px] max-[435px]:text-[14px] max-[435px]:font-[500]">
            Flight Tickets
        </span>
        <div className="profile_icon w-[40px] h-[40px] rounded-[50%] bg-gray-300 relative">
            <PersonIcon className='text-[20px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white'></PersonIcon>
        </div>
    </div>
  )
}

export default profile
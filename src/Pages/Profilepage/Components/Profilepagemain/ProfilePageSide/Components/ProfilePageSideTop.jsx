import React from 'react'

import {BsFillPersonFill as PersonIcon} from 'react-icons/bs'
// Assets
import User from '../Assets/joebiden.jpg'
const ProfilePageSideTop = (props) => {
  
function parseJwt (token) {
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
        name:obj.name
    }
}


  return (
    <div className='profile_page_sidebar_top flex flex-col items-center justify-center'>
        <div  className="mt-[10px] profile_icon w-[100px] h-[100px] rounded-[50%] bg-gray-300 relative mr-[10px]">
              <PersonIcon className='text-[60px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white'></PersonIcon>
          </div>
        <div className="user_information pb-[10px]">
          <div className="text-center user_fullname font-[600] text-[20px]">
          </div>
          <div className="text-center user_mail pt-[5px]">
            {returnCurrentUser().email}
          </div>
          
        </div>
    </div>
  )
}

export default ProfilePageSideTop
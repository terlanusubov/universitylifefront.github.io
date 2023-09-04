import React from 'react'



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
        <div className="user_profile_picture rounded-[50%] h-[120px] w-[120px] mt-[12px]">
            <img className='w-[100%] h-[100%] rounded-[50%] object-cover' src={User} alt="" />
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
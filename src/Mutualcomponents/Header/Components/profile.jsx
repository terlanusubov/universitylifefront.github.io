import React, { useEffect, useState } from 'react'


// Icons
import {BsFillPersonFill as PersonIcon} from 'react-icons/bs'
import {BsChevronUp as ChevronIcon} from 'react-icons/bs'
import {AiOutlineCalendar as CalendarIcon} from 'react-icons/ai' 
import {BiSolidCoupon as CouponIcon} from 'react-icons/bi'
import {BsFillPeopleFill as PeopleIcon} from 'react-icons/bs' 
import {RiHeartAddFill as WishListIcon} from 'react-icons/ri'
import {IoIosInformationCircleOutline as InformationIcon} from 'react-icons/io'
import {CgProfile as ProfileIcon} from 'react-icons/cg' 
import {BiLogOut as LogoutIcon} from 'react-icons/bi'
// Assets
import DefaultPp from '../Assets/defaultpp.jpg'

// Hooks


// Slices
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { ProfileTogglesSlice } from '../../../Redux/ProfileSlice'
import { ModalSlice } from '../../../Redux/ModalSlice'
import { authenticationSlice } from '../../../Redux/AuthenticationSlice'
const profile = () => {
  const [hovered,setHovered] = useState(false)
  const isAuth = useSelector(state => state.authenticationReducer.isAuth)
  const navigate = useNavigate()
  const dispatch = useDispatch();


  const mouseOverHandler = () => {
    setHovered(true)
  }
  const mouseOutHandler = () => {
    setHovered(false)
  }

  const clickHandler = (e) => {
    navigate('/profile')
    setHovered(!hovered)
  }
  const routeToProfile = (to) => {
    navigate('/profile')
    dispatch(ProfileTogglesSlice.actions.setCurrentPage(to))
  }
  
const logoutHandler = () => {
    dispatch(authenticationSlice.actions.setAuth(false));
    localStorage.removeItem('tokenId')
    navigate('/')
    window.location.reload();
}

  return (
    <div  onMouseOver={mouseOverHandler} onMouseLeave={mouseOutHandler} className={`ml-[10px] relative cursor-pointer profile flex items-center max-w-[330px] w-[100%] right-[20px] max-[400px]:right-[15px]  h-[100%]`}>        
          
          <div onClick={clickHandler} className=" profile_icon w-[40px] h-[40px] rounded-[50%] bg-gray-300 relative mr-[10px]">
              <PersonIcon className='text-[20px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white'></PersonIcon>
          </div>
          <div  className={`profile_chevron_icon duration-[.3s] ml-[5px] ${hovered ? 'rotate-[180deg]' : ''}`}>
              <ChevronIcon></ChevronIcon>
          </div>
          {
            hovered 
            &&
            <div className='nav_profile_popup flex flex-col max-[1339px]:w-[180px] max-[732px]:w-[160px]  max-[730px]:p-[5px] w-[200px] p-[10px] max-[402px]:left-[-100%]  max-[732px]:left-[-130%] left-[-140%]  shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.3)] rounded-[9px] bg-white  absolute  max-[732px]:bottom-[-170px] bottom-[-180px]'>
                 <div onClick={() => routeToProfile('bookings')}  className={`nav_popup_option rounded-[9px] p-[10px]   hover:bg-[#F3F3F3] hover:text-customOrange cursor-pointer flex items-center   w-[100%]` }>
                    <div className="option_icon mr-[10px] text-[24px]">
                        <CalendarIcon></CalendarIcon>
                    </div>
                    <div className="profile_property_text">
                        My Booking
                    </div>
                </div>
        
                <div onClick={() => routeToProfile('wishlist')} className={`nav_popup_option rounded-[9px] p-[10px]   hover:bg-[#F3F3F3] hover:text-customOrange cursor-pointer flex items-center   w-[100%]` }>
                    <div className="option_icon mr-[10px] text-[24px]">
                        <WishListIcon></WishListIcon>
                    </div>
                    <div className="profile_property_text">
                        My Wishlist
                    </div>
                </div>
                {/* <div onClick={() => routeToProfile('personalInfo')} className={`nav_popup_option rounded-[9px] p-[10px]   hover:bg-[#F3F3F3] hover:text-customOrange cursor-pointer flex items-center   w-[100%]` }>
                    <div className="option_icon mr-[10px] text-[24px]">
                        <InformationIcon></InformationIcon>
                    </div>
                    <div className="profile_property_text">
                        Personal Information
                    </div>
                </div> */}
                <div onClick={() => routeToProfile('profile')} className={`nav_popup_option rounded-[9px] p-[10px]   hover:bg-[#F3F3F3] hover:text-customOrange cursor-pointer flex items-center   w-[100%]` }>
                    <div className="option_icon mr-[10px] text-[24px]">
                        <ProfileIcon></ProfileIcon>
                    </div>
                    <div className="profile_property_text">
                        Profile
                    </div>
                </div>
                <div onClick={logoutHandler} className={`nav_popup_option rounded-[9px] p-[10px]   hover:bg-[#F3F3F3] hover:text-customOrange cursor-pointer flex items-center   w-[100%]` }>
                    <div className="option_icon mr-[10px] text-[24px]">
                        <LogoutIcon></LogoutIcon>
                    </div>
                    <div className="profile_property_text">
                        Log Out
                    </div>
                </div>
            </div>
          }
    </div>
  )
}

export default profile

// ${isAuth ? '' :'hidden max-[1024px]:flex items-center gap-[10px]'}
import React, { useState } from 'react'


// Icons
import {BsFillPersonFill as PersonIcon} from 'react-icons/bs'
import {BsChevronUp as ChevronIcon} from 'react-icons/bs'
import {AiOutlineCalendar as CalendarIcon} from 'react-icons/ai' 
import {BiSolidCoupon as CouponIcon} from 'react-icons/bi'
import {BsFillPeopleFill as PeopleIcon} from 'react-icons/bs' 
import {RiHeartAddFill as WishListIcon} from 'react-icons/ri'
import {IoIosInformationCircleOutline as InformationIcon} from 'react-icons/io'
import {CgProfile as ProfileIcon} from 'react-icons/cg' 
// Assets
import DefaultPp from '../Assets/defaultpp.jpg'

// Hooks
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
const profile = () => {
  const [hovered,setHovered] = useState(false)
  const isAuth = useSelector(state => state.authenticationReducer.isAuth)
  const navigate = useNavigate()


  const mouseOverHandler = () => {
    setHovered(true)
  }
  const mouseOutHandler = () => {
    setHovered(false)
  }

  const clickHandler = () => {
    navigate('/profile')
    setHovered(!hovered)
  }

  return (
    <div onClick={clickHandler} onMouseOver={mouseOverHandler} onMouseLeave={mouseOutHandler} className={`ml-[10px] relative cursor-pointer profile flex items-center right-[20px] max-[400px]:right-[10px] h-[100%]`}>        
          <span className="profile_text mr-[10px] max-[435px]:text-[14px] max-[435px]:font-[500]">
              Flight Tickets
          </span>
          <div className=" profile_icon w-[40px] h-[40px] rounded-[50%] bg-gray-300 relative">
              <PersonIcon className='text-[20px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white'></PersonIcon>
          </div>
          <div  className={`profile_chevron_icon duration-[.3s] ml-[5px] ${hovered ? 'rotate-[180deg]' : ''}`}>
              <ChevronIcon></ChevronIcon>
          </div>
          {
            hovered 
            &&
            <div className='nav_profile_popup flex flex-col max-w-[600px] w-[100%]  left-[0px] right-[-500%] shadow-[1px_1px_6px_-1px_rgba(0,0,0,0.3)] rounded-[9px] bg-white  absolute bottom-[-225px]'>
                 <div className={`nav_popup_option rounded-[9px] p-[10px]   hover:bg-[#F3F3F3] hover:text-customOrange cursor-pointer flex items-center   w-[100%]` }>
                    <div className="option_icon mr-[10px] text-[24px]">
                        <CalendarIcon></CalendarIcon>
                    </div>
                    <div className="profile_property_text">
                        My Booking
                    </div>
                </div>
                <div className={`nav_popup_option rounded-[9px] p-[10px]   hover:bg-[#F3F3F3] hover:text-customOrange cursor-pointer flex items-center   w-[100%]` }>
                    <div className="option_icon mr-[10px] text-[24px]">
                        <CouponIcon></CouponIcon>
                    </div>
                    <div className="profile_property_text">
                        Vouchers
                    </div>
                </div>
                <div className={`nav_popup_option rounded-[9px] p-[10px]   hover:bg-[#F3F3F3] hover:text-customOrange cursor-pointer flex items-center   w-[100%]` }>
                    <div className="option_icon mr-[10px] text-[24px]">
                        <WishListIcon></WishListIcon>
                    </div>
                    <div className="profile_property_text">
                        My Wishlist
                    </div>
                </div>
                <div className={`nav_popup_option rounded-[9px] p-[10px]   hover:bg-[#F3F3F3] hover:text-customOrange cursor-pointer flex items-center   w-[100%]` }>
                    <div className="option_icon mr-[10px] text-[24px]">
                        <InformationIcon></InformationIcon>
                    </div>
                    <div className="profile_property_text">
                        Personal Information
                    </div>
                </div>
                <div className={`nav_popup_option rounded-[9px] p-[10px]   hover:bg-[#F3F3F3] hover:text-customOrange cursor-pointer flex items-center   w-[100%]` }>
                    <div className="option_icon mr-[10px] text-[24px]">
                        <ProfileIcon></ProfileIcon>
                    </div>
                    <div className="profile_property_text">
                        Profile
                    </div>
                </div>
            </div>
          }
    </div>
  )
}

export default profile

// ${isAuth ? '' :'hidden max-[1024px]:flex items-center gap-[10px]'}
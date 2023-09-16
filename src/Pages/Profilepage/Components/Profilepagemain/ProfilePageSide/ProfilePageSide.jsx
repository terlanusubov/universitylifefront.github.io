import React from 'react'
// Components
import ProfilePageSideTop from './Components/ProfilePageSideTop'

// Icons
import {AiOutlineCalendar as CalendarIcon} from 'react-icons/ai' 
import {BiSolidCoupon as CouponIcon} from 'react-icons/bi'
import {BsFillPeopleFill as PeopleIcon} from 'react-icons/bs' 
import {RiHeartAddFill as WishListIcon} from 'react-icons/ri'
import {IoIosInformationCircleOutline as InformationIcon} from 'react-icons/io'
import {CgProfile as ProfileIcon} from 'react-icons/cg' 
import { useDispatch } from 'react-redux'
import { ProfileTogglesSlice } from '../../../../../Redux/ProfileSlice'
// Assets


const ProfilePageSide = () => {
    const dispatch = useDispatch();
    const routeToProfile = (to) => {
        dispatch(ProfileTogglesSlice.actions.setCurrentPage(to))
    }

  return (
    <div className="profile_page_sidebar bg-white shadow-md rounded-[15px] mt-[-25px] max-w-[350px] max-[1200px]:max-w-[290px] w-[100%] max-[1024px]:hidden m-auto mr-[4%] max-[1250px]:mr-[3%]">
        <ProfilePageSideTop></ProfilePageSideTop>
        <div className="profile_page_side_bottom">
            <div className="profile_page_properties">
                <div onClick={() => routeToProfile('bookings')} className={`profile_page_property  p-[10px] hover:bg-[#F3F3F3] hover:text-customOrange cursor-pointer flex items-center   w-[100%]` }>
                    <div className="property_icon mr-[10px] text-[24px]">
                        <CalendarIcon></CalendarIcon>
                    </div>
                    <div className="profile_property_text">
                        My Booking
                    </div>
                </div>
                <div onClick={() => routeToProfile('wishlist')}className={`profile_page_property  p-[10px] hover:bg-[#F3F3F3] hover:text-customOrange cursor-pointer flex items-center   w-[100%]` }>
                    <div className="property_icon mr-[10px] text-[24px]">
                        <WishListIcon></WishListIcon>
                    </div>
                    <div className="profile_property_text">
                        Wishlist
                    </div>
                </div>

                <div onClick={() => routeToProfile('profile')} className={`profile_page_property  p-[10px] hover:bg-[#F3F3F3] hover:text-customOrange cursor-pointer flex items-center   w-[100%]` }>
                    <div className="property_icon mr-[10px] text-[24px]">
                        <ProfileIcon></ProfileIcon>
                    </div>
                    <div className="profile_property_text">
                        Profile
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePageSide
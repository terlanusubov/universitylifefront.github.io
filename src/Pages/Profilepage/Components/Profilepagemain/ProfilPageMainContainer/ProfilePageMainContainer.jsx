import React from 'react'

// Components
import Profile from './Profile/Profile'
import MyBookings from './MyBookings/MyBookings'
import Wishlist from './Wishlist/Wishlist'
import PersonalInfo from './PersonalInfo/PersonalInfo'

// Styles
import '../../../Styles/Profile.scss'
import { useSelector ,useDispatch} from 'react-redux'


const ProfilePageMainContainer = () => {
  const state = useSelector(state =>  state.ProfileReducer.currentPage)
  
    
    
  
  return (
    <div className='profile_page_main_container max-[1024px]:m-auto bg-transparent max-w-[950px] rounded-[14px] w-[100%]'>
      {
        state==='bookings' ? 
        <MyBookings/>
        : 
        state==='wishlist' ? 
        <Wishlist/> 
        :
        state==='profile' ?
        <PersonalInfo/>
        :
        ''
      }
    </div>
  )
}

export default ProfilePageMainContainer
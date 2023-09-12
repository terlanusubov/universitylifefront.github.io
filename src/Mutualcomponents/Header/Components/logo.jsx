import React from 'react'

// Assets
import LogoImage from '../Assets/mainLogo.png'

// Icons
import {FiMenu as MenuIcon} from 'react-icons/fi'


// Hooks
import { useSelector,useDispatch } from 'react-redux'
import { sideBarSlice } from '../../../Redux/toggleSlice'
import { useNavigate } from 'react-router-dom'
const Logo = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const sideBarHandler = () => {
    dispatch(sideBarSlice.actions.toggleSideBar())
  }


  const goHome  = e => {
    navigate('/')
  }
  return (
    <div className='logo flex justify-center items-center'>
      <div className="burger_menu hidden max-[1024px]:block">
        <MenuIcon onClick={() => sideBarHandler()} className='text-[25px] mr-[7px]'></MenuIcon>
      </div>
      <div className="logo_image_container" >
      <img src={LogoImage} onClick={goHome} className='max-[650px]:max-w-[150px] min-w-[100px] max-w-[200px] cursor-pointer' alt="" />
      </div>
    </div>
  )
}

export default Logo
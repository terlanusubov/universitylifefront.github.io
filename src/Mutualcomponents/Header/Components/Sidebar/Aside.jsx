import React from 'react'

// Components
import {AiOutlineClose as Closeicon} from 'react-icons/ai'
import { Link } from 'react-router-dom'
// Hooks
import { useNavigate } from 'react-router-dom'
// Assets

// Redux
import {sideBarSlice} from '../../../../Redux/toggleSlice' 


import Logo from '../../Assets/hostellogo.png'
import { useDispatch } from 'react-redux'
const Aside = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const closeSideBar = e => {
    dispatch(sideBarSlice.actions.closeSideBar())
  }

  const navigateAndClose = (e,address) => {
    navigate(address);
    dispatch(sideBarSlice.actions.closeSideBar());

  }

  return (
    <aside className='h-[100vh] bg-white w-[300px]  z-[100] pt-[40px] flex flex-col justify-start gap-[40px] fixed left-0 top-0 bottom-0'>

        <div className="aside_logo pl-[5px] flex items-center">
          <div className="quit_icon">
            <Closeicon className='text-[34px] cursor-pointer' onClick={closeSideBar}></Closeicon>
          </div>
          <img src={Logo} onClick={(e) => navigateAndClose(e,'/')} alt=""/>
        </div>
        <div className="aside_options">
          <div className="option cursor-pointer flex flex-col items-start justify-center hover:bg-customOrange hover:text-white text-[20px] h-[60px]">
            <span className="option_text p-[12px]" onClick={(e) => navigateAndClose(e,'/cost-of-living')}>
            Cost of Living
            </span>
          </div>
          <div className="option cursor-pointer flex flex-col items-start justify-center hover:bg-customOrange hover:text-white text-[20px] h-[60px]">
            <span className="option_text p-[12px]" onClick={(e) => navigateAndClose(e,'/services')}>
            Services
            </span>
          </div>
          <div className="option cursor-pointer flex flex-col items-start justify-center hover:bg-customOrange hover:text-white text-[20px] h-[60px]">
            <span className="option_text p-[12px]" onClick={(e) => navigateAndClose(e,'/contact-us')}>
            Contact Us
            </span>
          </div>

        </div>
        <button className='bg-customOrange text-white text-[20px] w-[100%] h-[40px]'>Download App</button>
    </aside>
  )
}

export default Aside
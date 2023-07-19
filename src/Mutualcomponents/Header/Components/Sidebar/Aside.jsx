import React from 'react'

// Components
import {AiOutlineClose as Closeicon} from 'react-icons/ai'

// Hooks

// Assets

// Redux
import {sideBarSlice} from '../../../../Redux/toggleSlice' 


import Logo from '../../Assets/hostellogo.png'
import { useDispatch } from 'react-redux'
const Aside = () => {
  const dispatch = useDispatch()
  const closeSideBar = e => {
    dispatch(sideBarSlice.actions.closeSideBar())
  }


  return (
    <aside className='h-[100vh] bg-white w-[300px]  z-[100] pt-[40px] flex flex-col justify-start gap-[40px] fixed left-0 top-0 bottom-0'>

        <div className="aside_logo pl-[5px] flex items-center">
          <div className="quit_icon">
            <Closeicon className='text-[34px] cursor-pointer' onClick={closeSideBar}></Closeicon>
          </div>
          <img src={Logo} alt="" />
        </div>
        <div className="aside_options">
          <div className="option cursor-pointer  flex flex-col items-start justify-center hover:bg-orange-300 hover:text-white text-[20px] h-[60px]">
            <span className="option_text">
            Cost of Living
            </span>
          </div>
          <div className="option cursor-pointer  flex flex-col items-start justify-center hover:bg-orange-300 hover:text-white text-[20px] h-[60px]">
            <span className="option_text">
            Services
            </span>
          </div>
          <div className="option cursor-pointer  flex flex-col items-start justify-center hover:bg-orange-300 hover:text-white text-[20px] h-[60px]">
            <span className="option_text">
            Scholarship
            </span>
          </div>

        </div>
        <button className='bg-customOrange text-white text-[20px] w-[100%] h-[40px]'>Download App</button>
    </aside>
  )
}

export default Aside
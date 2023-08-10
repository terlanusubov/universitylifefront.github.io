import React, { useEffect, useRef, useState } from 'react'

// Hooks
import { useSelector,useDispatch } from 'react-redux'

// Redux
import { bannerSlice } from '../../../../../Redux/toggleSlice'

// Icons
import {AiOutlineClockCircle as Clockicon} from 'react-icons/ai'
import {ImLocation as Locationicon} from 'react-icons/im'
import {RiGraduationCapFill as Graduationicon} from 'react-icons/ri'


// Components

import { Link } from 'react-router-dom'

const Bannertoggle = () => {
  const dispatch = useDispatch()
  const toggleElementRef = useRef()
  const [currentOption,setCurrentOption] = useState('london')
  const isLondon = currentOption === 'london' ? true : false
  return (
    <div className='main_page_banner_toggle bottom-[-310px] rounded-[10px] absolute w-[100%] h-[300px] bg-white shadow-md' >
      
    <div className="banner_toggle_nav flex items-center h-[40px] bg-[#F3F4F6] rounded-[10px] gap-[6px]">
        <div onClick={() =>  {setCurrentOption('london')}} className={`banner_toggle_nav_element border-solid border-b-[1px] ${isLondon ? 'border-customOrange' : '' }  duration-[0.3s] cursor-pointer w-[50%]  flex items-center justify-center h-[40px]`}>
          <span className="banner_toggle_nav_element_text">
          London
          </span>
        </div>
        <div onClick={() =>  {setCurrentOption('azerbaijan')}} className={`banner_toggle_nav_element border-solid border-b-[1px] ${isLondon ? '' : 'border-customOrange'}  duration-[0.3s] cursor-pointer w-[50%]  flex items-center justify-center h-[40px]`}>
          <span className="banner_toggle_nav_element_text">
          Azerbaijan
          </span>
        </div>
    </div>


  
    </div>
  )
}

export default Bannertoggle
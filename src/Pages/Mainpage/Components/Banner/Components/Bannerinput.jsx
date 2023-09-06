import React, { useEffect } from 'react'


// Icons
import {BsSearch as SearchIcon} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'

// Components
import BannerToggle from './Bannertoggle'

// Redux
import {bannerSlice, searchInputSlice} from '../../../../../Redux/toggleSlice'

const Bannerinput = () => {
    
    const dispatch = useDispatch()



    const focusHandler = (e) => {
        // dispatch(bannerSlice.actions.openBannerInput())
        dispatch(searchInputSlice.actions.openSearchInput())
    }
   



  return (
    <div className="input_element_container relative">
        <input onFocus={focusHandler}  type="text" placeholder='Search by City, University or Property' className='banner_input outline-none w-[100%]  p-[13px] rounded-[8px] pl-[37px]' />
        <SearchIcon className='absolute top-[50%] left-[10px] translate-y-[-50%]'></SearchIcon>
    </div>

  )
}

export default Bannerinput
import React, { useEffect, useRef } from 'react'
// Assets
import BannerURl from '../../Assets/bannerbg.gif'
// Components
import Bannertext from './Components/Bannertext'
import Bannerinput from './Components/Bannerinput'
import Bannertoggle from './Components/Bannertoggle'
// Redux
import {bannerSlice} from '../../../../Redux/toggleSlice'

// Hooks
import { useSelector,useDispatch } from 'react-redux'

const Banner = () => {
  const bannerToggleState = useSelector((state) => state.bannerReducer.openedBannerInput)
  const dispatch = useDispatch() 
  
  const bannerToggleContainerRef = useRef()
  useEffect(() => {
    document.addEventListener('click', e => {
      try {
        if (!bannerToggleContainerRef.current.contains(e.target)) {
          dispatch(bannerSlice.actions.closeBannerInput())
        }
      }
      catch(err) {
        
      }
    } )
  })
  return (
    <div style={{backgroundImage:`url(${BannerURl})`,backgroundPosition:'top'}}  className={` main_page_banner flex flex-col items-start justify-center gap-[30px] h-[70vh] px-[50px]  bg-cover bg-center max-[1024px]:px-[30px] max-[930px]:bg-right pt-[60px] max-[450px]:pt-[30px]`}>

<div className="banner_content max-w-[1440px] w-[100%] mx-auto max-[1500px]:px-[10px]">
          <Bannertext></Bannertext>
          <div ref={bannerToggleContainerRef} className="banner_search relative max-w-[600px]  w-[100%]">
          <Bannerinput></Bannerinput>
          {
            bannerToggleState ? <Bannertoggle></Bannertoggle> : ''
          }
          </div>
</div>

    </div>
  )
}

export default Banner
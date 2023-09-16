import React from 'react'

// Hooks
import { useSelector,useDispatch } from 'react-redux'
import { sideBarSlice } from '../../../../Redux/toggleSlice'


const Sidebarmodal = () => {
    const dispatch = useDispatch()

  return (
    <div onClick={() => dispatch(sideBarSlice.actions.closeSideBar()) } className='sidebar_modal fixed bg-[#40404076] z-20 top-0 left-0 right-0 bottom-0'></div>
  )
}

export default Sidebarmodal
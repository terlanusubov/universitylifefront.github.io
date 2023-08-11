import React from 'react'
// Hooks
import { useSelector,useDispatch } from 'react-redux'
import { searchInputSlice } from '../../../../Redux/toggleSlice'
const SearchinputModal = () => {
const dispatch = useDispatch()

  return (
    <div onClick={() => dispatch(searchInputSlice.actions.closeSearchInput())} className='search_bar_modal z-[50]  fixed bg-[#1d1d1d98] top-[100px] left-0 right-0 bottom-0'>
    </div>
  )
}

export default SearchinputModal
import React from 'react'

// Icons

import {BsSearch as SearchIcon} from 'react-icons/bs'


// Hooks
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { searchInputSlice } from '../../../../Redux/toggleSlice'


const Searchinput = () => {
  const state = useSelector((state) => state.searchInputReducer.openedSearchInput)
  const dispatch = useDispatch()
  const focusHandler = () => {
    dispatch(searchInputSlice.actions.openSearchInput())
  }
  return (
    <div className={`search_input_container   ${state ? 'hidden' : 'block  '} relative`}>
        <input  autoComplete='nofill' type="text" onFocus={(e) => focusHandler()} className={`border-[1.4px] border-solid  border-gray-300 rounded-[6px] pl-[33px] outline-none py-[10px] w-[100%] placeholder:text-[14px] max-w-[400px]`} placeholder='Search by City, University or Country' />
        <SearchIcon className='absolute top-[16px] left-[9px]'></SearchIcon>
    </div>
  )
}

export default Searchinput
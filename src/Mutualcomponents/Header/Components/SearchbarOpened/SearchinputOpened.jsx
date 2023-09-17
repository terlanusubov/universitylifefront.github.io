import React, { useState } from 'react'
// Components
import {BsSearch as SearchIcon} from 'react-icons/bs'
import Inputtoggle from './inputtoggle'
import SearchInputModal from './SearchinputModal'
// Styles
import '../../Styles/Header.scss'
// Hooks
import { useDispatch, useSelector } from 'react-redux'


import { searchInputSlice } from '../../../../Redux/toggleSlice'
import { useNavigate } from 'react-router-dom'
const SearchinputOpened = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.searchInputReducer.openedSearchInput);
 
  const blurHanlder = (e) => {
    dispatch(searchInputSlice.actions.closeSearchInput())
    console.log(e);
  }

  const [searchResult,setSearchResult] = useState([]);

  const [searchValue,setSearchValue] = useState('');

  const [searchLoading,setSearchLoading] = useState(false);

  const searchHandler = async e => {
    if (e.target.value === '') {
      setSearchResult([]);
      setSearchValue('')
      return false;
    }
    setSearchLoading(true)
    setSearchValue(e.target.value);
    const promise = await fetch(import.meta.env.VITE_API_KEY + '/search', {
      headers: {
        'Content-type':'application/json'
      },
      method:'POST',
      body: JSON.stringify({word:e.target.value})
    })
    const {response} = await promise.json();
    setSearchResult(response)
    setSearchLoading(false);
    
  }
 

  return (
    <div className=' opened_search_input_container relative  w-[60%]'>
        <input onChange={searchHandler} value={searchValue} autoFocus type="text" className='border-[1.4px] border-solid   border-gray-300 rounded-[6px] pl-[35px] outline-none py-[10px] w-[100%] placeholder:text-[14px] duration-[.4s] ' placeholder='Search by City, University or City' />
        <SearchIcon className='absolute top-[16px] left-[9px]'></SearchIcon>
        <Inputtoggle searchValue={searchValue} isLoading={searchLoading} result={searchResult}></Inputtoggle>
       
    </div>
  )
}

export default SearchinputOpened
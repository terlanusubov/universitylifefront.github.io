import React, { useEffect } from 'react'
import SearchInput from './Searchinput'
import SearchInputModal from '../SearchbarOpened/SearchinputModal'
// Hooks
import { useSelector,useDispatch } from 'react-redux'
// Redux

const Searchbar = () => {

  const state = useSelector((State) => State.searchInputReducer.openedSearchInput)
  return (
    <div className='navbar_search max-[1024px]:hidden w-[35%]'>
        <SearchInput></SearchInput>
      
      
    </div>
  )
}

export default Searchbar
import React from 'react'
// Assets
import Logo from './Components/logo'

// Components
import Navigations from './Components/navigations'
import Searchbar from './Components/Searchbar/Searchbar'
import Profile from './Components/profile'
import Sidebar from './Components/Sidebar/Sidebar'
import SearchInputModal from './Components/SearchbarOpened/SearchinputModal'
// Hooks
import { useSelector,useDispatch } from 'react-redux'
import SearchinputOpened from './Components/SearchbarOpened/SearchinputOpened'

const Header = () => {
const inputState = useSelector(state => state.searchInputReducer.openedSearchInput)
const sideBarState = useSelector(state => state.sideBarReducer.openedSidebar)
  return (
    <header className='flex fixed top-0 right-0 left-0 justify-between px-[3%] h-[100px] items-center z-[200] bg-white '>

        <Logo></Logo>
        {
          inputState 
          ? 
          <SearchinputOpened></SearchinputOpened>
          :
          <Searchbar></Searchbar>
          
        }
        <Navigations></Navigations>
        <Profile></Profile>

        {
          sideBarState ? <Sidebar></Sidebar> : ''
        }
         {
          inputState ? 

            <SearchInputModal></SearchInputModal>

            : 

            ''       
           }
    </header>
  )
}

export default Header
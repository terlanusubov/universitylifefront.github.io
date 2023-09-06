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
    <header className='flex  fixed top-0 right-0 left-0 justify-between   h-[100px] items-center z-[200] bg-white '>
      <div className={`max-[1500px]:px-[10px] header_content w-[100%]  max-w-[1440px] mx-auto flex fixed top-0 right-0 left-0 ${inputState ? 'justify-center' : 'justify-between'}  h-[100px] items-center z-[200] bg-white`}>
        {
          inputState 
          ||
          <Logo/>
        }
        {
          inputState 
          ? 
          <SearchinputOpened/>
          :
          <Searchbar/>
        }
        <Navigations/>
          {
            sideBarState 
            &&
            <Sidebar/>
          }
         {
          inputState 
          &&
          <SearchInputModal/>    
        }
        </div>
    </header>
  )
}

export default Header
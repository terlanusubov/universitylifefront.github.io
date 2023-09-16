import React from 'react'
import { Link } from 'react-router-dom'


// Components
import SignupButton from './signupButton'

// Redux
import { useSelector,useDispatch } from 'react-redux'
import Profile from './profile'

const Navigations = () => {
        const state = useSelector(state => state.searchInputReducer.openedSearchInput)
        const isAuth = useSelector(state => state.authenticationReducer.isAuth)
        

  return (
    <ul className={`${state ?  'hidden' : 'flex'} max-[1025px]:ml-auto h-[100%] flex gap-[27px] max-[1024px]:gap-[20px]  items-center `}>
            <li className='h-[100%] flex items-center  max-[1080px]:text-[14.4px] max-[1024px]:hidden'>
                <Link to={'/'}>Home</Link>
            </li>
            <li className='h-[100%] flex items-center  max-[1080px]:text-[14.4px] max-[1024px]:hidden'>
                <Link to={'/accomodations/page/1'}>Bedrooms</Link>
            </li>
            <li className='h-[100%] flex items-center  max-[1080px]:text-[14.4px] max-[1024px]:hidden'>
                <Link to={'/services'}>Services</Link>
            </li>
            <li className='h-[100%] flex items-center  max-[1080px]:text-[14.4px] max-[1024px]:hidden'>
                <Link to={'/contact-us'}>Contact Us</Link>
            </li>
            <li className='h-[100%]  flex items-center  max-[1080px]:text-[14.4px] '>
                {
                        isAuth 
                        ?
                <Profile></Profile>
                        :
                <SignupButton></SignupButton>
                }
            </li>
    </ul>
  )
}

export default Navigations
import React from 'react'
import { Link } from 'react-router-dom'


// Components
import SignupButton from './signupButton'


// Redux
import { useSelector,useDispatch } from 'react-redux'

const Navigations = () => {
        const state = useSelector(state => state.searchInputReducer.openedSearchInput)


  return (
    <ul className={`${state ?  'hidden' : 'flex'}  flex gap-[27px] max-[1024px]:gap-[20px] max-[1024px]:hidden items-center`}>
            <li>
                    <Link to={'/services'}>Services</Link>
            </li>
            <li>
                    <Link to={'/scholarship'}>Scholarship</Link>
            </li>
            <li>
                <Link to={'/costliving'}>Cost of Living</Link>
            </li>
            <li>
                <SignupButton></SignupButton>
            </li>
    </ul>
  )
}

export default Navigations
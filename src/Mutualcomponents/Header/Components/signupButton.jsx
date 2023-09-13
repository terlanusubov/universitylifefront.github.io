import React from 'react'
import { useDispatch } from 'react-redux'
import { ModalSlice } from '../../../Redux/ModalSlice';
const SignupButton = () => {

  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(ModalSlice.actions.setModal(true))
  }
  return (
    <button onClick={openModal} className='sign_up_btn  bg-customOrange text-white w-[125px] h-[40px] rounded-[8px] hover:bg-[#dfb34d] flex justify-center items-center'>
        <span className="button_text text-white">
        Login / Signup
        </span>
    </button>
  )
}

export default SignupButton
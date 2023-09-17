import React from 'react'


// Hooks
import { useDispatch } from 'react-redux'
import { ModalSlice } from '../../../Redux/ModalSlice';
const Overlay = ({children}) => {
  const dispatch = useDispatch();
  const closeModal = (e) => {
    try {
      if (e.target.classList.contains('modal_overlay')) {
        dispatch(ModalSlice.actions.setModal(false))
      } 
    }
    catch(err) {
    }
  }
  return (
    <div onClick={closeModal} className='modal_overlay fixed z-[300] flex items-center justify-center bg-opacity-50 top-0 left-0 right-0 bottom-0 w-[100%] bg-gray-500 px-[20px]   h-[100vh] '>
            {children}
    </div>
  )
}

export default Overlay
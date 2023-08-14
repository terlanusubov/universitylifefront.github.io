import React from 'react'
import {useState,useRef,useEffect} from 'react'
const InputComponent = ({inputTitle,inputId}) => {
    const [focused,setFocused] = useState(false)
    const inputRef = useRef()
    const focusHandler = () => {
        setFocused(true)
    }
    const blurHandler = () => {
        if (!inputRef.current.value) {
            setFocused(false)
        }
    }

    const [inputValue,setInputValue] = useState('')

 

  return (
    <div className='profile_detail_input relative max-w-[360px] w-[100%]'>
        <input  id={inputId} ref={inputRef} onBlur={blurHandler} onFocus={focusHandler}  type="text" className='border outline-none w-[100%] rounded-[4px]  p-[9px]' />
        <label  htmlFor={inputId} className={`select-none input_text absolute  rounded-[2px] bg-white translate-y-[-50%] ease-out text-gray-500 duration-[.35s] px-[4px]  left-[10px] ${focused ? 'top-0 text-[13.4px]' : 'top-[50%]'}`}>{inputTitle} <span className='absolute  bottom-[3px] text-red-400'>*</span> </label>
    </div>
  )
}

export default InputComponent
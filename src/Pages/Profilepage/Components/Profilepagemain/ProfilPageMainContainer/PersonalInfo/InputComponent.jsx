import React from 'react'
import {useState,useRef,useEffect} from 'react'
const InputComponent = ({inputTitle,inputId,inputValue,setInputValue}) => {
    const [focused,setFocused] = useState(false)
    const focusHandler = () => {
        setFocused(true)
    }
    const blurHandler = () => {
        if (!inputValue) {
            setFocused(false)
        }
    }
  return (
   
    <div className="input_element_container relative w-[100%] ">
       <input disabled={inputTitle === 'Email' ? true : false} value={inputTitle === 'Email' ? inputValue : inputValue} onChange={(e) => setInputValue(e.target.value)}  id={inputId}  onBlur={blurHandler} onFocus={focusHandler}  type={inputTitle === 'Password' ? 'password' : inputTitle === 'Email' ? 'email' : 'text'} className='border outline-none w-[100%] rounded-[4px]  p-[9px]' />
       <label  htmlFor={inputId} className={`select-none input_text absolute  rounded-[2px] bg-white translate-y-[-50%] ease-in-out text-gray-500 duration-[.25s] px-[4px]  left-[15px]  ${inputTitle === 'Email' ? 'top-0 text-[11px] p-[5px]' : `${focused  ? 'top-0 text-[11px] p-[5px]' : `${inputValue ? 'top-0 text-[11px] p-[5px]' : 'top-[50%] text-[14px]'}`}`}} `}>{inputTitle} <span className='absolute right-0 bottom-[3.5px] text-red-400'>*</span> </label>
    </div>

  )
}

export default InputComponent



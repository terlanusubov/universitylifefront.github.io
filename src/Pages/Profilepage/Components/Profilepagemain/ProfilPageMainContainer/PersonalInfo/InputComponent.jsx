import React from 'react'
import {useState,useRef,useEffect} from 'react'
const InputComponent = ({inputTitle,inputId}) => {
    const [focused,setFocused] = useState(false)
    const [inputValue,setInputValue] = useState('')
    const inputRef = useRef();
    const focusHandler = () => {
        setFocused(true)
    }
    const blurHandler = () => {
        if (!inputValue) {
            setFocused(false)
        }
    }


 

  return (
    // <div className='profile_detail_input relative max-w-[360px] w-[100%]'>
    //     <input  id={inputId} ref={inputRef} onBlur={blurHandler} onFocus={focusHandler}  type="text" className='border outline-none w-[100%] rounded-[4px]  p-[9px]' />
    //     <label  htmlFor={inputId} className={`select-none input_text absolute  rounded-[2px] bg-white translate-y-[-50%] ease-out text-gray-500 duration-[.35s] px-[4px]  left-[10px] ${focused ? 'top-0 text-[13.4px]' : 'top-[50%]'}`}>{inputTitle} <span className='absolute right-0 bottom-[3.5px] text-red-400'>*</span> </label>
    // </div>
    <div className="form-floating max-w-[300px] w-[100%] ">
    <input
    disabled={inputTitle === 'Email' ? true : false}
      ref={inputRef}     
      onBlur={blurHandler} 
      onFocus={focusHandler} 
      onChange={(e) => setInputValue(e.target.value)}
      value={inputTitle === 'Email' ? 'test@gmail.com' : inputValue}
      className="form-control content-font appearance-none border rounded w-full py-2 px-3 h-11 placeholder:text-gray-400 text-gray-700 leading-tight focus:outline-none max-w-[300px] "
      id={inputId}
      placeholder=""
      type="text"
      autoComplete="off"

    />
    <label
      className={`block text-gray-700 content-font mb-2 truncate ${inputTitle === 'Email' ? 'flag' : ''} ${focused ? 'flag' : 'top-[10px] left-[8px]'}`}
      htmlFor={inputId}
    >
      {inputTitle}<sup className="text-customOrange">*</sup>
    </label>
  </div>
  )
}

export default InputComponent
import React from 'react'
import {useState,useRef,useEffect} from 'react'
const InputComponent = ({inputTitle}) => { 
    const [inputValue,setInputValue] = useState('')
    const dateInput = useRef();

  return (
    <div className='profile_detail_input relative max-w-[360px] w-[100%] '>
        <input ref={dateInput} onChange={(e) => setInputValue(e.target.value)}  id='dateInput'    type="date" className='date_input cursor-pointer text-[14px] border outline-none w-[100%] rounded-[4px]  p-[9px]' />
        <label className={`select-none input_text absolute   rounded-[2px] bg-white translate-y-[-50%] ease-out text-gray-500 duration-[.35s] px-[4px] text-[13.5px] left-[10px] top-0`}>{inputTitle}<span className='absolute right-0 bottom-[3.5px] text-red-400'>*</span> </label>
    </div>
  )
}

export default InputComponent
import React from 'react'
import {useState,useRef,useEffect} from 'react'
// Icons
import {GiGraduateCap as CapIcon} from 'react-icons/gi'
const UniversityInput = ({inputTitle,inputId}) => {
    const [focused,setFocused] = useState(false)
    const inputRef = useRef()
    const popUpRef = useRef();
    document.addEventListener('click', e => {
        try {
            if (!popUpRef.current.contains(e.target)) {
                    setFocused(false)
            }

        } catch(err) {

        }

    })
    const focusHandler = () => {
        setFocused(true)
    }
   

    const [inputValue,setInputValue] = useState('')

    const universitySelectHandler = (uni) => {
        setInputValue(uni)
    }

  return (
    <div ref={popUpRef} className='profile_detail_input_universities relative max-w-[360px] w-[100%]'>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} id={inputId} ref={inputRef}  onFocus={focusHandler}  type="text" className='border outline-none w-[100%] rounded-[4px]  p-[9px]' />
        <label  htmlFor={inputId} className={`select-none input_text absolute  rounded-[2px] bg-white translate-y-[-50%] ease-out text-gray-500 duration-[.35s] px-[4px]  left-[10px] ${focused ? 'top-0 text-[13.4px]' : 'top-[50%]'}`}>{inputTitle} <span className='absolute  bottom-[3px] text-red-400'>*</span> </label>
        {
            focused ? 
            <div  className='universities_input_popup max-w-[360px] w-[100%] rounded-[7px] p-[4px] bg-white shadow-lg absolute h-[140px] z-[10] overflow-y-scroll'>
                <ul className='universities_list rounded-[4px]'>
                    <li data-uni="Harvard" onClick={(e) => universitySelectHandler(e.target.dataset.uni)} className=" university_el flex items-center gap-[10px] border border-x-0 py-[5px] cursor-pointer">
                                <CapIcon className='text-customOrange text-[24px]'></CapIcon>
                                Harvard
                    </li>

                    <li data-uni="China" onClick={(e) => universitySelectHandler(e.target.dataset.uni)} className=" university_el flex items-center gap-[10px] border border-x-0 py-[5px] cursor-pointer">
                            <CapIcon className='text-customOrange text-[24px]'></CapIcon>
                            China
                    </li>

                    <li data-uni="Harvard" onClick={(e) => universitySelectHandler(e.target.dataset.uni)} className=" university_el flex items-center gap-[10px] border border-x-0 py-[5px] cursor-pointer">
                                <CapIcon className='text-customOrange text-[24px]'></CapIcon>
                                Harvard
                    </li>

                    <li data-uni="Harvard" onClick={(e) => universitySelectHandler(e.target.dataset.uni)} className=" university_el flex items-center gap-[10px] border border-x-0 py-[5px] cursor-pointer">
                                <CapIcon className='text-customOrange text-[24px]'></CapIcon>
                                Harvard
                    </li>

                    <li data-uni="Harvard" onClick={(e) => universitySelectHandler(e.target.dataset.uni)} className=" university_el flex items-center gap-[10px] border border-x-0 py-[5px] cursor-pointer">
                            <CapIcon className='text-customOrange text-[24px]'></CapIcon>
                            Harvard
                    </li>

                    <li data-uni="Harvard" onClick={(e) => universitySelectHandler(e.target.dataset.uni)} className=" university_el flex items-center gap-[10px] border border-x-0 py-[5px] cursor-pointer">
                                <CapIcon className='text-customOrange text-[24px]'></CapIcon>
                                Harvard
                    </li>
                </ul>
            </div> 
            : 
            ''
        }
    </div>
  )
}

export default UniversityInput
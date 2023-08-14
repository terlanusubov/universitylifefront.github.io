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

 

  return (
    <div ref={popUpRef} className='profile_detail_input_universities relative max-w-[360px] w-[100%]'>
        <input  id={inputId} ref={inputRef}  onFocus={focusHandler}  type="text" className='border outline-none w-[100%] rounded-[4px]  p-[9px]' />
        <label  htmlFor={inputId} className={`select-none input_text absolute  rounded-[2px] bg-white translate-y-[-50%] ease-out text-gray-500 duration-[.35s] px-[4px]  left-[10px] ${focused ? 'top-0 text-[13.4px]' : 'top-[50%]'}`}>{inputTitle} <span className='absolute  bottom-[3px] text-red-400'>*</span> </label>
        {
            focused ? 
            <div  className='universities_input_popup max-w-[360px] w-[100%]  bg-white shadow-lg absolute h-[140px] z-[10] overflow-y-scroll'>
                <ul className='universities_list'>
                        <li className="university_el flex items-center gap-[10px] border border-x-0 py-[5px] cursor-pointer">
                            <span className="cap_icon text-[24px] text-customOrange">
                            <CapIcon></CapIcon>
                            </span>
                            <div className="university_name">
                            Harvard
                            </div>
                        </li>
                        <li className="university_el flex items-center gap-[10px] border border-x-0 py-[5px] cursor-pointer">
                            <span className="cap_icon text-[24px] text-customOrange">
                            <CapIcon></CapIcon>
                            </span>
                            <div className="university_name">
                            Harvard
                            </div>
                        </li>
                        <li className="university_el flex items-center gap-[10px] border border-x-0 py-[5px] cursor-pointer">
                            <span className="cap_icon text-[24px] text-customOrange">
                            <CapIcon></CapIcon>
                            </span>
                            <div className="university_name">
                            Harvard
                            </div>
                        </li>  <li className="university_el flex items-center gap-[10px] border border-x-0 py-[5px] cursor-pointer">
                            <span className="cap_icon text-[24px] text-customOrange">
                            <CapIcon></CapIcon>
                            </span>
                            <div className="university_name">
                            Harvard
                            </div>
                        </li>
                        <li className="university_el flex items-center gap-[10px] border border-x-0 py-[5px] cursor-pointer">
                            <span className="cap_icon text-[24px] text-customOrange">
                            <CapIcon></CapIcon>
                            </span>
                            <div className="university_name">
                            Harvard
                            </div>
                        </li>
                        <li className="university_el flex items-center gap-[10px] border border-x-0 py-[5px] cursor-pointer">
                            <span className="cap_icon text-[24px] text-customOrange">
                            <CapIcon></CapIcon>
                            </span>
                            <div className="university_name">
                            Harvard
                            </div>
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
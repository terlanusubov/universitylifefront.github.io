import React, { useEffect, useState } from 'react'
import 'rc-slider/assets/index.css';
import '../Styles/searchuniversity.css'
import { Link } from 'react-router-dom'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { detailPageSlice } from '../../../Redux/detailPageSlice';
import { AccomodationSlice } from '../../../Redux/AccomodationSlice';
import {RiGraduationCapFill as Graduationicon} from 'react-icons/ri'



const SearchUniversity = () => {
    
    const searchInputRef = useRef();
    const [SearchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();
    const [universities,setUniversities] = useState([])

    const [focused,setFocused] = useState(false)
    const [isShown,setIsShown] = useState(false)
    const focusHandler = () => {
        setFocused(true)
        setIsShown(true)
    }

    const selectUniversityHandler = (data) => {
        setSearchValue(data.name);
        dispatch(AccomodationSlice.actions.setCurrentFilterOption({universityId:data.universityId,cityId:''}));
        setIsShown(false)
    }

    const searchUniversityHandler = async (e) => {
        setSearchValue(e.target.value)
        const promise = await fetch(import.meta.env.VITE_API_KEY + '/university')
        const response = await promise.json();

    }

    const fetchUniversities = async () => {
        const promise = await fetch(import.meta.env.VITE_API_KEY + '/university')
        const response = await promise.json();
        setUniversities(response.response);
    }

    useEffect(() => {
        fetchUniversities()
    },[])

    const blurHandler = () => {
        if (!SearchValue) {
            setFocused(false)
        }
    }


    document.addEventListener("click",(e)=>{
        try{
            if(!searchInputRef.current.contains(e.target)){
                setIsShown(false)
            }
        }
        catch(e){}
    });



    return (
        <div>
            <div className="flex justify-between my-3 sticky top-0 z-[70] transition-all  bg-white pt-4 pb-2">
                <div className='flex flex-col md:justify-between lg:justify-start md:flex-row w-full md:w-auto text-sm flex-grow'>
                    <div className='w-full md:w-[48%] lg:w-[40%] lg:mr-3 mb-3 md:mb-0'>
                        <div className='w-full'>
                            <div className='relative'>
                                <div style={{ outline: "none", position: "relative" }} tabIndex="-1">
                                    <div  ref={searchInputRef} className="text-left relative mb-0 after:absolute after:right-[15px] after:top-[16px] after:border-[#595959] after:border-r after:border-b after:inline-block after:p-[4px] after:rotate-45" >
                                        <div className="input_element_container relative" >
                                            <input id='searchInputId' onFocus={focusHandler} onBlur={blurHandler} onChange={searchUniversityHandler} value={SearchValue} className="selectinput flex select-input truncate items-center text-sm w-full h-11 placeholder:text-gray-400 text-gray-700 px-3 rounded border border-gray-200 gitbox-border pl-11 outline-none transition duration-200" placeholder="Select University" type="text" autoComplete="off" aria-autocomplete="both" aria-expanded="false" aria-haspopup="listbox" role="combobox" />
                                            <label htmlFor='searchInputId' className={` text-gray-500 text-sm mb-2 truncate absolute  duration-500 translate-y-[-50%]   ${focused || SearchValue ? 'top-0 left-[45px] bg-white px-[] text-[11px]' : 'top-[50%] left-[45px]'}`}>Select University</label>
                                        </div>
                                        {isShown && <div style={{ position: "absolute",zIndex:"10" , inset: "0 auto auto 0", transform: "translate(0,44px)", overflow: "auto", width: "100%", backgroundColor: "white", maxHeight: "153.59px" }} className=' searchscroll shadow-2xl shadow-stone-800 rounded-b'>
                                            <p className='bg-neutral-100 px-5 py-2 text-xs'>TOP UNIVERSITIES</p>
                                            {
                                                universities.length
                                                ?
                                                universities.map((data) => {
                                                    return (
                                                            <div className='flex items-center cursor-pointer' onClick={() => selectUniversityHandler(data)} key={data.universityId}>
                                                                <div className='p-3'>
                                                                 <Graduationicon  className='text-[23px] text-customOrange'/>
                                                                </div>
                                                                <div>
                                                                    <p>{data.name}</p>
                                                                    <p className='text-[0.6rem] font-light'>{data.city.name}, {data.countryName}</p>
                                                                </div>
                                                            </div>
                                                    )
                                                })
                                                :
                                                'Loading...'
                                            }
                                         
                                             
                                            {/* <p className='bg-neutral-100 px-5 py-2 text-xs'>OTHER UNIVERSITIES</p> */}
                           
                                        </div>}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        {/* <div className='lg:ml-2 mb-2 md:mb-0 flex space-x-2 pt-2 md:pt-0 md:mx-2 lg:mx-0'>
                            <div className='flex items-center flex-grow'>
                                <input aftercontent='<SlArrowDown/>'  type="radio" className='w-0 h-0 peer hidden after:content-[attr(aftercontent)]' />
                                <label className='relative h-12 md:h-11 rounded border border-gray-200 bg-white text-gray-900 active:border-customOrange active:bg-customOrange active:text-white px-3 flex items-center justify-between box-border w-full text-xs lg:text-sm transition-colors cursor-pointer peer-checked:text-white peer-checked:bg-customOrange peer-checked:border-customOrange peer-disabled:text-gray-900 peer-disabled:border-gray-200 peer-disabled:cursor-default  hover:border-customOrange whitespace-normal hover:text-customOrange' htmlFor="">
                                    Student Housing
                                    <div className='relative group flex justify-center items-center'>
                                        <svg className="w-3.5 h-3.5 ml-1 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>
                                        <span className="w-64 lg:w-auto -left-[80px] md:left-auto top-full mt-[0.4rem] hidden opacity-0 group-hover:inline-block group-hover:opacity-100 transition border border-black/5 shadow-2xl bg-white text-black px-3 py-1 rounded absolute leading-6 z-10">
                                            <div className="whitespace-normal lg:whitespace-nowrap">
                                                <p className="font-semibold mt-2">What is Student Housing?</p>
                                                <ol className="pl-5 my-2 text-xs space-y-2 list-decimal">
                                                    <li>Specially designed for student needs</li>
                                                    <li>Utility bills included</li>
                                                    <li>Fully furnished</li>
                                                    <li>Dedicated maintenance &amp; 24x7 Security</li>
                                                    <li>Modern amenities - Gym, Games, Cinema, etc.</li>
                                                </ol>
                                            </div>
                                        </span>
                                        <div className="w-4 h-4 hidden opacity-0 group-hover:inline-block group-hover:opacity-100 border-gray-200 rotate-45 absolute shadow-2xl bg-white text-black top-[7px] md:top-[7px] mt-[0.4rem] left-auto right-auto border-t border-l z-10"></div>
                                    </div>
                                </label>
                            </div>
                            <div className='flex items-center flex-grow'>
                                <input className="w-0 h-0 peer hidden" type="radio" />
                                <label className="relative h-12 md:h-11 rounded border border-gray-200 bg-white text-gray-900 active:border-customOrange active:bg-customOrange active:text-white px-3 flex items-center justify-between box-border w-full text-xs lg:text-sm transition-colors cursor-pointer peer-checked:text-white peer-checked:bg-customOrange peer-checked:border-customOrange peer-disabled:text-gray-900 peer-disabled:border-gray-200 peer-disabled:cursor-default hover:text-customOrange hover:border-customOrange whitespace-normal">
                                    Private Apartment
                                    <div className="group relative flex justify-center items-center">
                                        <svg className="w-3.5 h-3.5 ml-1 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>
                                        <span className="w-64 lg:w-auto -left-[80px] md:left-auto top-full mt-[0.4rem] hidden opacity-0 group-hover:inline-block group-hover:opacity-100 transition border border-black/5 shadow-2xl bg-white text-black px-3 py-1 rounded absolute leading-6 z-10">
                                            <div className="whitespace-normal lg:whitespace-nowrap">
                                                <p className="font-semibold mt-2">What is Private Apartment?</p>
                                                <ol className="pl-5 my-2 text-xs space-y-2 list-decimal">
                                                    <li>Residential apartment</li>
                                                    <li>Flexible occupancy</li>
                                                    <li>Variety of floor plans</li>
                                                    <li>Complete privacy &amp; personal space</li>
                                                </ol>
                                            </div>
                                        </span>
                                        <div className="w-4 h-4 hidden opacity-0 group-hover:inline-block group-hover:opacity-100 border-gray-200 rotate-45 absolute shadow-2xl bg-white text-black top-[7px] md:top-[7px] mt-[0.4rem] left-auto right-auto border-t border-l z-10"></div>
                                    </div>
                                </label>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default SearchUniversity
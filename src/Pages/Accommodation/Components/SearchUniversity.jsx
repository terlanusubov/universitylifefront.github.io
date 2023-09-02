import React, { useState } from 'react'
import { BiFilterAlt } from 'react-icons/bi'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../Styles/searchuniversity.css'
import { Link } from 'react-router-dom'
import { Value } from 'sass';




const SearchUniversity = () => {
    const [filter, setFilter] = useState(false);
    const [show, setShow] = useState(true);
    const [value, setValue] = useState()
    const toggleFilter = () => {
        setFilter(!filter)
    }
    const showtoogle = () => {
        setShow(!show)
    }
    const handleChange = e =>{setValue(e)}
    return (
        <div>
            <div className="flex justify-between my-3 sticky top-0 z-[70] transition-all  bg-white pt-4 pb-2">
                <div className='flex flex-col md:justify-between lg:justify-start md:flex-row w-full md:w-auto text-sm flex-grow'>
                    <div className='w-full md:w-[48%] lg:w-[40%] lg:mr-3 mb-3 md:mb-0'>
                        <div className='w-full'>
                            <div className='relative'>
                                <div style={{ outline: "none", position: "relative" }} tabIndex="-1">
                                    <div className="text-left relative mb-0 after:absolute after:right-[15px] after:top-[16px] after:border-[#595959] after:border-r after:border-b after:inline-block after:p-[4px] after:rotate-45">
                                        <input className="flex select-input truncate items-center text-sm w-full h-11 placeholder:text-gray-400 text-gray-700 px-3 rounded border border-gray-200 gitbox-border pl-11 outline-none transition duration-200" placeholder="Select University" type="text" autoComplete="off" aria-autocomplete="both" aria-expanded="false" aria-haspopup="listbox" role="combobox" />
                                        <label className="block select-label text-gray-500 text-sm mb-2 truncate absolute top-[0.8rem] left-11 transition duration-500">Select University</label>
                                        <div style={{ position: "absolute", inset: "0px auto auto 0px", transform: "translate(0,44px)", overflow: "auto", width: "459.516px", backgroundColor: "white", maxHeight: "153.59px" }} className='searchscroll hidden'>
                                            <p className='bg-neutral-100 px-5 py-2 text-xs'>TOP UNIVERSITIES</p>
                                            <Link>
                                                <div className='flex items-center'>
                                                    <div className='p-3'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M12.0003 14.3982L4.84082 12.1946V14.3625V15.8749C4.84082 17.5763 8.04728 18.9558 12.0024 18.9558C15.9573 18.9558 19.1643 17.5763 19.1643 15.8749C19.1643 15.8615 19.16 15.848 19.1597 15.8349V12.1946L12.0003 14.3982Z" fill="#F56A54" />
                                                            <path d="M0 9.66109L2.5577 10.576L2.77566 10.1092L3.71529 10.0293L3.84926 10.1687L3.04297 10.3599L2.92546 10.7077C2.92524 10.7077 1.10418 14.5149 1.37164 16.3773C1.37164 16.3773 2.50835 17.0554 3.64457 16.3773L3.94653 11.2852V10.8613L5.63786 10.4797L5.5184 10.7739L4.25736 11.184L4.8406 11.3923L12 13.5959L19.1594 11.3923L24 9.66112L12 5.04443L0 9.66109Z" fill="#F56A54" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p>King's College London (KCL)</p>
                                                        <p className='text-[0.6rem] font-light'>London, United Kingdom</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link>
                                                <div className='flex items-center'>
                                                    <div className='p-3'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M12.0003 14.3982L4.84082 12.1946V14.3625V15.8749C4.84082 17.5763 8.04728 18.9558 12.0024 18.9558C15.9573 18.9558 19.1643 17.5763 19.1643 15.8749C19.1643 15.8615 19.16 15.848 19.1597 15.8349V12.1946L12.0003 14.3982Z" fill="#F56A54" />
                                                            <path d="M0 9.66109L2.5577 10.576L2.77566 10.1092L3.71529 10.0293L3.84926 10.1687L3.04297 10.3599L2.92546 10.7077C2.92524 10.7077 1.10418 14.5149 1.37164 16.3773C1.37164 16.3773 2.50835 17.0554 3.64457 16.3773L3.94653 11.2852V10.8613L5.63786 10.4797L5.5184 10.7739L4.25736 11.184L4.8406 11.3923L12 13.5959L19.1594 11.3923L24 9.66112L12 5.04443L0 9.66109Z" fill="#F56A54" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p>King's College London (KCL)</p>
                                                        <p className='text-[0.6rem] font-light'>London, United Kingdom</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link>
                                                <div className='flex items-center'>
                                                    <div className='p-3'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M12.0003 14.3982L4.84082 12.1946V14.3625V15.8749C4.84082 17.5763 8.04728 18.9558 12.0024 18.9558C15.9573 18.9558 19.1643 17.5763 19.1643 15.8749C19.1643 15.8615 19.16 15.848 19.1597 15.8349V12.1946L12.0003 14.3982Z" fill="#F56A54" />
                                                            <path d="M0 9.66109L2.5577 10.576L2.77566 10.1092L3.71529 10.0293L3.84926 10.1687L3.04297 10.3599L2.92546 10.7077C2.92524 10.7077 1.10418 14.5149 1.37164 16.3773C1.37164 16.3773 2.50835 17.0554 3.64457 16.3773L3.94653 11.2852V10.8613L5.63786 10.4797L5.5184 10.7739L4.25736 11.184L4.8406 11.3923L12 13.5959L19.1594 11.3923L24 9.66112L12 5.04443L0 9.66109Z" fill="#F56A54" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p>King's College London (KCL)</p>
                                                        <p className='text-[0.6rem] font-light'>London, United Kingdom</p>
                                                    </div>
                                                </div>
                                            </Link>

                                            <p className='bg-neutral-100 px-5 py-2 text-xs'>OTHER UNIVERSITIES</p>
                                            <Link>
                                                <div className='flex items-center'>
                                                    <div className='p-3'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M12.0003 14.3982L4.84082 12.1946V14.3625V15.8749C4.84082 17.5763 8.04728 18.9558 12.0024 18.9558C15.9573 18.9558 19.1643 17.5763 19.1643 15.8749C19.1643 15.8615 19.16 15.848 19.1597 15.8349V12.1946L12.0003 14.3982Z" fill="#F56A54" />
                                                            <path d="M0 9.66109L2.5577 10.576L2.77566 10.1092L3.71529 10.0293L3.84926 10.1687L3.04297 10.3599L2.92546 10.7077C2.92524 10.7077 1.10418 14.5149 1.37164 16.3773C1.37164 16.3773 2.50835 17.0554 3.64457 16.3773L3.94653 11.2852V10.8613L5.63786 10.4797L5.5184 10.7739L4.25736 11.184L4.8406 11.3923L12 13.5959L19.1594 11.3923L24 9.66112L12 5.04443L0 9.66109Z" fill="#F56A54" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p>King's College London (KCL)</p>
                                                        <p className='text-[0.6rem] font-light'>London, United Kingdom</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link>
                                                <div className='flex items-center'>
                                                    <div className='p-3'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M12.0003 14.3982L4.84082 12.1946V14.3625V15.8749C4.84082 17.5763 8.04728 18.9558 12.0024 18.9558C15.9573 18.9558 19.1643 17.5763 19.1643 15.8749C19.1643 15.8615 19.16 15.848 19.1597 15.8349V12.1946L12.0003 14.3982Z" fill="#F56A54" />
                                                            <path d="M0 9.66109L2.5577 10.576L2.77566 10.1092L3.71529 10.0293L3.84926 10.1687L3.04297 10.3599L2.92546 10.7077C2.92524 10.7077 1.10418 14.5149 1.37164 16.3773C1.37164 16.3773 2.50835 17.0554 3.64457 16.3773L3.94653 11.2852V10.8613L5.63786 10.4797L5.5184 10.7739L4.25736 11.184L4.8406 11.3923L12 13.5959L19.1594 11.3923L24 9.66112L12 5.04443L0 9.66109Z" fill="#F56A54" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p>King's College London (KCL)</p>
                                                        <p className='text-[0.6rem] font-light'>London, United Kingdom</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link>
                                                <div className='flex items-center'>
                                                    <div className='p-3'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M12.0003 14.3982L4.84082 12.1946V14.3625V15.8749C4.84082 17.5763 8.04728 18.9558 12.0024 18.9558C15.9573 18.9558 19.1643 17.5763 19.1643 15.8749C19.1643 15.8615 19.16 15.848 19.1597 15.8349V12.1946L12.0003 14.3982Z" fill="#F56A54" />
                                                            <path d="M0 9.66109L2.5577 10.576L2.77566 10.1092L3.71529 10.0293L3.84926 10.1687L3.04297 10.3599L2.92546 10.7077C2.92524 10.7077 1.10418 14.5149 1.37164 16.3773C1.37164 16.3773 2.50835 17.0554 3.64457 16.3773L3.94653 11.2852V10.8613L5.63786 10.4797L5.5184 10.7739L4.25736 11.184L4.8406 11.3923L12 13.5959L19.1594 11.3923L24 9.66112L12 5.04443L0 9.66109Z" fill="#F56A54" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p>King's College London (KCL)</p>
                                                        <p className='text-[0.6rem] font-light'>London, United Kingdom</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link>
                                                <div className='flex items-center'>
                                                    <div className='p-3'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M12.0003 14.3982L4.84082 12.1946V14.3625V15.8749C4.84082 17.5763 8.04728 18.9558 12.0024 18.9558C15.9573 18.9558 19.1643 17.5763 19.1643 15.8749C19.1643 15.8615 19.16 15.848 19.1597 15.8349V12.1946L12.0003 14.3982Z" fill="#F56A54" />
                                                            <path d="M0 9.66109L2.5577 10.576L2.77566 10.1092L3.71529 10.0293L3.84926 10.1687L3.04297 10.3599L2.92546 10.7077C2.92524 10.7077 1.10418 14.5149 1.37164 16.3773C1.37164 16.3773 2.50835 17.0554 3.64457 16.3773L3.94653 11.2852V10.8613L5.63786 10.4797L5.5184 10.7739L4.25736 11.184L4.8406 11.3923L12 13.5959L19.1594 11.3923L24 9.66112L12 5.04443L0 9.66109Z" fill="#F56A54" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p>King's College London (KCL)</p>
                                                        <p className='text-[0.6rem] font-light'>London, United Kingdom</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='lg:ml-2 mb-2 md:mb-0 flex space-x-2 pt-2 md:pt-0 md:mx-2 lg:mx-0'>
                            <div className='flex items-center flex-grow'>
                                <input aftercontent='<SlArrowDown/>' type="radio" className='w-0 h-0 peer hidden after:content-[attr(aftercontent)]' />
                                <label className='relative h-12 md:h-11 rounded border border-customOrange bg-customOrange px-3 flex items-center justify-between box-border w-full text-xs lg:text-sm text-white transition-colors cursor-pointer peer-checked:text-white peer-checked:bg-customOrange peer-checked:border-customOrange peer-disabled:text-gray-900 peer-disabled:border-gray-200 peer-disabled:cursor-default hover:text-white hover:border-customOrange whitespace-normal' htmlFor="">
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
                                <label className="relative h-12 md:h-11 rounded border border-gray-200 bg-white px-3 flex items-center justify-between box-border w-full text-xs lg:text-sm text-gray-900 transition-colors cursor-pointer peer-checked:text-white peer-checked:bg-customOrange peer-checked:border-customOrange peer-disabled:text-gray-900 peer-disabled:border-gray-200 peer-disabled:cursor-default hover:text-customOrange hover:border-customOrange whitespace-normal">
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
                        </div>
                    </div>
                </div>
                <button onClick={toggleFilter} className='hidden lg:block'>
                    <div className="flex items-center border border-gray-200 py-2 px-3 text-gray-600 cursor-pointer content-font rounded h-11">
                        Filter By
                        <span className="text-customOrange"><BiFilterAlt /></span>
                    </div>
                </button>
                {filter &&
                    <div className='flex opacity-100 pointer-events-auto justify-center items-center overflow-hidden fixed inset-0 z-[25] focus:outline-none transition-all duration-500'>
                        <div className='w-full md:w-9/12 mx-4 !my-0 md:my-1 lg:rounded-xl transform opacity-100 translate-y-0 max-w-6xl transition-all duration-500'>
                            <div className='border-0 p-3 md:p-6 rounded-xl shadow-xl flex flex-col w-full bg-white focus:outline-none h-auto md:max-h-[97vh]'>
                                <div className='flex items-center justify-between'>
                                    <button onClick={toggleFilter} className='z-[2] p-1.5 absolute rounded-full border leading-none outline-none focus:outline-none transition-colors -top-2 -right-2 md:-top-3 md:-right-3 bg-white border-gray-300 hover:gray-100'>
                                        <svg className="w-5 h-5 font-semibold stroke-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </button>
                                </div>
                                <div className='relative flex-auto'>
                                    <div className='flex flex-col h-[75vh] md:h-auto'>
                                        <div className='filterpage flex-grow overflow-x-hidden h-[calc(100vh_-_44px_-_105px)] md:h-[calc(100vh_-_44px_-_270px)] lg:h-[calc(100vh_-_44px_-_90px)] overflow-y-auto pb-2'>
                                            <div className='w-[97%] md:w-full'>
                                                <div className='grid grid-cols-1 md:grid-cols-4'>
                                                    <div className='font-semibold text-sm text-gray-700 mb-2 md:mb-0'>Duration</div>
                                                    <div className='col-span-2'>
                                                        <div className='flex items-center text-sm'>
                                                            <div className='flex-grow'>
                                                                <div>
                                                                    <div className='block relative w-full'>
                                                                        <div className='w-full flex h-[44px] rounded border border-gray-200'>
                                                                            <div className='flex-grow rounded-s !w-full m-0 p-o bg-white relative inline-block align-middle'>
                                                                                <input autoComplete='off' readOnly placeholder='Move In' className='pt-[7px] pb-[5px] !pl-2 h-full text-sm text-[#384151] font-normal focus:outline-none' type="tex" />
                                                                                <p className='border-0 h-[1px] -m-[1px] p-0 absolute w-[1px] overflow-hidden'>
                                                                                    Navigate forward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                                                                                </p>
                                                                            </div>
                                                                            <button className='absolute top-1/2 -translate-y-2/4 right-0 h-[46px] w-[46px] p-0 mx-[3px] outline-none flex justify-center items-center cursor-pointer border-0 align-middle'>
                                                                                <svg className="h-[15px] w-[14px] align-middle fill-[#82888a]" focusable="false" viewBox="0 0 1393.1 1500"><path d="m107 1393h241v-241h-241zm295 0h268v-241h-268zm-295-295h241v-268h-241zm295 0h268v-268h-268zm-295-321h241v-241h-241zm616 616h268v-241h-268zm-321-616h268v-241h-268zm643 616h241v-241h-241zm-322-295h268v-268h-268zm-294-723v-241c0-7-3-14-8-19-6-5-12-8-19-8h-54c-7 0-13 3-19 8-5 5-8 12-8 19v241c0 7 3 14 8 19 6 5 12 8 19 8h54c7 0 13-3 19-8 5-5 8-12 8-19zm616 723h241v-268h-241zm-322-321h268v-241h-268zm322 0h241v-241h-241zm27-402v-241c0-7-3-14-8-19-6-5-12-8-19-8h-54c-7 0-13 3-19 8-5 5-8 12-8 19v241c0 7 3 14 8 19 6 5 12 8 19 8h54c7 0 13-3 19-8 5-5 8-12 8-19zm321-54v1072c0 29-11 54-32 75s-46 32-75 32h-1179c-29 0-54-11-75-32s-32-46-32-75v-1072c0-29 11-54 32-75s46-32 75-32h107v-80c0-37 13-68 40-95s57-39 94-39h54c37 0 68 13 95 39 26 26 39 58 39 95v80h321v-80c0-37 13-69 40-95 26-26 57-39 94-39h54c37 0 68 13 94 39s40 58 40 95v80h107c29 0 54 11 75 32s32 46 32 75z"></path></svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <p className='text-xs text-red-400'></p>
                                                                </div>
                                                            </div>
                                                            <div className='mx-3 text-gray-400/60'>to</div>
                                                            <div className='flex-grow'>
                                                                <div>
                                                                    <div className='block relative w-full'>
                                                                        <div className='w-full flex h-[44px] rounded border border-gray-200'>
                                                                            <div className='flex-grow rounded-s !w-full m-0 p-o bg-white relative inline-block align-middle'>
                                                                                <input autoComplete='off' readOnly placeholder='Move Out' className='pt-[7px] pb-[5px] !pl-2 h-full text-sm text-[#384151] font-normal focus:outline-none' type="text" />
                                                                                <p className='border-0 h-[1px] -m-[1px] p-0 absolute w-[1px] overflow-hidden'>
                                                                                    Navigate forward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                                                                                </p>
                                                                            </div>
                                                                            <button className='absolute top-1/2 -translate-y-2/4 right-0 h-[46px] w-[46px] p-0 mx-[3px] outline-none flex justify-center items-center cursor-pointer border-0 align-middle'>
                                                                                <svg className="h-[15px] w-[14px] align-middle fill-[#82888a]" focusable="false" viewBox="0 0 1393.1 1500"><path d="m107 1393h241v-241h-241zm295 0h268v-241h-268zm-295-295h241v-268h-241zm295 0h268v-268h-268zm-295-321h241v-241h-241zm616 616h268v-241h-268zm-321-616h268v-241h-268zm643 616h241v-241h-241zm-322-295h268v-268h-268zm-294-723v-241c0-7-3-14-8-19-6-5-12-8-19-8h-54c-7 0-13 3-19 8-5 5-8 12-8 19v241c0 7 3 14 8 19 6 5 12 8 19 8h54c7 0 13-3 19-8 5-5 8-12 8-19zm616 723h241v-268h-241zm-322-321h268v-241h-268zm322 0h241v-241h-241zm27-402v-241c0-7-3-14-8-19-6-5-12-8-19-8h-54c-7 0-13 3-19 8-5 5-8 12-8 19v241c0 7 3 14 8 19 6 5 12 8 19 8h54c7 0 13-3 19-8 5-5 8-12 8-19zm321-54v1072c0 29-11 54-32 75s-46 32-75 32h-1179c-29 0-54-11-75-32s-32-46-32-75v-1072c0-29 11-54 32-75s46-32 75-32h107v-80c0-37 13-68 40-95s57-39 94-39h54c37 0 68 13 95 39 26 26 39 58 39 95v80h321v-80c0-37 13-69 40-95 26-26 57-39 94-39h54c37 0 68 13 94 39s40 58 40 95v80h107c29 0 54 11 75 32s32 46 32 75z"></path></svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <p className='text-xs text-red-400'></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='grid grid-cols-1 md:grid-cols-4 pt-5'>
                                                    <div className='font-semibold text-sm text-gray-700 mb-2 md:mb-0'>
                                                        Price Range
                                                        <div className='text-xs text-gray-400/70'>(in GBP)</div>
                                                    </div>
                                                    <div className='col-span-2'>
                                                        <div className='flex items-center text-sm'>
                                                            <div className='flex-grow'>
                                                                <div className='mb-4 relative text-left'>
                                                                    <input className='text-sm priceinput appearance-none border rounded w-full py-2 px-3 h-11 placeholder:text-gray-400 text-gray-700 leading-tight focus:outline-none  transition duration-200' placeholder='Start Price' inputMode='decimal' min="0" autoComplete='off' type="text" />
                                                                    <label className='block pricelabel text-gray-500 text-sm mb-2 truncate absolute h-auto top-[10px] left-[8px] px-2 pointer-events-none bg-white text-[13px] border-transparent m-0 w-[90%]  transition duration-500' htmlFor="">Start Price</label>
                                                                </div>
                                                            </div>
                                                            <div className='mx-3 text-gray-400/60 mb-4'>to</div>
                                                            <div className='flex-grow'>
                                                                <div className='mb-4 relative text-left'>
                                                                    <input className='text-sm priceinput appearance-none border rounded w-full py-2 px-3 h-11 placeholder:text-gray-400 text-gray-700 leading-tight focus:outline-none transition duration-200' placeholder='Start Price' inputMode='decimal' min="0" autoComplete='off' type="text" />
                                                                    <label className='block pricelabel text-gray-500 text-sm mb-2 truncate absolute h-auto top-[10px] left-[8px] px-2 pointer-events-none bg-white text-[13px] border-transparent m-0 w-[90%]  transition duration-500' htmlFor="">End Price</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='grid grid-cols-1 md:grid-cols-4'>
                                                    <p className='font-semibold text-sm text-gray-700 mb-2 md:mb-0'>
                                                        Distance
                                                        <span className='text-xs text-gray-400/70'>(in miles)</span>
                                                    </p>
                                                    <div className='col-span-2'>
                                                        <div>
                                                            <Slider onChange={handleChange} value={value}  min={0} max={50} defaultValue={50} tipFormatter={value => <span className="tooltip">{value}</span>}  count={Number}  />
                                                            <div></div>
                                                            <div className='flex justify-between w-full'>
                                                                <span>0</span>
                                                                {value}
                                                                <span>50</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className='my-5 border-gray-100' />
                                                <div className='grid grid-cols-1 md:grid-cols-4 mb-6'>
                                                    <div className='font-semibold text-gray-700 mb-2 md:mb-0 text-sm'>Stay Duration</div>
                                                    <div className='col-span-3 grid grid-cols-2 md:grid-cols-3 space-y-1'>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='weeks51' type="checkbox" />
                                                            <label htmlFor="weeks51" className='ml-2 text-sm text-gray-800 cursor-pointer'>51 weeks</label>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='weeks44' type="checkbox" />
                                                            <label htmlFor="weeks44" className='ml-2 text-sm text-gray-800 cursor-pointer'>44 weeks</label>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='semester' type="checkbox" />
                                                            <label htmlFor="semester" className='ml-2 text-sm text-gray-800 cursor-pointer'>Semester</label>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='term' type="checkbox" />
                                                            <label htmlFor="term" className='ml-2 text-sm text-gray-800 cursor-pointer'>Short Term</label>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='flexible' type="checkbox" />
                                                            <label htmlFor="flexible" className='ml-2 text-sm text-gray-800 cursor-pointer'>Flexible</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className='my-5 border-gray-100' />
                                                <div className='grid grid-cols-1 md:grid-cols-4 mb-6'>
                                                    <div className='font-semibold text-gray-700 mb-2 md:mb-0 text-sm'>Intakes</div>
                                                    <div className='col-span-3 grid grid-cols-2 md:grid-cols-3 space-y-1'>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='january' type="checkbox" />
                                                            <label htmlFor="january" className='ml-2 text-sm text-gray-800 cursor-pointer'>January</label>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='february' type="checkbox" />
                                                            <label htmlFor="february" className='ml-2 text-sm text-gray-800 cursor-pointer'>February</label>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='march' type="checkbox" />
                                                            <label htmlFor="march" className='ml-2 text-sm text-gray-800 cursor-pointer'>March</label>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='april' type="checkbox" />
                                                            <label htmlFor="april" className='ml-2 text-sm text-gray-800 cursor-pointer'>April</label>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='may' type="checkbox" />
                                                            <label htmlFor="may" className='ml-2 text-sm text-gray-800 cursor-pointer'>May</label>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='june' type="checkbox" />
                                                            <label htmlFor="june" className='ml-2 text-sm text-gray-800 cursor-pointer'>June</label>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='july' type="checkbox" />
                                                            <label htmlFor="july" className='ml-2 text-sm text-gray-800 cursor-pointer'>July</label>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='august' type="checkbox" />
                                                            <label htmlFor="august" className='ml-2 text-sm text-gray-800 cursor-pointer'>August</label>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='september' type="checkbox" />
                                                            <label htmlFor="september" className='ml-2 text-sm text-gray-800 cursor-pointer'>September</label>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='october' type="checkbox" />
                                                            <label htmlFor="october" className='ml-2 text-sm text-gray-800 cursor-pointer'>October</label>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='november' type="checkbox" />
                                                            <label htmlFor="november" className='ml-2 text-sm text-gray-800 cursor-pointer'>November</label>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='december' type="checkbox" />
                                                            <label htmlFor="december" className='ml-2 text-sm text-gray-800 cursor-pointer'>December</label>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='flexiblemonth' type="checkbox" />
                                                            <label htmlFor="flexiblemonth" className='ml-2 text-sm text-gray-800 cursor-pointer'>Flexible</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className='my-5 border-gray-100' />
                                                <div className='grid grid-cols-1 md:grid-cols-4'>
                                                    <div className='font-semibold text-gray-700 mb-2 md:mb-0 text-sm'>Room Categories</div>
                                                    <div className='col-span-3 grid grid-cols-2 md:grid-cols-3 space-y-1'>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='studio' type="checkbox" />
                                                            <label htmlFor="studio" className='ml-2 text-sm text-gray-800 cursor-pointer'>Studio</label>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='ensuite' type="checkbox" />
                                                            <label htmlFor="ensuite" className='ml-2 text-sm text-gray-800 cursor-pointer'>Ensuite</label>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='shared' type="checkbox" />
                                                            <label htmlFor="shared" className='ml-2 text-sm text-gray-800 cursor-pointer'>Shared</label>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='apartment' type="checkbox" />
                                                            <label htmlFor="apartment" className='ml-2 text-sm text-gray-800 cursor-pointer'>Apartment</label>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <input className=' w-5 h-4 cursor-pointer mr-1 bg-gray-100 rounded border-gray-300 accent-[#fc6149]' id='nonensuite' type="checkbox" />
                                                            <label htmlFor="nonensuite" className='ml-2 text-sm text-gray-800 cursor-pointer'>Non Ensuite</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className='my-5 border-gray-100' />
                                                <div className='grid grid-cols-1 md:grid-cols-4'>
                                                    <div className='font-semibold text-gray-700 mb-2 md:mb-0 text-sm'>Bathroom</div>
                                                    <div className='col-span-3 grid grid-cols-2 md:grid-cols-3 space-y-1'>
                                                        <label className='inline-flex items-center'>
                                                            <input className='w-5 h-4 cursor-pointer mr-1 bg-gray-100 accent-[#fc6149]' type="radio" id='private' name='bathroom' />
                                                            <span className='ml-2 text-gray-800 text-sm cursor-pointer' htmlFor="private">Private</span>
                                                        </label>
                                                        <label className='inline-flex items-center'>
                                                            <input className='w-5 h-4 cursor-pointer mr-1 bg-gray-100 accent-[#fc6149]' type="radio" id='shared' name='bathroom' />
                                                            <span className='ml-2 text-gray-800 text-sm cursor-pointer' htmlFor="shared">Shared</span>
                                                        </label>
                                                        <label className='inline-flex items-center'>
                                                            <input className='w-5 h-4 cursor-pointer mr-1 bg-gray-100 accent-[#fc6149]' type="radio" id='privateorshared' name='bathroom' />
                                                            <span className='ml-2 text-gray-800 text-sm cursor-pointer' htmlFor="privateorshared">Private or Shared</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <hr className='my-5 border-gray-100' />
                                                <div className='grid grid-cols-1 md:grid-cols-4'>
                                                    <div className='font-semibold text-gray-700 mb-2 md:mb-0 text-sm'>Amenities</div>
                                                    <div className='col-span-3'>
                                                        <div className='grid grid-cols-2 md:grid-cols-3 space-y-1'>
                                                            <div className='flex items-center'>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='gym' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="gym">Gym</label>
                                                            </div>
                                                            <div className='flex items-center'>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='wifi' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="wifi">WiFi</label>
                                                            </div>
                                                            <div className='flex items-center'>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='carparking' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="carparking">Car-Parking</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='swimmingpool' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="swimmingpool">Swimming Pool</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='studyroom' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="studyroom">Study Room</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='bicyclestorage' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="bicyclestorage">Bicycle Storage</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='airconditioner' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="airconditioner">Air Conditioner</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='bbq' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="bbq">BBQ</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='cctv' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="cctv">CCTV</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='cafe' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="cafe">Cafe</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='centralheating' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="centralheating">Central heating / Air Con</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='cinema' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="cinema">Cinema</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='concierge' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="concierge">Concierge</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='dishwasher' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="dishwasher">Dishwasher</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='electricity' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="electricity">Electricity Included</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='elevator' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="elevator">Elevator</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='foosball' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="foosball">Foosball</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='furnished' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="furnished">Furnished</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='gamesroom' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="gamesroom">Games Room</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='garden' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="garden">Garden/Courtyard</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='gasincluded' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="gasincluded">Gas Included</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='heating' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="heating">Heating</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='laundryroom' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="laundryroom">Laundry Room</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='loungearea' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="loungearea">Lounge Area</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='microwave' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="microwave">Microwave</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='pooltable' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="pooltable">Pool Table</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='shuttleservice' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="shuttleservice">Shuttle Service</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='tv' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="tv">TV</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='tabletennis' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="tabletennis">Table Tennis</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='vendingmachine' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="vendingmachine">Vending Machine</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='waterincluded' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="waterincluded">Water Included</label>
                                                            </div>
                                                            <div className={show?'hidden items-center':'items-center flex'}>
                                                                <input name='amenities' className='w-5 h-4 cursor-pointer mr-1 accent-[#fc6149] bg-gray-100 rounded border-gray-300' id='wheelchairaccess' type="checkbox" />
                                                                <label className='ml-2 text-sm text-gray-800 cursor-pointer' htmlFor="wheelchairaccess">Wheelchair Access</label>
                                                            </div>
                                                        </div>
                                                        <div className='block' onClick={showtoogle}>
                                                            <p className='text-customOrange text-sm cursor-pointer pt-2'>{show?"Show All Amenities":"Close"}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className='my-5 border-gray-100' />
                                                <div className='grid grid-cols-1 md:grid-cols-4'>
                                                    <div className='font-semibold text-gray-700 mb-2 md:mb-0 text-sm'>Local Guarantor</div>
                                                    <div className='col-span-3 grid grid-cols-2 md:grid-cols-3 space-y-1'>
                                                        <label className='inline-flex items-center'>
                                                            <input className='w-5 h-4 cursor-pointer mr-1 bg-gray-100 accent-[#fc6149]' type="radio" id='required' name='guarantor' />
                                                            <span className='ml-2 text-gray-800 text-sm cursor-pointer' htmlFor="required">Required</span>
                                                        </label>
                                                        <label className='inline-flex items-center'>
                                                            <input className='w-5 h-4 cursor-pointer mr-1 bg-gray-100 accent-[#fc6149]' type="radio" id='notrequired' name='guarantor' />
                                                            <span className='ml-2 text-gray-800 text-sm cursor-pointer' htmlFor="notrequired">Not Required</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <hr className='my-5 border-gray-100' />
                                                <div className='grid grid-cols-1 md:grid-cols-4'>
                                                    <div className='font-semibold text-gray-700 mb-2 md:mb-0 text-sm'>Filling Fast</div>
                                                    <div className='col-span-3 grid grid-cols-2 md:grid-cols-3 space-y-1'>
                                                        <label className='inline-flex items-center'>
                                                            <input className='w-5 h-4 cursor-pointer mr-1 bg-gray-100 accent-[#fc6149]' type="radio" id='yes' name='fast' />
                                                            <span className='ml-2 text-gray-800 text-sm cursor-pointer' htmlFor="yes">Yes</span>
                                                        </label>
                                                        <label className='inline-flex items-center'>
                                                            <input className='w-5 h-4 cursor-pointer mr-1 bg-gray-100 accent-[#fc6149]' type="radio" id='no' name='fast' />
                                                            <span className='ml-2 text-gray-800 text-sm cursor-pointer' htmlFor="no">No</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <hr className='my-5 border-gray-100' />
                                                <div className='grid grid-cols-1 md:grid-cols-4'>
                                                    <div className='font-semibold text-gray-700 mb-2 md:mb-0 text-sm'>Sort By</div>
                                                    <div className='col-span-3 grid grid-cols-2 md:grid-cols-3 space-y-1'>
                                                        <label className='inline-flex items-center'>
                                                            <input className='w-5 h-4 cursor-pointer mr-1 bg-gray-100 accent-[#fc6149]' type="radio" id='distance' name='sort' />
                                                            <span className='ml-2 text-gray-800 text-sm cursor-pointer' htmlFor="distance">Distance</span>
                                                        </label>
                                                        <label className='inline-flex items-center'>
                                                            <input className='w-5 h-4 cursor-pointer mr-1 bg-gray-100 accent-[#fc6149]' type="radio" id='mostpopular' name='sort' />
                                                            <span className='ml-2 text-gray-800 text-sm cursor-pointer' htmlFor="mostpopular">Most Popular</span>
                                                        </label>
                                                        <label className='inline-flex items-center'>
                                                            <input className='w-5 h-4 cursor-pointer mr-1 bg-gray-100 accent-[#fc6149]' type="radio" id='lowtohigh' name='sort' />
                                                            <span className='ml-2 text-gray-800 text-sm cursor-pointer' htmlFor="lowtohigh">Price Low to High</span>
                                                        </label>
                                                        <label className='inline-flex items-center'>
                                                            <input className='w-5 h-4 cursor-pointer mr-1 bg-gray-100 accent-[#fc6149]' type="radio" id='hightolow' name='sort' />
                                                            <span className='ml-2 text-gray-800 text-sm cursor-pointer' htmlFor="hightolow">Price High to Low</span>
                                                        </label>
                                                        <label className='inline-flex items-center'>
                                                            <input className='w-5 h-4 cursor-pointer mr-1 bg-gray-100 accent-[#fc6149]' type="radio" id='bestoffer' name='sort' />
                                                            <span className='ml-2 text-gray-800 text-sm cursor-pointer' htmlFor="bestoffer">Best Offer</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-end w-full text-right bg-white py-2 border-t border-gray-100'>
                                            <button className='mr-3 my-1 py-2 rounded-md text-base w-full lg:w-48 bg-white border  border-customOrange text-customOrange hover:bg-[#F56A54] hover:text-white focus:bg-white focus:text-customOrange transition-colors disabled:opacity-70 disabled:cursor-not-allowed'>
                                                <div className='flex items-center justify-center gap-2 truncate'>Clear All</div>
                                            </button>
                                            <button className='my-1 py-2 rounded-md text-base w-full lg:w-48 bg-[#F56A54] text-white hover:bg-customOrange border border-customOrange transition-colors disabled:opacity-70 disabled:cursor-not-allowed'>
                                                <div className='flex items-center justify-center gap-2 truncate'>Show Results</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-end gap-4'>
                                    <button className='text-green'></button>
                                </div>
                            </div>
                        </div>
                        <div className='fixed bg-transparent z-[26543] w-screen h-screen top-0 left-0 translate-x-0 translate-y-0 pointer-events-none'></div>
                    </div>
                }
            </div>
            <div className='flex mb-2 text-xs items-center'>
                <svg className="mr-1.5 w-3.5 h-3.5" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>
                Distance from City Center London
            </div>
            <div>
                <ul className='flex items-center overflow-x-auto mb-5 mt-2 ov'>
                    <li className='shrink-0'>
                        <p className='flex items-center bg-[#FEF0EE] border border-customOrange text-xs mr-2 px-3 py-2 rounded capitalize'>
                            <span>fillingFast : &nbsp;</span>
                            <span>yes</span>
                            <span className='ml-2 text-[0.6rem] -mt-0.5 cursor-pointer hover:text-customOrange'>x</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SearchUniversity
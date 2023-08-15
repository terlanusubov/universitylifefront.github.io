import React, { useState } from 'react'
import { BiFilterAlt } from 'react-icons/bi'
import '../Styles/searchuniversity.css'
import { SlArrowDown } from 'react-icons/sl'
import { Link } from 'react-router-dom'




const SearchUniversity = () => {
    const [filter, setFilter] = useState(false);
    const toggleFilter = () => {
        setFilter(!filter)
    }
    return (
        <div>
            <div className="flex justify-between my-3 sticky top-0 z-[70] transition-all  bg-white pt-4 pb-2">
                <div className='flex flex-col md:justify-between lg:justify-start md:flex-row w-full md:w-auto text-sm flex-grow'>
                    <div className='w-full md:w-[48%] lg:w-[40%] lg:mr-3 mb-3 md:mb-0'>
                        <div className='w-full'>
                            <div className='relative'>
                                <div style={{ outline: "none", position: "relative" }} tabIndex="-1">
                                    <div className="text-left relative mb-0">
                                        <input className="flex select-input truncate items-center text-sm w-full h-11 placeholder:text-gray-400 text-gray-700 px-3 rounded border border-gray-200 gitbox-border pl-11 outline-none transition duration-200 after:content-['*'] after:text-gray-700" placeholder="Select University" type="text" autoComplete="off" aria-autocomplete="both" aria-expanded="false" aria-haspopup="listbox" role="combobox" />
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
                    {filter &&
                        <div className='inset-0 fixed flex justify-center items-center z-50 w-full h-full'>
                            <div className='my-3 h-auto w-4/5 bg-white shadow-2xl  '>
                                <div className='absolute cursor-pointer px-4 py-1.5 bg-white right-32 top-12 rounded-full border border-gray-200' onClick={toggleFilter}>x</div>
                                <div className='border-0 p-3 md:p-6 rounded-xl shadow-xl dlex flex-col w-full bg-white focus:outline-none h-auto md:max-h-[97vh]'>
                                    <div className='relative flex-auto'>
                                        <div className='flex flex-col h-[75vh] md:h-auto'>
                                            <div className='flex-grow overflow-x-hidden overflow-y-auto pb-2 h-[calc(100vh_-_44px_-_105px)] md:h-[calc(100vh_-_44px_-_270px)] lg:h-[calc(100vh_-_44px_-_90px)]'></div>
                                            <div className='flex justify-end w-full text-right bg-white py-2 border-t border-gray-100'>
                                                <div className='w-[97%] md:w-full'></div>
                                            </div>
                                        </div>
                                        <div className='flex justify-end w-full text-right bg-white py-2 border-t border-gray-100'>
                                            <button className='mr-3 my-1 py-2 rounded-md text-base w-full lg:w-48 bg-white border border-customOrange text-customOrange hover:text-white'></button>
                                            <button></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="flex items-center border border-gray-200 py-2 px-3 text-gray-600 cursor-pointer content-font rounded h-11">
                        Filter By
                        <span className="text-customOrange"><BiFilterAlt /></span>
                    </div>
                </button>
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
import React from 'react'



// Components/Icons
import {AiOutlineClockCircle as Clockicon} from 'react-icons/ai'
import {ImLocation as Locationicon} from 'react-icons/im'
import {RiGraduationCapFill as Graduationicon} from 'react-icons/ri'
const inputtoggle = ({data}) => {
  
  return (
   <div className="search_bar_toggle rounded-[10px] min-h-fit  absolute  z-[500] w-[100%] bg-white">
      {
      data
      ?
     data.map((data) => {
      return (
        <div>{data.name}</div>
      )
     })
      :
      ''
    }

    <>
                  <div className="toggle_navbar flex gap-[5px] rounded-[10px] bg-[#F3F4F6] h-[45px]">
                            <div className={`country_option text-center flex justify-center items-center w-[100%]  border-b-[2px] border-solid border-customOrange h-[100%]`}>
                              <span className="country_name">
                              London
                            </span>
                          </div>
                          <div className={`country_option text-center flex justify-center items-center  w-[100%] border-b-[2px] border-solid border-customOrange h-[100%]`}>
                            <span className="country_name">
                            Azerbaijan
                            </span>
                          </div>
                      </div>
                      <div className="rounded-b-[10px] search_bar_toggle_main py-[10px] px-[20px] flex flex-col gap-[10px] h-[100%]">
                          <div className="recent_searches flex justify-center flex-col gap-[5px]">
                            <div className="recent_searches_nav flex items-center gap-[15px]">
                            <div className="recent_icon">
                              <Clockicon  className='text-[28px] text-customOrange'></Clockicon>
                            </div>
                            <span className="recent_searches_text text-customOrange font-[600]">
                              Recent Searches
                            </span>
                            </div>

                            <div className="recent_searches_main flex items-center flex-wrap gap-[15px]">



                              <div className="searched_country flex justify-center items-center h-[40px] w-[100px] ">
                                <span className="searched_country_text">
                                  London
                                </span>
                              </div>
                              <div className="searched_country flex justify-center items-center h-[40px] w-[100px] ">
                                <span className="searched_country_text">
                                  London
                                </span>
                              </div>



                            </div>
                          </div>
                      
                          <div className="popular_cities flex flex-col gap-[12px]">
                            <div className="popular_cities_nav flex items-center gap-[15px]">

                            <div className="location_icon">
                              <Locationicon  className='text-[28px] text-customOrange'></Locationicon>
                            </div>
                            <span className="popular_cities_text text-customOrange font-[600]">
                              Popular Cities
                            </span>
                            </div>
                            <div className="popular_cities_main px-[10px] flex flex-wrap ">
                                <div className="city w-[50%] bg-white hover:bg-customLightOrange hover:text-white cursor-pointer rounded-[10px] p-[5px] ">
                                    London
                                </div>
                                <div className="city w-[50%] bg-white hover:bg-customLightOrange hover:text-white cursor-pointer rounded-[10px] p-[5px] ">
                                  Londra
                                </div>
                                <div className="city w-[50%] bg-white hover:bg-customLightOrange hover:text-white cursor-pointer rounded-[10px] p-[5px] ">
                                  Manchester
                                </div>
                                <div className="city w-[50%] bg-white hover:bg-customLightOrange hover:text-white cursor-pointer rounded-[10px] p-[5px] ">
                                  Liverpool
                                </div>
                            </div>
                          </div>



                          <div className="popular_universities flex flex-col gap-[12px]">
                              <div className="popular_universities_nav flex items-center gap-[15px]">
                                  <div className="popular_universities_icon">
                                  <Graduationicon  className='text-[28px] text-customOrange'></Graduationicon>
                                  </div>
                                  <span className="popular_universities_text text-customOrange font-[600]">
                                    Popular Universities
                                  </span>
                              </div>
                              <div className="popular_universities_main flex flex-wrap px-[10px]">
                                <div className="university w-[50%] bg-white hover:bg-customLightOrange hover:text-white cursor-pointer rounded-[10px] p-[5px] ">
                                    Harvard
                                </div>
                                <div className="university w-[50%] bg-white hover:bg-customLightOrange hover:text-white cursor-pointer rounded-[10px] p-[5px] ">
                                    Arizona University
                                </div>
                                <div className="university w-[50%] bg-white hover:bg-customLightOrange hover:text-white cursor-pointer rounded-[10px] p-[5px] ">
                                  California State University
                                </div>
                                <div className="university w-[50%] bg-white hover:bg-customLightOrange hover:text-white cursor-pointer rounded-[10px] p-[5px] ">
                                  University Of Florida
                                </div>
                              </div>
                          </div>



                   </div>
    </>
   


   </div>
  )
}

export default inputtoggle
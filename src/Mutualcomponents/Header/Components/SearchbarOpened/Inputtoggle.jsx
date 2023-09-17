import React from 'react'


// Components/Icons
import {AiOutlineClockCircle as Clockicon} from 'react-icons/ai'
import {ImLocation as Locationicon} from 'react-icons/im'
import {RiGraduationCapFill as Graduationicon} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AccomodationSlice } from '../../../../Redux/AccomodationSlice'
import { searchInputSlice } from '../../../../Redux/toggleSlice'


const inputtoggle = ({result,resultType,isLoading,searchValue}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToAccomodations = (data) => {
    if (data.universityId) {
      dispatch(AccomodationSlice.actions.setCurrentFilterOption({universityId:data.universityId,cityId:''}));
      navigate(`/accomodations/page/1`,{replace:true})
    }
    else if(data.cityId) {
      dispatch(AccomodationSlice.actions.setCurrentFilterOption({universityId:'',cityId:data.cityId}));
      navigate(`/accomodations/page/1/city/${data.cityId}`,{replace:true})
    }
    dispatch(searchInputSlice.actions.closeSearchInput());
  }
  
  return (
   <div className="search_bar_toggle rounded-[10px] rounded-br-none min-h-fit  absolute  z-[500] w-[100%] bg-white">
    {
      result.length
      ?
      <div className='search_results overflow-y-scroll min-h-fit max-h-[430px] pb-0'>
        {
        result.map((data,index) => 
         <div key={index} onClick={() => navigateToAccomodations(data)} className='search_result last:rounded-bl-[10px] p-[10px] cursor-pointer text-customOrange hover:text-white hover:bg-customLightOrange flex items-center gap-[10px]'>
          {
            data.universityId
            ?
            <Graduationicon  className='text-[28px] '></Graduationicon>
            :
            <Locationicon  className='text-[25px] '></Locationicon>
          }     
          <span className="text">
          {data.name}
          </span>
          </div>
          ) 
        }
      </div>
      :
      isLoading 
      ?
      'Loading...'
      :
        searchValue==='' 
        ?
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
        :
        'Nothing Found'
      
    }

   </div>
  )
}

export default inputtoggle
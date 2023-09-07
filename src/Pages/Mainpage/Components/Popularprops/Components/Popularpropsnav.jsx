import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { propertiesSlice } from '../../../../../Redux/PropertiesSlice';

const PopularpropsNav = () => {

  const dispatch = useDispatch();



  const  setCurrentCountryFilter = (country) => {

    setCountries(countries.forEach((data) => data.isActiveOption = false))
    const filteredArr = [...countries].map((data) => {
      if (data.id === country.id) {
        
        return {
          ...data,
          isActiveOption:true
        }
      }
      else {
        return {
          ...data
        }
      }
    })
    setCountries(filteredArr)
    dispatch(propertiesSlice.actions.setCurrentCountry(country))
  }



  const [countries,setCountries] = useState([])

  useEffect(() => {
    fetch(import.meta.env.VITE_API_KEY + '/countries').then((data) => data.json()).then((data) => setCountries(data.map((data,index) => {
      if (index === 0) {
        return {
          ...data,
          isActiveOption:true
        }
      }
      return {
        ...data,
        isActiveOption:false
      }
    })))
  },[])

  return (
    <div className='popular_props_nav pb-[25px]'>
   
            <h1 className='text-left font-[600] text-[26px] pl-0 p-[20px]'>Popular Properties</h1>
            <div className="popular_properties_options flex-wrap flex gap-[30px]">

                {
                  countries.length 
                  &&
                  countries.map((data) => {
                    return (
                      <button onClick={() => setCurrentCountryFilter(data)} key={data.id} className={` ${data.isActiveOption ? 'bg-customBlue  text-white' : 'bg-[#F3F4F6] text-black'} h-[44px] w-[100%] max-w-[180px] rounded-[22px]`}>{data.name}</button>
                      )
                    })
                  }
                  {/* <button className=' bg-[#F3F4F6] text-black h-[44px] w-[100%] max-w-[180px] rounded-[22px]'>Azerbaijan</button> */}
            </div>
    </div>
  )
}

export default PopularpropsNav
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
  const [loading,setLoading] = useState(false);
  const fetchCountries = async () => {
    setLoading(true)
    const promise = await fetch(import.meta.env.VITE_API_KEY + '/countries');
    const response = await promise.json()
    let defaultCountry;
    const mappedResponse = response.map((data,index) => {
      if (index === 0) {
        defaultCountry = data
        return {
          ...data,
          isActiveOption:true
        }
      }
      return {
        ...data,
        isActiveOption:false
      }
    })
    setCountries(mappedResponse)
    setLoading(false)
    dispatch(propertiesSlice.actions.setCurrentCountry(defaultCountry))
  } 


  useEffect(() => {
    fetchCountries();
  },[])

  return (
    <div className='popular_props_nav pb-[25px]'>
            <h1 className='text-left font-[600] text-[26px] pl-0 p-[20px]'>Popular Properties</h1>
            <div className="popular_properties_options flex-wrap flex gap-[30px]">
                {
                  countries.length
                  ?
                  countries.map((data) => {
                    return (
                      <button onClick={() => setCurrentCountryFilter(data)} key={data.id} className={` ${data.isActiveOption ? 'bg-customBlue  text-white' : 'bg-[#F3F4F6] text-black'} h-[44px] w-[100%] max-w-[180px] rounded-[22px]`}>{data.name}</button>
                      )
                    })
                  :
                  loading
                  ?
                  <>
                    <button  className={`option animate-pulse duration-[.25s]  bg-gray-300   h-[44px] w-[100%] max-w-[180px] rounded-[22px]`}>   
                    </button>
                    <button  className={`option animate-pulse duration-[.25s] bg-gray-300   h-[44px] w-[100%] max-w-[180px] rounded-[22px]`}>   
                    </button>
                  </>
                  :
                  'There is no country available'
                  }
            </div>
    </div>
  )
}

export default PopularpropsNav
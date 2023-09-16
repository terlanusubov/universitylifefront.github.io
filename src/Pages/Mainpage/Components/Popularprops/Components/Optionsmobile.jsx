import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { propertiesSlice } from '../../../../../Redux/PropertiesSlice';

const Optionsmobile = () => {
  const state = useSelector(state => state.propertiesReducer.currentCountry);
  const [options,setOptions] = useState([])
  const dispatch = useDispatch();

  const fetchCities = async () => {
    if (state.id) {
      const promise = await fetch(import.meta.env.VITE_API_KEY + `/cities?CountryId=${state.id}`)
      const response = await promise.json();
      setOptions(response);
    }

  }

  const changeSelectHandler = (e) => {
    if (options.length) {
      // console.log(options);
      const option = options.find((data) => data.id == e.target.value)

      dispatch(propertiesSlice.actions.setCurrentCity(option))
    }
  }
  useEffect(() => {
    fetchCities();
  },[state.id])



  return (
    <div className='popular_props_options_mobile hidden max-[1024px]:block  w-[100%] p-[20px]   shadow-[0px_0.2px_2px_0.7px_rgba(0,0,0,0.3)]'>
            <select onChange={changeSelectHandler} className='select-none outline-none w-[100%]'>
                {
                  options.length
                  ?
                  options.map((data) => {
                    return (
                      <option key={data.id}  className='select-none'  value={data.id}>{data.name}</option>
                    )
                  })
                  :
                  <option>
                    'There is nothing to choose'
                  </option>
                }
            </select>
    </div>
  )
}

export default Optionsmobile
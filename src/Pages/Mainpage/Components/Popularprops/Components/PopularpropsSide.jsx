import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { propertiesSlice } from '../../../../../Redux/PropertiesSlice';

const PopularpropsSide = () => {

    const [cities,setCities] = useState([]);
    const state = useSelector(state => state.propertiesReducer.currentCountry);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(import.meta.env.VITE_API_KEY + `/cities`,{headers: {CountryId:state.id}}).then(data => data.json()).then(data => setCities(data.map((data,index) => {
            if (index === 0) {
                return {
                    ...data,
                    isActiveCity:true
                }
            }
            else {
                return {
                    ...data,
                    isActiveCity:false
                }
            }
        })))

    },[state.id])

    
    const  setCurrentCity =  (country) => {
     

        setCities(cities.forEach((data) => data.isActiveCity = false))
        const filteredArr = [...cities].map((data) => {
          if (data.id === country.id) {
            
            return {
              ...data,
              isActiveCity:true
            }
          }
          else {
            return {
              ...data
            }
          }
        })
        setCities(filteredArr)
        dispatch(propertiesSlice.actions.setCurrentCity(country))
      }




  return (
    <div className='popular_props_sidebar max-[1024px]:hidden'>
        <div className="popular_props_sidebar_container">
            <div className="options_sidebar flex flex-col gap-[30px] shadow-[0_0.5px_2px_0.1px_rgba(0,0,0,0.3)] rounded-[20px] p-[40px] max-[1400px]:p-[25px] max-[1350px]:p-[20px] max-[1150px]:p-[10px]">
                {
                    cities.length 
                    &&
                    cities.map((data) => {
                        return (
                    <button onClick={() => setCurrentCity(data)} key={data.id} className={`option ${data.isActiveCity  ? 'bg-customBlue text-white' : '' }  w-[300px] max-[1500px]:w-[250px] max-[1350px]:w-[220px] max-[1185px]:w-[200px] max-[1130px]:w-[180px] max-[1090px]:w-[170px] rounded-[20px]  h-[50px]`}>
                        {data.name}
                    </button>
                        )
                    })
                }
               
            </div>
        </div>
    </div>
  )
}

export default PopularpropsSide
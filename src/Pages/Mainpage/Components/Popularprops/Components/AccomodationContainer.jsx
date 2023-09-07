import React, { useEffect, useState } from 'react'
// Components
import Room from './Room'

// Assets
import Example from '../Assets/Example.webp'
import { useSelector } from 'react-redux'
const AccomodationContainer = () => {
const CityState = useSelector(state => state.propertiesReducer.currentCity)
const [rooms,setRooms] = useState([])

const fetchRooms = async () => {
  console.log(CityState.id);
  if (CityState.id) {
    const promise = await fetch(import.meta.env.VITE_API_KEY + `/bedroom?CityId=${CityState.id}`)
    const response = await promise.json()
    setRooms(response.response.bedRooms)
    
  }
}


  useEffect(() => {
    fetchRooms();
  },[CityState.id])

  return (
    <div className='popular_props_accommodation_container  grid grid-cols-3 max-[1024px]:flex max-[1024px]:overflow-x-scroll gap-[10px]  pl-[20px] max-[1150px]:pl-[10px] max-[1024px]:pt-[50px] '>
          
    {
      rooms
      &&
      rooms.map((data,index) => {
        return (
          <Room key={index} views={1561} bg={Example} roomName={data.name} offerPrice={50} weeklyPrice={data.price}></Room>
        )
      })
    }

    </div>
  )
}

export default AccomodationContainer
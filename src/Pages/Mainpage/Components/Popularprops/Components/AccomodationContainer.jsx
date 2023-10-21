import React, { useEffect, useState } from 'react'
// Components
import Room from './Room'

// Assets
import Example from '../Assets/Example.webp'
import Test from '../../../Assets/times.jpg'

import { useSelector } from 'react-redux'
const AccomodationContainer = () => {

const CityState = useSelector(state => state.propertiesReducer.currentCity)
const [rooms,setRooms] = useState([])

const [roomLoading,setRoomLoading] = useState(true)

const fetchRooms = async () => {

  if (!CityState.id) {
    return false;
  }
    const promise = await fetch(import.meta.env.VITE_API_KEY + `/bedroom?CityId=${CityState.id}`)
    const response = await promise.json()
    setRooms(response.response.bedRooms);
    setRoomLoading(false);
    
}

  useEffect(() => {
    if (CityState.id) {
      fetchRooms();
    }
  },[CityState?.id])

  return (
    <div className='flex-[1] popular_props_accommodation_container content-start grid grid-cols-3 max-[1024px]:flex max-[1024px]:overflow-x-scroll max-[1024px]:overflow-y-hidden gap-[10px]  pl-[20px] max-[1150px]:pl-[10px] max-[1024px]:pt-[50px] '>
          
    {
      rooms.length
      ? 
      rooms.slice(0,6).map((data,index) => {
        return (
          <Room id={data.id} key={data.id}  bg={data.bedRoomImages[0]} roomName={data.name} offerPrice={50} weeklyPrice={data.price}></Room>
        )
      })
      :
      roomLoading
      ?
      <>
        
        <div className="room popular_props_room bg-gray-200  animate-pulse duration-[.2s] w-[100%] min-w-[270px] max-[1160px]:min-w-[240px]   max-w-[340px] max-[1341px]:max-w-[310px]  max-[1024px]:min-w-[300px]  h-[210px] max-[1450px]:h-[210px] max-[1200px]:h-[194px] rounded-[20px]">
        </div>
        <div className="room popular_props_room bg-gray-200 animate-pulse duration-[.2s] w-[100%] min-w-[270px] max-[1160px]:min-w-[240px]  max-w-[340px] max-[1341px]:max-w-[310px]  max-[1024px]:min-w-[300px]  h-[210px] max-[1450px]:h-[210px] max-[1200px]:h-[194px] rounded-[20px]">
        </div>
        <div className="room popular_props_room bg-gray-200  animate-pulse duration-[.2s] w-[100%] min-w-[270px] max-[1160px]:min-w-[240px]   max-w-[340px] max-[1341px]:max-w-[310px]  max-[1024px]:min-w-[300px]  h-[210px] max-[1450px]:h-[210px] max-[1200px]:h-[194px] rounded-[20px]">
        </div>
        <div className="room popular_props_room bg-gray-200 animate-pulse duration-[.2s] w-[100%] min-w-[270px] max-[1160px]:min-w-[240px]  max-w-[340px] max-[1341px]:max-w-[310px]  max-[1024px]:min-w-[300px]  h-[210px] max-[1450px]:h-[210px] max-[1200px]:h-[194px] rounded-[20px]">
        </div>
        <div className="room popular_props_room bg-gray-200  animate-pulse duration-[.2s] w-[100%] min-w-[270px] max-[1160px]:min-w-[240px]   max-w-[340px] max-[1341px]:max-w-[310px]  max-[1024px]:min-w-[300px]  h-[210px] max-[1450px]:h-[210px] max-[1200px]:h-[194px] rounded-[20px]">
        </div>
        <div className="room popular_props_room bg-gray-200  animate-pulse duration-[.2s] w-[100%] min-w-[270px] max-[1160px]:min-w-[240px]   max-w-[340px] max-[1341px]:max-w-[310px]  max-[1024px]:min-w-[300px]  h-[210px] max-[1450px]:h-[210px] max-[1200px]:h-[194px] rounded-[20px]">
        </div>
      </>
      :
      
      <h1 className='text-center w-[100%] text-[30px]'>There is no room</h1>
    }
    </div>
  )
}

export default AccomodationContainer
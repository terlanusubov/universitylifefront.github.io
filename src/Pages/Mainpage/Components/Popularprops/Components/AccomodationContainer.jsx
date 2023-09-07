import React, { useEffect, useState } from 'react'
// Components
import Room from './Room'

// Assets
import Example from '../Assets/Example.webp'
import { useSelector } from 'react-redux'
const AccomodationContainer = () => {
const state = useSelector(state => state.propertiesReducer.currentCity)
const [rooms,setRooms] = useState([])
  useEffect(() => {
    // fetch(import.meta.env.VITE_API_KEY + "/bedroom", {
    //   headers: {
    //     CityId:state.id
    //   }
    // }).then(data => data.json()).then(data => console.log(data))
    fetch(import.meta.env.VITE_API_KEY + "/bedroom", {headers: {CityId:state.id}}).then((data) => data.json()).then(data => data).then(data => console.log(data.response))  
  },[state.id])

console.log(rooms);
  return (
    <div className='popular_props_accommodation_container  grid grid-cols-3 max-[1024px]:flex max-[1024px]:overflow-x-scroll gap-[10px]  pl-[20px] max-[1150px]:pl-[10px] max-[1024px]:pt-[50px] '>
          
    {
      rooms
      &&
      rooms.map((data,index) => {
        return (
          <Room key={index} views={1561} bg={Example} roomName={data.name} offerPrice={50} weeklyPrice={375}></Room>
        )
      })
    }

    </div>
  )
}

export default AccomodationContainer
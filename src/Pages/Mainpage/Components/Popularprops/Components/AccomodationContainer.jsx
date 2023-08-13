import React from 'react'
// Components
import Room from './Room'

// Assets
import Example from '../Assets/Example.webp'
const AccomodationContainer = () => {
  return (
    <div className='popular_props_accommodation_container grid grid-cols-3 max-[1024px]:flex max-[1024px]:overflow-x-scroll gap-[10px] overflow-y-hidden pl-[20px] max-[1150px]:pl-[10px] max-[1024px]:pt-[50px] '>
          
    <Room views={1561} bg={Example} roomName={'Francis Gardner'} offerPrice={50} weeklyPrice={375}></Room>
    <Room views={1561} bg={Example} roomName={'Francis Gardner'} offerPrice={50} weeklyPrice={375}></Room>
    <Room views={1561} bg={Example} roomName={'Francis Gardner'} offerPrice={50} weeklyPrice={375}></Room>
    <Room views={1561} bg={Example} roomName={'Francis Gardner'} offerPrice={50} weeklyPrice={375}></Room>
    <Room views={1561} bg={Example} roomName={'Francis Gardner'} offerPrice={50} weeklyPrice={375}></Room>
    <Room views={1561} bg={Example} roomName={'Francis Gardner'} offerPrice={50} weeklyPrice={375}></Room>
   
    
    </div>
  )
}

export default AccomodationContainer
import React from 'react'
// Components
import PopularpropsNav from './Components/Popularpropsnav'
import PopularpropsSide from './Components/PopularpropsSide'
import Optionsmobile from './Components/Optionsmobile'
import AccomodationContainer from './Components/AccomodationContainer'
const Popularprops = () => {
  return (
    <div className='main_page_popular_props max-w-[1440px] w-[100%] mx-auto pb-[100px] max-[1475px]:px-[20px]   pr-[10px]  max-[1024px]:px-[30px] mt-[50px]' >
        <PopularpropsNav></PopularpropsNav>
          <Optionsmobile></Optionsmobile>
        <div className="popular_props_main_container flex ">
          <PopularpropsSide></PopularpropsSide>
          <AccomodationContainer></AccomodationContainer>
        </div>
    </div>
  )
}

export default Popularprops
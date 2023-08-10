import React from 'react'

// Components
import Countrycontainer from './Components/Countrycontainer'

// Hooks

// Icons

// Assets



const Popularcities = () => {
  return (
    <div className='main_page_popular_cities px-[50px] max-[1024px]:px-[30px]'>
        <div className="popular_cities_title text-[35px] font-[600] max-[1024px]:text-[32px] max-[800px]:text-[28px]  pb-[20px]">
            Top Cities
        </div>
        <Countrycontainer></Countrycontainer>
    </div>
  )
}

export default Popularcities
import React, { useEffect, useState } from 'react'
import Sorting from './Components/Sorting'
import Cards from './Components/Cards'
import './Styles/accomodation.scss'
import Best from './Components/Best'
import Nearby from './Components/Nearby'
import PerfectHome from './Components/PerfectHome'
import FrequentlyAsked from './Components/FrequentlyAsked'
import SearchUniversity from './Components/SearchUniversity'
import { useRef } from 'react'

const Accommodation = () => {
const [currentCity,setCurrentCity] = useState('')
const containerRef = useRef();
  
  useEffect(() => {
    setTimeout(() => {
          window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           });
        }, 100);
  },[])

  return (
    <div className="accommodation container px-[16px] mx-auto" ref={containerRef} >
        <Sorting currentCity={currentCity} />
        <SearchUniversity />
        <Cards setCurrentCity={setCurrentCity} /> 
        {/* <Best /> */}
        {/* <Nearby /> */}
        {/* <PerfectHome /> */}
        {/* <FrequentlyAsked /> */}
    </div>
  )
}

export default Accommodation
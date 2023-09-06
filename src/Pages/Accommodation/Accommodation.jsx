import React from 'react'
import Sorting from './Components/Sorting'
import Cards from './Components/Cards'
import './Styles/accomodation.scss'
import Best from './Components/Best'
import Nearby from './Components/Nearby'
import PerfectHome from './Components/PerfectHome'
import FrequentlyAsked from './Components/FrequentlyAsked'
import SearchUniversity from './Components/SearchUniversity'

const Accommodation = () => {
  return (
    <div className="accommodation container mx-[40px] px-[16px] mx-auto" >
        <Sorting />
        <SearchUniversity />
        <Cards /> 
        <Best />
        <Nearby />
        <PerfectHome />
        <FrequentlyAsked />
    </div>
  )
}

export default Accommodation
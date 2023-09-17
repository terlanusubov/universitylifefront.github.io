import React, { useEffect, useState } from 'react'

// Components
import Data from './Components/Data'

// Hooks


// Icons
import {IoIosBed as BedIcon} from 'react-icons/io'
import {PiStudentBold as StudentIcon} from 'react-icons/pi'
import {BiSolidCity as CityIcon} from 'react-icons/bi'
import {LiaUniversitySolid as UniversityIcon} from 'react-icons/lia'
// Redux


const Countdata = () => {

  const [statistics,setStatistics] = useState(false)
  useEffect(() => {
    fetch(import.meta.env.VITE_API_KEY + '/Counter').then((data) => data.json()).then((data) => setStatistics(data))
  },[])

  return (
    <div className="w-[100%] mx-auto max-w-[1440px] max-[1475px]:px-[20px] max-[1024px]:px-[30px] justify-items-center main_page_count_data py-[30px]   grid grid-cols-4 max-[920px]:grid-cols-2 grid-rows-1 max-[920px]:grid-rows-2 ">
          <Data dataName={'Beds'} dataDigit={statistics.bedRoomCount}><BedIcon/></Data>
          <Data dataName={'Cities'} dataDigit={statistics.cityCount}><CityIcon/></Data>
          <Data dataName={'Students'} dataDigit={statistics.studentCount}><StudentIcon/></Data>
          <Data dataName={'Universities'} dataDigit={statistics.universityCount}><UniversityIcon/></Data>
    </div>
  )
}

export default Countdata
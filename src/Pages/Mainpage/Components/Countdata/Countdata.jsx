import React from 'react'

// Components
import Data from './Components/Data'

// Hooks


// Icons
import {IoIosBed as BedIcon} from 'react-icons/io'
import {AiFillHome as HomeIcon} from 'react-icons/ai'
import {PiStudentBold as StudentIcon} from 'react-icons/pi'
import {BiSolidCity as CityIcon} from 'react-icons/bi'
// Redux


const Countdata = () => {

  return (

    <div className=" justify-items-center main_page_count_data py-[30px]   grid grid-cols-4 max-[920px]:grid-cols-2 grid-rows-1 max-[920px]:grid-rows-2 ">
            <Data dataName={'Beds'} dataDigit={320}><BedIcon/></Data>
            <Data dataName={'Cities'} dataDigit={320}><CityIcon/></Data>
            <Data dataName={'Students'} dataDigit={323120}><StudentIcon/></Data>
            <Data dataName={'Properties'} dataDigit={312300}><HomeIcon/></Data>
    </div>
  )
}

export default Countdata
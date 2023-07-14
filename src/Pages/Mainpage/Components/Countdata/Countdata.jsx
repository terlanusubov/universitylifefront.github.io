import React from 'react'

// Components
import Data from './Components/Data'

// Hooks


// Icons


// Redux


const Countdata = () => {

  return (

    <div className=" justify-items-center main_page_count_data py-[30px]   grid grid-cols-4 max-[920px]:grid-cols-2 grid-rows-1 max-[920px]:grid-rows-2 ">
            <Data dataName={'Beds'} dataDigit={320}></Data>
            <Data dataName={'Cities'} dataDigit={320}></Data>
            <Data dataName={'Students'} dataDigit={323120}></Data>
            <Data dataName={'Properties'} dataDigit={312300}></Data>
    </div>
  )
}

export default Countdata
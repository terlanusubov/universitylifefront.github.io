import React from 'react'
// Components
import Country from './Country'
// Redux

// Icons

// Assets



const Countrycontainer = () => {
  return (
    <div className='countries_container grid grid-cols-4 max-[1024px]:grid-cols-2 max-[568px]:grid-cols-1'>
            <Country></Country>
            <Country></Country>
            <Country></Country>
            <Country></Country>
            <Country></Country>
            <Country></Country>
            <Country></Country>
            <Country></Country>
    </div>
  )
}

export default Countrycontainer
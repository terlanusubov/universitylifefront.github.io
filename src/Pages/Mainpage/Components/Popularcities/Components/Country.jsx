import React from 'react'


// Components


// Redux

// Icons

// Assets
import nybg from '../Assets/newyork.jpg'

const Country = () => {
  return (
    <div className='country_element rounded-[10px] cursor-pointer relative' >
        <div className="country_element_content p-[13px] ">
        <div className="country_element_image overflow-hidden rounded-[13px]">
            <img src={nybg}  className='w-[100%] h-[100%] object-cover rounded-[13px] hover:scale-[1.3] duration-[0.3s]'  alt="" />
        </div>


        <div className="country_element_text absolute bottom-[30px] left-[30px] bg-white/20 p-[6px] text-white font-[600] rounded-[10px] backdrop-blur-[10px]">
            <div className="country_name">
                New York
            </div>
            <div className="country_bed_count">
                1000 Beds
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default Country
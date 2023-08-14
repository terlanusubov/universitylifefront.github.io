import React from 'react'

const PopularpropsNav = () => {
  return (
    <div className='popular_props_nav pb-[25px]'>
            <h1 className='text-left font-[600] text-[26px] pl-0 p-[20px]'>Popular Properties</h1>
            <div className="popular_properties_options flex gap-[30px]">
              
                <button className='bg-customBlue text-white h-[44px] w-[100%] max-w-[180px] rounded-[22px]'>United Kingdom</button>
                <button className=' bg-[#F3F4F6] text-black h-[44px] w-[100%] max-w-[180px] rounded-[22px]'>Azerbaijan</button>
            </div>
    </div>
  )
}

export default PopularpropsNav
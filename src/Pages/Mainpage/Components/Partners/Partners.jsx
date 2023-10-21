import React from 'react'
import Partner from './Assets/mslogo.jpg'
const Partners = () => {
  return (
    <div className='main_page_partners px-[50px] max-[1024px]:px-[30px] max-w-[1440px] w-full mx-auto'>
        <div className="partners_title text-[30px] font-[600]">
            Media Spotlight
        </div>
        <div className="partners_container flex items-center justify-between overflow-scroll ">
        <div className="partner max-w-[250px] min-w-[200px]  m-[10px]  w-[100%]">
            <img src={Partner} alt="" className='object-cover w-full h-full'/>
        </div>
        <div className="partner max-w-[250px] min-w-[200px]  m-[10px]  w-[100%]">
            <img src={Partner} alt="" className='object-cover w-full h-full'/>
        </div>
        <div className="partner max-w-[250px] min-w-[200px]  m-[10px]  w-[100%]">
            <img src={Partner} alt="" className='object-cover w-full h-full'/>
        </div>
        <div className="partner max-w-[250px] min-w-[200px]  m-[10px]  w-[100%]">
            <img src={Partner} alt="" className='object-cover w-full h-full'/>
        </div>
        </div>
    </div>
  )
}

export default Partners
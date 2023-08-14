import React from 'react'
import Partner from './Assets/mslogo.jpg'
const Partners = () => {
  return (
    <div className='main_page_partners px-[50px] max-[1024px]:px-[30px]'>
        <div className="partners_title text-[30px] font-[600]">
            Media Spotlight
        </div>
        <div className="partners_container flex items-center justify-between max-[1040px]:overflow-x-scroll">
        <div className="partner max-w-[250px] min-w-[200px]  m-[10px]  w-[100%]">
            <img src={Partner} alt="" className='object-cover'/>
        </div>
        <div className="partner max-w-[250px] min-w-[200px]  m-[10px]  w-[100%]">
            <img src={Partner} alt="" className='object-cover'/>
        </div>
        <div className="partner max-w-[250px] min-w-[200px]  m-[10px]  w-[100%]">
            <img src={Partner} alt="" className='object-cover'/>
        </div>
        <div className="partner max-w-[250px] min-w-[200px]  m-[10px]  w-[100%]">
            <img src={Partner} alt="" className='object-cover'/>
        </div>
        </div>
    </div>
  )
}

export default Partners
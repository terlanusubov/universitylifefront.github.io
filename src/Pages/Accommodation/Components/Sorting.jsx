import React from 'react'
import {TiLocation} from 'react-icons/ti'

const Soting = ({currentCity}) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between py-5">
        <div className="flex items-center">
          {
            currentCity
            ?
            <>
            <h1 className="text-customOrange text-xl font-bold mr-2"><TiLocation /></h1>
            <h1 className="text-xl font-bold">Student Accommodation {currentCity}</h1>
            </>
            :
            ''
          }
        </div>
        <div className="flex items-center text-xs font-semibold text-gray-700">
          {/* <p><svg className="w-4 h-4 mr-2 stoke-1 stroke-theme-blue group-hover:stroke-theme-orange" fill="none" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" strokeLinecap="round" strokeLinejoin="round" ></path></svg></p> */}
          {/* <p className="ml-2">205 Places to Stay</p> */}
        </div>
      </div>
    </div>
  )
}


export default Soting
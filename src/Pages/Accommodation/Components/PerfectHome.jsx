import React from 'react'
import img from '../Assets/img/home.jpg'
import img1 from '../Assets/img/home2.jpg'
import img2 from '../Assets/img/home3.jpg'
import { Link } from 'react-router-dom'

const PerfectHome = () => {
  return (
    <div className='my-7 py-5 border-y border-dotted'>
        <p className='text-2xl font-semibold py-5'>Let us find your perfect home!</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-6 mb-7'>
            <div className='card flex justify-items-center items-center flex-col'>
                <img className='h-36' src={img} alt="" />
                <h3 className='lg:text-xl text-md mt-4 mb-1 lg:mb-3 font-medium'>Search - Compare - Relax</h3>
                <p className='text-center text-sm text-gray-700'>Choose from 1.5 Mn 100% verified student rooms near the university & compare between the best options.</p>
            </div>
            <div className='card flex flex-col items-center justify-items-center'>
                <img className='h-36' src={img1} alt="" />
                <h3 className='lg:text-xl text-md mt-4 mb-1 lg:mb-3 font-medium'>Easy Peasy</h3>
                <p className='text-center text-sm text-gray-700'>Instantly book the room in a matter of minutes. Save your time for more important things (Netflix).</p>
            </div>
            <div className='card flex flex-col items-center justify-items-center'>
                <img className='h-36' src={img2} alt="" />
                <h3 className='lg:text-xl text-md mt-4 mb-1 lg:mb-3 font-medium'>Price Match Guarantee</h3>
                <p className='text-center text-sm text-gray-700'>We keep our promises. Grab the best offers along with the lowest price promise.</p>
                <Link className='font-semibold mt-2 text-sm underline text-gray-700'>Terms & Conditions</Link>
            </div>
        </div>
    </div>
  )
}

export default PerfectHome
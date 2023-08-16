import React from 'react'
import Card from './Card'
import { slides } from './Caruseldata.json'
import { fetchProducts } from '../../../Redux/accomodation/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const Cards = () => {
  /* const dispatch = useDispatch();
  const state = useSelector((state) => state);
  
  if (state.products.isLoading) {
    return <h1>loading...</h1>
  }
 */
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3 mb-7">
       {/*  {state.products.data && state.products.data.map((e)=>
          <li>{e.title}</li>
        )} */}
        <Card data={slides} />
        <Card data={slides} />
        <Card data={slides} />
        <Card data={slides} />
        <Card data={slides} />
        <Card data={slides} />
        <Card data={slides} />
        <Card data={slides} />
        <Card data={slides} />
        <Card data={slides} />
        <Card data={slides} />
        <Card data={slides} />
      </div>
      <div className='sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <div>
          <p className='text-gray-700 text-sm'>
            Showing 
            <span className='font-medium'>&nbsp;1&nbsp;-&nbsp;12&nbsp;</span>
            properties out of
            <span className='font-medium'>&nbsp;203</span>
          </p>
        </div>
      </div>
    </div>

  )
}

export default Cards
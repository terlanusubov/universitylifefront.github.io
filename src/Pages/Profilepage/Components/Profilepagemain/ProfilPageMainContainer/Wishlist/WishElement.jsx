import React from 'react'
// Assets
import roomImg from '../../../../Assets/roomimg.webp'
import { useState } from 'react'
const WishElement = ({imgSource,distance,price,bedRoomId,wishId,callback,bedRoomName,bedRoomImages,bedRoomRoomTypes}) => {

    const [deleteStart,setDeleteStart] = useState(false)
    const deleteHandler = async () => {
        setDeleteStart(true)
        const promise = await fetch(import.meta.env.VITE_API_KEY + `/userwishlist/${wishId}`,{
            headers: {
                'Content-type':'text/plain'
            },
            method:'DELETE'
        })
        const response = await promise.json()
        const deletedBedroomId = response.response.bedRoomId
        setDeleteStart(false)
        callback(deletedBedroomId);
    }


  return (
    <div className='wishlist_wish_el  w-[100%] rounded-[16px]  '>
        <div className="wishlist_el_container hover:shadow-md cursor-pointer rounded-[16px] duration-[.3s]">

            <div className="wish_el_top h-[230px]">
                <img src={bedRoomImages[0] ? bedRoomImages[0] : roomImg} className='object-cover w-full h-full rounded-t-[16px]' alt="" />
            </div>
            <div className="wish_el_bottom  rounded-b-[16px] shadow-[2px_4px_10px_-5px_rgba(0,0,0,0.3)] p-[10px]">
                <div className="info_line_first flex justify-between">
                    <span className="room_name font-[600]">
                        {bedRoomName}
                    </span>
                    <span className='distance'>
                        {distance} Miles
                    </span>
                </div>
                <div className="info_line_second flex justify-between">
                    <span className="text-[14px] room_property">
                    </span>
                    <span className="text-[14px] room_pricing_title">
                        {/* Starts from */}
                    </span>
                </div>
                <div className="info_line_third flex justify-between">
                    <span className="text-[14px] room_location">
                        {bedRoomRoomTypes.map((data,i) => <span key={i} className='mx-[4px]'>{data}</span>)}
                        {/* New York */}
                    </span>
                    <span className=" room_price text-customOrange font-[600] text-[16px]">
                    {price} £/month
                    </span>
                </div>
            </div>
            
        </div>
        <div className="btn_container flex justify-end">
        <button onClick={deleteHandler} className='text-customOrange flex justify-end max-w-[100px] ml-auto w-[100%] text-end py-[7px] '>
            {
                deleteStart
                ?   
                <div role="status  ">
                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-customOrange" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
                :
                'Remove'
            }
        </button>
        </div>
    </div>
  )
}

export default WishElement
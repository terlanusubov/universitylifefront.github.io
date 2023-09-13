import React from 'react'
// Assets
import roomImg from '../../../../Assets/roomimg.webp'
const WishElement = ({imgSource,distance,price,bedRoomId,wishId}) => {

    const deleteHandler = async () => {
        const promise = await fetch(import.meta.env.VITE_API_KEY + `/userwishlist/${wishId}`,{
            headers: {
                'Content-type':'text/plain'
            },
            method:'DELETE'
        })
        const response = promise.json()
    }


  return (
    <div className='wishlist_wish_el  w-[100%] rounded-[16px]  '>
        <div className="wishlist_el_container hover:shadow-md cursor-pointer rounded-[16px] duration-[.3s]">

            <div className="wish_el_top">
                <img src={roomImg} className='object-cover rounded-t-[16px]' alt="" />
            </div>
            <div className="wish_el_bottom  rounded-b-[16px] shadow-[2px_4px_10px_-5px_rgba(0,0,0,0.3)] p-[10px]">
                <div className="info_line_first flex justify-between">
                    <span className="room_name font-[600]">
                        92NY Residence
                    </span>
                    <span className='distance'>
                        {distance} Miles
                    </span>
                </div>
                <div className="info_line_second flex justify-between">
                    <span className="text-[14px] room_property">
                        Shared 	&middot; Other
                    </span>
                    <span className="text-[14px] room_pricing_title">
                        Starts from
                    </span>
                </div>
                <div className="info_line_third flex justify-between">
                    <span className="text-[14px] room_location">
                        New York
                    </span>
                    <span className=" room_price text-customOrange font-[600] text-[16px]">
                    {price} US$/month
                    </span>
                </div>
            </div>
            
        </div>
        <button onClick={deleteHandler} className='text-customOrange w-[100%] text-end py-[7px] '>Remove</button>
    </div>
  )
}

export default WishElement
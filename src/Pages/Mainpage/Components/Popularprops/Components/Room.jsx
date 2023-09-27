import React from 'react'
// Icons
import {BsSuitHeart as HeartIconEmpty} from 'react-icons/bs'
import {BsSuitHeartFill as HeartIconFill} from 'react-icons/bs'
import {BsHouseAddFill as HouseIconPricing} from 'react-icons/bs' 

import '../Styles/Room.scss'
import { Link } from 'react-router-dom'
const Room = (props) => {
  return (
    <Link to={`/accomodations/bedroom/${props.id}`}>
    <div className='popular_props_room w-[100%] max-w-[340px] max-[1341px]:max-w-[310px]  max-[1024px]:min-w-[300px]  h-[230px] max-[1450px]:h-[210px] max-[1200px]:h-[194px] rounded-[20px]'>
      <div className="popular_props_room_top relative h-[85%]">
        {/* <div className="pricing max-w-[170px] w-[100%] h-[30px]  absolute top-[-7px] rounded-[10px] rounded-t-[0px] gap-[7px] flex items-center pl-[5px] left-[20px] ">
          <div className="pricing_icon text-customOrange text-[22px]">
            <HouseIconPricing/>
          </div>
          <div className="pricing_text ">
            Offer up to <span className='price text-customOrange'>{props.offerPrice}$</span> 
          </div>
        </div> */}
          <img src={props.bg} draggable={false} className='select-none w-[100%] h-[100%] rounded-[20px] object-cover' alt="" />
        {/* <div className='room_views   p-[10px] max-[1200px]:p-[6px] bg-black absolute bottom-[10px] left-[10px] text-white bg-opacity-[0.6] rounded-[10px] text-[15px]'>{props.views} views last week</div> */}
        {/* <div className="heart_icon_container absolute top-[15px] right-[15px] cursor-pointer text-[23px]">
          <HeartIconFill className='opacity-[0.6]'></HeartIconFill>
        </div> */}
      </div>
      <div className="popular_props_room_bottom h-[100%] p-[3px] flex justify-between">
        <div className="room_name">
        {props.roomName}
        </div>
        <div className="room_weeklyprice">
         Weekly {props.weeklyPrice}$
        </div>
      </div>
    </div>
    </Link>  
  )
}

export default Room
import React from 'react'
// Components
import WishElement from './WishElement'
const Wishlist = () => {
  return (
    <div className='profile_wishlist flex flex-col justify-start'>
          <div className="profile_part_nav  rounded-[14px] mt-[-23px] max-[1024px]:mt-[-20px] p-[20px] bg-white shadow-[1px_2px_10px_-5px_rgba(0,0,0,0.3)] font-[600]">
             My Wishlist    
          </div>
          <div className="profile_wishlist_container bg-white p-[16px] px-[20px] my-[20px]   shadow-[1px_2px_10px_-5px_rgba(0,0,0,0.3)] rounded-[12px]" >
                {/* <div className="empty_message text-customOrange text-[20px]">
                 You have not created any Wishlist yet.
                </div> */}

                <div className="favorite_rooms grid grid-cols-2 gap-[20px]">
                        <WishElement></WishElement>
                        <WishElement></WishElement>
                        <WishElement></WishElement>
                        <WishElement></WishElement>
                </div>
          </div>
    </div>
  )
}

export default Wishlist
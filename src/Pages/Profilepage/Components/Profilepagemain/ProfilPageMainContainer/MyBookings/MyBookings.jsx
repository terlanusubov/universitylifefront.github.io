import React from 'react'

const MyBookings = () => {
  return (
    <div className='profile_page_booking'>
            <div className="booking_part_nav  rounded-[14px] mt-[-23px] max-[1024px]:mt-[-20px] p-[20px] bg-white shadow-[1px_2px_10px_-5px_rgba(0,0,0,0.3)]">
                <div className="bookings_title font-[600] pb-[10px] ">
                My Bookings
                </div>
                <div className="booking_nav_options flex gap-[10px]">
                    <span className="booking_option p-[5px] border-solid border-b-[1px] border-customBlue">
                    Accomodation
                    </span>
                    <span className="booking_option p-[5px]">
                        Other Services
                    </span>
                </div>
            </div>
            <div className="booking_part_container shadow-[1px_2px_10px_-5px_rgba(0,0,0,0.3)] bg-white rounded-[14px] mt-[20px] p-[20px]">
                <div className="booking_title flex flex-col">
                    <strong className='font-[600] text-[21px]'>Refer & Earn $50</strong>
                    <strong className='font-[400] text-gray-500'>Send this link to your friends and earn $50 for each successful referral</strong>
                </div>
                <div className="referral_code_container  flex flex-col">
                    <strong className='text-gray-500 pt-[14px] pb-[10px] font-[400]'>Referral Code</strong>
                    <div className="referral_code max-w-[600px] w-[100%] bg-[#f7f5f5] border-solid border-[0.8px] p-[6px] pl-[15px] border-[#e5e7eb]">
                    https://www.universityliving.com/?referral=ELSU234
                    </div>
                </div>
            </div>
    </div>
  )
}

export default MyBookings
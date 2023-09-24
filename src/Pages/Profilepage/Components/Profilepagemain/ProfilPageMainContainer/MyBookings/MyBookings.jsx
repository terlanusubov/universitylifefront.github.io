import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const MyBookings = () => {

    const parseJwt = (token) => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    }

    const [bookings,setBookings] = useState();
    const [userId,setUserId] = useState(parseJwt(localStorage.getItem("tokenId")).id)
    const [booksLoading,setBooksLoading] = useState(false)


    const fetchBookings = async () => {
       if (!userId) {
        return false;
       }
       setBooksLoading(true)
        const promise = await fetch(import.meta.env.VITE_API_KEY + `/book?UserId=${+userId}`);
        console.log(+userId);
        const result = await promise.json();
        const {response} = result;
        setBookings(response);
        setBooksLoading(true)
        console.log(result);
    }

    useEffect(() => {
        fetchBookings();
    },[])



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
                {/* <div className="booking_title flex flex-col">
                    <strong className='font-[600] text-[21px]'>Refer & Earn $50</strong>
                    <strong className='font-[400] text-gray-500'>Send this link to your friends and earn $50 for each successful referral</strong>
                </div>
                <div className="referral_code_container  flex flex-col">
                    <strong className='text-gray-500 pt-[14px] pb-[10px] font-[400]'>Referral Code</strong>
                    <div className="referral_code max-w-[600px] w-[100%] bg-[#f7f5f5] border-solid border-[0.8px] p-[6px] pl-[15px] border-[#e5e7eb]">
                    https://www.universityliving.com/?referral=ELSU234
                    </div>
                </div> */}
                <div className="bookings_container grid grid-cols-2 max-[1024px]:grid-cols-1">
                    {
                        bookings
                        ?
                        bookings.map((data,index) => {
                            return (
                        <div className="booking p-[10px]">
                            <div className="booking_content h-[300px] max-[1150px]:h-[250px] border rounded-[10px]">
                                <div className="booking_image">
                                    <img src={data.image} className='w-full h-full object-cover rounded-t-[10px]' alt="" />
                                </div>
                                <div className="booking_information flex items-center justify-between p-[10px] py-[5px]">
                                    <div className="booking_condition">
                                        Pending
                                    </div>
                                        <button className='max-w-[300px] w-[100%]  duration-[.2s] h-[30px] rounded-[10px] bg-customOrange text-white hover:bg-customLightOrange'>
                                            Remove
                                        </button>
                                    </div>
                            </div>
                        </div>  
                            )
                        })
                        :
                        booksLoading
                        ?
                        <>
                        <div className="booking p-[10px]">
                            <div className="booking_content animate-pulse bg-gray-300 h-[300px] max-[1150px]:h-[250px] border rounded-[10px]">

                            </div>
                        </div>
                        <div className="booking p-[10px]">
                            <div className="booking_content animate-pulse bg-gray-300 h-[300px] max-[1150px]:h-[250px] border rounded-[10px]">

                            </div>
                        </div>    
                        </>
                        :
                        'There is no book'
                    }
                        
                </div>
            </div>
    </div>
  )
}

export default MyBookings
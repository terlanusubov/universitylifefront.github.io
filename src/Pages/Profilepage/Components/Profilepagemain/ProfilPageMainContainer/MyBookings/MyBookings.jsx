import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const MyBookings = () => {

    const parseJwt = (token) => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    }

    const [bookings,setBookings] = useState([]);
    const [userId,setUserId] = useState(parseJwt(localStorage.getItem("tokenId")).id)
    const [booksLoading,setBooksLoading] = useState(false)
    const [deleteLoading,setDeleteLoading] = useState(false);

    const fetchBookings = async () => {
       if (!userId) {
        return false;
       }
       setBooksLoading(true)
        const promise = await fetch(import.meta.env.VITE_API_KEY + `/book?UserId=${+userId}`);
        const result = await promise.json();
        const {response} = result;
        setBookings(response);
        setBooksLoading(false)
    }

    useEffect(() => {
        fetchBookings();
    },[])

    const deleteBookHandler = async (id) => {
        setDeleteLoading(true)
        const promise = await fetch(import.meta.env.VITE_API_KEY + `/book?bookId=${id}`,{
            method:'DELETE'
        })
        const result =  await promise.json();

        if (result.statusCode === 200) {
            toast.success("Item Successfully Removed");
            setBookings((prev) => prev.filter((data) => data.id !== id))
        }
        setDeleteLoading(false)
    }

  return (
    <>
  <Toaster/>
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
                        bookings.length
                        ?
                        bookings.map((data,index) => {
                            return (
                        <div key={index} className="booking p-[10px]">
                            <div className="booking_content  border rounded-[10px]">
                                <div className="booking_image h-[250px]">
                                    <img src={data.image} className='w-full h-full object-cover rounded-t-[10px]' alt="" />
                                </div>
                                <div className="booking_information flex items-center  justify-between p-[10px] py-[14px]">
                                    <div className="booking_condition pr-[10px]">
                                        {
                                            data.bedRoomRoomApplyStatusId == 10
                                            ?
                                            'Pending'
                                            :
                                            data.bedRoomRoomApplyStatusId === 20
                                            ?
                                            'Accepted'
                                            :
                                            'Rejected'
                                        }
                                    </div>
                                        <button onClick={() => deleteBookHandler(data.id)} className='max-w-[200px] w-[100%]  duration-[.2s] h-[30px] rounded-[10px] bg-customOrange text-white hover:bg-customLightOrange flex justify-center items-center'>
                                           {
                                            deleteLoading
                                            ?
                                            <div role="status flex justify-center text-center">
                                                <svg aria-hidden="true" className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-customOrange" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </>
  )
}

export default MyBookings
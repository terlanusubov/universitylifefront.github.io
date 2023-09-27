import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import addimg from '../Assets/img/add.jpg'
import offerimg from '../Assets/img/offer.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useCart } from 'react-use-cart';
import { useDispatch } from 'react-redux';
import { ModalSlice } from '../../../Redux/ModalSlice';
import toast from 'react-hot-toast';


const Card = (props) => {


const [isFavoriteCard,setIsFavoriteCard] = useState(props.isFavorite);

const dispatch = useDispatch();
const [userWishListId,setUserWishListId] = useState(props.userWishlistId)
 
const deleteHandler = async () => {
      if (!userWishListId) {
          return false;
        }
        console.log('delete handler');
      const promise = await fetch(import.meta.env.VITE_API_KEY + `/userwishlist/${userWishListId}`,{
          headers: {
            'Content-type':'text/plain'
        },
        method:'DELETE'
    })
    const response = await promise.json()
    const deletedBedroomId = response.response.bedRoomId
    console.log(response);
    setIsFavoriteCard(false);
    toast.success("Item Successfully Removed From Wishlist",{style:{fontSize:'15px'}})
}


const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
  




const addToWishListHandler = async () => {
        

        if (!localStorage.getItem('tokenId')){
            dispatch(ModalSlice.actions.setModal(true))
        }
        else {
            if (isFavoriteCard) {
                await deleteHandler();
                return false;
            }
           const token = localStorage.getItem('tokenId') 
           const userId = +parseJwt(token).id
           console.log({UserId:userId,BedRoomId:props.bedRoomId});
           const promise = await fetch(import.meta.env.VITE_API_KEY + `/userwishlist`, {
            headers: {
                'accept':'text/plain',
                'Content-type':'application/json'
            },
            method:'POST',
            body:JSON.stringify({UserId:userId,BedRoomId:props.bedRoomId})
           })
           const response = await promise.json();
           if (response.statusCode === 208) {
            toast.error("This Item Already Exist In Your Wishlist",{style: {width:'fit'}})
            return false;
           }
           toast.success("Item Successfully Added");
           setIsFavoriteCard(true);
           console.log(response,'Get of userwishlist');
           setUserWishListId(response.response.userWishlistId)
        }
        
}


    return (
        <div className='card'>
            <div className='rounded-lg shadow-md hover:shadow-md transition-all flex-shrink-0 lg:w-full flex flex-col text-opacity-100 text-[#3e3E3E]'>
                <div className='relative h-52'>
                            {
                                props.slideImages
                                &&
                            <Carousel infiniteLoop={true} showThumbs={false} showStatus={false}>
                                {props.slideImages.map((data,index) => {
                                    return (
                                        <Link target="_blank" to={`/accomodations/bedroom/${props.bedRoomId}`} key={index}  className='w-full h-full inline-block'>
                                            <div className='h-[200px]'>
                                                <img className='h-52 w-full rounded-t-md object-cover'  src={data} />
                                            </div>
                                        </Link>
                                    )
                                })}                               
                            </Carousel>
                            }
                    {/* <div className='offer-link'>
                        <Link className='flex items-center absolute left-3 bg-white text-xs px-2 p-1 cursor-pointer rounded-b text-black font-semibold before:absolute before:border-t-[7px] before:-left-[6px] before:border-r-[6px] before:border-r-[#9e9e9e] before:scale-100 before:top-0 before:border-transparent after:absolute after:border-t-[7px] after:-right-[6px] after:border-l-[6px] after:border-l-[#9e9e9e] after:scale-100 after:top-0 after:border-transparent'>
                        <img src={offerimg} alt="" className='w-[22px] h-[22px]' />
                        <p className='text-xs pl-1 uppercase m-0'>offer upto <span className='text-customOrange font-semibold'>&nbsp; 50 &nbsp;£</span> </p>
                        </Link>
                    </div> */}
                    {/* <div className='cursor-pointer flex items-center bottom-2 left-2 rounded p-2 absolute text-white bg-[#3C3C71]'>
                        <svg className="w-4 h-4 mr-1 lg:hidden xl:block motion-safe:animate-bounce" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 8c.828 0 1.5-.895 1.5-2S8.828 4 8 4s-1.5.895-1.5 2S7.172 8 8 8Z"></path><path d="M11.953 8.81c-.195-3.388-.968-5.507-1.777-6.819C9.707 1.233 9.23.751 8.857.454a3.495 3.495 0 0 0-.463-.315A2.19 2.19 0 0 0 8.25.064.546.546 0 0 0 8 0a.549.549 0 0 0-.266.073 2.312 2.312 0 0 0-.142.08 3.67 3.67 0 0 0-.459.33c-.37.308-.844.803-1.31 1.57-.805 1.322-1.577 3.433-1.774 6.756l-1.497 1.826-.004.005A2.5 2.5 0 0 0 2 12.202V15.5a.5.5 0 0 0 .9.3l1.125-1.5c.166-.222.42-.4.752-.57.214-.108.414-.192.625-.281l.198-.084c.7.428 1.55.635 2.4.635.85 0 1.7-.207 2.4-.635.067.03.132.056.196.083.213.09.413.174.627.282.332.17.586.348.752.57l1.125 1.5a.5.5 0 0 0 .9-.3v-3.298a2.5 2.5 0 0 0-.548-1.562l-1.499-1.83ZM12 10.445v.055c0 .866-.284 1.585-.75 2.14.146.064.292.13.425.199.39.197.8.46 1.1.86L13 14v-1.798a1.5 1.5 0 0 0-.327-.935L12 10.445ZM4.75 12.64C4.284 12.085 4 11.366 4 10.5v-.054l-.673.82a1.5 1.5 0 0 0-.327.936V14l.225-.3c.3-.4.71-.664 1.1-.861.133-.068.279-.135.425-.199ZM8.009 1.073c.063.04.14.094.226.163.284.226.683.621 1.09 1.28C10.137 3.836 11 6.237 11 10.5c0 .858-.374 1.48-.943 1.893C9.517 12.786 8.781 13 8 13c-.781 0-1.517-.214-2.057-.607C5.373 11.979 5 11.358 5 10.5c0-4.182.86-6.586 1.677-7.928.409-.67.81-1.082 1.096-1.32.09-.076.17-.135.236-.18Z"></path><path d="M9.479 14.361c-.48.093-.98.139-1.479.139-.5 0-.999-.046-1.479-.139L7.6 15.8a.5.5 0 0 0 .8 0l1.079-1.439Z"></path></svg>
                        <span className='pl-1 text-[12px] lg:text-[10px] xl:text-[12px] font-semibold leading-4'>Filling Fast</span>
                    </div> */}
                    {/* <div onClick={()=>addItem(props.item)} className='cursor-pointer flex items-center bottom-2 right-2 rounded p-2 absolute text-white bg-[#00000099]'>
                        <img className='w-[15px] h-[15px]' src={addimg} alt="" />
                        <span className='pl-2 text-xs font-semibold'>Add to Compare</span>
                    </div> */}
                    <div className='absolute top-2 right-2' onClick={addToWishListHandler}>
                        {
                        isFavoriteCard
                        ?
                        <svg  className=" shadow-2xl fill-[#d91010] opacity-60 w-6 h-6 cursor-pointer" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path></svg>
                        :
                        <svg  className=" shadow-2xl fill-[#000000a2] opacity-60 w-6 h-6 cursor-pointer" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path></svg>
                    }
                    </div>
                </div>
                <div className='w-full bg-white rounded-b-md p-3'>
                    <div className='flex mb-2 justify-between items-center'>
                        <Link className='font-bold max-w-[73%] truncate text-[#3E3E3E]'>
                            <p className='truncate'>{props.title}</p>
                        </Link>
                        <div className='max-w-[192px] truncate text-[#3E3E3E]'>{props.distanceToCenter} miles</div>
                    </div>
                    <div className='flex justify-between items-center my-1.5'>
                        <div className='text-xs truncate pr-4'>
                            {props.type.map((data,index) => <span key={index} className='mx-[3px]'>{data}</span>)}&nbsp; 
                        </div>
                        <div className='text-right text-xs flex-shrink-0'>Starting From</div>
                    </div>
                    <div className='flex justify-between items-end space-x-6'>
                        <div className='text-xs flex items-center w-[60%] whitespace-nowrap'>
                            <span className='truncate'>{props.city}</span>
                        </div>
                        <div className='text-right text-customOrange font-bold text-[1rem] leading-5'>{props.price} &nbsp; £/week</div>
                    </div>
                    <div className='flex items-end justify-between mt-1.5'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
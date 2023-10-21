import React, { useEffect } from "react";
import { FaHeart } from "react-icons/fa6";
/////////
import "../../../Styles/DetailpageCountryName.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ModalSlice } from "../../../../../Redux/ModalSlice";
import toast from "react-hot-toast";

const DetailpageCountryName = ({userId,bedRoomId,bedRoomName}) => {
const dispatch = useDispatch();

const [isFavorite,setIsFavorite] = useState(false);
const [favorites,setFavorites] = useState([])
const [wishListId,setWishListId] = useState();
const [userWishListId,setUserWishListId] = useState();

  const fetchFavorites =  async () => {
    if (!userId) {
      return false;
    }
    const promise = await fetch(import.meta.env.VITE_API_KEY + `/userwishlist?UserId=${userId}`)
    const response = await promise.json();
    setIsFavorite(response.some((data) => data.id === +bedRoomId));
    setWishListId(response.find((data) => data.id === +bedRoomId)?.userWishlistId)
  }


  const deleteFromWishlistHandler = async () => {
    if (!userWishListId) {
      console.log('wishlistid doesnt exist');
      return false;
    }
    console.log(import.meta.env.VITE_API_KEY  + `/userwishlist/${userWishListId}`);
    const promise = await fetch(import.meta.env.VITE_API_KEY  + `/userwishlist/${userWishListId}`, {
      method:'DELETE'
    })
    const response = await promise.json();
    if (response.statusCode === 200) {
      setIsFavorite(false);
      toast.success('Item Removed Successfully')
    }
    console.log(response);
  }

  const addToWishlistHandler = async () => {
    if (!userId) {
        dispatch(ModalSlice.actions.openModal());
        return false;
    }
    if (isFavorite) {
      await deleteFromWishlistHandler();
      return false;
    }
    const promise = await fetch(import.meta.env.VITE_API_KEY + '/userwishlist', {
      method:'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify({
        userId:+userId,
        bedRoomId:+bedRoomId
      })
    })
    const response = await promise.json();
    if (response.statusCode === 200) {
      toast.success('Item Successfully Added');
      setUserWishListId(response.response.userWishlistId)
      setIsFavorite(true)
    }
    else if (response.statusCode === 208) {
      toast.error('This Item Already Exist In Your Wishlist')
    }
   console.log(response);
  }


  useEffect(() => {
    fetchFavorites();
  },[])

  return (
    <div className="">
      <div className="mt-3 lg:mt-0 mb-2 lg:mb-0  items-center h-[50px] flex justify-between">
        <h1 className="font-semibold text-gray-800 ">{bedRoomName}</h1>
          <button onClick={addToWishlistHandler} className="te-savep flex  gap-[20px]  h-full cursor-pointer">
            {
              isFavorite
              ?
          <span className="shadow-2xl  text-[30px] opacity-60 w-5 h-4 cursor-pointer te-savep">
            <FaHeart fill="red"/>
          </span>
            :
            <span className="shadow-2xl text-[30px] opacity-60 w-5 h-4 cursor-pointer te-savep">
            <FaHeart />
           </span>
            } 
          <p className="te-savep text-base text-theme-gray-text font-normal pl-1 hover:underline cursor-pointer sm:block hidden">
            Wishlist
          </p>
          </button>
      </div>
    </div>
  );
};
export default DetailpageCountryName;

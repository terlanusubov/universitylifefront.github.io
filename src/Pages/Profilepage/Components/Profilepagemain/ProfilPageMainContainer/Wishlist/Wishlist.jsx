import React, { useEffect, useState } from 'react'
// Components
import WishElement from './WishElement'
import { useSelector,useDispatch } from 'react-redux'
import toast, {Toaster} from 'react-hot-toast'
const Wishlist = () => {

  const [favorites,setFavorites] = useState([])

  const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }
  

  const returnCurrentUser = () => {
        
    const obj = parseJwt(localStorage.getItem('tokenId'))
    
    return   {
      email:obj.Email,
      userId:obj.id
    }
}

    const [currentUserId,setCurrentUserId] = useState(returnCurrentUser().userId ? returnCurrentUser().userId : '');

  const [wishlistLoading,setWishListLoading] = useState(true)
  const [deletedBedroomId,setDeletedBedroomId] = useState(0);

  const fetchWishList = async () => {
    const promise = await fetch(import.meta.env.VITE_API_KEY + `/userwishlist?UserId=${currentUserId}`);
    const response = await promise.json();
    setFavorites(response);
    setWishListLoading(false);
  }

  useEffect(() => {
    fetchWishList();
  },[])

  const deleteHandler = (id) => {
    setFavorites(favorites.filter((data) => data.id != id));
    toast.success("Item Successfully Deleted")
  }
  return (
    <>
    <Toaster/>
    <div className='profile_wishlist flex flex-col justify-start'>
          <div className="profile_part_nav  rounded-[14px] mt-[-23px] max-[1024px]:mt-[-20px] p-[20px] bg-white shadow-[1px_2px_10px_-5px_rgba(0,0,0,0.3)] font-[600]">
             My Wishlist    
          </div>
          <div className="profile_wishlist_container bg-white p-[16px] px-[20px] my-[20px]   shadow-[1px_2px_10px_-5px_rgba(0,0,0,0.3)] rounded-[12px]" >
                {/* <div className="empty_message text-customOrange text-[20px]">
                 You have not created any Wishlist yet.
                </div> */}

                <div className="favorite_rooms grid grid-cols-2 max-[615px]:grid-cols-1 gap-[20px]">
                  {
                    favorites.length
                    ?
                    favorites.map((data) => {
                      return (
                        <WishElement bedRoomRoomTypes={data.bedRoomRoomTypes} bedRoomImages={data.bedRoomImages} bedRoomName={data.name} price={data.price} distance={data.distanceToCenter} callback={deleteHandler} key={data.id} wishId={data.userWishlistId} bedRoomId={data.bedRoomId}/>
                        )
                      })
                    :
                    wishlistLoading
                    ?
                    <div className='animating animate-pulse bg-gray-300 max-w-[300px] w-[100%] h-[200px] rounded-[10px]'>
                    </div>
                    :
                    'Your Wishlist is Empty'
                  }
                </div>
          </div>
    </div>
    </>
  )
}

export default Wishlist
import React, { useEffect, useState,useRef } from 'react'
import Card from './Card'
import Caruseldata from './Caruseldata'
import ReactPaginate from 'react-paginate';
import '../Styles/cards.css'
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { AccomodationSlice } from '../../../Redux/AccomodationSlice';
import {favoritesSlice} from '../../../Redux/FavoritesSlice'
import CustomPagination from './Pagination'
import Pagination from 'rc-pagination';
const Cards = ({setCurrentCity}) => {
  const dispatch = useDispatch();
  const [totalPage, setTotalPage] = useState(0);
  const [bedRooms, setBedRooms] = useState([]);
  const [RoomsPerPage, setRoomsPerPage] = useState()
  const [totalData, setTotalData] = useState(0)
  const [endOffset, setEndOffset] = useState(0)
  const [favoritedIds,setFavoritedIds] = useState([]);
  const [distances,setDistances] = useState([])
  const [distanceLimit,setDistanceLimit] = useState(15);
  const [loadingBedRooms,setLoadingBedrooms] = useState(false)
  const [currentPage, setCurrentPage] = useState(useParams().page)
  const [currentCityFilter,setCurrentCityFilter] = useState(useParams().cityId);
  const staticCityId = useParams()
  // States
  const carouselRef = useRef(null); 
  const navigate = useNavigate();
  const FilterCityId = useSelector((state) => state.accomodationReducer.currentFilterOptions.cityId)
  const filterString = useSelector((state) => state.accomodationReducer.currentFilterOptions.universityId)

  const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  const fetchBedRoomsWithUniversity = async () => {   
    // console.log(import.meta.env.VITE_API_KEY + `/bedroom?Page=${currentPage}&UniversityId=${filterString}`);
    setLoadingBedrooms(true)
    const promise = await fetch(import.meta.env.VITE_API_KEY + `/bedroom?Page=${currentPage}&UniversityId=${filterString}`)
    const {response} = await promise.json();
    const {dictance:distance,bedRooms:bedRoomsArr,totalPage} = response;
    setDistances(distance);
    setTotalPage(totalPage)
    const mappedDistances =  distance.map((data) => {
      const arr = Object.entries(data)
      return {
        id : arr[0][0],
        distance: arr[0][1]
      }
    })

    const validDistances = mappedDistances.filter((data) => data.distance < distanceLimit);
    const filteredBedrooms =  bedRoomsArr.filter((bedRoom) => {
      if (validDistances.some((data) => +data.id === bedRoom.id)) {
        return bedRoom
      }
      
    });
    setLoadingBedrooms(false)
    setBedRooms(filteredBedrooms)
    navigate('/accomodations/page/1')
  }

  const fetchBedRoomsWithCity = async () => {
    setLoadingBedrooms(true)
    const promise = await fetch(import.meta.env.VITE_API_KEY + `/bedroom?Page=${currentPage}&CityId=${FilterCityId ? FilterCityId : staticCityId.cityId}`)
    const {response} = await promise.json();
    const {bedRooms,totalPage} = response
    await fetchFavorites();
    setCurrentCity(bedRooms[0].cityName)
    setBedRooms(bedRooms)
    setTotalPage(totalPage);
    setLoadingBedrooms(false)
  }
  const fetchBedRooms = async () => {
  
    setLoadingBedrooms(true)
    const promise = await fetch(import.meta.env.VITE_API_KEY +`/bedroom?Page=${currentPage}`);
    const result = await promise.json();
    const { bedRooms, pageSize, totalData, totalPage } = result.response;
    setRoomsPerPage(pageSize);
    setTotalPage(totalPage);
    // setTotalData(totalData);
    await fetchFavorites();
    setBedRooms(bedRooms)
    // setEndOffset(0 + pageSize);
    setLoadingBedrooms(false)
  }

  useEffect(() => {
    if (FilterCityId) {
      // console.log(FilterCityId);
 
      dispatch(AccomodationSlice.actions.setCurrentFilterOption({universityId:'',cityId:FilterCityId}))
      fetchBedRoomsWithCity();
    }
    else if (staticCityId.cityId) {

      dispatch(AccomodationSlice.actions.setCurrentFilterOption({universityId:'',cityId:staticCityId.cityId}))
      fetchBedRoomsWithCity();
    }
  },[FilterCityId])

  useEffect(() => {
    if (filterString) {
        dispatch(AccomodationSlice.actions.setCurrentFilterOption({universityId:filterString,cityId:''}))
        fetchBedRoomsWithUniversity();
      }
      else if (staticCityId.cityId) {
        // setCurrentCityFilter('')
        dispatch(AccomodationSlice.actions.setCurrentFilterOption({universityId:filterString,cityId:''}))
      }
  },[filterString])


  useEffect(() => {
    return () => {
      setBedRooms([]);
      dispatch(AccomodationSlice.actions.setCurrentFilterOption({
        universityId:'',
        cityId:''
    }))
    };
  },[])
  
  useEffect(() => {
    // console.log(currentCityFilter);
    if (currentCityFilter) {
     fetchBedRoomsWithCity();
   }
   else if (filterString) {
    fetchBedRoomsWithUniversity();
  }

   else if (!filterString && !FilterCityId) {
      fetchBedRooms();
      // console.log(currentCityFilter);
      // console.log(filterString);
    }
   
      setTimeout(() => {
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth' 
         });
      }, 100);
  },[currentPage])
  
  const fetchFavorites = async () => {
    if (localStorage.getItem('tokenId')) {
      const userId = parseJwt(localStorage.getItem('tokenId')).id
      const promise = await fetch(import.meta.env.VITE_API_KEY + `/userwishlist?UserId=${userId}`)
      const response = await promise.json();
      setFavoritedIds(response.map((data) => {
        return {id:data.id, userWishlistId:data.userWishlistId}
      }));
    
    }
  }

  const changePageHandler = (e) => {
    setCurrentPage(e);
    if (staticCityId.cityId) {
      navigate(`/accomodations/page/${e}/city/${staticCityId.cityId}`);
      return false;
    }
    else {
      navigate(`/accomodations/page/${e}`, {replace:true})
    }
  }
  
  
  return (
    <>
    <Toaster/>
    <div className='mb-[30px]'>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3 mb-7">
        {
          bedRooms.length
          ?
          bedRooms.map((data) => {
              // let isFavorite = favoritedIds.map((data) => data.id).includes(data.id);
               let isFavorite = favoritedIds.some((UserFavorites) => UserFavorites.id == data.id);
               let wishListId = favoritedIds.find((favorited) => favorited.id == data.id);
               return <Card distanceToCenter={data.distanceToCenter} userWishlistId={wishListId ? wishListId.userWishlistId : null} isFavorite={isFavorite} bedRoomId={data.id} type={data.bedRoomRoomTypes} price={data.price} key={data.id} title={data.name} description={data.description} slideImages={data.bedRoomImages} />
          })
          :
          loadingBedRooms
          ?
          <>
          <div className='h-[300px] animate-pulse bg-gray-300 rounded-[10px]'></div>
          <div className='h-[300px] animate-pulse bg-gray-300 rounded-[10px]'></div>
          <div className='h-[300px] animate-pulse bg-gray-300 rounded-[10px]'></div>
          </>

          :
          'There is no bedroom available'
        }
      </div>
      <div className='sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <div className='hidden lg:block'>
          
        </div>
        <div className='flex items-center'>
          <span className='text-sm text-gray-700 mr-2'>Page</span>

          {
            bedRooms.length
            ?
            //  <ReactPaginate
            //   previousLabel={'<'}
            //   nextLabel={'>'}
            //   pageCount={totalPage}
            //   onPageChange={changePageHandler}
            //   pageRangeDisplayed={3}
            //   marginPagesDisplayed={1}
            //   containerClassName={'paginate'}
            //     pageLinkClassName={'pagelink'}
            //     previousLinkClassName={'prepagelink'}
            //     nextLinkClassName={'nextpagelink'}
            //     activeLinkClassName={'activepagelink'}
            //     disabledLinkClassName={'disabledpagelink'}
            //     ref={carouselRef}
                
            //   />  
            <CustomPagination currentPage={+currentPage} totalPages={totalPage} onPageChange={changePageHandler}  />
              :
              'Loading'
            }

        </div>
      </div>
    </div>
    </>

  )
}

export default Cards


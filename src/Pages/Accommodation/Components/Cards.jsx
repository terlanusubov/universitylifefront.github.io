import React, { useEffect, useState } from 'react'
import Card from './Card'
import Caruseldata from './Caruseldata'
import ReactPaginate from 'react-paginate';
import '../Styles/cards.css'
import { useSelector } from 'react-redux';

const Cards = () => {

  const [totalPage, setTotalPage] = useState(0);
  const [bedRooms, setBedRooms] = useState([]);
  const [RoomsPerPage, setRoomsPerPage] = useState()
  const [totalData, setTotalData] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [endOffset, setEndOffset] = useState(0)
  const filterUniversityId = useSelector(state => state.detailPageReducer.currentUniversityId)
  
  const fetchBedRooms = async () => {

    const promise = await fetch(import.meta.env.VITE_API_KEY +`/bedroom?Page=${currentPage}`);

    const result = await promise.json();
    console.log(result);

    const { bedRooms, pageSize, totalData, totalPage } = result.response;

    setRoomsPerPage(pageSize);

    setTotalPage(totalPage);

    setTotalData(totalData);

    setBedRooms(bedRooms);

    setEndOffset(0 + pageSize)

  }

  useEffect(() => {
    fetchBedRooms();
  }, [currentPage])

  const [pageNumber, setPageNumber] = useState(0);

  const changePageHandler = (e) => {
    setCurrentPage(e.selected + 1)
  }


  const [items, setItems] = useState(Caruseldata.productData);

  // const itemPerPage=12;
  // const pageVisited=pageNumber*itemPerPage;


  // const displayItems=items.slice(pageVisited,pageVisited+itemPerPage).map((item,index)=>{
  //   return(
  //     <Card 
  //            title={item.title}
  //            city={item.city}
  //             img={item.img}
  //             price={item.price}
  //             distance={item.distance}
  //             type={item.type}
  //             item={item}
  //             key={index}
  //             />

  //   )
  // });

  // const pageCount = Math.ceil(items.lenght/itemPerPage);
  // const changepage = ({selected})=>{
  //   setPageNumber(selected)
  // }

 

  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3 mb-7">
        {
          bedRooms.length
          ?
          bedRooms.map((data, index) => {
            console.log(data);
            return <Card bedRoomId={data.bedRoomStatusId} type={data.bedRoomRoomTypes} price={data.price} key={index} title={data.name} description={data.description} slideImages={data.bedRoomImages} />
          })
          :
          <div className='animate-pulse'>there is no bedroom </div>
        }
      </div>
      <div className='sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <div className='hidden lg:block'>
          {
            bedRooms.length
            ?
            <p className='text-gray-700 text-sm'>
              Showing
              <span className='font-medium'>&nbsp;1&nbsp;-&nbsp;{totalPage} &nbsp;</span>
              properties out of
              <span className='font-medium'>&nbsp;{totalData}</span>
            </p>
            :
            'Loading...'
          }
        </div>
        <div className='flex items-center'>
          <span className='text-sm text-gray-700 mr-2'>Page</span>

          {
            bedRooms.length
            ?
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              pageCount={totalPage}
              onPageChange={changePageHandler}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              containerClassName={'paginate'}
              pageLinkClassName={'pagelink'}
              previousLinkClassName={'prepagelink'}
              nextLinkClassName={'nextpagelink'}
              activeLinkClassName={'activepagelink'}
              disabledLinkClassName={'disabledpagelink'}
            />
            :
            'Loading'
          }

        </div>
      </div>
    </div>

  )
}

export default Cards


import React,{useState} from 'react'
import Card from './Card'
import Caruseldata from './Caruseldata'
import ReactPaginate from 'react-paginate';
import '../Styles/cards.css'

const Cards = () => {
  const [items,setItems]=useState(Caruseldata.productData);
  const[pageNumber,setPageNumber]=useState(0);
  const itemPerPage=12;
  const pageVisited=pageNumber*itemPerPage;
  const displayItems=items.slice(pageVisited,pageVisited+itemPerPage).map((item,index)=>{
    return(
      <Card 
             title={item.title}
             city={item.city}
              img={item.img}
              price={item.price}
              distance={item.distance}
              type={item.type}
              item={item}
              key={index}
              />
    
    )
  });
  const pageCount = Math.ceil(items.lenght/itemPerPage);
  const changepage = ({selected})=>{
    setPageNumber(selected)
  }
  const itemslenght = items.length
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3 mb-7">
        {displayItems}
       
      </div>
      <div className='sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <div className='hidden lg:block'>
          <p className='text-gray-700 text-sm'>
            Showing
            <span className='font-medium'>&nbsp;1&nbsp;-&nbsp;{pageCount} &nbsp;</span>
            properties out of
            <span className='font-medium'>&nbsp;{itemslenght}</span>
          </p>
        </div>
        <div className='flex items-center'>
          <span className='text-sm text-gray-700 mr-2'>Page</span>
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={pageCount}
            onPageChange={changepage}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            containerClassName={'paginate'}
            pageClassName={'pages'}
            previousClassName={'prepage'}
            nextClassName={'nextpage'}
            activeClassName={'activepage'}
            disabledClassName={'disabled'}
          />
        </div>
      </div>
    </div>

  )
}

export default Cards
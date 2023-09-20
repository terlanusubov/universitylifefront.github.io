import React, { useState } from 'react';
import {AiOutlineArrowRight as ArrowRight} from 'react-icons/ai'
import {AiOutlineArrowLeft as ArrowLeft} from 'react-icons/ai'


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxVisiblePages = totalPages <= 5 ? totalPages : 5 ; // Maximum number of visible page numbers
  const pagesToShow = [];

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(+page);
    }
  };

  // Calculate the start and end page numbers to display
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  // Ensure that the start and end pages are within bounds
  if (totalPages <= maxVisiblePages || currentPage <= Math.ceil(maxVisiblePages / 2)) {
    startPage = 1;
    endPage = maxVisiblePages;
  } else if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)) {
    endPage = totalPages;
    startPage = totalPages - maxVisiblePages + 1;
  }

  // Create an array of page numbers to display
  for (let i = startPage; i <= endPage; i++) {
    pagesToShow.push(i);
  }

  return (
    <div className="pagination flex gap-[10px] items-center">
      <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
      <ArrowLeft/>
      </button>
      {startPage > 1 && (
        <>
          <button onClick={() => handlePageClick(1)}>1</button>
          {startPage > 2 && <span>...</span>}
        </>
      )}
      {pagesToShow.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
          className={`${pageNumber === currentPage ? 'active bg-customOrange text-white' : ''} rounded-[5px] border-solid border-[.2px] border-gray-300 w-[25px] h-[25px] items-center justify-center`}
        >
          {pageNumber}
        </button>
      ))}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span>...</span>}
          <button onClick={() => handlePageClick(totalPages)}>{totalPages}</button>
        </>
      )}
      <button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
        <ArrowRight/>
      </button>
    </div>
  );
};

export default Pagination;

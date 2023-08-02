import React from 'react'
// Components
import Comment from './Components/Comment'


// Hooks


// Assets



const Comments = () => {
  return (
    <div className="student_comments  ">
      <div className="student_comments_title">
        <h1 className='text-[30px] font-[600] max-[1024px]:text-[26px]'>
          What Students say about us
        </h1>
      </div>
      <div className="student_comments_container grid grid-cols-3 max-[1024px]:grid-cols-1">
    <Comment></Comment>
    <Comment></Comment>      
    <Comment></Comment>
      </div>
    </div>
  )
}

export default Comments
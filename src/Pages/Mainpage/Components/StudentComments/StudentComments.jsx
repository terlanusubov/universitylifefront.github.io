import React from 'react'
// Components
import Comment from './Components/Comment'


// Hooks


// Assets



const Comments = () => {
  return (
    <div className="student_comments mt-[20px] px-[50px] max-[1024px]:px-[30px]">
      <div className="student_comments_title ">
        <h1 className='text-[30px] font-[600] max-[1024px]:text-[26px] pb-[20px]'>
          What Students say about us
        </h1>
      </div>
      <div className="student_comments_container grid grid-cols-3 max-[1024px]:grid-cols-1 gap-[20px]">
    <Comment></Comment>
    <Comment></Comment>      
    <Comment></Comment>
      </div>
    </div>
  )
}

export default Comments
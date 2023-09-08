import React from 'react'
import {AiFillStar as StarIcon} from 'react-icons/ai'
const Comment = () => {
  return (
<div className="student_comment rounded-[13px]">
    <div className="student_comment_content p-[20px]  rounded-[13px]   shadow-[0_0.5px_2px_0.1px_rgba(0,0,0,0.3)] hover:shadow-[0_2px_4px_0.1px_rgba(0,0,0,0.3)] duration-[.2s] cursor-pointer">
      <div className="student_comment_content_top  flex justify-between items-center">
          <div className="student_comment_name text-[23px] font-[600] max-[576px]:text-[19px] max-[1100px]:text-[21px]">
            Elvin Suleymanov
          </div>
        <div className="student_profile rounded-[50%] w-[60px] h-[60px] bg-customOrange relative">
            <span className="student_profile_text absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] text-white text-[25px] font-[600]">
              ES
            </span>
        </div>
      </div>
      <div className="student_comment_content_bottom flex flex-col gap-[5px]">
        <div className="student_rate flex items-center ">
          <StarIcon className='fill-yellow-400 text-[21px]'></StarIcon>
          <StarIcon className='fill-yellow-400 text-[21px]'></StarIcon>
          <StarIcon className='fill-yellow-400 text-[21px]'></StarIcon>
          <StarIcon className='fill-yellow-400 text-[21px]'></StarIcon>
          <StarIcon className='fill-yellow-400 text-[21px]'></StarIcon>
        </div>
        <div className='student_comment_text '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deserunt culpa quisquam labore veniam porro nam voluptatem beatae, reprehenderit nostrum repellat repudiandae facere dicta aliquid, pariatur vitae, ipsam odio cupiditate!
        </div>
      </div>
    </div>
</div>
  )
}

export default Comment
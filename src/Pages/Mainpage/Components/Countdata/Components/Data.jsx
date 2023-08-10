import React from 'react'

const Data = (props) => {
  return (
    <div className='data  max-[920px]:flex-col gap-[10px] flex items-center justify-center'>

    <div className="data_icon rounded-[50%] w-[90px] h-[90px] flex justify-center items-center text-[40px] text-customOrange bg-[#F1EFF9]">
      {props.children}
    </div>

    <div className="data_text text-center">
        <div className="data_digit font-[600] text-[26px]">
            {props.dataDigit}
        </div>
        <div className="data_name">
            {props.dataName}
        </div>
    </div>

    </div>
  )
}

export default Data
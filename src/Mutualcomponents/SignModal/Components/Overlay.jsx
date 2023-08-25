import React from 'react'

const Overlay = ({children}) => {
  return (
    <div className='fixed flex items-center justify-center bg-opacity-50 top-0 left-0 right-0 bottom-0 w-[100%] bg-gray-500 px-[20px]   h-[100vh] '>
            {children}
    </div>
  )
}

export default Overlay
import React from 'react'
// Components
import Sidebarmodal from './Sidebarmodal'
import Aside from './Aside'
const Sidebar = () => {
  return (
    <div className='sidebar_container relative top-0 left-0 right-0 bottom-0    '>
        <Aside></Aside>
        <Sidebarmodal></Sidebarmodal>
    </div>
  )
}

export default Sidebar
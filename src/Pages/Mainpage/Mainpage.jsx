import React, { useState } from 'react'
// Hooks
import { useTransition } from 'react'


// Components
import Banner from './Components/Banner/Banner'
import Countdata from './Components/Countdata/Countdata'
import Popularcities from './Components/Popularcities/Popularcities'

// Styles
import '../Mainpage/Styles/Style.scss'


const Mainpage = () => {


  return (
   <div className="main_page">
      <Banner></Banner>
      <Countdata></Countdata>
      <Popularcities></Popularcities>
   </div>
  )
}

export default Mainpage
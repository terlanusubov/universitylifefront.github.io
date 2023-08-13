// Hooks...
import { useDispatch, useSelector } from 'react-redux'
// Components...
import { Helmet } from 'react-helmet'
import Profilepage from './Pages/Profilepage/Profilepage'

// Pages...

import { Routes,Route } from 'react-router-dom'
import Header from './Mutualcomponents/Header/Header'
import Footer from './Mutualcomponents/Footer/Footer'
import OurServices from './Pages/Services/OurServices/OurServices'
import Services from './Pages/Services/Services'


// Pages...
import Mainpage from './Pages/Mainpage/Mainpage'
// Stylings...

import './App.css'







 
   

     
function App() {

const state = useSelector((State) => State.searchInputReducer.openedSearchInput)
  return (
   <div className="App pt-[100px]">
    <Header></Header>
    <Routes>
      <Route path='/' element={<Mainpage></Mainpage>}></Route>
       <Route path='/services' element={<Services></Services>}></Route>
    </Routes>
    <Footer></Footer>
   </div>


  )
}

export default App

import { useDispatch, useSelector } from 'react-redux'
// Components...
import { Helmet } from 'react-helmet'
import Profilepage from './Pages/Profilepage/Profilepage'
import Contact from "./Pages/Contact/Contact";
import SignModal from './Mutualcomponents/SignModal/SignModal'
// Pages...
import Accommodation from './Pages/Accommodation/Accommodation'
// Stylings...
import './App.css'

import { Routes,Route } from 'react-router-dom'

import Header from './Mutualcomponents/Header/Header'
import Footer from './Mutualcomponents/Footer/Footer'
import OurServices from './Pages/Services/OurServices/OurServices'
import Services from './Pages/Services/Services'
import Error from './Pages/Error/Error'
import DetailPage from './Pages/DetailPage/Detailpage'
import Mainpage from './Pages/Mainpage/Mainpage'

// Stylings...
import './App.css'

function App() {

const modalState = useSelector((State) => State.modalReducer.isOpen)
  return (
   <div className="App pt-[100px]">
    <Header></Header>
    {
      modalState 
      &&
      <SignModal/>
    }
    <Routes>
       <Route path='/' element={<Mainpage/>}></Route>
       <Route path='/services' element={<Services/>}></Route>
       <Route path='/profile' element={<Profilepage/>}></Route>
       <Route path='/contact-us' element={<Contact/>}></Route>
       <Route path='/accomodations/page/:page' element={<Accommodation/>}></Route>
       <Route path='/accomodations/bedroom/:bedRoomId' element={<DetailPage/>}></Route>
       <Route path='/accomodations/page/:page/city/:cityId' element={<Accommodation/>}></Route>
       <Route path='*' element={<Error/>}></Route>    
    </Routes>
    <Footer></Footer>
   </div>
  )

}

export default App;

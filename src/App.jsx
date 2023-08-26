// Hooks...
import { useDispatch, useSelector } from 'react-redux'
// Components...
import { Helmet } from 'react-helmet'
import Profilepage from './Pages/Profilepage/Profilepage'
import Contact from "./Pages/Contact/Contact";
import SignModal from './Mutualcomponents/SignModal/SignModal'
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
       <Route path='/' element={<Mainpage></Mainpage>}></Route>
       <Route path='/services' element={<Services></Services>}></Route>
       <Route path='/profile' element={<Profilepage></Profilepage>}></Route>
       <Route path='/contact-us' element={<Contact></Contact>}></Route>
    </Routes>
    <Footer></Footer>
   </div>
  )

}

export default App;

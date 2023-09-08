// Hooks...
import { useDispatch, useSelector } from 'react-redux'
// Components...
import { Helmet } from 'react-helmet'
// Pages...

import { Routes,Route } from 'react-router-dom'

import Header from './Mutualcomponents/Header/Header'
import Footer from './Mutualcomponents/Footer/Footer'




// Pages...
import Mainpage from './Pages/Mainpage/Mainpage'

// Stylings...
import './App.css'

function App() {

  return (
   <div className="App pt-[100px]">
    <Header></Header>
    <Routes>
       <Route path='/' element={<Mainpage></Mainpage>}></Route>
    </Routes>
    <Footer></Footer>
   </div>
  )

}

export default App;
// Hooks...
import { useDispatch, useSelector } from 'react-redux'

// Components...
import { Helmet } from 'react-helmet'
import { Routes,Route } from 'react-router-dom'
import Profilepage from './Pages/Profilepage/Profilepage'

// Delete blank above!!
// Pages...

// Stylings...
import './App.css'



function App() {


  return (
   <div className="App">
    <Profilepage></Profilepage>

   </div>
  )
}

export default App

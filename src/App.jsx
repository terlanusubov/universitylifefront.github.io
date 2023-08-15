// Hooks...
import { useDispatch, useSelector } from 'react-redux'

// Components...
import { Helmet } from 'react-helmet'
import { Routes,Route } from 'react-router-dom'
// Pages...
import Accommodation from './Pages/Accommodation/Accommodation'
// Stylings...
import './App.css'



function App() {


  return (
   <div className="App">
    <Accommodation />
   </div>
  )
}

export default App

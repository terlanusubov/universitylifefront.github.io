// Hooks...
import { useDispatch, useSelector } from 'react-redux'
// Components...
import { Helmet } from 'react-helmet'
import { Routes,Route } from 'react-router-dom'

// Pages...
import Mainpage from './Pages/Mainpage/Mainpage'
// Stylings...

import './App.css'



function App() {

const state = useSelector((State) => State.searchInputReducer.openedSearchInput)
  return (
   <div className="App pt-[100px]">

     

   </div>
  )
}

export default App

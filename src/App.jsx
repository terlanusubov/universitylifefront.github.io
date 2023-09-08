// Hooks...
import { useDispatch, useSelector } from 'react-redux'
// Components...
import { Helmet } from 'react-helmet'

// Pages...

import { Routes,Route } from 'react-router-dom'
import Services from './Pages/Services/Services'


// Pages...

// Stylings...

import './App.css'


     
function App() {

const state = useSelector((State) => State.searchInputReducer.openedSearchInput)
  return (


   <div className="App pt-[100px]">
    <Services/>
   </div>


  )
}

export default App

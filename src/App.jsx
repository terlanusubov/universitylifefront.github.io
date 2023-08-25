// Hooks...
import { useDispatch, useSelector } from 'react-redux'

// Components...
import { Helmet } from 'react-helmet'
import { Routes,Route } from 'react-router-dom'
import SignModal from './Mutualcomponents/SignModal/SignModal'
// Pages...

// Stylings...
import './App.css'



function App() {


  return (
   <div className="App">
    <SignModal/>
   </div>
  )
}

export default App

// Hooks...
import { useDispatch, useSelector } from 'react-redux'

// Components...
import { Helmet } from 'react-helmet'
import { Routes, Route } from 'react-router-dom'
// Pages...

// Stylings...
import './App.css'
import SignUpModal from './Mutualcomponents/SignUpModal/SignUpModal'



function App() {


  return (
    <div className="App">

      <SignUpModal />
    </div>
  )
}

export default App

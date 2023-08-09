// Hooks...
import { useDispatch, useSelector } from 'react-redux'

// Components...
import { Helmet } from 'react-helmet'
import { Routes, Route } from 'react-router-dom'
// Pages...

// Stylings...
import './App.css'
import OurServices from './Pages/Services/Services';



function App() {


  return (
    <div className="App">
      <OurServices />
    </div>
  )
}

export default App

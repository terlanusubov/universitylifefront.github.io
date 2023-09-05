// Hooks...
import { useDispatch, useSelector } from "react-redux";
// Components...
import { Helmet } from "react-helmet";
// import Profilepage from './Pages/Profilepage/Profilepage'
import Contact from "./Pages/Contact/Contact";
// Pages...

import { Routes, Route } from "react-router-dom";
// import Header from './Mutualcomponents/Header/Header'
// import Footer from './Mutualcomponents/Footer/Footer'
// import OurServices from './Pages/Services/OurServices/OurServices'
// import Services from './Pages/Services/Services'

// Pages...
// import Mainpage from './Pages/Mainpage/Mainpage'

// Stylings...

import "./App.css";

function App() {
  const state = useSelector(
    (State) => State.searchInputReducer.openedSearchInput
  );
  return (
    <div className="App pt-[100px]">
      <Contact></Contact>
    </div>
  );
}

export default App;

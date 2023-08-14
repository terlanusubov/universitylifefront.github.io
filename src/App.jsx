// Hooks...
import { useDispatch, useSelector } from "react-redux";

// Components...
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";

// Pages...
import Detailpage from "./Pages/DetailPage/Detailpage";
// Stylings...
import "./App.css";

function App() {
  return (
    <div className="App">
      <Detailpage></Detailpage>
    </div>
  );
}

export default App;

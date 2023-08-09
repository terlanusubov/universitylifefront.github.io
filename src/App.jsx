// Hooks...
import { useDispatch, useSelector } from "react-redux";

// Components...
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
// Pages...

// Stylings...
import "./App.css";

function App() {
  return (
    <div className="App">
      <Contact></Contact>
    </div>
  );
}

export default App;

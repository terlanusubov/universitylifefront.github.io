// Hooks...
import { useDispatch, useSelector } from "react-redux";

// Components...
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import Footer from "./Mutualcomponents/Footer/Footer";

// Pages...

// Stylings...
import "./App.css";

function App() {
  return (
    <div className="App pt-[100px]">
    <Header></Header>
    <Routes>
      <Route path='/' element={<Mainpage></Mainpage>}></Route>
    </Routes>
      <Footer></Footer>
   </div>
  );
}

export default App;

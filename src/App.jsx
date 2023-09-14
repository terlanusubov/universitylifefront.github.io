// Hooks...
import React, { useState } from "react";
import Footer from "./Mutualcomponents/Footer/Footer";
import Error from "./Pages/Error/Error";
import "./App.css";

function App() {
  //
  // const [showError, setShowError] = useState(false);
  // //
  // const toggleError = () => {
  //   setShowError(!showError);
  // };
  //
  return (
    <div className="App">
      {/* {showError ? (
        <Error goBack={toggleError} />
      ) : (
        <Footer showError={toggleError} />
      )} */}
      <Footer></Footer>
      {/* <Error></Error> */}
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {       
  return (
    <div>
      <Navbar />
      <Home />
      <Main />
      <Footer />

      {/*  <h2>working</h2> */}
    </div>
  );
};

export default App;

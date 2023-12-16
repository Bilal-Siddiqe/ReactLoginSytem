import React, { useState } from "react";
import "./App.css";
import CardSection from "./components/CardSection";
import Navbar from "./components/Navbar";
import product from "./components/product";
import SignUpForm from "./components/SignUpForm";
import SplashScreen from "./components/SplashScreen";

function App() {

  return (
    <>
      {/* <SplashScreen /> */}
      {/* <Navbar brand="SCE" /> */}
      <SignUpForm/>
      {/* <CardSection data={product}/> */}
    </>
  );
}

export default App;

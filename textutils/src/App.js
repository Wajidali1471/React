
import './App.css';
import Navbar from './Components/Navbar';
import Forms from './Components/Forms';
// import About from './Components/About';
import React, { useState } from 'react';

function App() {
  const [mode, setmode] = useState("dark")
  function ChangeColor() {
    if (mode === "dark") {
      setmode("light")

    }
    else {
      setmode("dark")
    }
  }
  return (
    <>
      <Navbar
        tittle="TextUtils"
        hometext="Home"
        abouttext="About Us"
        servisetext="Services"
        searchbar={false}
        mode={mode}
        ChangeColor={ChangeColor}


      />
      {/* <About/> */}
      <Forms heading="Enter Your Text below" />
    </>
  );
}

export default App;

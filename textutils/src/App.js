
import './App.css';
import Navbar from './Components/Navbar';
import Forms from './Components/Forms';
// import About from './Components/About';
import React, { useState } from 'react';

function App() {
  const [mode, setmode] = useState("light")

  function ChangeColor() {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";

    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#2d6299";

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

      <Forms heading="Enter Your Text below" mode={mode} />

    </>
  );
}

export default App;

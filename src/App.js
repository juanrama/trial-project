import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Slideshow from "./Components/Slideshow";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Feature/>
      <Slideshow/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;

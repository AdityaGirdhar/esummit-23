import Navbar from "./Components/Navbar";
import { useState, useEffect } from 'react';
import './App.css'
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {

  // getting window width
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', ()=>{
      setWidth(window.innerWidth);
    });
    return () => {
        window.removeEventListener('resize', ()=>{
          setWidth(window.innerWidth);
        });
    }
  }, []);
  
  // checking if display is mobile
  const isMobile = width <= 768;
  if (!isMobile) {
    document.body.onpointermove = event => {
      const blob = document.getElementById('blob');
      const { clientX, clientY } = event;
      blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, {duration: 4000, fill: "forwards"})
    }
  }

  return (
    <>
      <div id="blob" className={isMobile ? "blob-small" : ""}></div>
      <div id={isMobile ? "blur-less" : "blur"}></div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

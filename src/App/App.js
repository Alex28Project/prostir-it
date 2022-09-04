import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "../pages/Home/Home.js";
import Services from "../pages/Services/Services.js";
import Price from "../pages/Price/Price.js";
import About from "../pages/About/About.js";
import Feedback from "../pages/Feedback/Feedback.js";

import Nav from '../pages/tags/Nav/Nav.js';
import Footer from '../pages/tags/Footer/Footer.js';

function App() {
  return (
    <>
      <BrowserRouter>        
        <Nav />    
               
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="services" element={<Services />} />
          <Route path="price" element={<Price />} />
          <Route path="about" element={<About />} />
          <Route path="feedback" element={<Feedback />} />
        </Routes>
        
        <Footer />        
      </BrowserRouter>      
    </>
  );
}

export default App;

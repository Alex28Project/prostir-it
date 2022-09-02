import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "../pages/Home/Home.js";
import Services from "../pages/Services/Services.js";
import About from "../pages/About/About.js";
import Feedback from "../pages/Feedback/Feedback.js";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavLink to="/">Головна</NavLink>
        <NavLink to="services">Послуги</NavLink>
        <NavLink to="about">Про нас</NavLink>
        <NavLink to="feedback">Зворотній зв'язок</NavLink> */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="###">
              <img src={require("./Logotip12.png")} alt="" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">                 
                  <NavLink to="/" className={'nav-link'}>Головна</NavLink>                  
                </li>

                <li class="nav-item">                  
                  <NavLink to="services" className={'nav-link'}>Послуги</NavLink>                    
                </li>

                <li class="nav-item dropdown">
                  <li class="nav-item">
                    <NavLink to="about" className={'nav-link'}>Про нас</NavLink>                    
                  </li>

                </li>
                <li class="nav-item">                                
                  <NavLink to="feedback" className={'nav-link'}>Зворотній зв'зок</NavLink>                    
                </li>
              </ul>

              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Пошук"
                  aria-label="Search"
                />
                <button class="btn btn-primary" type="submit">
                  Пошук
                </button>
              </form>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="feedback" element={<Feedback />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

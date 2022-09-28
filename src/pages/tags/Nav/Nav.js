import React from "react";
import "./Nav.css";

import {Link} from 'react-router-dom';

export default function Nav() {
  
  return (
    <>    
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
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
                <Link class="nav-link" to='/' aria-current="page">Головна</Link>                
              </li>

              <li class="nav-item">               
                <Link class="nav-link" to='services'>Послуги</Link>                
              </li>

              <li class="nav-item">               
                <Link class="nav-link" to='price'>Прайс</Link>                
              </li>

                <li class="nav-item">                  
                  <Link class="nav-link" to='about'>Про нас</Link>                  
                </li>
              
              <li class="nav-item">                            
                 <Link class="nav-link" to='feedback'>Зворотній зв'язок</Link>                
              </li>
            </ul>
            
            {/* <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Пошук"
                aria-label="Search"
              />
              <button class="btn btn-primary" type="submit">
                Пошук
              </button>
            </form> */}
          </div>
        </div>
      </nav>      
        
    </>
  );
}

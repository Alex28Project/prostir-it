import React from "react";
import "./Footer.css";

import { ImPhone, ImMail3, ImFacebook, ImTelegram, ImInstagram } from "react-icons/im";

export default function Footer() {
  return (
    <>    
      <div class="footer">
        <footer>
          <div class="container">
          <br />
          <hr />
            <div class="row">
              <div class="col-sm-6 col-md-3 item">
                <h5>Послуги</h5>
                <br />
                <ul>
                  <li>
                    <a href="###">Монтаж</a>
                  </li>
                  <li>
                    <a href="###">Демонтаж</a>
                  </li>
                  <li>
                    <a href="###">Проектування</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-6 col-md-3 item">
                <h5>Для зв'язку</h5>
                <br/>
                <ul>
                  <li>
                    <ImMail3 />                 
                    <span>  itprostirit@gmail.com</span>                    
                  </li>
                  <li>
                    <ImPhone />                 
                    <span>  +38(098)000-00-00</span>
                  </li>
                </ul>
              </div>
              
              <div class="col-sm-6 col-md-3 item">
              <h5>Соціальні мережі</h5>
              <br />
              <ul>
                <li>
                  <ImFacebook />
                  <a href="https://facebook.com">  facebook</a>
                </li>
                <li>
                  <ImTelegram />
                  <a href="https://telegram.com">  telegram</a>
                </li>
                <li>
                  <ImInstagram />
                  <a href="https://instagram.com">  instagram</a>
                </li>
              </ul>
              </div>
              </div>
              <div class="col-md-6 item text">
                <h5>Простір ІТ</h5>
                <br />
                <p>Компанія надає послуги в сфері інформаційних технологій.</p>
              </div>
              <hr />          
            <p class="copyright">Prostir-IT © 2022. Всі права захищені.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

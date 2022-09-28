import React from "react";

export default function Feedback() {
  return (
    
    <div class="container-fluid">
    <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={require("./contact7.png")} class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Контактний телефон</h5>
        <p class="card-text">Наш контактний номер телефону:<br />
        8(067)000-00-00
        </p>        
      </div>
    </div>
  </div>
  </div>

  <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={require("./contact6.png")} class="img-fluid rounded-end" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Електронна пошта</h5>
        <p class="card-text">Адреса електронної пошти: <br />
        <a href='gmail.com'>itprostirit@gmail.com</a>
        </p>        
      </div>
    </div>
  </div>
  </div>
</div>      
   
  );
}

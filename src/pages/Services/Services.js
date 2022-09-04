import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <>
      <br />
      <div class="shadow p-3 mb-5 bg-body rounded">
        <div class="card" id="card1">
          <img src={require("./drawing.jpg")} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Проектні роботи</h5>
            <p class="card-text">Проектні роботи є передумовою всіх робіт.</p>
            {/* <a href="###" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
      </div>

      <div class="shadow p-3 mb-5 bg-body rounded">
        <div class="card" id="card2">
          <img src={require("./drawing.jpg")} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Монтажні роботи</h5>
            <p class="card-text">
              Монтажні роботи любої складності і різного об'єму.
            </p>
            <a href="###" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>

      <div class="shadow p-3 mb-5 bg-body rounded">
        <div class="card" id="card3">
          <img src={require("./drawing.jpg")} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Демонтажні роботи</h5>
            <p class="card-text">
              Знаймаємося демонтажем.
            </p>
            <a href="###" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

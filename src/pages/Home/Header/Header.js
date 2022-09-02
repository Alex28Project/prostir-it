import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <div class="container-fluid">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src={require("./CarouselImage1.jpg")}
                  class="d-block w-100 h-100"
                  alt="..."
                />
                <div class="carousel-caption d-block d-md-block">
                  <h3>Компанія "Простір"</h3>
                  <p>Проводить налаштування IT обладнання компаній</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src={require("./CarouselImage2.jpg")}
                  class="d-block w-100 h-100"
                  alt="..."
                />
                <div class="carousel-caption d-block d-md-block">
                  <h3>Компанія "Простір"</h3>
                  <p>Проектує і виконує монтажні роботи СКС СКД</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src={require("./CarouselImage3.jpg")}
                  class="d-block w-100 h-100"
                  alt="..."
                />
                <div class="carousel-caption d-block d-md-block">
                  <h3>Компанія "Простір"</h3>
                  <p>Проводить підтримку інфраструктури IT</p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

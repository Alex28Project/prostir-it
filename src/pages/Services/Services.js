import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <>
    
      <div class="flex-container">
        <div class="row">
          <div class="col-sm-6">
            <div class="card col-md-6 col-lg-12 shadow-lg p-3 mb-5 bg-body rounded">
              <img
                src={require("./card1.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Проектні роботи.</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="###" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card col-md-6 col-lg-12 shadow-lg p-3 mb-5 bg-body rounded">
              <img
                src={require("./card2.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Монтаж структурованих кабельних систем СКС.</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="###" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded">
              <img
                src={require("./card3.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Монтаж систем відеоспостереження.</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="###" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded">
              <img
                src={require("./card5.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Монтаж систем контроля доступом СКД.</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="###" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded">
              <img
                src={require("./card4.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Налаштування обладнання IT.</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="###" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded">
              <img
                src={require("./card6.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Роботи по демонтажу.</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="###" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

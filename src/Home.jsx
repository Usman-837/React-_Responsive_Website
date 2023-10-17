import React from "react";
import img1 from "./images/homeimg1.jpg";
import img2 from "./images/homeimg2.jpg";
import img3 from "./images/homeimg3.jpg";

const Home = () => {
  return (
    <>
    <section id="header">     
    <div className="container-fluid">
        <div className="row">
          <div className="col-12 mx-auto">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={img1} class="d-block w-100 h-100" alt="Food" />
                </div>
                <div class="carousel-item">
                  <img src={img2} class="d-block w-100 h-100" alt="Food" />
                </div>
                <div class="carousel-item">
                  <img src={img3} class="d-block w-100 h-100" alt="Food" />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
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
                data-bs-target="#carouselExample"
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
        </div>
      </div>
      </section>
 
    </>
  );
};


export default Home;

import React from "react";
import imageOne from "../assets/images/image-one.jpg";
import imageTwo from "../assets/images/image-two.jpg";
import imageThree from "../assets/images/image-three.jpg";
const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={imageOne}
              className="d-block w-100"
              style={{ height: "700px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <img
              src={imageTwo}
              className="d-block w-100"
              style={{ height: "700px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <img
              src={imageThree}
              className="d-block w-100"
              style={{ height: "700px" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;

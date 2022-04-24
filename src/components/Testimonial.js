import React from "react";
import "../../src/index.css";
import Man from "../assets/images/man.jpg";
import Girl1 from "../assets/images/girl1.jpg";

const Testimonial = () => {
  return (
    <section idName="testimonials">
      <div className="container">
        <h1>TESTIMONIALS</h1>
        <p className="text-center subHeaderTestimonial">
          This is some textimonials about our company
        </p>
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="profile">
              {/* <img src={Man} className="user" /> */}
              <blockquote>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </blockquote>
              <h3>
                Jhon/ <span>Co-Founder at X</span>
              </h3>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="profile">
              {/* <img src={Girl1} className="user" /> */}
              <blockquote>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </blockquote>
              <h3>
                Jhon/ <span>Co-Founder at X</span>
              </h3>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="profile">
              {/* <img src={Man} className="user" /> */}
              <blockquote>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </blockquote>
              <h3>
                Jhon/ <span>Co-Founder at X</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

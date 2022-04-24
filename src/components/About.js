import React from "react";
import "../../src/index.css";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>About Us</h2>
            <div className="about-content">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classNameical Latin literature from 45
              BC, making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classNameical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </div>
            <button type="button" className="btn btn-primary">
              {" "}
              Read More
            </button>
          </div>

          <div className="col-md-6 skills-bar">
            <p>Adobe Photoshop</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "85%" }}>
                {" "}
                85%
              </div>
            </div>
            <p>Adobe illustrator</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "80%" }}>
                {" "}
                80%
              </div>
            </div>
            <p>Website</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "75%" }}>
                {" "}
                75%
              </div>
            </div>
            <p>Mobile Apps</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "65%" }}>
                {" "}
                65%
              </div>
            </div>
            <p>Desktop Apps</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "50%" }}>
                {" "}
                50%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

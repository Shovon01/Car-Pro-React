import React from "react";
import "../../src/index.css";
import Rock from "../assets/images/rock.jpg";
import Paul from "../assets/images/paulwalker.jpg";
import Rod from "../assets/images/rod.jpg";
import Vin from "../assets/images/vin.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   solid,
//   regular,
//   brands,
// } from "@fortawesome/fontawesome-svg-core/import.macro";

const Team = () => {
  return (
    <section id="team">
      <div className="container">
        <h1>Our Team</h1>
        <div className="row">
          <div className="col-md-3 profile-pic text-center">
            <div className="img-box">
              <img src={Rock} className="img-responsive" />
              {/* <ul>
                <a href="##">
                  <li>
                    <i className="fab fa-facebook"></i>
                  </li>
                </a>
                <a href="##">
                  <li>
                    <i className="fab fa-twitter"></i>
                  </li>
                </a>
                <a href="##">
                  <li>
                    <i className="fab fa-linkedin"></i>
                  </li>
                </a>
              </ul> */}
            </div>
            <h2>Rock Jonson</h2>
            <h3>Founder/CEO</h3>
            <p>Enjoy the Ride</p>
          </div>

          <div className="col-md-3 profile-pic text-center">
            <div className="img-box">
              <img src={Paul} className="img-responsive" />
              {/* <ul>
                <a href="##">
                  <li>
                    <i className="fab fa-facebook"></i>
                  </li>
                </a>
                <a href="##">
                  <li>
                    <i className="fab fa-twitter"></i>
                  </li>
                </a>
                <a href="##">
                  <li>
                    <i className="fab fa-linkedin"></i>
                  </li>
                </a>
              </ul> */}
            </div>
            <h2>Paul Walker</h2>
            <h3>Marketing Head</h3>
            <p>Lets Earn Some Money</p>
          </div>

          <div className="col-md-3 profile-pic text-center">
            <div className="img-box">
              <img src={Rod} className="img-responsive" />
              {/* <ul>
                <a href="##">
                  <li>
                    <i className="fab fa-facebook"></i>
                  </li>
                </a>
                <a href="##">
                  <li>
                    <i className="fab fa-twitter"></i>
                  </li>
                </a>
                <a href="##">
                  <li>
                    <i className="fab fa-linkedin"></i>
                  </li>
                </a>
              </ul> */}
            </div>
            <h2>Michelle Rodriguez</h2>
            <h3>Frontend Designer</h3>
            <p>Style Yourself</p>
          </div>

          <div className="col-md-3 profile-pic text-center">
            <div className="img-box">
              <img src={Vin} className="img-responsive" />
              {/* <ul>
                <a href="##">
                  <li>
                    <i className="fab fa-facebook"></i>
                  </li>
                </a>
                <a href="##">
                  <li>
                    <i className="fab fa-twitter"></i>
                  </li>
                </a>
                <a href="##">
                  <li>
                    <i className="fab fa-linkedin"></i>
                  </li>
                </a>
              </ul> */}
            </div>
            <h2>Vin Diesel</h2>
            <h3>Backend Devloper</h3>
            <p>Booom!!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

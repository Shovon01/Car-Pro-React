import React from "react";
import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Slider from "../components/Slider";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";

const SecoundRouteHomePage = () => {
  return (
    <div>
      <Slider />
      <About />
      <Team />
      <Testimonial />
      <ContactUs />
    </div>
  );
};

export default SecoundRouteHomePage;

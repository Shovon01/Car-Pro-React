import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import Slider from "./Slider";
import Team from "./Team";
import Testimonial from "./Testimonial";

const Home = () => {
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

export default Home;

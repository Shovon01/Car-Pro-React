import React from "react";
import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <About />
      <Team />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;

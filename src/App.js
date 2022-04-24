import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ContactUs from "./components/ContactUs";
import AllRoutes from "./route/AllRoutes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import TestimonialPage from "./pages/TestimonialPage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import About from "./components/About";
import SecoundRouteHomePage from "./pages/SecoundRouteHomePage";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/TeamPage" element={<TeamPage />} />
          <Route exact path="/TestimonialPage" element={<TestimonialPage />} />
          <Route exact path="/AboutPage" element={<AboutPage />} />
          <Route exact path="/ContactUsPage" element={<ContactUsPage />} />
        </Routes>
      </Router>

      {/* <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AboutPage" element={<About />} />
          <Route exact path="/TeamPage" element={<Team />} />
          <Route exact path="/TestimonialPage" element={<Testimonial />} />

          <Route exact path="/ContactUsPage" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router> */}
    </div>
  );
}

export default App;

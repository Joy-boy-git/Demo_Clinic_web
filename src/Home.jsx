import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import bg from "./assets/web-bg.jpg";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import {Link} from "react-router-dom";

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false,     // Animation happens only once
      disable: "false", // Disable AOS on mobile devices
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Dark Overlay */}
        <div className="w-full h-full flex items-center">
          <div className="max-w-2xl px-6 sm:px-10 md:px-16">
            <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Welcome to
              <br />
              STAR Clinic
            </h1>

            <p className="text-black mt-6 text-base sm:text-lg md:text-xl">
              Your trusted healthcare partner. Book appointments easily and
              receive quality medical care from experienced doctors.
            </p>
            <Link to="/Contact" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
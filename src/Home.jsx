import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

import video from "./assets/video.mp4";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      disable: false,
    });

    AOS.refresh();

    // Loader timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Loader Screen
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
        {/* Logo / Website Name */}
        <h1 className="text-white text-5xl md:text-7xl font-extrabold animate-pulse">
          STAR Clinic
        </h1>

        {/* Spinner */}
        <div className="mt-10 w-16 h-16 border-4 border-white border-t-blue-500 rounded-full animate-spin"></div>

        {/* Loading Text */}
        <p className="mt-6 text-gray-300 text-lg tracking-widest">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-2xl px-6 sm:px-10 md:px-16">
            <h1
              className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
              data-aos="fade-right"
            >
              Welcome to
              <br />
              STAR Clinic
            </h1>

            <p
              className="text-white mt-6 text-base sm:text-lg md:text-xl"
              data-aos="fade-up"
            >
              Your trusted healthcare partner. Book appointments easily and
              receive quality medical care from experienced doctors.
            </p>

            <Link
              to="/Contact"
              data-aos="zoom-in"
              className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import GeneralConsult from "./GeneralCosult";
import SpecialistConsult from "./SpeacialistConsult";
import Vaccination from "./Vaccination";
import Laboratory from "./Laboratory";

import instagram from "./assets/instagram.png";
import facebook from "./assets/facebook.png";
import youtube from "./assets/youtube.png";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <header className="hidden md:flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-4xl font-bold">
          STAR <span className="text-blue-600">Clinic</span>
        </h1>

        <div className="flex gap-8 text-gray-700">
          <span>📞 +91 9876543210</span>
          <span>📱 +91 6543217890</span>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-600" />
            <span>info@starclinic.com</span>
          </div>
        </div>

        <Link to="/contact">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition">
            Book Appointment
          </button>
        </Link>
      </header>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* Logo */}
          <h1 className="text-3xl font-bold md:hidden">
            STAR <span className="text-blue-600">Clinic</span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 font-medium">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-blue-600">
                Services
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={instagram} alt="" className="w-7" />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={facebook} alt="" className="w-7" />
            </a>

            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <img src={youtube} alt="" className="w-7" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t">
            <ul className="flex flex-col">
              <li>
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 hover:bg-gray-100"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 hover:bg-gray-100"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 hover:bg-gray-100"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 hover:bg-gray-100"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/general" element={<GeneralConsult />} />

          <Route path="/specialist" element={<SpecialistConsult />} />

          <Route path="/vaccination" element={<Vaccination />} />

          <Route path="/laboratory" element={<Laboratory />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
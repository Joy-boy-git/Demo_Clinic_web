import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
    <section className="bg-gray-50 py-16 px-6 lg:px-20">

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Contact Us
        </h1>

        <p className="text-gray-500 mt-4 text-lg">
          We're here to help you. Feel free to contact us anytime.
        </p>
      </div>

      {/* Main Section */}
      <div className="grid lg:grid-cols-2 gap-12 mt-16">

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold mb-6">
            Send a Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold mb-8">
            Clinic Information
          </h2>

          {/* Address */}
          <div className="flex items-start gap-4 mb-6">
            <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />

            <div>
              <h3 className="font-semibold text-lg">
                Address
              </h3>

              <p className="text-gray-600">
                123 Medical Street,
                <br />
                Chennai,
                Tamil Nadu - 600001
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 mb-6">
            <FaPhoneAlt className="text-blue-600 text-2xl mt-1" />

            <div>
              <h3 className="font-semibold text-lg">
                Phone
              </h3>

              <p className="text-gray-600">
                +91 98765 43210
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 mb-6">
            <FaEnvelope className="text-blue-600 text-2xl mt-1" />

            <div>
              <h3 className="font-semibold text-lg">
                Email
              </h3>

              <p className="text-gray-600">
                info@starclinic.com
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-4 mb-8">
            <FaClock className="text-blue-600 text-2xl mt-1" />

            <div>
              <h3 className="font-semibold text-lg">
                Working Hours
              </h3>

              <p className="text-gray-600">
                Monday - Saturday
              </p>

              <p className="text-gray-600">
                9:00 AM - 8:00 PM
              </p>

              <p className="text-gray-600">
                Sunday : Closed
              </p>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919876543210?text=Hello%20Doctor,%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-3 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition"
          >
            <FaWhatsapp className="text-2xl" />
            Book Appointment
          </a>

        </div>

      </div>

      {/* Google Map */}
      <div className="mt-16">

        <h2 className="text-3xl font-bold text-center mb-8">
          Find Us
        </h2>

        <iframe
          className="w-full h-[450px] rounded-2xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22329.995733572257!2d77.21074285802254!3d8.359996700123249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04549e67bbabbf%3A0x4542707b55dcf8cd!2sUthramcode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1782892634875!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"   
          loading="lazy"
          allowFullScreen
          title="Google Map"
        ></iframe>

      </div>


    </section>
    
    </div>
  );
};

export default Contact;
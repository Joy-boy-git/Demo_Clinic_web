import React from "react";
import clinic from "./assets/clinic.png";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
    <section className="py-16 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          About Us
        </h1>
      </div>

      {/* About Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mt-12">
        
        {/* Text */}
        <div className="lg:w-1/2">
          <p className="text-gray-700 text-base md:text-lg leading-8 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rerum minima cupiditate sit sint eos veniam vel id,
            deleniti fugiat dolorem, architecto asperiores nam
            molestiae quibusdam possimus recusandae quam eaque cum
            accusamus reprehenderit ipsam. Ad, ullam. Cumque pariatur
            tenetur minus quis, aliquam suscipit porro excepturi
            labore non quod! Praesentium dignissimos, saepe dicta
            odit officia ipsum ipsa, rerum sit, quasi nisi molestiae.
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={clinic}
            alt="Clinic"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mt-16">
        <div>
          <h1 className="text-blue-500 text-4xl font-bold">15+</h1>
          <p className="text-gray-700 mt-2">Years of Experience</p>
        </div>

        <div>
          <h1 className="text-blue-500 text-4xl font-bold">5000+</h1>
          <p className="text-gray-700 mt-2">Happy Patients</p>
        </div>

        <div>
          <h1 className="text-blue-500 text-4xl font-bold">20+</h1>
          <p className="text-gray-700 mt-2">Awards Won</p>
        </div>
      </div>
    </section>
    
    </div>
  );
};

export default About;
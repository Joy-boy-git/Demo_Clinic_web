import React from 'react';
import { Link } from 'react-router-dom';
import './General';
import Footer from './Footer';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services =() => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            disable: "false",
        });
        AOS.refresh();
    }, []);

    return(
        <div>
            <div className='text-center' data-aos="fade-up" >
                <h1 className='text-3xl md:text-5xl font-extrabold mt-6 text-black'>Services</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
                <div className='bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:p-4 transition-shadow duration-300' data-aos="fade-up-right">
                    <h2 className='text-xl font-semibold text-black mb-4'>General Consultation</h2>
                    <p className='text-gray-600'>
                        Routine health checkups and treatment.
                    </p>
                    <a href="/general" className='text-blue-500 hover:text-blue-700'>
                        Learn More
                    </a>
                </div>
                <div className='bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:p-4 transition-shadow duration-300' data-aos="fade-up-left">
                    <h2 className='text-xl font-semibold text-black mb-4'>General Consultation</h2>
                    <p className='text-gray-600'>
                        Routine health checkups and treatment.
                    </p>
                    <a href="/general" className='text-blue-500 hover:text-blue-700'>
                        Learn More
                    </a>    
                </div>
                <div className='bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:p-4 transition-shadow duration-300' data-aos="fade-up-right">
                    <h2 className='text-xl font-semibold text-black mb-4'>General Consultation</h2>
                    <p className='text-gray-600'>
                        Routine health checkups and treatment.
                    </p>
                     <a href="/general" className='text-blue-500 hover:text-blue-700'>
                        Learn More
                    </a>  
                </div>
                <div className='bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:p-4 transition-shadow duration-300' data-aos="fade-up-left">
                    <h2 className='text-xl font-semibold text-black mb-4'>General Consultation</h2>
                    <p className='text-gray-600'>
                        Routine health checkups and treatment.
                    </p>
                     <a href="/general" className='text-blue-500 hover:text-blue-700'>
                        Learn More
                    </a>  
                </div>
                <div className='bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:p-4 transition-shadow duration-300' data-aos="fade-up-right">
                    <h2 className='text-xl font-semibold text-black mb-4'>General Consultation</h2>
                    <p className='text-gray-600'>
                        Routine health checkups and treatment.
                    </p>
                     <a href="/general" className='text-blue-500 hover:text-blue-700'>
                        Learn More
                    </a>  
                </div>
                <div className='bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:p-4 transition-shadow duration-300' data-aos="fade-up-left" >
                    <h2 className='text-xl font-semibold text-black mb-4'>General Consultation</h2>
                    <p className='text-gray-600'>
                        Routine health checkups and treatment.
                    </p>
                     <a href="/general" className='text-blue-500 hover:text-blue-700'>
                        Learn More
                    </a>  
                </div>
               
            </div>
            <br />
            <br />
          
        </div>
    )
}
export default Services;
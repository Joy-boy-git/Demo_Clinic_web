import React from 'react';
import { Link } from 'react-router-dom';
import doc1 from './assets/doctor1.jpg';


const GeneralConsult = () => {
    return (
        <div className='text-center mt-12'>
            <h1 className='text-3xl md:text-5xl font-extrabold text-black'>General Consultation</h1>
            <p className='text-gray-600 mt-4'>
                Routine health checkups and treatment.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center'>
                <div className='p-6 rounded-lg shadow-md hover:shadow-xl hover:p-4 transition-shadow duration-300' data-aos="fade-up-right">
                     <img src={doc1} alt="Doctor" className='mx-auto mt-8 h-94 rounded-lg shadow-md' />
                </div>
                <div className='bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:p-4 transition-shadow duration-300' data-aos="fade-up-left">
                    <h2 className='text-2xl font-semibold mt-6 text-black'>Dr. John Doe</h2>
                    <p className='text-gray-600'>General Physician</p>
                    <p className='text-gray-600 mt-2'>Dr. John Doe is a highly experienced general physician with over 15 years of practice in providing comprehensive healthcare services.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione repellat molestiae dicta officiis incidunt, a eum possimus fuga accusantium, fugiat illo porro corporis voluptate, error reiciendis doloremque quibusdam distinctio perspiciatis! Sapiente similique nisi quasi assumenda, culpa pariatur fuga sit dolores porro architecto explicabo cum praesentium, qui, enim blanditiis aspernatur velit iusto temporibus saepe nobis. Repudiandae in amet excepturi adipisci reiciendis omnis facere expedita? Velit ex quam possimus recusandae id molestiae saepe. Rerum, quam beatae, recusandae in corporis eius commodi doloremque, deserunt asperiores molestiae dolor sed et nobis consectetur ea numquam cupiditate quaerat veritatis ratione suscipit modi! Atque sunt maiores dignissimos.
                    </p>
                </div>
            </div>
            <div className='mt-8 mb-12'>
                <div className='bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:p-4 transition-shadow duration-300' data-aos="fade-up">
                    <h1 className='text-2xl font-semibold text-black'>Our Services</h1>
                    <ul className='list-disc list-inside text-left mt-4'>
                        <li className='text-gray-600'>Comprehensive health checkups</li>
                        <li className='text-gray-600'>Diagnosis and treatment of common illnesses</li>
                        <li className='text-gray-600'>Preventive care and vaccinations</li>
                        <li className='text-gray-600'>Management of chronic conditions</li>
                        <li className='text-gray-600'>Referrals to specialists when necessary</li>
                    </ul>
                </div>
            </div>
            <div className='mt-8 mb-12'>
                <Link to="/contact" className='bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition'>       
                  Book an Appointment
                </Link>
            </div>
        </div>
    );
};

export default GeneralConsult;
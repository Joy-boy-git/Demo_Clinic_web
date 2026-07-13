import React from 'react';
import { Link } from 'react-router-dom';
import doc2 from './assets/doc2.webp';

const SpecialistConsult = () => {
    return (
        <div className='text-center mt-12'>
            <h1 className='text-3xl md:text-5xl font-extrabold text-black'>Specialist Consultation</h1>
            <p className='text-gray-600 mt-4'>
                Expert medical advice and treatment from specialists.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center'>
                <div>
                    <img src={doc2} alt="Specialist Doctor" className='mx-auto mt-8 h-94 rounded-lg shadow-md' />
                </div>
                <div className='bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:p-4 transition-shadow duration-300' data-aos="fade-up-left">
                    <h2 className='text-2xl font-semibold mt-6 text-black'>Dr. Jane Smith</h2>
                    <p className='text-gray-600'>Cardiologist</p>
                    <p className='text-gray-600 mt-2'>
                        Dr. Jane Smith is a renowned cardiologist with extensive experience in diagnosing and treating heart conditions.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero molestias neque perspiciatis quibusdam, ex possimus voluptate? Consectetur aut numquam eius velit modi iste laboriosam accusamus voluptatum culpa, aperiam dolores, unde asperiores a praesentium in. Rem in, accusantium aperiam quisquam modi sed quibusdam a quae! Velit aut unde sit consequuntur mollitia blanditiis incidunt est sint temporibus modi facere nam fuga voluptate hic, nihil, perspiciatis ab quos nesciunt, distinctio facilis id. At quam laboriosam expedita enim. Placeat dignissimos maxime non ipsam eum quam debitis ullam modi ducimus facilis minus similique aperiam, excepturi tenetur neque voluptas perferendis quos nostrum mollitia id esse unde.
                    </p>
                </div>
            </div>
            <div className='mt-8 mb-12'>
                <div className='bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:p-4 transition-shadow duration-300' data-aos="fade-up">
                    <h1 className='text-2xl font-semibold text-black'>Our Specialist Services</h1>
                    <ul className='list-disc list-inside text-left mt-4'>
                        <li className='text-gray-600'>Cardiology - Heart health and treatment</li>
                        <li className='text-gray-600'>Dermatology - Skin care and treatment</li>
                        <li className='text-gray-600'>Neurology - Brain and nervous system care</li>
                        <li className='text-gray-600'>Orthopedics - Bone and joint care</li>
                        <li className='text-gray-600'>Pediatrics - Child health and wellness</li>
                        <li className='text-gray-600'>Gynecology - Women's health and reproductive care</li>
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
}
           

export default SpecialistConsult;
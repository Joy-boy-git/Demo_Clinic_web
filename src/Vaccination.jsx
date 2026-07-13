import React from 'react';
import { Link } from 'react-router-dom';
import doc3 from './assets/doc3.jpg';

const Vaccination = () => {
    return (
        <div className='text-center mt-12'>
            <h1 className='text-3xl md:text-5xl font-extrabold mt-6 text-black'>Vaccination</h1>
            <p className='text-gray-600 mt-4'>
                Vaccination is a crucial aspect of preventive healthcare. It helps protect individuals and communities from infectious diseases by stimulating the immune system to recognize and fight specific pathogens. Vaccines are safe, effective, and have played a significant role in reducing the prevalence of many diseases worldwide.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center'   >
                <div className='p-6 rounded-lg shadow-md hover:shadow-xl hover:p-4 transition-shadow duration-300' data-aos="fade-up-right">
                    <img src={doc3} alt="Vaccination" className='mx-auto mt-8 h-94 rounded-lg shadow-md' data-aos="fade-up" />
                </div>
                <div className='bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:p-4 transition-shadow duration-300 mt-8' data-aos="fade-up">
                    <h2 className='text-2xl font-semibold mt-6 text-black'>Dr. John Doe</h2>
                    <p className='text-gray-600 mt-2'>
                        Our experienced healthcare professionals are dedicated to  providing the highest quality vaccination services.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quibusdam dicta doloribus deserunt numquam minima, provident sunt dolorum quam omnis consectetur, laborum hic libero aspernatur dolor amet? Temporibus laudantium vel sunt? Ipsum quam minima porro enim libero iure officiis nam omnis, harum quasi, ex eaque sequi. Modi doloribus ab architecto. Facilis commodi deleniti perspiciatis, voluptatibus sit pariatur. Labore nulla perferendis modi nobis id, eligendi tempore enim laudantium voluptatem assumenda! Quam sapiente aliquid totam accusamus sed cum rerum. Illo perferendis voluptatem hic? Impedit, nesciunt tempore dignissimos iste libero quisquam maiores asperiores tenetur aperiam, possimus magni odio. Aspernatur consectetur autem error architecto.
                    </p>
                </div>
                
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center'>
                <div className='bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:p-4 transition-shadow duration-300' data-aos="fade-up-right">
                    <h2 className='text-2xl font-semibold mt-6 text-black'>Importance of Vaccination</h2>
                    <p className='text-gray-600 mt-2'>
                        Vaccination not only protects the individual receiving the vaccine but also contributes to herd immunity, which helps protect those who cannot be vaccinated due to medical reasons. It is essential to follow the recommended vaccination schedules to ensure optimal protection against preventable diseases.
                    </p>
                </div>
                <div className='bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:p-4 transition-shadow duration-300' data-aos="fade-up-left">
                    <h2 className='text-2xl font-semibold mt-6 text-black'>Our Vaccination Services</h2>
                    <ul className='list-disc list-inside text-left mt-4'>
                        <li className='text-gray-600'>Childhood immunizations</li>
                        <li className='text-gray-600'>Adult vaccinations</li>
                        <li className='text-gray-600'>Travel vaccines</li>
                        <li className='text-gray-600'>Flu shots</li>
                        <li className='text-gray-600'>COVID-19 vaccinations</li>

                    </ul>
                </div>
            </div>
            <div className='mt-8 mb-12'>
                <Link to="/contact" className='bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition'>
                    Book a Vaccination Appointment
                </Link>
            </div>
        </div>
    );
}
export default Vaccination;
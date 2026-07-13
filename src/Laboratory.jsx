import React from "react";
import { Link } from "react-router-dom";
import lab1 from './assets/lab1.jpg'
import lab2 from './assets/lab2.jpg'
import lab3 from './assets/lab3.jpg'

const Laboratory = () => {
  return (
    <div className="text-center mt-12">

    <div className="text-center" data-aos="fade-up">
      <h1 className="text-3xl md:text-5xl font-extrabold">Laboratory Services</h1>
      <p className="text-gray-600 mt-4">
        Welcome to our Laboratory Services page!
      </p>
    </div> 
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12" data-aos="fade-up">
        <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:p-4 transition-shadow duration-300">
            <img src={lab1} alt="Laboratory 1" className="w-full h-84 object-cover rounded-lg" />
            <p className="text-gray-600 mt-4 text-lg font-semibold">Description for Laboratory 1</p>
            <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae at, cumque ratione consectetur eaque! Eius ipsum dicta dolorum sit temporibus voluptas rem non cum, nihil eum nesciunt fugiat, labore odio adipisci quod repellat dolores molestiae quaerat? Eum sapiente voluptatum voluptatem nihil fugit magni. Corporis voluptatibus officia voluptate dignissimos laboriosam.
            </p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:p-4 transition-shadow duration-300">
            <img src={lab2} alt="Laboratory 2" className="w-full h-84 object-cover rounded-lg" />
            <p className="text-gray-600 mt-4 text-lg font-semibold">Description for Laboratory 2</p>
            <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae at, cumque ratione consectetur eaque! Eius ipsum dicta dolorum sit temporibus voluptas rem non cum, nihil eum nesciunt fugiat, labore odio adipisci quod repellat dolores molestiae quaerat? Eum sapiente voluptatum voluptatem nihil fugit magni. Corporis voluptatibus officia voluptate dignissimos laboriosam.
            </p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:p-4 transition-shadow duration-300">
            <img src={lab3} alt="Laboratory 3" className="w-full h-84 object-cover rounded-lg" />
            <p className="text-gray-600 mt-4 text-lg font-semibold">Description for Laboratory 3</p>
            <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae at, cumque ratione consectetur eaque! Eius ipsum dicta dolorum sit temporibus voluptas rem non cum, nihil eum nesciunt fugiat, labore odio adipisci quod repellat dolores molestiae quaerat? Eum sapiente voluptatum voluptatem nihil fugit magni. Corporis voluptatibus officia voluptate dignissimos laboriosam.
            </p>
        </div>
    </div>
{/*     
                <div className='bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:p-4 transition-shadow duration-300' data-aos="fade-up-right">
                    <h2 className='text-xl font-semibold text-black mb-4'>Laboratory Test
                    </h2>
                    <p className='text-gray-600'>
                        Routine health checkups and treatment.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic corporis deserunt totam quasi cupiditate distinctio qui dolorum possimus fugit porro dolor mollitia nesciunt sed repudiandae accusamus, quidem molestiae tempore maiores velit fugiat pariatur nemo. Eligendi omnis praesentium modi non officia autem error nulla, sequi labore, ut magni mollitia blanditiis. Et!
                    </p>
                   
                </div> */}
            
            <div className='mt-8 mb-12'>
                <Link to="/contact" className='bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition'>
                    Book a Laboratory Test Appointment
                </Link>
            </div>
    </div>
    )
}
export default Laboratory;
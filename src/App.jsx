import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { FaEnvelope } from 'react-icons/fa'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import instagram from './assets/instagram.png'
import facebook from './assets/facebook.png'
import youtube from './assets/youtube.png'


const App =() => {
    
    const [menuOpen, setMenuOpen] = useState(false)
    return(
         <div>
            <div className="hidden md:flex justify-between items-center border-1 p-4 shadow-lg bg-white relativefixed t-0">
                <div>
                     <h1 className="flex font-sanserif font-bold gap-2 text-3xl md:text-5xl text-black" data-aos="fade-right">STAR<span className="text-3xl text-black"> Clinic</span></h1>
        {/* Hamburger icon for mobile */}
                </div>
                <ul className="flex gap-6">
                    <a href="">
                        <li className="text-black">📞+91 9876543210</li>
                    </a>
                    <a href="">
                        <li className="text-black">📱+91 6543217890</li>
                    </a>
                    <a href="">
                        <li className="text-black">
                             <div className="flex items-center gap-3">
      <FaEnvelope className="text-blue-600 text-xl" />
      <span>info@starclinic.com</span>
    </div>
                            </li>
                    </a>
                </ul>
                <a href="">
                    <button className="bg-green-400 p-4 rounded-lg border">Book appoinment</button>
                </a>
            </div>
      <nav className="flex justify-between items-center border-b-1 p-4 shadow-lg bg-white sticky top-0">
       
        <h1 className="md:hidden flex font-sanserif font-bold gap-2 text-3xl md:text-5xl text-black" data-aos="fade-right">STAR<span className="text-3xl text-black"> Clinic</span></h1>
        <div className="md:hidden">
        {/* Hamburger icon for mobile */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Nav links */}
        <ul className={`flex-col md:flex-row md:flex md:gap-23 gap-4 absolute md:static top-16 left-0 w-full md:w-auto md:bg-transparent shadow-lg md:shadow-none transition-all duration-300 z-10 ${menuOpen ? 'flex' : 'hidden'}`} style={{ listStyle: 'none' }}>
          <li><Link className='text-black hover:text-blue-500 block px-4 py-2 md:p-0' to="*">Home</Link></li>
          <li><Link className='text-black hover:text-blue-500 block px-4 py-2 md:p-0' to="/about">About </Link></li>
          <li><Link className='text-black hover:text-blue-500 block px-4 py-2 md:p-0' to="/services">Services</Link></li>
          <li><Link className='text-black hover:text-blue-500 block px-4 py-2 md:p-0' to="/contact">Contact</Link></li>
        </ul>
        <ul className="hidden md:flex gap-6">
            <a href="">
                <li><img src={instagram} className="w-8" alt="instagram" /></li>
            </a>
            <a href="">
                <li><img src={facebook} className="w-8" alt="facebook" /></li>
            </a>
            <a href="">
                <li><img src={youtube} className="w-8" alt="youtube" /></li>
            </a>
        </ul>
      
      </nav>
      <Routes>
        <Route path='*' element={<Home/>}/>
        {/* <Route path='/profile' element={<Profile/>}/> */}
        <Route path='/about'  element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
    )
}
export default App;
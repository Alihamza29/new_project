
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  const handleNavigation = (sectionId) => {
    setIsOpen(false); 

    if (location.pathname !== '/') {
      
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100); 
    } else {
      
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    setIsOpen(false);
    navigate('/contact');
  };

  return (
    <nav className="bg-purple-200 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        <div className="flex items-center">
          <img src="/MeemAcademiii.png" alt="ASG Logo" className="h-10 mr-2" />
          <span className="text-2xl font-bold" style={{ color: '#4259C3' }}>
            Malaysian<span className="text-blue-500">Assignments</span>
          </span>
        </div>

        
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FiX className="text-3xl cursor-pointer" /> : <FiMenu className="text-3xl cursor-pointer" />}
        </div>

        
        <ul className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full bg-purple-200 md:bg-transparent md:w-auto transition-transform duration-500 ${isOpen ? 'block' : 'hidden md:block'}`}>
          <li className="text-center md:text-left">
            <span
              onClick={() => handleNavigation('home')}
              className="cursor-pointer block text-grey-300 hover:text-blue-500 transition duration-300 p-2"
            >
              Home
            </span>
          </li>
          <li className="text-center md:text-left">
            <span
              onClick={() => handleNavigation('services')}
              className="cursor-pointer block text-grey-300 hover:text-blue-500 transition duration-300 p-2"
            >
              Services
            </span>
          </li>
          <li className="text-center md:text-left">
            <span
              onClick={() => handleNavigation('about')}
              className="cursor-pointer block text-grey-300 hover:text-blue-500 transition duration-300 p-2"
            >
              About
            </span>
          </li>
          <li className="text-center md:text-left">
            <span
              className="cursor-pointer block text-grey-300 hover:text-blue-500 transition duration-300 p-2"
              onClick={handleContactClick}
            >
              Contact
            </span>
          </li>
          
          <li className="text-center md:text-left">
  <span
    className="cursor-pointer mt-0 px-6 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition duration-300 block md:inline-block"
    onClick={handleContactClick}  
  >
    Order Now
  </span>
</li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaTimes, FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from './Contactform';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Navbar()  {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showForm && !event.target.closest('.contact-form-container')) {
        setShowForm(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showForm]);

  return (
    <>
      <nav className="bg-white py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center">
            <a href="https://hansenpartners.net/" className="flex items-center">
              <img
                src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/slkmzpwmsmmefdpky31q/jhsereno-dark" 
                alt="Logo"
                className="h-5 w-auto"
              />
            </a>
          </div>

          <div className="lg:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-800" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>

          <div className={`flex flex-col lg:flex-row lg:items-center text-gray-600 uppercase tracking-wide text-[13px] ${isOpen ? 'block' : 'hidden'} lg:flex`}>
            <a href="https://hansenpartners.net/team" className="py-2 px-4 hover:text-gray-900 hover:underline underline-offset-8" onClick={closeMenu}>
              MEET THE TEAM
            </a>
            <a href="https://hansenpartners.net/home-search/listings" className="py-2 px-4 hover:text-gray-900 hover:underline underline-offset-8" onClick={closeMenu}>
              SEARCH FOR HOMES
            </a>
            <a href="https://hansenpartners.net/neighborhoods" className="py-2 px-4 hover:text-gray-900 hover:underline underline-offset-8" onClick={closeMenu}>
              OUR COMMUNITIES
            </a>
            <a href="https://hansenpartners.net/home-valuation" className="py-2 px-4 hover:text-gray-900 hover:underline underline-offset-8" onClick={closeMenu}>
              HOME VALUATION
            </a>
            <a href="https://hansenpartners.net/services" className="py-2 px-4 hover:text-gray-900 hover:underline underline-offset-8" onClick={closeMenu}>
              SERVICES
            </a>
            <a href="https://hansenpartners.net/FeaturedListingHOA" className="py-2 px-4 hover:text-gray-900 hover:underline underline-offset-8" onClick={closeMenu}>
              Homes Across America
            </a>
            <a href="https://hansenpartners.net/testimonials" className="py-2 px-4 hover:text-gray-900 hover:underline underline-offset-8" onClick={closeMenu}>
              TESTIMONIALS
            </a>
            <a href="#contact" onClick={() => { toggleForm(); closeMenu(); }} className="py-2 px-4 hover:text-gray-900 hover:underline underline-offset-8">
              CONTACT US
            </a>
          </div>

          <div className="hidden lg:flex lg:ml-8">
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-[13px]"
              />
              <button className="absolute inset-y-0 right-0 flex items-center px-3">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 14a7 7 0 110-14 7 7 0 010 14zm0 0l6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative w-full h-[400px] overflow-hidden -mt-4 z-40">
        <img
          src="https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQxNDUyfQ&w=1920"
          alt="Beautiful landscape"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-5xl font-serif font-bold text-white">SERVICES</h2>
        </div>
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative contact-form-container">
              <button
                onClick={toggleForm}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              >
                <FaTimes size={24} />
              </button>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-8">
                <div className="bg-black text-white p-6 rounded-lg flex-1 lg:w-1/2">
                  <div className="mb-4 flex items-center">
                    <FaPhone className="text-blue-400 mr-2" />
                    <p className="text-sm">
                      <strong>Phone:</strong> (925) 553-6707
                    </p>
                  </div>
                  <div className="mb-4 flex items-center">
                    <FaEnvelope className="text-blue-400 mr-2" />
                    <p className="text-sm">
                      <strong>Email:</strong>{' '}
                      <a href="mailto:luxuryhomesinc@icloud.com" className="text-blue-400 hover:underline">
                        luxuryhomesinc@icloud.com
                      </a>
                    </p>
                  </div>
                  <div className="mb-4 flex items-center">
                    <FaMapMarkerAlt className="text-blue-400 mr-2" />
                    <p className="text-sm">
                      <strong>Address:</strong> 4337 Chabot Drive, Pleasanton, CA 94588
                    </p>
                  </div>
                </div>
                <ContactForm toggleForm={toggleForm} />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Navbar;

import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Navbar()  {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
            <a href="https://hansenpartners.net/team" className="py-2 px-4 hover:text-gray-900 hover:underline underline-offset-8">
              MEET THE TEAM
            </a>
            <a href="https://hansenpartners.net/home-search/listings" className="py-2 px-4 hover:text-gray-900 hover:underline underline-offset-8">
              SEARCH FOR HOMES
            </a>
            <a href="https://hansenpartners.net/neighborhoods" className="py-2 px-4 hover:text-gray-900 hover:underline underline-offset-8">
              OUR COMMUNITIES
            </a>
            <a href="https://hansenpartners.net/home-valuation" className="py-2 px-4 hover:text-gray-900 hover:underline underline-offset-8">
              HOME VALUATION
            </a>
            <a href="https://hansenpartners.net/services" className="py-2 px-4 hover:text-gray-900 hover:underline underline-offset-8">
              SERVICES
            </a>
            <a href="https://hansenpartners.net/FeaturedListingHOA" className="py-2 px-4 hover:text-gray-900 hover:underline underline-offset-8">
              Homes Across America
            </a>
            <a href="https://hansenpartners.net/testimonials" className="py-2 px-4 hover:text-gray-900 hover:underline underline-offset-8">
              TESTIMONIALS
            </a>
            <a href="#contactform" className="py-2 px-4 hover:text-gray-900 hover:underline underline-offset-8">
              CONTACT US
            </a>
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
       
      </section>
    </>
  );
}

export default Navbar;

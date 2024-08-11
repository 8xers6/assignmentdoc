import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from './Contactform'; 

function Contactus() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="relative" id="contactform">
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/skkve0aqzhkkyiytn92d/work-with-us"
          alt="Beautiful room"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-6">
          <h2 className="text-5xl font-serif font-bold text-white mb-4">Work With Us</h2>
          <hr className="w-52 h-px bg-white border-0 my-4" />
          <p className="text-white text-center mb-6 text-lg">
            With decades of experience in luxurious Tri Valley real estate, our team is here to ensure that your dreams are a reality.
            Let us guide you through your home buying journey. Contact us today to get started and discover how we can help you find your perfect home.
          </p>
          <button 
            onClick={toggleForm}
            className="hover:text-black border-2 bg-transparent text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl relative">
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
    </div>
  );
}

export default Contactus;

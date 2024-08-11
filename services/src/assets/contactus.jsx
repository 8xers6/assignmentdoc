import React, { useState } from 'react';
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
          <div className="bg-white p-6 rounded-lg shadow-lg w-70% max-w-3xl relative">
            <ContactForm toggleForm={toggleForm} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Contactus;

import React from "react";
import 'animate.css';

function Marketingplan() {
  return (
    <div
      id="MarketingPlan"
      className="relative min-h-screen py-12 px-6 flex flex-col items-center"
      style={{
        backgroundImage: 'url("https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/hqguvxyyi5jciyrzy35v/page-3")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', 
      }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-8 animate__animated animate__fadeIn animate__delay-1s py-11">
          Comprehensive Marketing Plan
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center items-center p-6 gap-4 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-2s">
            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-md">
              <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/rmtn3r5zpsljdsncbwa4/image-007" alt="email" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-4">Responsive</h3>
            <p className="text-gray-700 text-base">I am always available via phone, text, or email.</p>
          </div>
          <div className="flex flex-col justify-center items-center p-6 gap-4 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-3s">
            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-md">
              <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ks8ztlvw2b35q5qgs6xn/image-011" alt="placehold" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-4">Syndication</h3>
            <p className="text-gray-700 text-base">I market your property locally, nationally, and internationally.</p>
          </div>
          <div className="flex flex-col justify-center items-center p-6 gap-4 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-4s">
            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-md">
              <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zr3bugldblvebixagfs1/image-009" alt="mappin" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-4">Virtual Tour</h3>
            <p className="text-gray-700 text-base">Let's make your home stand out with a high-quality virtual tour.</p>
          </div>
          <div className="flex flex-col justify-center items-center p-6 gap-4 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-5s">
            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-md">
              <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/dywgmsgzddtcsqxagbwh/image-013" alt="photimg" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-4">Photography</h3>
            <p className="text-gray-700 text-base">Beatiful, high-end photography is a central part of our marketing plan for your property.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketingplan;

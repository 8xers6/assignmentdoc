import React from 'react';
import { motion } from 'framer-motion';

function Buyingprocess() {
  return (
    <section
      className="relative bg-cover bg-center text-light py-12 min-h-[500px] bg-gray-800" 
      style={{
        backgroundImage: 'url("https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/nhcjbdzbycjvfcks0nqe/image-004")',
      }}
      id="section-a66ce640-9027-4c93-8b66-ae42cd5ec467"
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative container mx-auto px-4">
        <h2 className="text-6xl font-serif font-bold mb-8 text-center text-white">
          The Buying Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: "1", description: "Initial Consultation & Planning" },
            { label: "2", description: "Search for a Home & Get Pre-Approved" },
            { label: "3", description: "Submit an Offer" },
            { label: "4", description: "Complete Settlement Process" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4"
            >
              <motion.h3
                className="text-7xl font-serif text-white mb-2"
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                {item.label}
              </motion.h3>
              <p className="text-lg text-white text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Buyingprocess;

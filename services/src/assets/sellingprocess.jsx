import React from 'react';
import { motion } from 'framer-motion';

function SellingProcess() {
  return (
    <section
      className="relative bg-cover bg-center text-light py-12 min-h-[500px] bg-gray-800" 
      style={{
        backgroundImage: 'url("https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gihsg13plfsb8xfbzmlf/image-027")',
      }}
      id="section-a66ce640-9027-4c93-8b66-ae42cd5ec467"
    >
      <div className="absolute inset-0 bg-black opacity-30"></div> 
      <div className="relative container mx-auto px-4">
        <h2 className="text-6xl font-serif font-bold mb-8 text-center text-white">The Selling Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: "1", description: "Initial Consultation & Planning" },
            { label: "2", description: "Devise & Execute Marketing Plan" },
            { label: "3", description: "Review Offers & Reach Agreement with Buyer" },
            { label: "4", description: "Complete Transaction Process" },
            { label: "5", description: "After - Sale Service" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4"
            >
              <motion.h3
                className="text-7xl font-serif text-white mb-2"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.5 }}
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

export default SellingProcess;

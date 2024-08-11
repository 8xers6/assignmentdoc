import React from 'react';
import { motion } from 'framer-motion';

function CardGallery() {
  const cards = [
    {
      image: "https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/ghtq7jtce7tsgdjtosrs/image-025",
      text: ["Decor Guidance"],
    },
    {
      image: "https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/axx0whb7xfmlwhvcckrr/image-023",
      text: [
        "My Staging Expertise",
        "Unclutter and organize your home",
        "Neatly arrange drawers and cabinets",
        "Keep pets outdoors or off the premises",
        "Play soft music",
      ],  
    },
    {   
      image: "https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/tvntwvzwsjyi3ndwtpux/image-022",
      text: [
        "Intentional",
        "​​​​​​​Layout",
      ],
    },
    {   
      image: "https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/lpaq7euqjebackcuwsdu/image-024",
      text: [
        <li>"Unclutter and organize your home"</li>,
        <li>"Neatly arrange drawers and cabinets"</li>,
        <li>"Keep pets outdoors or off the premises"</li>,
        <li>"Play soft music"</li>,
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
            <motion.div
              className="w-full lg:w-1/2 h-64 lg:h-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={card.image}
                alt={`card-${index}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex-1 p-6 bg-slate-600 text-white flex flex-col items-center justify-center lg:w-1/2">
              {card.text.length > 0 && (
                <div className="text-center space-y-4">
                  {card.text.map((line, i) => (
                    <p key={i} className="text-lg font-medium mb-2">
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGallery;

import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Affiate() {
    return (
        <div className="max-w-6xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-center">
                        <img
                            src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/rmtn3r5zpsljdsncbwa4/image-007"
                            alt="email"
                            className="w-16 h-16 object-cover mb-2"
                        />
                        <b className="text-lg">Responsive</b>
                        <p className="text-center mt-2">
                            I am always available via phone, text, or email to answer your questions in a timely manner.
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-center">
                        <img
                            src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ks8ztlvw2b35q5qgs6xn/image-011"
                            alt="flag1"
                            className="w-16 h-16 object-cover mb-2"
                        />
                        <b className="text-lg">Syndication</b>
                        <p className="text-center mt-2">
                            I market your property locally, nationally, and internationally.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-center">
                        <img
                            src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/u6nnihj6ukrz207rl25e/image-085"
                            alt="pinmap"
                            className="w-16 h-16 object-cover mb-2"
                        />
                        <b className="text-lg">Virtual Tour</b>
                        <p className="text-center mt-2">
                            Let’s make your home stand out with a high quality virtual tour.
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-center">
                        <img
                            src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qljffx423kswkhh1oyc3/image-081"
                            alt="dronephotography"
                            className="w-16 h-16 object-cover mb-2"
                        />
                        <b className="text-lg">Drone Photography</b>
                        <p className="text-center mt-2">
                            Beautiful photography is a central part of our marketing plan for your property.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img
                    src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/vxnwvueubpgtfzn1k3cs/edited-p25"
                    alt="ImagePlaceholder"
                    className="w-full h-auto max-w-sm object-cover rounded-lg shadow-md"
                />
            </div>
            
        </div>
        
    );
}

export default Affiate;

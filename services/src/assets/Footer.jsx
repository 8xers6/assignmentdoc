import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white text-center pt-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/juliehansenpartership"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/julie-hansen-orvis-10b99359/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <div className="text-white text-sm">
                <p>
                  Copyright &amp; 2024 |{' '}
                  <a
                    href="https://hansenpartners.net/terms-and-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <img
                src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zbesma34ygwklawiysod/dark-realtor-logo_x1vczu"
                alt="Dark Realtor Logo"
                className="h-8 w-auto"
              />
              <img
                src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/siun2nwoji9w7v0mssvy/dark-equal-logo_gahxpa"
                alt="Dark Equal Logo"
                className="h-8 w-auto"
              />
              <img
                src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qje0mcix0r0qeoiikumu/sereno-logo"
                alt="Sereno Logo"
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

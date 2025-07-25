// frontend/src/components/Footer.jsx

import React from 'react';
import CPSLogo from '../assets/CPS logo 3.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              className="h-24 w-auto"
              src={CPSLogo}
              alt="CPS Logo"
            />
          </div>

          {/* Tagline */}
          <p className="mt-4 text-lg text-gray-300">
            The effective, professional, low-cost way to deliver automated personalized messages!
          </p>

          {/* Link Columns */}
          <div className="mt-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12 text-left">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#features" className="text-base text-gray-300 hover:text-white">Features</a></li>
                <li><a href="#benefits" className="text-base text-gray-300 hover:text-white">Benefits</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="/about" className="text-base text-gray-300 hover:text-white">About</a></li>
                <li><a href="https://www.databaseemailer.com/tos.php" className="text-base text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="https://www.databaseemailer.com/tos.php" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
                <li><a href="https://www.databaseemailer.com/tos.php" className="text-base text-gray-300 hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copy */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2025 Contact Page Submitter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

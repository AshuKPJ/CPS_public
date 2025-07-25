// frontend/src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CPSLogo from '../assets/CPS Logo.png';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const Header = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-36">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img src={CPSLogo} alt="CPS Logo" className="h-24 w-auto" />
              </Link>
            </div>

            {/* Navigation & Buttons */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">

              {/* Nav Links */}
              <div className="flex flex-wrap justify-center gap-2">
                <a href="#features" className="text-gray-500 hover:text-gray-900 text-sm font-medium">Features</a>
                <a href="#steps" className="text-gray-500 hover:text-gray-900 text-sm font-medium">Steps</a>
                <a href="#benefits" className="text-gray-500 hover:text-gray-900 text-sm font-medium">Benefits</a>
                <a href="#testimonials" className="text-gray-500 hover:text-gray-900 text-sm font-medium">Testimonials</a>
                <a href="#gallery" className="text-gray-500 hover:text-gray-900 text-sm font-medium">Gallery</a>
                <a href="#integrations" className="text-gray-500 hover:text-gray-900 text-sm font-medium">Integrations</a>
                <a href="#faq" className="text-gray-500 hover:text-gray-900 text-sm font-medium">FAQ</a>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col items-start space-y-1">
                <a href="tel:9736189906" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">
                  📞 973.618.9906
                </a>
                <a href="mailto:AL@DBE.name" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">
                  📧 AL@DBE.name
                </a>
              </div>

              {/* Login/Signup Buttons */}
              <div className="flex flex-col md:flex-row items-center gap-2">
                <button
                  onClick={() => setLoginOpen(true)}
                  className="px-4 py-2 text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                >
                  Login
                </button>
                <button
                  onClick={() => setRegisterOpen(true)}
                  className="px-4 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Modals */}
      {/* <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} /> */}
      {isLoginOpen && (
        <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />)}
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setRegisterOpen(false)} />
    </>
  );
};

export default Header;

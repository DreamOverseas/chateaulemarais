import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 px-4 sm:px-6 py-8 sm:py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-4">
          {/* Logo and Navigation Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:gap-10 w-full lg:w-auto">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="Chateau Le Marais Logo" 
                className="h-10 sm:h-12 w-auto"
              />
            </div>
            
            {/* Navigation Links */}
            <nav className="w-full sm:w-auto">
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 lg:gap-6 text-sm sm:text-base lg:text-lg font-medium">
                <Link 
                  to="/" 
                  className="hover:text-gray-600 hover:underline transition-colors duration-200 py-1"
                >
                  Property
                </Link>
                <Link 
                  to="/location" 
                  className="hover:text-gray-600 hover:underline transition-colors duration-200 py-1"
                >
                  Location
                </Link>
                <Link 
                  to="/events" 
                  className="hover:text-gray-600 hover:underline transition-colors duration-200 py-1"
                >
                  Events
                </Link>
                <Link 
                  to="/guest-information" 
                  className="hover:text-gray-600 hover:underline transition-colors duration-200 py-1 col-span-2 sm:col-span-1"
                >
                  Guest Information
                </Link>
              </div>
            </nav>
          </div>

          {/* Newsletter Subscription Section */}
          <div className="w-full lg:w-auto lg:max-w-sm">
            <div className="mb-4">
              <h3 className="text-base sm:text-lg font-medium text-gray-800 leading-tight">
                Get the latest Chateau Le Marais updates
              </h3>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Type your email..."
                className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded sm:rounded-l sm:rounded-r-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800 placeholder-gray-500"
                required
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-4 sm:px-6 py-2 sm:py-2.5 bg-black text-white text-sm sm:text-base font-medium rounded sm:rounded-r sm:rounded-l-none hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
            
            {/* Privacy Notice */}
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              By subscribing, you agree to receive updates about Chateau Le Marais. 
              You can unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Copyright */}
            <p className="text-xs sm:text-sm text-gray-600">
              © {new Date().getFullYear()} Chateau Le Marais. All rights reserved.
            </p>
            
            {/* Additional Links */}
            <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link 
                to="/privacy" 
                className="text-gray-600 hover:text-gray-800 hover:underline transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-600 hover:text-gray-800 hover:underline transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-600 hover:text-gray-800 hover:underline transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
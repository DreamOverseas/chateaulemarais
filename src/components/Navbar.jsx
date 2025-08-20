import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="Chateau Le Marais" 
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
            >
              Property
            </Link>
            <Link 
              to="/wildlife" 
              className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
            >
              Wildlife
            </Link>
            <Link 
              to="/events" 
              className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
            >
              Events
            </Link>
            <Link 
              to="/location" 
              className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
            >
              Location
            </Link>
            <Link 
              to="/guest-information" 
              className="text-gray-700 hover:text-black transition-colors duration-200 font-medium whitespace-nowrap"
            >
              Guest Information
            </Link>
          </div>

          {/* Right side - Book Now Button and Mobile Menu */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Book Now Button - Always Visible */}
            <a
              href="https://book-directonline.com/properties/waterfrontpropertywallisprivateislandforster-"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-medium rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200 whitespace-nowrap"
            >
              Book Now
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-300 p-1 rounded-md transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <svg
                className="w-6 h-6 fill-current transition-transform duration-200"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  // X icon when menu is open
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  // Hamburger icon when menu is closed
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen 
              ? 'max-h-96 opacity-100 mt-4' 
              : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="bg-gray-50 rounded-lg p-4 shadow-inner">
            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                className="text-gray-700 hover:text-black hover:bg-white py-3 px-4 rounded-md transition-all duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Property
              </Link>
              <Link
                to="/wildlife"
                className="text-gray-700 hover:text-black hover:bg-white py-3 px-4 rounded-md transition-all duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Wildlife
              </Link>
              <Link
                to="/events"
                className="text-gray-700 hover:text-black hover:bg-white py-3 px-4 rounded-md transition-all duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link
                to="/location"
                className="text-gray-700 hover:text-black hover:bg-white py-3 px-4 rounded-md transition-all duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Location
              </Link>
              <Link
                to="/guest-information"
                className="text-gray-700 hover:text-black hover:bg-white py-3 px-4 rounded-md transition-all duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Guest Information
              </Link>
            </div>

            {/* Contact Information in Mobile Menu */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-600 space-y-1">
                <p className="font-medium">Need Help?</p>
                <p>Call us for assistance</p>
                <a 
                  href="tel:+1234567890" 
                  className="text-black hover:underline font-medium"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
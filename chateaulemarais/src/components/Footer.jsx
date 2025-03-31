import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 px-6 py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-10">
          <img src="/logo.png" alt="Chateau Le Marais Logo" className="h-12" />
          <div className="flex space-x-6 text-lg font-medium">
            <Link to="/" className="hover:underline">Property</Link>
            <Link to="/location" className="hover:underline">Location</Link>
            <Link to="/events" className="hover:underline">Events</Link>
            <Link to="/guest-information" className="hover:underline">Guest Information</Link>
          </div>
        </div>
        <div className="mt-8 md:mt-0 w-full md:w-auto">
          <p className="mb-2 text-lg font-medium">Get the latest Chateau Le Marais updates</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Type your email..."
              className="px-4 py-2 rounded-l border border-gray-300 text-gray-800 w-full md:w-auto"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-r hover:bg-gray-900"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
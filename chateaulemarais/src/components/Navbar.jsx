import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* 左侧 Logo/文字 */}
        <Link to="/" className="text-2xl font-bold">
          {/* 如果有 Logo 图片，就用 <img src="/path-to-logo.png" alt="Chateau Le Marais" className="h-8" /> */}
          Chateau Le Marais
        </Link>
        
        {/* 中间导航链接 (隐藏在小屏时可改用汉堡菜单) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-gray-900">Property</Link>
          <Link to="/wildlife" className="text-gray-700 hover:text-gray-900">Wildlife</Link>
          <Link to="/events" className="text-gray-700 hover:text-gray-900">Events</Link>
          <Link to="/location" className="text-gray-700 hover:text-gray-900">Location</Link>
          <Link to="/guest-information" className="text-gray-700 hover:text-gray-900">Guest Info</Link>
        </div>
        
        {/* 右侧 Book Now 按钮 */}
        <div>
          <a
            href="https://book-directonline.com/properties/waterfrontpropertywallisprivateislandforster-"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
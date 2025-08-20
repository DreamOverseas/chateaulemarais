import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // 控制移动端菜单展开/折叠
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* 左侧 Logo/图片 */}
        <Link to="/" className="text-2xl font-bold">
          <img src="/logo.png" alt="Chateau Le Marais" className="h-8" />
        </Link>

        {/* 移动端汉堡菜单按钮，仅在 md 尺寸以下可见 */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              // X 图标（菜单打开时可用）
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L12 
                  10.586l6.293-6.293a1 1 0 111.414 
                  1.414L13.414 12l6.293 6.293a1 1 0 
                  01-1.414 1.414L12 13.414l-6.293 
                  6.293a1 1 0 01-1.414-1.414L10.586 
                  12 4.293 5.707a1 1 0 010-1.414z"
              />
            ) : (
              // 汉堡图标（菜单关闭时可用）
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 100-2H4a1 1 
                  0 100 2zm16 7H4a1 1 0 100 2h16a1 
                  1 0 100-2zm0 7H4a1 1 0 100 2h16a1 
                  1 0 100-2z"
              />
            )}
          </svg>
        </button>

        {/* 桌面端菜单（md 及以上显示） */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-black">
            Property
          </Link>
          <Link to="/wildlife" className="text-gray-700 hover:text-black">
            Wildlife
          </Link>
          <Link to="/events" className="text-gray-700 hover:text-black">
            Events
          </Link>
          <Link to="/location" className="text-gray-700 hover:text-black">
            Location
          </Link>
          <Link to="/guest-information" className="text-gray-700 hover:text-black">
            Guest Information
          </Link>
          {/* 右侧 Book Now 按钮 (桌面端) */}
          <a
            href="https://book-directonline.com/properties/waterfrontpropertywallisprivateislandforster-"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* 移动端展开的菜单（md 以下显示） */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              className="text-gray-700 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Property
            </Link>
            <Link
              to="/wildlife"
              className="text-gray-700 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Wildlife
            </Link>
            <Link
              to="/events"
              className="text-gray-700 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/location"
              className="text-gray-700 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Location
            </Link>
            <Link
              to="/guest-information"
              className="text-gray-700 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Guest Information
            </Link>
            {/* 移动端 Book Now 按钮 */}
            <a
              href="https://book-directonline.com/properties/waterfrontpropertywallisprivateislandforster-"
              className="mt-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
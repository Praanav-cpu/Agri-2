import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-opacity-50 backdrop-blur-md p-4 flex justify-between items-center shadow-md fixed top-0 left-0 w-full z-50">
      {/* Logo Section */}
      <div className="text-white font-bold text-xl tracking-wide cursor-pointer hover:text-green-300">
        LOGO
      </div>
      
      {/* Navigation Links */}
      <ul className="flex space-x-8">
        <li>
          <Link 
            to="/" 
            className="text-white font-medium hover:text-green-300 transition duration-200 ease-in-out"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/market" 
            className="text-white font-medium hover:text-green-300 transition duration-200 ease-in-out"
          >
            Market
          </Link>
        </li>
        <li>
          <Link 
            to="/purches" 
            className="text-white font-medium hover:text-green-300 transition duration-200 ease-in-out"
          >
            Purches
          </Link>
        </li>
        <li>
          <Link 
            to="/scheme" 
            className="text-white font-medium hover:text-green-300 transition duration-200 ease-in-out"
          >
            Scheme
          </Link>
        </li>
        <li>
          <Link 
            to="/beseller" 
            className="text-white font-medium hover:text-green-300 transition duration-200 ease-in-out"
          >
            Be Seller
          </Link>
        </li>
      </ul>
      
      {/* Login Button */}
      <Link 
        to="/login" 
        className="bg-green-800 bg-opacity-75 text-white px-5 py-2 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Login
      </Link>
    </nav>
  );
};

export default Navbar;

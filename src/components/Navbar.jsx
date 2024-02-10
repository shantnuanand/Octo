import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="text-white text-2xl font-semibold">Octopus</div>
          </Link>
          <div className="hidden sm:flex space-x-6">
            <Link to="/products" className="text-white hover:text-gray-300">
              Products
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link to="/cart" className="text-white hover:text-gray-300">
              Cart
            </Link>
          </div>
          {/* Responsive menu button for small screens */}
          <div className="sm:hidden">
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Responsive menu items for small screens */}
        <div className="sm:hidden mt-2">
          <Link to="/products" className="block text-white hover:text-gray-300">
            Products
          </Link>
          <Link to="/about" className="block text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/cart" className="block text-white hover:text-gray-300">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

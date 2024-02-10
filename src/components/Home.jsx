import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Octopus</h1>
        <p className="text-lg mb-8">
          Explore our amazing products and services.
        </p>
        <Link
          to="/products"
          className="bg-white text-gray-800 px-6 py-3 rounded-full font-bold hover:bg-gray-300 transition duration-300"
        >
          Discover More
        </Link>
      </div>
    </div>
  );
};

export default Home;

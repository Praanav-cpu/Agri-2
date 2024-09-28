import React from 'react';
import farmerf from '../assets/farmerf.png';

const HomePage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-green-700 text-white h-screen flex items-center justify-center px-4">
        <div>
        <img 
              src={farmerf}
              alt="Placeholder Image 1" 
              className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
            />
        </div>
        <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Unlocking the Secrets
        of Sustainable Agriculture
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-center">
          Empowering you with the best tools and features.
        </p>
        <button className="bg-green-900 text-white py-2 px-6 rounded-full hover:bg-green-800 transition duration-300">
          Get Started
        </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Feature One</h3>
            <p className="text-gray-700">Description of feature one. It's amazing and helps you in many ways.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Feature Two</h3>
            <p className="text-gray-700">Description of feature two. You'll love using this feature!</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Feature Three</h3>
            <p className="text-gray-700">Description of feature three. It's designed to improve your experience.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#home" className="hover:text-green-300">Home</a>
            <a href="About" className="hover:text-green-300">About</a>
            <a href="Contact" className="hover:text-green-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

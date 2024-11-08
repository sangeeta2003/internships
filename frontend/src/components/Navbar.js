import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-semibold">Proviz School of AI</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-purple-400 transition-all">Home</a>
          <a href="#about" className="hover:text-purple-400 transition-all">About</a>
          <a href="#blog" className="hover:text-purple-400 transition-all">Blog</a>
          <a href="#shop" className="hover:text-purple-400 transition-all">Shop</a>
          <a href="#contact" className="hover:text-purple-400 transition-all">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

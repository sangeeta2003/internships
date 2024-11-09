// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-semibold">Proviz School of AI</div>
        <div className="space-x-6">
          <Link to="/" className="hover:text-purple-400 transition-all">Home</Link>
          <Link to="/blog" className="hover:text-purple-400 transition-all">Blog</Link>
          <Link to="/shop" className="hover:text-purple-400 transition-all">Shop</Link>
          <Link to="/contact" className="hover:text-purple-400 transition-all">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

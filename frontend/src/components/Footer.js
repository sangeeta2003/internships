import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://facebook.com" className="text-gray-400 hover:text-white">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com" className="text-gray-400 hover:text-white">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="mailto:contact@provizai.com" className="text-gray-400 hover:text-white">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <p>&copy; 2024 Proviz School of AI. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

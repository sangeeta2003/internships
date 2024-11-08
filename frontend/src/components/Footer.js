import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="flex justify-center mb-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-4 text-2xl hover:text-blue-500">
          <i className="fab fa-facebook-f"></i> {/* Facebook icon */}
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-4 text-2xl hover:text-pink-500">
          <i className="fab fa-instagram"></i> {/* Instagram icon */}
        </a>
        <a href="mailto:info@provizschool.com" className="mx-4 text-2xl hover:text-red-500">
          <i className="fas fa-envelope"></i> {/* Email icon */}
        </a>
      </div>
      <p>&copy; 2024 Proviz School of AI. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

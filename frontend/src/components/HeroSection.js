import React from 'react';
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white h-screen flex flex-col justify-center">
      <Navbar />
      <div className="text-center space-y-6 mt-32">
        <h1 className="text-5xl font-extrabold">Welcome to Proviz School of AI</h1>
        <p className="text-xl max-w-2xl mx-auto">Unlock your future with the power of Artificial Intelligence. Prepare for a career that shapes the future.</p>
        <a href="#apply" className="bg-purple-800 py-2 px-6 rounded-full text-lg font-semibold hover:bg-purple-900 transition-all">
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

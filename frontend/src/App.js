import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import Chatbot from './components/Chatbot';
// import Form from './components/Form';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import ShopSection from './components/ShopSection';

const App = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BlogSection />
      <ShopSection />
      <Chatbot />
      {/* <Form /> */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;

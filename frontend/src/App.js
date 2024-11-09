import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import ShopSection from './components/ShopSection';
import ApplyPage from './components/ApplyPage';  // Assuming ApplyPage is a new page component

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 text-white font-sans">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/blog" element={<BlogSection />} /> 
          <Route path="/shop" element={<ShopSection />} /> 
          <Route path="/apply" element={<ApplyPage />} />
        </Routes>
      
        <BlogSection/>
        <ShopSection/>
        <Chatbot />
        <ContactSection />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

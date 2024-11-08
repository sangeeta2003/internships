import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import Chatbot from './components/Chatbot';
import Form from './components/Form';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import ShopSection from './components/ShopSection';
// import BallMovement from './components/BallMovement'; 
const App = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <BlogSection />
      <ShopSection />
      <Chatbot />
      <Form />
     
      <ContactSection />
      <Footer />
      {/* <BallMovement /> */}
    </div>
  );
};

export default App;

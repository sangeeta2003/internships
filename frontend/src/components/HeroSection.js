import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white h-screen flex flex-col justify-center bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="text-center space-y-6 mt-32 relative z-10">
        <h1 className="text-5xl font-extrabold">Welcome to Proviz School of AI</h1>
        <p className="text-xl">Unlock your future with the power of Artificial Intelligence</p>
        <Link to="/apply" className="bg-purple-800 py-2 px-6 rounded-full text-lg font-semibold hover:bg-purple-900 transition-all">
          Apply Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

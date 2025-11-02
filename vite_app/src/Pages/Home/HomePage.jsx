import React from 'react';
import Lottie from 'lottie-react';
import HeroSection from '../../Components/Hero.jsx';
import devAnimation from '../../assets/WebDevelopmentAnimation.json';

const Home = () => {
  return (
    <div className="relative w-full min-h-[100svh] overflow-hidden bg-[#121212] pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] scrollbar-hide">

      
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 bg-[conic-gradient(at_bottom_left,_#121212,_#000000_40%,_#FFD700_100%)] opacity-100" />

      {/* Dot Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#FFD700" opacity="0.12" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen px-5 sm:px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Hero Section (Top on mobile) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center text-white order-1 lg:order-none">
          <HeroSection />
        </div>

        {/* Animation (Below hero on mobile) */}
        <div className="w-full lg:w-[45%] flex justify-center items-center order-2 lg:order-none">
          <div className="bg-black bg-opacity-40 border-2 border-yellow-400 shadow-[0_0_30px_4px_rgba(234,179,8,0.3)] rounded-2xl p-6 w-[85%] sm:w-[70%] md:w-[60%] lg:w-auto">
            <Lottie animationData={devAnimation} loop={true} className="w-full max-w-md" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;

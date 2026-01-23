import React, { useEffect, useRef } from 'react';
import About from '../Pages/AboutUs/About.jsx'
const generateStars = (num, width, height) => {
  const stars = [];
  for (let i = 0; i < num; i++) {
    // Obsidian Mode: Brighter Gold/White for visibility
    const opacity = Math.random() * 0.8 + 0.3; // 0.3 to 1.0 opacity (much brighter)
    const color = Math.random() > 0.7 ? `rgba(251, 191, 36, ${opacity})` : `rgba(255, 255, 255, ${opacity})`; // Amber-400 (Brighter Gold) or White
    stars.push(`${Math.floor(Math.random() * width)}px ${Math.floor(Math.random() * height)}px ${color}`);
  }
  return stars.join(', ');
};

const StarField = () => {
  const starsRef = useRef();
  const stars1Ref = useRef();
  const stars2Ref = useRef();
  const shootingStarsRef = useRef();

  useEffect(() => {
    const width = 2560;
    const height = 2560;

    // Reduced star count for cleaner look
    if (starsRef.current)
      starsRef.current.style.boxShadow = generateStars(900, width, height);

    if (stars1Ref.current)
      stars1Ref.current.style.boxShadow = generateStars(400, width, height);

    if (stars2Ref.current)
      stars2Ref.current.style.boxShadow = generateStars(100, width, height);

    if (shootingStarsRef.current)
      shootingStarsRef.current.style.boxShadow = generateStars(5, width, height); // Fewer shooting stars
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#09090b]">
      <div className="absolute text-white font-bold text-lg font-sans z-20 w-full h-screen overflow-y-auto scrollbar-hide">
        <About />
      </div>

      <div
        ref={starsRef}
        className="absolute top-0 left-0 w-[1px] h-[1px] animate-star z-10"
      ></div>

      <div
        ref={stars1Ref}
        className="absolute top-0 left-0 w-[2px] h-[2px] animate-star-slow z-10"
      ></div>

      <div
        ref={stars2Ref}
        className="absolute top-0 left-0 w-[3px] h-[3px] animate-star-slower z-10"
      ></div>

      <div
        ref={shootingStarsRef}
        className="absolute top-0 left-0 w-[5px] h-[85px] animate-shooting-star bg-gradient-to-t from-transparent to-amber-200/50 rounded-t-full z-10"
      ></div>

      <style>{`
        @keyframes animStar {
          from {
            transform: translateY(0) translateX(0);
          }
          to {
            transform: translateY(-2560px) translateX(-2560px);
          }
        }

        @keyframes animShootingStar {
          from {
            transform: translateY(0px) translateX(0px) rotate(-45deg);
            opacity: 0;
            height: 5px;
          }
          to {
            transform: translateY(-2560px) translateX(-2560px) rotate(-45deg);
            opacity: 0.5;
            height: 800px;
          }
        }
      `}</style>

      <style jsx>{`
        /* Slowed down animations by 2.5x for calming effect */
        .animate-star {
          animation: animStar 250s linear infinite;
        }

        .animate-star-slow {
          animation: animStar 300s linear infinite;
        }

        .animate-star-slower {
          animation: animStar 450s linear infinite;
        }

        .animate-shooting-star {
          animation: animShootingStar 25s linear infinite; 
        }
      `}</style>
    </div>


  );
};

export default StarField;


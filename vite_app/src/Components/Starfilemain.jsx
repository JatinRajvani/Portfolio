import React, { useEffect, useRef } from 'react';
import HeroSection from './Hero.jsx';
const generateStars = (num, width, height) => {
  const stars = [];
  for (let i = 0; i < num; i++) {
    stars.push(`${Math.floor(Math.random() * width)}px ${Math.floor(Math.random() * height)}px #FFF`);
  }
  return stars.join(', ');
};

const StarFieldmain = () => {
  const starsRef = useRef();
  const stars1Ref = useRef();
  const stars2Ref = useRef();
  const shootingStarsRef = useRef();

  useEffect(() => {
    const width = 2560;
    const height = 2560;

    if (starsRef.current)
      starsRef.current.style.boxShadow = generateStars(1700, width, height);

    if (stars1Ref.current)
      stars1Ref.current.style.boxShadow = generateStars(700, width, height);

    if (stars2Ref.current)
      stars2Ref.current.style.boxShadow = generateStars(200, width, height);

    if (shootingStarsRef.current)
      shootingStarsRef.current.style.boxShadow = generateStars(10, width, height);
  }, []);

  return (
    <div className="relative w-full h-screen  bg-gradient-to-b from-[#020107] to-[#201b46]">
      <div className="absolute text-white font-bold text-lg font-sans  z-20 w-full h-screen overflow-y-auto scrollbar-hide ">
        <HeroSection/>
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
        className="absolute top-0 left-0 w-[5px] h-[85px] animate-shooting-star bg-gradient-to-t from-transparent to-white rounded-t-full z-10"
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
            opacity: 1;
            height: 5px;
          }
          to {
            transform: translateY(-2560px) translateX(-2560px) rotate(-45deg);
            opacity: 1;
            height: 800px;
          }
        }
      `}</style>

      <style jsx>{`
        .animate-star {
          animation: animStar 100s linear infinite;
        }

        .animate-star-slow {
          animation: animStar 125s linear infinite;
        }

        .animate-star-slower {
          animation: animStar 175s linear infinite;
        }

        .animate-shooting-star {
          animation: animShootingStar 10s linear infinite;
        }
      `}</style>
    </div>

    
  );
};

export default StarFieldmain;


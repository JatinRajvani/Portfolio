import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Waves = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadVanta = async () => {
      try {
        setIsLoading(true);
        
        // Check if script is already loaded
        if (document.querySelector('script[src="/vanta.waves.min.js"]')) {
          initializeEffect();
          return;
        }

        const script = document.createElement('script');
        script.src = '/vanta.waves.min.js';
        script.async = true;

        script.onload = () => initializeEffect();
        script.onerror = () => {
          setError('Failed to load wave effect');
          setIsLoading(false);
        };

        document.body.appendChild(script);
      } catch (err) {
        setError('Failed to initialize wave effect');
        setIsLoading(false);
      }
    };

    const initializeEffect = () => {
      if (window.VANTA && window.VANTA.WAVES && !vantaEffect) {
        const isMobile = window.innerWidth < 768;
        
        const effect = window.VANTA.WAVES({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: isMobile ? 0.75 : 1.0,
          scaleMobile: 0.75,
          color: 0xFBBF24, // Yellow color to match theme
          zoom: isMobile ? 0.85 : 0.7,
          waveHeight: isMobile ? 15 : 20,
          waveSpeed: isMobile ? 0.75 : 1,
          shininess: 30,
        });
        
        setVantaEffect(effect);
        setIsLoading(false);
      }
    };

    loadVanta();

    // Cleanup
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (vantaEffect) {
        vantaEffect.resize();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [vantaEffect]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-yellow-400">{error}</p>
      </div>
    );
  }

  return (
    <div
      ref={vantaRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
        </div>
      )}
      
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 md:px-10 text-center md:text-left md:max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Welcome to My <span className="text-yellow-400">Portfolio</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Crafting digital experiences with code and creativity
        </p>
      </div>
    </div>
  );
};

export default Waves;
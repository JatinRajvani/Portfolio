import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';
import HeroSection from './Hero.jsx';

const VantaGlobe = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    let frameId;
    let angle = 0;
    let autoRotate = true;

    if (!vantaEffect) {
      const effect = GLOBE({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x0ea5e9,           // Globe lines (light blue)
        backgroundColor: 0x110e28  // Dark background
      });

      setVantaEffect(effect);

      // Animate welcome spin (360° rotation on Y-axis)
      const animateRotation = () => {
        if (effect?.scene && autoRotate) {
          angle += 0.005; // Spin speed
          effect.scene.rotation.y = angle;

          if (angle >= Math.PI * 2) {
            autoRotate = false; // Stop after full spin
          }

          frameId = requestAnimationFrame(animateRotation);
        }
      };

      animateRotation();
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      cancelAnimationFrame(frameId);
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          color: '#fff',
          position: 'absolute',
          top: '50%',
          left: '18%',
          transform: 'translate(-50%, -50%)',
          fontSize: '2.5rem',
          zIndex: 1,
        }}
      >
        <HeroSection />
        {/* Optional: Add welcome message or animation here */}
      </div>
    </div>
  );
};

export default VantaGlobe;

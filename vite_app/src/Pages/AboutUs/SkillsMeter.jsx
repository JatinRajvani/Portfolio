// import React, { useEffect, useRef } from "react";
// import { motion, useAnimation, useInView } from "framer-motion";

// const SkillOdometer = ({ skill, percentage }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (isInView) {
//       const angle = (percentage / 90) * 45; // Rotate clockwise
//       controls.start({ rotate: angle });
//     }
//   }, [isInView, percentage, controls]);

//   const renderTicks = () => {
//     const ticks = [];
//     const radius = 130;
//     const centerX = 150;
//     const centerY = 150;

//     for (let i = 0; i <= 10; i++) {
//       const value = i * 10;
//       const angle = (-value * Math.PI) / 100;
//       const x = centerX + radius * Math.cos(angle);
//       const y = centerY + radius * Math.sin(angle);

//       ticks.push(
//         <text
//           key={i}
//           x={x}
//           y={y}
//           textAnchor="middle"
//           alignmentBaseline="middle"
//           fill="#37BAF5"
//           fontSize="12"
//           fontWeight="bold"
//         >
//           {value}
//         </text>
//       );
//     }

//     return ticks;
//   };

//   return (
//     <div
//       ref={ref}
//       className="flex flex-col items-center justify-center w-[340px] bg-black text-white p-6 rounded-2xl shadow-xl"
//     >
//       <div className="relative w-[300px] h-[160px]">
//         <svg width="100%" height="100%" viewBox="0 0 300 180">
//           {/* Dial arc */}
//           <path
//             d="M 30 150 A 120 120 0 0 1 270 150"
//             stroke="#37BAF5"
//             strokeWidth="4"
//             fill="none"
//           />

//           {/* Ticks & Numbers */}
//           {renderTicks()}
//         </svg>

//         {/* Needle */}
// {/* Needle Wrapper - centered in SVG */}
// <motion.div
//   className="absolute"
//   style={{
//     top: "65px", // Y center of SVG
//     left: "150px", // X center of SVG
//     width: "4px",
//     height: "100px",
//     backgroundColor: "red",
//     transformOrigin: "bottom center",
//   }}
//   initial={{ rotate: 0 }}
//   animate={controls}
//   transition={{ duration: 3, ease: "easeOut" }}
// />


//         {/* Center Circle */}
//         <div className="absolute top-[140px] left-[140px] w-8 h-8 rounded-full bg-red-600 z-10" />
//       </div>

//       {/* Skill name and percentage */}
//       <div className="text-center mt-4">
//         <h4 className="text-xl font-bold">{skill}</h4>
//         <p className="text-[#FFCB22] text-lg font-semibold">{percentage}%</p>
//       </div>
//     </div>
//   );
// };

// export default SkillOdometer;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillMeter = ({ name, level }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const normalizedLevel = Math.max(0, Math.min(100, level));
  const needleRotation = normalizedLevel * 1.8;

  return (
    <div 
      ref={ref}
      className="relative flex flex-col items-center transition-transform duration-300 hover:scale-105 cursor-pointer group"
    >
      <div className="w-full max-w-[250px] aspect-[2/1.5] relative">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <path
            d="M10 100 A 90 90 0 0 1 190 90"
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="12"
            className="opacity-50"
          />
          <path
            d="M10 90 A 90 90 0 0 1 190 90"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="10"
            strokeLinecap="round"
            className="drop-shadow-[0_2px_8px_rgba(6,182,212,0.45)]"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFCB22" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>

          {/* Tick marks and numbers */}
          {Array.from({ length: 11 }, (_, i) => i * 10).map((tick) => {
            const angle = tick * 1.8 * (Math.PI / 180);
            const r = 85;
            const x = 100 - r * Math.cos(angle);
            const y = 90 - r * Math.sin(angle);
            const textX = 100 - (r + 15) * Math.cos(angle);
            const textY = 90 - (r + 15) * Math.sin(angle);
            return (
              <React.Fragment key={tick}>
                <line
                  x1={x}
                  y1={y}
                  x2={x - 8 * Math.cos(angle)}
                  y2={y - 8 * Math.sin(angle)}
                  stroke="#FFCB22"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="drop-shadow-sm"
                />
                <text
                  x={textX}
                  y={textY}
                  fill="#FFCB22"
                  fontSize="8"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="font-medium"
                >
                  {tick}
                </text>
              </React.Fragment>
            );
          })}

          {Array.from({ length: 20 }, (_, i) => i * 5).map((tick) => {
            if (tick % 10 !== 0) {
              const angle = tick * 1.8 * (Math.PI / 180);
              const r = 85;
              const x = 100 - r * Math.cos(angle);
              const y = 90 - r * Math.sin(angle);
              return (
                <line
                  key={tick}
                  x1={x}
                  y1={y}
                  x2={x - 4 * Math.cos(angle)}
                  y2={y - 4 * Math.sin(angle)}
                  stroke="#06B6D4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="opacity-70"
                />
              );
            }
            return null;
          })}

          {/* Animated needle */}
<motion.g
  initial={{ rotate: 0 }}
  animate={{ rotate: inView ? needleRotation : 0 }}
  transition={{ type: "spring", stiffness: 60, damping: 15 }}
  style={{ originX: "50%", originY: "90%" }} // FIX ✅
>
  <line
    x1="100"
    y1="90"
    x2="30"
    y2="90"
    stroke="#ef4444"
    strokeWidth="3"
    strokeLinecap="round"
    className="drop-shadow-[0_2px_4px_rgba(239,68,68,0.5)]"
  />
  <circle
    cx="100"
    cy="90"
    r="8"
    fill="#ef4444"
    className="drop-shadow-[0_2px_4px_rgba(239,68,68,0.5)]"
  />
</motion.g>

        </svg>

        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md px-3 py-1 text-xs font-mono tracking-wider shadow-lg group-hover:scale-105 transition-transform duration-200 ">
          {normalizedLevel.toFixed(0).padStart(2, '0')}
        </div>
      </div>

      <div className="mt-3 text-center ">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-200">
          {name}
        </h3>
        <p className="text-cyan-400 font-medium text-sm">
          {normalizedLevel}%
        </p>
      </div>
    </div>
  );
};

export default SkillMeter;

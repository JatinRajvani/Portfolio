import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import AnimatedSection from "../../Components/Animated";
import { SiHtml5, SiFigma, SiJavascript } from "react-icons/si";
import { LuMonitor } from "react-icons/lu";

const TimelineItem = ({ icon, title, description, isLast = false }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-0 sm:gap-8 group mb-10 sm:mb-10">
      {/* Left: Icon + connector */}
  <div className="relative flex flex-col items-center sm:items-start min-h-[150px] sm:min-h-[220px]">

        <motion.div
          className="relative z-10"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 rounded-full bg-[#FFCB22] opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300"></div>

          <div className="relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#FFCB22] to-[#FFB800] shadow-lg shadow-[#FFCB22]/20 group-hover:shadow-[#FFCB22]/40 transition-all duration-300">
            <div className="text-black text-xl sm:text-2xl">{icon}</div>
          </div>
        </motion.div>

        {/* Connecting Line */}
{/* Connecting Line */}
{!isLast && (
  <div className="absolute left-1/2 sm:left-8 w-[3px] h-[calc(100%+4rem)] bg-gradient-to-b from-[#FFCB22]/70 via-gray-700/60 to-gray-800 -translate-x-1/2 blur-[0.5px]"></div>
)}

{/* 🔸 Show line for last item only on mobile */}
{isLast && (
  <div className="absolute left-1/2 w-[3px] h-[calc(100%+4rem)] bg-gradient-to-b from-[#FFCB22]/70 via-gray-700/60 to-gray-800 -translate-x-1/2 blur-[0.5px] sm:hidden"></div>
)}



      </div>

      {/* Right: Content */}
      <div className="flex-1">
        <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 sm:p-6 hover:border-[#FFCB22]/30 hover:bg-gray-800/60 transition-all duration-300">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#FFCB22] transition-colors duration-300">
            {title}
          </h3>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
            {description.split("**").map((part, i) =>
              i % 2 === 1 ? (
                <span key={i} className="font-semibold text-[#FFCB22]">
                  {part}
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </p>

          {/* Underline animation */}
          <motion.div
            className="mt-4 h-1 bg-gradient-to-r from-[#FFCB22] via-transparent to-transparent rounded-full w-0 group-hover:w-3/5 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

const CurrentStatusSection = ({ id }) => {
  const timelineData = [
    {
      icon: <SiHtml5 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Getting Started with HTML & CSS",
      description:
        "I started my coding journey as a beginner with **HTML and CSS**, building a strong foundation in web development. To practice, I created static projects like a **YouTube clone**, **Amazon static clone**, and **Nvidia clone**, which helped me understand layouts and styling deeply.",
    },
    {
      icon: <SiFigma className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Exploring UI/UX with Figma",
      description:
        "I explored **UI/UX design with Figma**, building designs such as **CodingGita clone** and **Instagram UI**, which helped me understand how design acts as a blueprint before coding.",
    },
    {
      icon: <SiJavascript className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Stepping into Programming with JS & C++",
      description:
        "I learned **JavaScript** and **C++**, improving my logic and interactivity skills. These helped me bridge frontend design and core programming concepts.",
    },
    {
      icon: <Code size={22} className="sm:w-7 sm:h-7" />,
      title: "Learning React, Node.js & MongoDB",
      description:
        "I began learning **React**, **Node.js**, and **MongoDB**, understanding how to build complete **MERN stack** applications from frontend to backend.",
    },
    {
      icon: <LuMonitor size={22} className="sm:w-7 sm:h-7" />,
      title: "Building Real-World Websites",
      description:
        "With full-stack knowledge, I built **Homy**, applying my skills in **frontend, backend, and database integration** to create real-world projects.",
    },
  ];

  return (
    <AnimatedSection id={id}>
      <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 text-center lg:text-left">
        <div className="max-w-5xl w-full">
          {/* Section Header */}
          <div className="text-center mb-14 sm:mb-16 flex flex-col items-center relative">
            <div className="absolute inset-0 bg-gradient-radial from-[#FFCB22]/5 via-transparent to-transparent rounded-full blur-3xl scale-150"></div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 relative">
              <span className="text-[#FFCB22] drop-shadow-lg">What I'm Up To</span>
              <br />
              <span className="text-white text-2xl sm:text-3xl md:text-4xl">Right Now</span>
            </h2>

            <p className="text-gray-300 max-w-2xl sm:max-w-3xl text-center text-sm sm:text-base md:text-lg leading-relaxed">
              A snapshot of where I am in my journey right now — my current focus areas,
              ongoing projects, and goals I'm working towards.
            </p>

            <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-[#FFCB22] to-transparent rounded-full w-[180px] sm:w-[220px] transition-all duration-700"></div>
          </div>

          {/* Timeline Items */}
          <div className="relative">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} {...item} isLast={index === timelineData.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CurrentStatusSection;

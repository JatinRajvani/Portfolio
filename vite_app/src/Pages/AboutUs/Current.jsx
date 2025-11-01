import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code } from 'lucide-react';
import AnimatedSection from '../../Components/Animated';
import { SiHtml5, SiCss3, SiFigma, SiJavascript } from "react-icons/si";
import { LuMonitor } from "react-icons/lu";

const TimelineItem = ({ icon, title, period, description, delay, isLast = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex flex-col sm:flex-row gap-5 sm:gap-8 group mb-10 sm:mb-16"
    >
      {/* Timeline Icon */}
      <div className="relative flex flex-col items-center sm:items-start">
        <motion.div 
          className="relative z-10"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 rounded-full bg-[#FFCB22] opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300"></div>
          
          <div className="relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#FFCB22] to-[#FFB800] shadow-lg shadow-[#FFCB22]/20 group-hover:shadow-[#FFCB22]/40 transition-all duration-300">
            <div className="text-black text-xl sm:text-2xl">
              {icon}
            </div>
          </div>

          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#FFCB22] opacity-30"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: delay + 0.5
            }}
          />
        </motion.div>

        {/* Connecting line */}
        {!isLast && (
          <motion.div 
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 0.8, delay: delay + 0.3 }}
            className="absolute top-12 sm:top-16 bottom-0 left-1/2 sm:left-8 w-[2px] bg-gradient-to-b from-[#FFCB22] via-gray-700 to-gray-800 -translate-x-1/2"
          />
        )}
      </div>
      
      {/* Content card */}
      <motion.div 
        className="flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 sm:p-6 group-hover:border-[#FFCB22]/30 group-hover:bg-gray-800/60 transition-all duration-300">
          
          <motion.h3 
            className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#FFCB22] transition-colors duration-300"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          
          {period && (
            <p className="text-[#FFCB22] font-semibold text-xs sm:text-sm mb-2 uppercase tracking-wider">
              {period}
            </p>
          )}
          
          <div className="text-gray-300 leading-relaxed sm:leading-loose text-sm sm:text-base md:text-lg">
            {description.split('**').map((part, index) => 
              index % 2 === 1 ? (
                <span key={index} className="font-semibold text-[#FFCB22]">
                  {part}
                </span>
              ) : (
                <span key={index}>{part}</span>
              )
            )}
          </div>

          <motion.div
            className="mt-4 h-1 bg-gradient-to-r from-[#FFCB22] via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ width: 0 }}
            animate={inView ? { width: "60%" } : { width: 0 }}
            transition={{ duration: 0.8, delay: delay + 0.5 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const CurrentStatusSection = ({ id }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineData = [
    {
      icon: <SiHtml5 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Getting Started with HTML & CSS",
      description: "I started my coding journey as a beginner with **HTML and CSS**, building a strong foundation in web development. To practice, I created static projects like a **YouTube clone**, **Amazon static clone**, **Spotify Clone**, **Nvidia Clone**, which helped me understand layouts, styling, and page structure more effectively."
    },
    {
      icon: <SiFigma className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Exploring UI/UX with Figma",
      description: "I started exploring **UI/UX design with Figma**, where I learned how designs are created before coding. I built projects such as a **CodingGita design clone**, an **Instagram UI clone**, and a **CarsInfo design**, which helped me understand how design acts as a blueprint before real-world development."
    },
    {
      icon: <SiJavascript className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Stepping into Programming with JS & C++",
      description: "I moved on to learning **JavaScript and C++**, which introduced me to problem-solving and logical thinking. **JavaScript** helped me add interactivity to web pages, while **C++** strengthened my fundamentals in algorithms and programming concepts."
    },
    {
      icon: <Code size={22} className="sm:w-7 sm:h-7" />,
      title: "Learning React, Node.js & MongoDB",
      description: "After mastering the basics of HTML, CSS, JavaScript, and design, I began learning **React**, **Node.js**, and **MongoDB** — understanding how to build complete, full-stack web applications."
    },
    {
      icon: <LuMonitor size={22} className="sm:w-7 sm:h-7" />,
      title: "Building Real-World Websites",
      description: "With my full-stack knowledge, I built **Homy**, applying my skills in frontend, backend, and database integration to bring complete websites to life. I’m continuously working on **new projects** and learning the latest tools to keep improving as a developer."
    }
  ];

  return (
    <AnimatedSection id={id}>
<div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 text-center lg:text-left">

        <div className="max-w-5xl w-full">
          
          {/* Section Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20 flex flex-col items-center relative"
          >
            <div className="absolute inset-0 bg-gradient-radial from-[#FFCB22]/5 via-transparent to-transparent rounded-full blur-3xl scale-150"></div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-[#FFCB22] drop-shadow-lg">What I'm Up To</span>
              <br />
              <span className="text-white text-2xl sm:text-3xl md:text-4xl">Right Now</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 max-w-2xl sm:max-w-3xl text-center text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose relative"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A snapshot of where I am in my journey right now — my current focus areas,
              ongoing projects, and the goals I'm working towards.
            </motion.p>

            <motion.div
              className="mt-6 sm:mt-8 h-1 bg-gradient-to-r from-transparent via-[#FFCB22] to-transparent rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: "200px" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </motion.div>

          {/* Timeline */}
          <div className="relative ">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                icon={item.icon}
                title={item.title}
                period={item.period}
                description={item.description}
                delay={0.2 + index * 0.15}
                isLast={index === timelineData.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CurrentStatusSection;

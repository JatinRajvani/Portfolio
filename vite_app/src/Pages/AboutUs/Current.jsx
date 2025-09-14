import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code, Trophy } from 'lucide-react';
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
      className="flex gap-6 md:gap-8 group"
    >
      {/* Enhanced Timeline Icon */}
      <div className="relative flex flex-col items-center">
        <motion.div 
          className="relative z-10"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {/* Glowing background effect */}
          <div className="absolute inset-0 rounded-full bg-[#FFCB22] opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300"></div>
          
          {/* Main icon container */}
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#FFCB22] to-[#FFB800] shadow-lg shadow-[#FFCB22]/20 group-hover:shadow-[#FFCB22]/40 transition-all duration-300">
            <div className="text-black">
              {icon}
            </div>
          </div>

          {/* Pulse ring animation */}
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
        
        {/* Enhanced timeline line */}
        {!isLast && (
          <motion.div 
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 0.8, delay: delay + 0.3 }}
            className="absolute top-16 bottom-0 left-1/2 w-1 bg-gradient-to-b from-[#FFCB22] via-gray-700 to-gray-800 -translate-x-1/2"
          >
            {/* Flowing dots animation */}
            <motion.div
              className="absolute left-1/2 w-2 h-2 bg-[#FFCB22] rounded-full -translate-x-1/2"
              animate={{
                y: [0, 100, 200, 300],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: delay + 1,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
      </div>
      
      {/* Enhanced content card */}
      <motion.div 
        className="pb-16 flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 group-hover:border-[#FFCB22]/30 group-hover:bg-gray-800/60 transition-all duration-300">
          {/* Title with enhanced styling */}
          <motion.h3 
            className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#FFCB22] transition-colors duration-300"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          
          {/* Period with enhanced styling */}
          {period && (
            <p className="text-[#FFCB22] font-semibold text-sm mb-3 uppercase tracking-wider">
              {period}
            </p>
          )}
          
          {/* Description with enhanced typography */}
          <div className="text-gray-300 leading-relaxed text-base">
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

          {/* Subtle bottom accent */}
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
      icon: <SiHtml5 className="w-8 h-8" />,
      title: "Getting Started with HTML & CSS",
      description: "I started my coding journey as a beginner with **HTML and CSS**, building a strong foundation in web development. To practice, I created static projects like a **YouTube clone**, **Amazon static clone**, **Spotify Clone**, **Nvidia Clone** which helped me understand layouts, styling, and page structure more effectively."
    },
    {
      icon: <SiFigma className="w-8 h-8" />,
      title: "Exploring UI/UX with Figma",
      description: "I started exploring **UI/UX design with Figma**, where I learned how designs are created before coding. During this time, I built practice projects such as a **CodingGita design clone**, an **Instagram UI clone**, and a **CarsInfo design**. These projects helped me understand how design acts as a blueprint and why it's useful before starting real-world development."
    },
    {
      icon: <SiJavascript className="w-8 h-8" />,
      title: "Stepping into Programming with JS & C++",
      description: "I moved on to learning **JavaScript and C++**, which introduced me to the world of problem-solving and logical thinking. **JavaScript** helped me add interactivity to web pages, while **C++** strengthened my fundamentals in programming concepts and algorithms."
    },
    {
      icon: <Code size={28} />,
      title: "Learning React, Node.js & MongoDB",
      description: "After mastering the basics of HTML, CSS, JavaScript, and design, I began learning **React** for building dynamic frontends, **Node.js** for server-side development, and **MongoDB** for database management. This helped me understand how to build functional, full-stack websites."
    },
    {
      icon: <LuMonitor size={28} />,
      title: "Building Real-World Websites",
      description: "With my full-stack knowledge, I began building real-world projects such as **Homy**, where I applied my skills in frontend, backend, and database integration to bring complete websites to life from scratch. This journey not only gave me practical experience in developing end-to-end solutions but also fueled my passion for exploring new technologies. I’m continuously working on **new projects**, expanding my skill set, and staying up to date with the latest tools and frameworks to **keep improving** as a developer"
    }
  ];

  return (
    <AnimatedSection id={id}>
      <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6">
        <div className="max-w-5xl w-full">
          {/* Enhanced header section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 flex flex-col items-center relative"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-radial from-[#FFCB22]/5 via-transparent to-transparent rounded-full blur-3xl scale-150"></div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-[#FFCB22] drop-shadow-lg">What I'm Up To</span>
              <br />
              <span className="text-white text-3xl md:text-4xl lg:text-5xl">Right Now</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 max-w-3xl text-center text-lg leading-relaxed relative"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A snapshot of where I am in my journey right now. My current focus areas,
              ongoing projects, and the goals I'm working towards.
            </motion.p>

            {/* Decorative line */}
            <motion.div
              className="mt-8 h-1 bg-gradient-to-r from-transparent via-[#FFCB22] to-transparent rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: "200px" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </motion.div>

          {/* Enhanced timeline */}
          <div className="relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-8 w-px h-full bg-gradient-to-b from-[#FFCB22] via-gray-500 to-transparent"></div>
            </div>

            <div className="relative">
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

            {/* Final decoration */}
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              {/* <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFCB22] to-[#FFB800] flex items-center justify-center shadow-lg shadow-[#FFCB22]/20">
                <Trophy className="w-10 h-10 text-black" />
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CurrentStatusSection;
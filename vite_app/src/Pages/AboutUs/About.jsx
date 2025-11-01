import React from "react";
import CoreSkills from  '../AboutUs/Summary.jsx'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import CurrentStatusSection from '../AboutUs/Current.jsx'
import EducationSection from '../AboutUs/Education.jsx'
import SkillsSection from './Skills.jsx'
import TechStack from './TechStack.jsx'
import { Code2, Heart, Sparkles, Target, Users, Zap } from 'lucide-react';

const FloatingElement = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedText = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const PrincipleCard = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
      animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: 90 }}
      transition={{ duration: 0.7, delay }}
      className="group relative"
    >
      <div className="relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 h-full transition-all duration-300 group-hover:border-[#FFCB22]/40 group-hover:bg-gray-800/60 group-hover:shadow-lg group-hover:shadow-[#FFCB22]/10">
        {/* Gradient background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFCB22]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        
        <div className="relative z-10">
          <motion.div 
            className="w-12 h-12 bg-[#FFCB22] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-black">
              {icon}
            </div>
          </motion.div>
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFCB22] transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <div className="w-full min-h-screen px-4 sm:px-6 lg:px-20 py-4 sm:py-0 text-white font-sans">
        {/* Enhanced Hero Section */}
        <section 
          ref={heroRef}
          className="w-full min-h-screen text-white px-2 sm:px-6 lg:px-3 
                     pt-10 sm:pt-0 pb-8 sm:pb-0 
                     flex flex-col items-center justify-center relative overflow-hidden "
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-[#FFCB22]/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </div>

          {/* Main content */}
          <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-2 sm:px-6">
            <motion.div className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFCB22] 
                             mb-6 sm:mb-8 drop-shadow-sm text-center relative 
                             px-4 sm:px-0" // Added horizontal padding for mobile
              >
                About Me
                
                {/* Update sparkles position for mobile */}
                <motion.div
                  className="absolute -top-2 -right-2 sm:-right-8 text-[#FFCB22]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={20} className="sm:hidden" /> {/* Smaller size for mobile */}
                  <Sparkles size={24} className="hidden sm:block" /> {/* Original size for desktop */}
                </motion.div>
              </h1>
              
              {/* Update gradient line width for mobile */}
              <motion.div
                className="h-1 bg-gradient-to-r from-transparent via-[#FFCB22] to-transparent 
                           rounded-full mx-auto w-[120px] sm:w-[200px]" // Fixed width for different screens
                initial={{ width: 0 }}
                animate={heroInView ? { width: "120px" } : { width: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>

            {/* Clean glassmorphism card with simplified content */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed sm:leading-loose max-w-3xl md:max-w-4xl mx-auto"
>
  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
    {/* Subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#FFCB22]/5 via-transparent to-transparent rounded-2xl"></div>

    <div className="relative z-10 space-y-4 sm:space-y-6">
      <motion.p 
        className="text-gray-300"
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        👋 Hi, I'm <span className="font-bold text-[#FFCB22]">Rajvani Jatin</span> — a passionate Web Developer and Computer Science student.
        I specialize in creating <span className="text-[#FFCB22] font-semibold">user-centric web experiences</span> that are both beautiful and functional.
      </motion.p>

      <motion.p 
        className="text-gray-300"
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        I thrive on solving real-world problems through code and building digital products using the <span className="text-[#FFCB22] font-semibold">MERN stack</span>.
        Whether it's sleek front-end interfaces or solid back-end systems, I love it all.
      </motion.p>

      <motion.p 
        className="text-gray-300"
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        My current focus is on learning deeply, collaborating on real-world projects, and preparing for internships and hackathons.
      </motion.p>

      <motion.p
        className="font-semibold text-gray-300"
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <span className="text-[#FFCB22]">Collaboration</span>, <span className="text-[#FFCB22]">consistency</span>, and <span className="text-[#FFCB22]">curiosity</span> are the principles I work by.
        Every project I work on is a step forward in my journey to becoming a world-class developer.
      </motion.p>
    </div>
  </div>
</motion.div>

          </div>
        </section>

        {/* Your existing sections remain unchanged */}
        <section className="w-full min-h-screen text-white pt-10 px-6 md:px-3 pt-0 pb-10 flex flex-col justify-center">
          <CurrentStatusSection />
        </section>

        <section className="pb-10">
          <EducationSection />
        </section>

        <section>
          <TechStack />
        </section>
      </div>
    </>
  );
};

export default About;
// AboutMe.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Two = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans">
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">About Me</h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-100">
          Hello! I am <span className="font-semibold text-white">Rajvani Jatin</span>, a passionate web developer and computer science student.
          I enjoy building creative web experiences, exploring new technologies, and solving real-world problems.
          From front-end UI designs to back-end logic, I love crafting user-centric applications that are both functional and beautiful.
          I believe in continuous learning and improving my skills every day.
          <br />
          <span className="text-yellow-300">Collaboration, consistency, and curiosity</span> are the core of my work ethic.
          Let me take you through my skills, education, and my journey so far.
        </p>
      </motion.div>

      {/* Current Status Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-3xl mx-auto mt-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">Current Status</h2>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-md">
          <ul className="space-y-3 text-base md:text-lg text-gray-100">
            <li><span className="text-yellow-300">🎓 Education:</span> Bachelor of Computer Science – Your College Name</li>
            <li><span className="text-yellow-300">📍 Semester:</span> First Year, Second Semester</li>
            <li><span className="text-yellow-300">📆 Graduation:</span> Expected 2027</li>
            <li><span className="text-yellow-300">🧠 Focus:</span> Deepening MERN stack skills, building real-world projects</li>
            <li><span className="text-yellow-300">🚀 Goals:</span> Internships, hackathons & product building</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Two;
import React from "react";
import CoreSkills from  '../AboutUs/Summary.jsx'
import { motion } from "framer-motion";
import CurrentStatusSection from '../AboutUs/Current.jsx'
import EducationSection from '../AboutUs/Education.jsx'
import SkillsSection from './Skills.jsx'
import TechStack from './TechStack.jsx'
const About = () => {
  return (
<>

<div className="max-h-screen w-full px-6 md:px-20 py-0 text-white font-sans  ">
<section className="w-full min-h-screen text-white px-6 md:px-3 pt-0 pb-0 flex flex-col items-center justify-center">
  <h1 className="text-4xl md:text-5xl font-bold text-[#FFCB22] mb-8 drop-shadow-sm text-center">
    About Me
  </h1>

    <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center">
      👋 Hi, I'm <span className="font-semibold text-white">Rajvani Jatin</span> — a passionate Web Developer and Computer Science student.
      I specialize in creating <span className="text-indigo-400 font-medium">user-centric web experiences</span> that are both beautiful and functional.
      <br /><br />
      I thrive on solving real-world problems through code and building digital products using the <span className="text-pink-400">MERN stack</span>.
      Whether it’s sleek front-end interfaces or solid back-end systems, I love it all.
      <br /><br />
      My current focus is on learning deeply, collaborating on real-world projects, and preparing for internships and hackathons.
      <br /><br />
      <span className="text-indigo-300">Collaboration, consistency, and curiosity</span> are the principles I work by.
      Every project I work on is a step forward in my journey to becoming a world-class developer.
    </p>
</section>


<section className="w-full min-h-screen text-white px-6 md:px-3 pt-0 pb-20 flex flex-col justify-center " >
< CurrentStatusSection />
</section>

<section>
<EducationSection/>
</section>

<section>
{/* <SkillsSection /> */}
</section>

<section>
<TechStack/>
</section>

      {/* Skills */}
      {/* <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#FFCB22] mb-6">Skills</h2>
        <ul className="flex flex-wrap gap-4 text-base text-white">
          {[
            'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'MongoDB',
            'Tailwind CSS', 'Figma', 'Git & GitHub', 'Express.js'
          ].map(skill => (
            <li key={skill} className="bg-[#1e1e1e] px-4 py-2 rounded-full shadow-sm hover:bg-[#2a2a2a] transition">
              {skill}
            </li>
          ))}
        </ul>
      </section> */}

      {/* Education */}
      {/* <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#FFCB22] mb-6">Education</h2>
        <div className="text-gray-200">
          <p className="mb-2">
            🎓 <strong>Bachelor of Computer Science</strong> – Your College Name
          </p>
          <p className="mb-2">📍 Semester: First Year, Second Semester</p>
          <p className="mb-2">📅 Expected Graduation: 2027</p>
        </div>
      </section> */}

      {/* Coding Journey */}
      {/* <section>
        <h2 className="text-3xl font-semibold text-[#FFCB22] mb-6">My Coding Journey</h2>
        <p className="text-gray-200 leading-relaxed">
          My journey into coding began with curiosity and a drive to create. I started with HTML and CSS,
          experimenting by cloning websites like Tata Motors, Netflix, and YouTube. With time, I dived into JavaScript,
          React, and backend technologies like Node.js and MongoDB. I've built personal projects like portfolio sites,
          hostel management platforms, and document scanning apps. Each line of code has helped shape my mindset
          toward problem-solving, creativity, and constant growth.
        </p>
      </section> */}
      {/* <section className="mb-12">
<CoreSkills />
      </section > */}
    </div>
</>

    

  );
};

export default About;

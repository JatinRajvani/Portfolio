import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from 'react-icons/fa6';
import profileimage from '../assets/profile.jpeg'

const HeroSection = () => {
  return (
<div className="flex flex-col justify-center items-start gap-3 h-screen px-12 text-white  font-sans">
      
      {/* Placeholder for Profile Image */}
      <div className="w-32 h-32 mb-3 rounded-md bg-gray-800 border-2 border-gray-600 flex items-center justify-center text-sm text-gray-400">
        Image Here
      </div>

      {/* Name Title */}
      <h1 className="text-4xl md:text-5xl font-bold  leading-tight">
        I am{' '}
        <span className="text-yellow-400">
          <Typewriter
            words={['Jatin Rajvani']}
            loop={1}
            cursor
            cursorStyle=""
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>

      {/* Roles */}
      <h2 className="text-3xl md:text-4xl font-medium mb-4">
        I’m a{' '}
        <span className="text-yellow-400 font-semibold">
          <Typewriter
            words={['Developer', 'UI/UX Designer', 'Full Stack Developer','Car Enthusiast']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h2>

      {/* Quote */}
      <p className="text-base md:text-lg text-gray-100 italic max-w-2xl mb-6 leading-relaxed drop-shadow-sm">
  Turning <span className="text-yellow-400 font-medium">"it'll never work"</span> into <span className="text-yellow-300 font-medium">"wait, that was too easy."</span><br />
  <span className="not-italic">Spoiler:</span> I'm still debugging — probably forever.<br />
  But hey, at least it compiles… most of the time.
</p>

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
  <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-medium py-3 px-4.5 text-sm rounded-md transition-all duration-300 shadow hover:shadow-lg hover:-translate-y-1">
    View Projects
  </button>
  <button className="border border-yellow-400 hover:bg-yellow-400 text-white hover:text-black font-medium py-1.5 px-4 text-sm rounded-md transition-all duration-300 shadow hover:shadow-lg hover:-translate-y-1">
    About Me
  </button>
</div>


      {/* Social Icons */}
      <div className="flex flex-row gap-4   pb-8 sm:pb-0">
        {[ 
          { icon: <FaLinkedin />, href: 'https://linkedin.com' },
          { icon: <FaGithub />, href: 'https://github.com' },
          { icon: <FaEnvelope />, href: 'mailto:yourmail@example.com' },
          { icon: <FaXTwitter />, href: 'https://x.com' },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl hover:text-yellow-400 transition-transform transform hover:rotate-[360deg] duration-500"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;


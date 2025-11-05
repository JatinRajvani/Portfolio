import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import CurrentStatusSection from "../AboutUs/Current.jsx";
import EducationSection from "../AboutUs/Education.jsx";
import TechStack from "./TechStack.jsx";
import { Sparkles } from "lucide-react";

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Small fade-in state for CSS transitions
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  return (
    <div className="w-full min-h-screen px-4 sm:px-6 lg:px-20 py-4 sm:py-0 text-white font-sans overflow-hidden">
      {/* ===================== HERO SECTION ===================== */}
      <section
        ref={ref}
        className="relative w-full min-h-[80dvh] sm:min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-2 sm:px-6 lg:px-3 py-0 transition-all duration-700 ease-out"
      >
        {/* ✅ Lightweight background glow */}
        {/* <div className="absolute top-24 left-10 w-48 sm:w-64 h-48 sm:h-64 bg-[#FFCB22]/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-24 right-10 w-56 sm:w-72 h-56 sm:h-72 bg-indigo-400/5 rounded-full blur-xl animate-pulse-slower"></div> */}

        {/* Main Content */}
        <div
          className={`relative z-10 w-full max-w-4xl mx-auto text-center px-2 sm:px-6 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Heading */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFCB22] mb-6 sm:mb-8 relative px-4 sm:px-0 drop-shadow-sm">
              About Me
              <div className="absolute -top-2 -right-2 sm:-right-8 text-[#FFCB22] animate-spin-slow">
                <Sparkles size={22} />
              </div>
            </h1>

            <div className="h-1 bg-gradient-to-r from-transparent via-[#FFCB22] to-transparent rounded-full mx-auto w-[120px] sm:w-[200px] transition-all duration-700 ease-out"></div>
          </div>

          {/* Glassmorphism Card */}
          <div
            className={`bg-white/5 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-8 border border-white/10 shadow-2xl relative overflow-hidden max-w-3xl mx-auto transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFCB22]/5 via-transparent to-transparent rounded-2xl"></div>

            <div className="relative z-10 space-y-4 sm:space-y-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose">
              <p>
                👋 Hi, I'm{" "}
                <span className="font-bold text-[#FFCB22]">Rajvani Jatin</span>{" "}
                — a passionate Web Developer and Computer Science student. I
                specialize in creating{" "}
                <span className="text-[#FFCB22] font-semibold">
                  user-centric web experiences
                </span>{" "}
                that are both beautiful and functional.
              </p>

              <p>
                I thrive on solving real-world problems through code and
                building digital products using the{" "}
                <span className="text-[#FFCB22] font-semibold">MERN stack</span>.
              </p>

              <p>
                My current focus is on learning deeply, collaborating on
                real-world projects, and preparing for internships and
                hackathons.
              </p>

              <p className="font-semibold">
                <span className="text-[#FFCB22]">Collaboration</span>,{" "}
                <span className="text-[#FFCB22]">consistency</span>, and{" "}
                <span className="text-[#FFCB22]">curiosity</span> are the
                principles I work by.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section className="min-h-screen text-white pt-10 px-6 md:px-3 pb-10 flex flex-col justify-center">
        <CurrentStatusSection />
      </section>

      <section className="pb-10">
        <EducationSection />
      </section>

      <section>
        <TechStack />
      </section>
    </div>
  );
};

export default About;

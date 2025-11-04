import React from "react";
// import CoreSkills from "../AboutUs/Summary.jsx";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CurrentStatusSection from "../AboutUs/Current.jsx";
import EducationSection from "../AboutUs/Education.jsx";
// import SkillsSection from "./Skills.jsx";
import TechStack from "./TechStack.jsx";
import { Sparkles } from "lucide-react";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <div className="w-full min-h-screen px-4 sm:px-6 lg:px-20 py-4 sm:py-0 text-white font-sans">
        {/* ===================== HERO SECTION ===================== */}
        <section
          ref={ref}
          className="relative w-full min-h-[80dvh] flex flex-col items-center justify-center overflow-hidden px-2 sm:px-6 lg:px-3 py-0"

        >
          {/* ✅ Light, low-cost background glow */}
          {!shouldReduceMotion && (
            <>
              <m.div
                className="absolute top-24 left-10 w-48 sm:w-64 h-48 sm:h-64 bg-[#FFCB22]/3 rounded-full blur-xl"
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <m.div
                className="absolute bottom-24 right-10 w-56 sm:w-72 h-56 sm:h-72 bg-indigo-400/5 rounded-full blur-xl"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </>
          )}

          {/* Main Content */}
          <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-2 sm:px-6">
            <m.div
              className="mb-6 sm:mb-8"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp(0.2)}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFCB22] mb-6 sm:mb-8 relative px-4 sm:px-0 drop-shadow-sm">
                About Me
                <m.div
                  className="absolute -top-2 -right-2 sm:-right-8 text-[#FFCB22]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={20} className="sm:hidden" />
                  <Sparkles size={24} className="hidden sm:block" />
                </m.div>
              </h1>

              <m.div
                className="h-1 bg-gradient-to-r from-transparent via-[#FFCB22] to-transparent rounded-full mx-auto w-[120px] sm:w-[200px]"
                initial={{ width: 0 }}
                animate={{ width: "120px" }}
                transition={{ duration: 0.8 }}
              />
            </m.div>

            {/* Glassmorphism Card */}
            <m.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp(0.4)}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-8 border border-white/10 shadow-2xl relative overflow-hidden max-w-3xl mx-auto"
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
            </m.div>
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
    </LazyMotion>
  );
};

export default About;

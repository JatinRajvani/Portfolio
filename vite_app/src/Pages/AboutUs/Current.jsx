import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code, Trophy } from 'lucide-react';
import AnimatedSection from '../../Components/Animated';

const TimelineItem = ({ icon, title, period, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay }}
      className="flex gap-4 md:gap-6"
    >
      <div className="relative ]">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-900 text-primary-400 z-10 bg-[#FFCB22]">
          {icon}
        </div>
        <div className="absolute top-12 bottom-0 left-1/2 w-0.5 bg-gray-700 -translate-x-1/2"></div>
      </div>
      
      <div className="pb-12">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-primary-400 font-medium text-sm mb-2">{period}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

const CurrentStatusSection = ({ id }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
<AnimatedSection id={id} >
  <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6  ">
    <div className="max-w-4xl w-full">
<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 0.5 }}
  className="text-center mb-16 flex flex-col items-center"
>
  <h2 className="text-3xl text-[#FFCB22] md:text-4xl font-bold font-display mb-4">
    What I'm Up To <span className="text-primary-400">Now</span>
  </h2>
  <p className="text-gray-300 max-w-2xl text-center">
    A snapshot of where I am in my journey right now. My current focus areas,
    ongoing projects, and goals.
  </p>
</motion.div>

      <div className="relative">
        <TimelineItem 
          icon={<GraduationCap size={24} />}
          title="Computer Science Student"
          period="2022 - Present"
          description="Currently pursuing a Bachelor's degree in Computer Science, focusing on web development, algorithms, and data structures. Maintaining a 3.8 GPA while participating in coding competitions."
          delay={0.1}
        />
        
        <TimelineItem 
          icon={<Code size={24} />}
          title="Full-Stack Portfolio Project"
          period="Current Project"
          description="Developing a full-stack application using React, Node.js, and MongoDB. Implementing user authentication, real-time features, and responsive design principles to showcase my skills."
          delay={0.3}
        />
        
        <TimelineItem 
          icon={<Trophy size={24} />}
          title="Learning and Growth Goals"
          period="Ongoing"
          description="Expanding my knowledge in cloud technologies, learning AWS services, and improving my skills in TypeScript and Next.js. Aiming to contribute to open-source projects and build a strong professional network."
          delay={0.5}
        />
      </div>
    </div>
  </div>
</AnimatedSection>

  );
};

export default CurrentStatusSection;

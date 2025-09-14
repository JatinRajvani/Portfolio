// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { GraduationCap, Calendar, Target } from 'lucide-react';
// import AnimatedSection from '../../Components/Animated.jsx';

// const EducationCard = ({
//   title,
//   institution,
//   period,
//   graduationDate,
//   description,
//   delay
// }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 30 }}
//       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//       transition={{ duration: 0.5, delay }}
//       className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-primary-500 transition-all duration-300 hover:shadow-glow"
//     >
//       <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
//       <p className="text-primary-400 font-medium mb-4">{institution}</p>

//       <div className="flex flex-wrap gap-4 mb-4 text-sm">
//         <div className="flex items-center gap-1.5 text-gray-300">
//           <Calendar size={16} className="text-secondary-400" />
//           <span>{period}</span>
//         </div>
//         <div className="flex items-center gap-1.5 text-gray-300">
//           <Target size={16} className="text-secondary-400" />
//           <span>Graduation: {graduationDate}</span>
//         </div>
//       </div>

//       <p className="text-gray-300">{description}</p>
//     </motion.div>
//   );
// };

// const EducationSection = ({ id }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <AnimatedSection id={id} className="bg-gradient-to-b from-gray-900 to-gray-950">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-block p-3 bg-primary-900/50 rounded-full mb-4">
//             <GraduationCap size={32} className="text-primary-400" />
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
//             My <span className="text-primary-400">Education</span>
//           </h2>
//           <p className="text-gray-300 max-w-2xl mx-auto">
//             My academic journey has equipped me with a strong foundation in computer science
//             principles and practical skills for real-world applications.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8">
//           <EducationCard 
//             title="Bachelor of Science in Computer Science" 
//             institution="University of Technology"
//             period="2022 - Present"
//             graduationDate="May 2026"
//             description="Focusing on web development, algorithms, data structures, and software engineering principles. Active member of the university's coding club and participant in hackathons."
//             delay={0.1}
//           />
          
//           <EducationCard 
//             title="Full-Stack Web Development Bootcamp" 
//             institution="Tech Academy"
//             period="Summer 2023"
//             graduationDate="August 2023"
//             description="Intensive 12-week program covering modern web development technologies including React, Node.js, and MongoDB. Developed multiple full-stack applications as part of the curriculum."
//             delay={0.3}
//           />
          
//           <EducationCard 
//             title="High School Diploma" 
//             institution="Science High School"
//             period="2018 - 2022"
//             graduationDate="May 2022"
//             description="Graduated with honors, focusing on mathematics and computer science. Led the school's coding club and won regional programming competitions."
//             delay={0.5}
//           />
          
//           <EducationCard 
//             title="AWS Cloud Practitioner Certification" 
//             institution="Amazon Web Services"
//             period="January 2024"
//             graduationDate="January 2024"
//             description="Completed AWS Cloud Practitioner certification, gaining fundamental understanding of AWS cloud services, security, pricing, and support."
//             delay={0.7}
//           />
//         </div>
//       </div>
//     </AnimatedSection>
//   );
// };

// export default EducationSection;

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    university: "Rai University x CodingGita",
    location: "Ahmedabad, Gujarat",
    duration: "Aug 2024 – May 2028",
    highlights: [
      "Relevant Courses: DSA, Web Development, DBMS",
      // "Hackathon Winner – CodeStorm 2024",
      "Built 'Homy' – Hostel Booking MERN App , Attendance and Payroll Management App"
    ],
  },
  {
    degree: "Higher Secondary (12th), Science Stream",
    university: "BKKPSM School Palanpur",
    location: "Palanpur , Gujarat",
    duration: "Apr 2022 – Mar 2024",
    highlights: [
      "Percentage: Board – 69%",
      "Subjects: Physics, Chemistry, Math",
    ],
  },
    {
    degree: "Secondary (10th)",
    university: "BKKPSM School Palanpur",
    location: "Palanpur , Gujarat",
    duration: "Apr 2020 – Mar 2022",
    highlights: [
      "Percentage: Board – 82%",
    ],
  }
];

const EducationSection = () => {
  return (
    
<section id="education" className="py-0 bg-transparent">
  <div className="max-w-5xl px-3 mx-auto"> {/* <-- Added mx-auto here */}
        <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }} // animates only once when in view
      className="mb-12 text-center"
    >
      <h2 className="text-4xl font-bold text-yellow-400 relative pb-5">
        🎓 Education
      </h2>

      {/* Animated underline */}
      <motion.div
        className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full mx-auto mt-2"
        initial={{ width: 0 }}
        whileInView={{ width: "250px" }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </motion.div> {/* <-- Made heading center aligned */}
  
    <div className="relative pl-10 space-y-12">
      {educationData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative group"
        >
          {/* Graduation cap icon */}
          <div className="absolute left-[-1.6rem] top-1/2 -translate-y-1/2 transform bg-[#FFCB22] shadow-md rounded-full p-2 z-10">
            <GraduationCap className="text-white w-5 h-5" />
          </div>

          {/* Card */}
          <div className="bg-[#101725] backdrop-blur-md border border-[#110E28] p-6 rounded-2xl shadow-xl transition duration-100 ease-in-out group-hover:shadow-[0_0_25px_5px_#37BAF5]">
            <h3 className="text-xl font-semibold text-yellow-300">{item.degree}</h3>
            <p className="text-gray-300 font-medium">
              {item.university} • <span className="text-sm">{item.location}</span>
            </p>
            <p className="text-sm text-gray-400 mb-3">{item.duration}</p>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              {item.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>



  );
};

export default EducationSection;

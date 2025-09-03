// import SkillOdometer from "./SkillsMeter.jsx";



// const SkillsSection = () => {
//   return (
//     <section id="skills" className="bg-black py-20">
//       <h2 className="text-4xl font-bold text-center text-[#FFCB22] mb-12">
//         🚀 My Skills
//       </h2>
//       <div className="flex flex-wrap justify-center gap-6">
//         {skills.map((item, index) => (
//           <SkillOdometer
//             key={index}
//             skill={item.skill}
//             percentage={item.percentage}
//             color={item.color}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;

import React from 'react';
import SkillMeter from './SkillsMeter';
const skills = [
  { skill: "HTML", percentage: 95, color: "#F06529" },
  { skill: "CSS", percentage: 90, color: "#2965F1" },
  { skill: "JavaScript", percentage: 85, color: "#F0DB4F" },
  { skill: "React", percentage: 80, color: "#61DBFB" },
  { skill: "Node.js", percentage: 80, color: "#68A063" },
];

const SkillsSection = () => {
  return (
    <section className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#FFCB22] mb-12">
        🚀 My Skills
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-12 justify-center">
          {skills.map((skill, index) => (
            <SkillMeter 
              key={index} 
              name={skill.skill} 
              level={skill.percentage} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;



// // TechStack.jsx
// import React from 'react';

// const TechStack = () => {
//   const techCategories = [
//     {
//       id: 'frontend',
//       title: 'Frontend',
//       description: 'These are the technologies I use to build user interfaces:',
//       technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Bootstrap', 'Framer Motion']
//     },
//     {
//       id: 'backend',
//       title: 'Backend',
//       description: 'For handling server-side logic and APIs:',
//       technologies: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'Auth0']
//     },
//     {
//       id: 'database',
//       title: 'Database',
//       description: 'Storing and retrieving data securely:',
//       technologies: ['MongoDB (NoSQL)', 'Mongoose (ODM)', 'Aggregation Framework', 'MongoDB Atlas']
//     },
//     {
//       id: 'version-control',
//       title: 'Version Control & Collaboration',
//       description: 'For project management and team collaboration:',
//       technologies: ['Git', 'GitHub', 'GitHub Projects / Issues']
//     },
//     {
//       id: 'design',
//       title: 'Design & Prototyping',
//       description: 'To design UI/UX and communicate visuals:',
//       technologies: ['Figma', 'Canva']
//     },
//     {
//       id: 'other',
//       title: 'Other Key Technologies',
//       description: 'Additional important tools in my stack:',
//       technologies: ['Redux', 'React Router', 'Postman', 'Netlify / Vercel / Render', 'Local Storage / Session Storage']
//     }
//   ];

//   return (
//     <section className="w-full py-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-yellow-400 mb-10">Tech Stack</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {techCategories.map((category) => (
//             <div 
//               key={category.id} 
//               className="bg-gray-900 bg-opacity-50 border border-gray-800 rounded-lg p-6 hover:border-yellow-400 hover:border-opacity-30 transition-all duration-300"
//             >
//               <div className="flex items-center mb-4">
//                 <span className="text-yellow-400 text-xl mr-2">🔹</span>
//                 <h3 className="text-xl font-semibold text-yellow-400">{category.title}</h3>
//               </div>
              
//               <p className="text-gray-300 mb-4 text-sm">
//                 {category.description}
//               </p>
              
//               <div className="flex flex-wrap gap-2">
//                 {category.technologies.map((tech, index) => (
//                   <span 
//                     key={index} 
//                     className="bg-gray-800 rounded-md px-3 py-1 text-sm text-gray-200 hover:bg-gray-700 transition-all duration-200"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechStack;


// TechStack.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaGithub, FaFigma, FaTools } from 'react-icons/fa';
import Computer3D from '../../Components/3dmodel'
const TechStack = () => {
  const techCategories = [
    {
      id: 'frontend',
      title: 'Frontend',
      description: 'These are the technologies I use to build user interfaces:',
      technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Bootstrap', 'Framer Motion'],
      icon: <FaCode className="text-yellow-400 text-2xl" />
    },
    {
      id: 'backend',
      title: 'Backend',
      description: 'For handling server-side logic and APIs:',
      technologies: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'Auth0'],
      icon: <FaServer className="text-yellow-400 text-2xl" />
    },
    {
      id: 'database',
      title: 'Database',
      description: 'Storing and retrieving data securely:',
      technologies: ['MongoDB (NoSQL)', 'Mongoose (ODM)', 'Aggregation Framework', 'MongoDB Atlas'],
      icon: <FaDatabase className="text-yellow-400 text-2xl" />
    },
    {
      id: 'version-control',
      title: 'Version Control & Collaboration',
      description: 'For project management and team collaboration:',
      technologies: ['Git', 'GitHub', 'GitHub Projects / Issues'],
      icon: <FaGithub className="text-yellow-400 text-2xl" />
    },
    {
      id: 'design',
      title: 'Design & Prototyping',
      description: 'To design UI/UX and communicate visuals:',
      technologies: ['Figma', 'Canva'],
      icon: <FaFigma className="text-yellow-400 text-2xl" />
    },
    {
      id: 'other',
      title: 'Other Key Technologies',
      description: 'Additional important tools in my stack:',
      technologies: ['Redux', 'React Router', 'Postman', 'Netlify / Vercel / Render', 'Local Storage / Session Storage'],
      icon: <FaTools className="text-yellow-400 text-2xl" />
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      x: -50, 
      opacity: 0 
    },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5
      }
    }
  };

  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 relative">
        <span className="text-[#FFCB22] text-6xl drop-shadow-lg">Tech</span>
        <span className="text-white text-3xl md:text-4xl lg:text-6xl"> Stack</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-300 max-w-3xl text-center text-lg leading-relaxed mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        The tools, technologies, and frameworks I use to design, build, and
        deploy powerful web applications.
      </motion.p>

      {/* Decorative underline */}
      <motion.div
        className="mt-8 h-1 bg-gradient-to-r from-transparent via-[#FFCB22] to-transparent rounded-full mx-auto"
        initial={{ width: 0 }}
        whileInView={{ width: "200px" }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      />
    </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {techCategories.map((category) => (
            <motion.div 
              key={category.id} 
              className="bg-gray-900 bg-opacity-50 border border-gray-800 rounded-lg p-6 hover:border-yellow-400 hover:border-opacity-30 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-yellow-400">{category.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4 text-sm">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-800 rounded-md px-3 py-1 text-sm text-gray-200 hover:bg-gray-700 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
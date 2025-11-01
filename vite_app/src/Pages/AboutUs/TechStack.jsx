import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaGithub, FaFigma, FaTools } from 'react-icons/fa';

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
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#FFCB22] drop-shadow-lg">Tech</span>{' '}
            <span className="text-white">Stack</span>
          </h2>
          <p className="text-gray-300 max-w-3xl text-base md:text-lg leading-relaxed mx-auto">
            The tools, technologies, and frameworks I use to design, build, and
            deploy powerful web applications.
          </p>
          <motion.div
            className="mt-8 h-1 bg-gradient-to-r from-transparent via-[#FFCB22] to-transparent rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: '200px' }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Tech Stack Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-gray-900 bg-opacity-50 border border-gray-800 rounded-lg p-6 hover:border-yellow-400 hover:border-opacity-30 transition-all duration-300"
            >
              {/* Title + Icon */}
              <div className="flex items-center mb-4">
                <div className="mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-yellow-400">{category.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {category.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 rounded-md px-3 py-1 text-sm text-gray-200 whitespace-nowrap hover:bg-gray-700 transition-all duration-200"
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

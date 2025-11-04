import React, { useMemo, useEffect, useRef, useState } from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaGithub,
  FaFigma,
  FaTools,
} from "react-icons/fa";

const TechStack = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // 🔹 Trigger animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Memoized tech data for performance
  const techCategories = useMemo(
    () => [
      {
        id: "frontend",
        title: "Frontend",
        description: "These are the technologies I use to build user interfaces:",
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript (ES6+)",
          "React.js",
          "Tailwind CSS",
          "Bootstrap",
          "Framer Motion",
        ],
        icon: <FaCode className="text-yellow-400 text-2xl" />,
      },
      {
        id: "backend",
        title: "Backend",
        description: "For handling server-side logic and APIs:",
        technologies: [
          "Node.js",
          "Express.js",
          "RESTful APIs",
          "JWT Authentication",
          "Auth0",
        ],
        icon: <FaServer className="text-yellow-400 text-2xl" />,
      },
      {
        id: "database",
        title: "Database",
        description: "Storing and retrieving data securely:",
        technologies: [
          "MongoDB (NoSQL)",
          "Mongoose (ODM)",
          "Aggregation Framework",
          "MongoDB Atlas",
        ],
        icon: <FaDatabase className="text-yellow-400 text-2xl" />,
      },
      {
        id: "version-control",
        title: "Version Control & Collaboration",
        description: "For project management and team collaboration:",
        technologies: ["Git", "GitHub", "GitHub Projects / Issues"],
        icon: <FaGithub className="text-yellow-400 text-2xl" />,
      },
      {
        id: "design",
        title: "Design & Prototyping",
        description: "To design UI/UX and communicate visuals:",
        technologies: ["Figma", "Canva"],
        icon: <FaFigma className="text-yellow-400 text-2xl" />,
      },
      {
        id: "other",
        title: "Other Key Technologies",
        description: "Additional important tools in my stack:",
        technologies: [
          "Redux",
          "React Router",
          "Postman",
          "Netlify / Vercel / Render",
          "Local Storage / Session Storage",
        ],
        icon: <FaTools className="text-yellow-400 text-2xl" />,
      },
    ],
    []
  );

  return (
    <section
      ref={sectionRef}
      className={`w-full py-16 sm:py-20 bg-transparent transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      aria-label="Tech Stack Section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#FFCB22] drop-shadow-lg">Tech</span>{" "}
            <span className="text-white">Stack</span>
          </h2>
          <p className="text-gray-300 max-w-3xl text-base md:text-lg leading-relaxed mx-auto">
            The tools, technologies, and frameworks I use to design, build, and
            deploy powerful web applications.
          </p>
          <div className="mt-8 h-1 bg-gradient-to-r from-transparent via-[#FFCB22] to-transparent rounded-full mx-auto w-[200px]" />
        </div>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {techCategories.map((category) => (
            <div
              key={category.id}
              className="bg-gray-900 bg-opacity-50 border border-gray-800 rounded-xl p-6 sm:p-8 
                         hover:border-yellow-400 hover:border-opacity-30 transition-all duration-300 
                         transform hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Title + Icon */}
              <div className="flex items-center mb-4">
                <div className="mr-3 flex-shrink-0">{category.icon}</div>
                <h3 className="text-xl font-semibold text-yellow-400">
                  {category.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
                {category.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 rounded-md px-3 py-1 text-sm text-gray-200 whitespace-nowrap 
                               hover:bg-gray-700 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(TechStack);

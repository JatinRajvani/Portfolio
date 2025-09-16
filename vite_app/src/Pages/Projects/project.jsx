import { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { Github, ExternalLink ,Filter,X} from "lucide-react";
import TiltedCard from "../../Components/Design/TitleCard.jsx";

const projects = [
  {
    title: "Attendance and Payroll Management App",
    description:
      "A full-stack web application for managing employee attendance, leaves, holidays, and payroll processing.",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    img: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1757874895/AP2_rkekgb.png",
    github: "https://github.com/aryapatel23/Attendance-and-Payroll-Management",
    live: "https://attendance-and-payroll-management.vercel.app/",
    category: "Fullstack",
  },
  {
    title: "Homy",
    description:
      "A platform for students and professionals to subscribe to homemade meal plans.",
    tech: ["Next.js", "Express", "MySQL"],
    img: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1757956095/20250915_2230_Homy_App_Features_remix_01k5751pnwe3293hvc24xw7w2x_3_y2tkj4.png",
    github: "https://github.com/yourusername/tiffin-service",
    live: "https://your-live-demo-link.com",
    category: "Fullstack",
  },
  {
    title: "EcoHubs",
    description:
      "Ecommerce Website for second-hand products with authentication and cart functionality.",
    tech: ["React", "Firebase"],
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&q=80",
    github: "https://github.com/yourusername/typing-test",
    live: "https://your-live-demo-link.com",
    category: "Frontend",
  },
  {
    title: "Rental Management",
    description: "A modern UI kit built in Figma and implemented in React.",
    tech: ["Figma", "React", "Tailwind"],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    github: "https://github.com/yourusername/ui-kit",
    live: "https://your-live-demo-link.com",
    category: "UI",
  },
  {
    title: "Youtube Clone",
    description:
      "Personal portfolio website with smooth animations and responsive design.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-live-demo-link.com",
    category: "Frontend",
  },
  {
    title: "Amazon Clone",
    description:
      "A complete online store with cart, checkout, and admin dashboard.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    github: "https://github.com/yourusername/ecommerce",
    live: "https://your-live-demo-link.com",
    category: "Fullstack",
  },
  {
    title: "Digital Clock",
    description:
      "A blogging platform where users can create, edit, and comment on articles.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    github: "https://github.com/yourusername/blog-platform",
    live: "https://your-live-demo-link.com",
    category: "Fullstack",
  },
  {
    title: "Spotify Clone",
    description:
      "A weather forecasting app using OpenWeather API with sleek UI.",
    tech: ["React", "API", "Tailwind"],
    img: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?w=800&q=80",
    github: "https://github.com/yourusername/weather-app",
    live: "https://your-live-demo-link.com",
    category: "Frontend",
  },
  {
    title: "Skills-Swap",
    description:
      "A task management app with drag-and-drop functionality and team collaboration.",
    tech: ["React", "Firebase", "Tailwind"],
    img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=800&q=80",
    github: "https://github.com/yourusername/task-manager",
    live: "https://your-live-demo-link.com",
    category: "Fullstack",
  },
];

const categories = ["All", "Frontend", "UI", "Fullstack"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("Project Details");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 flex flex-col items-center ">
      <div className="max-w-screen mx-auto border-amber-600 ">
        {/* Heading */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-center mb-12"
>
  <h2 className="text-5xl lg:text-6xl font-extrabold text-white">
    My <span className="bg-gradient-to-r from-[#FDC700] to-[#ff9800] bg-clip-text text-transparent">
      Projects
    </span>
  </h2>
  <p className="mt-3 text-gray-400 text-lg max-w-2xl mx-auto">
    A collection of my work showcasing creativity, clean code, and modern designs.
  </p>
</motion.div>

        {/* Filter Buttons */}
<div className="flex items-center justify-between bg-gray-900 border border-gray-700 rounded-full px-4 py-2 shadow-lg max-w-xl mx-auto mb-20">
  {/* Filter Icon */}
  <div className="flex items-center gap-2">
    <Filter className="text-[#FDC700] w-5 h-5" />
    <span className="text-gray-400 text-sm font-medium">Filter</span>
  </div>

  {/* Category Options */}
  <div className="flex gap-2">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setSelectedCategory(cat)}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 
          ${
            selectedCategory === cat
              ? "bg-gradient-to-r from-[#FDC700] to-[#ff9800] text-black shadow"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
      >
        {cat}
      </button>
    ))}
  </div>
</div>


        {/* Projects Grid */}
<div className="w-full grid gap-x-30 gap-y-20 md:grid-cols-2 lg:grid-cols-3 place-items-center">
  {filteredProjects.map((project, index) => (
<TiltedCard
  key={index}
  captionText={project.title}
  containerHeight="350px"
  containerWidth="360px"
  imageHeight="350px"
  imageWidth="360px"
  rotateAmplitude={10}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip={false}
>
  {/* Your Project Card */}
  <div className="relative w-[360px] h-[350px] group overflow-hidden rounded-xl">
    {/* Project Image */}
    <img
      src={project.img}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    {/* Hover Overlay */}
    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-5 space-y-4">
      <h3 className="text-xl font-bold text-[#FDC700] text-center">{project.title}</h3>
      <p className="text-gray-300 text-sm text-center">{project.description}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 justify-center">
        {project.tech.map((tech, i) => (
          <span key={i} className="bg-[#FDC700] text-black text-xs px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      {/* Button */}
      <button
        onClick={() => setSelectedProject(project)}
        className="mt-2 bg-[#FDC700] text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
      >
        View Project
      </button>
    </div>
  </div>
</TiltedCard>

  ))}
</div>

<AnimatePresence>
  {selectedProject && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden border border-gray-700/50 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FDC700]/10 to-purple-500/10"></div>
        </div>

        {/* Modal Header with Gradient */}
        <div className="relative bg-gradient-to-r from-gray-800 to-gray-700 p-6 border-b border-gray-600/50">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold bg-gradient-to-r from-[#FDC700] to-yellow-300 bg-clip-text text-transparent"
              >
                {selectedProject.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 text-sm"
              >
                {selectedProject.category || "Web Application"}
              </motion.p>
            </div>
            
            <motion.button 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setSelectedProject(null)}
              className="p-2 rounded-full bg-gray-700/50 hover:bg-red-500/20 transition-all duration-300 group"
            >
              <X className="w-6 h-6 text-gray-400 group-hover:text-red-400 transition-colors" />
            </motion.button>
          </div>
        </div>

        {/* Modal Content - New 40:60 Layout */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)] scrollbar-hide">
          <div className="flex gap-6 h-full">
            
            {/* Left Side - 40% Video/Image + Project Details */}
            <div className="w-2/5 space-y-6">
              {/* Video/Image Section */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                {selectedProject.video ? (
                  <iframe
                    src={selectedProject.video}
                    title={`${selectedProject.title} Demo`}
                    className="w-full h-64 rounded-2xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
                  />
                )}
              </motion.div>

              {/* Project Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm p-5 rounded-2xl border border-gray-600/30"
              >
                <h3 className="text-lg font-semibold text-[#FDC700] mb-4">Project Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Start Date</span>
                    <span className="text-white font-medium text-sm">{selectedProject.startDate || "Jan 2024"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">End Date</span>
                    <span className="text-white font-medium text-sm">{selectedProject.endDate || "Feb 2024"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Duration</span>
                    <span className="text-white font-medium text-sm">{selectedProject.duration || "3 weeks"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Team Size</span>
                    <span className="text-white font-medium text-sm">{selectedProject.teamSize || "Solo Project"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Status</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
                      {selectedProject.status || "Completed"}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - 60% Tabs + Content */}
            <div className="w-3/5 space-y-6">
              {/* Enhanced Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex gap-2 bg-gray-800/50 backdrop-blur-sm p-1 rounded-2xl mb-6 border border-gray-700/50">
                  {["Project Details","Tech Stack", "Features",].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-3 px-4 font-semibold transition-all duration-300 rounded-xl relative overflow-hidden ${
                        activeTab === tab
                          ? "bg-[#FDC700] text-black shadow-lg"
                          : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                      }`}
                    >
                      {activeTab === tab && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-[#FDC700] rounded-xl -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10 text-sm">{tab}</span>
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 min-h-[300px] flex flex-col">
                  <AnimatePresence mode="wait">

                    {activeTab === "Project Details" && (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 flex-1"
                      >
                        <h3 className="text-lg font-semibold text-[#FDC700] mb-3">About This Project</h3>
                        <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                        
                        {selectedProject.challenges && (
                          <div className="mt-6">
                            <h4 className="text-md font-medium text-white mb-2">Key Challenges Solved</h4>
                            <ul className="text-gray-300 space-y-1">
                              {selectedProject.challenges.map((challenge, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-[#FDC700] mt-1">•</span>
                                  {challenge}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {selectedProject.learnings && (
                          <div className="mt-6">
                            <h4 className="text-md font-medium text-white mb-2">What I Learned</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {selectedProject.learnings}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    )}

                    {activeTab === "Tech Stack" && (
                      <motion.div
                        key="stack"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 flex-1"
                      >
                        <h3 className="text-lg font-semibold text-[#FDC700] mb-4">Technologies Used</h3>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.tech.map((tech, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="bg-gradient-to-r from-[#FDC700] to-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-[#FDC700]/25 hover:scale-105 transition-all duration-300 cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "Features" && (
                      <motion.div
                        key="features"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 flex-1"
                      >
                        <h3 className="text-lg font-semibold text-[#FDC700] mb-4">Key Features</h3>
                        <div className="grid gap-3">
                          {(selectedProject.features || [
                            "Responsive Design",
                            "Modern UI/UX",
                            "Performance Optimized",
                            "Cross-browser Compatible"
                          ]).map((feature, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:bg-gray-700/50 transition-all duration-300"
                            >
                              <div className="w-2 h-2 bg-[#FDC700] rounded-full"></div>
                              <span className="text-gray-300">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                  
                  </AnimatePresence>

                  {/* Action Buttons at Bottom of Tab Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-4 mt-6 pt-6 border-t border-gray-700/30"
                  >
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#FDC700] to-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:from-yellow-400 hover:to-[#FDC700] transition-all duration-300 shadow-lg hover:shadow-[#FDC700]/25 hover:scale-105 group"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      View Project
                    </a>
                    
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-700/50 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-gray-600/50 transition-all duration-300 border border-gray-600/30 hover:border-gray-500/50 group"
                    >
                      <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      View Source
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </section>
  );
}

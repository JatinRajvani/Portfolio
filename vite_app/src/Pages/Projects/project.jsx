import { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { Github, ExternalLink ,Filter,X} from "lucide-react";
import TiltedCard from "../../Components/Design/TitleCard.jsx";

const projects = [
  {
    title: "Hostel Finder",
    description:
      "A web app to find hostels, PGs, and shared apartments with full detail pages.",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=800&q=80",
    github: "https://github.com/yourusername/hostel-finder",
    live: "https://your-live-demo-link.com",
    category: "Fullstack",
  },
  {
    title: "Tiffin Service",
    description:
      "A platform for students and professionals to subscribe to homemade meal plans.",
    tech: ["Next.js", "Express", "MySQL"],
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    github: "https://github.com/yourusername/tiffin-service",
    live: "https://your-live-demo-link.com",
    category: "Fullstack",
  },
  {
    title: "Typing Test App",
    description:
      "A fast typing test app with random meaningful sentences and leaderboard.",
    tech: ["React", "Firebase"],
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&q=80",
    github: "https://github.com/yourusername/typing-test",
    live: "https://your-live-demo-link.com",
    category: "Frontend",
  },
  {
    title: "UI Kit Design",
    description: "A modern UI kit built in Figma and implemented in React.",
    tech: ["Figma", "React", "Tailwind"],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    github: "https://github.com/yourusername/ui-kit",
    live: "https://your-live-demo-link.com",
    category: "UI",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website with smooth animations and responsive design.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-live-demo-link.com",
    category: "Frontend",
  },
  {
    title: "E-commerce Store",
    description:
      "A complete online store with cart, checkout, and admin dashboard.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    github: "https://github.com/yourusername/ecommerce",
    live: "https://your-live-demo-link.com",
    category: "Fullstack",
  },
  {
    title: "Blog Platform",
    description:
      "A blogging platform where users can create, edit, and comment on articles.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    github: "https://github.com/yourusername/blog-platform",
    live: "https://your-live-demo-link.com",
    category: "Fullstack",
  },
  {
    title: "Weather App",
    description:
      "A weather forecasting app using OpenWeather API with sleek UI.",
    tech: ["React", "API", "Tailwind"],
    img: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?w=800&q=80",
    github: "https://github.com/yourusername/weather-app",
    live: "https://your-live-demo-link.com",
    category: "Frontend",
  },
  {
    title: "Task Manager",
    description:
      "A task management app with drag-and-drop functionality and team collaboration.",
    tech: ["React", "Firebase", "Tailwind"],
    img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=800&q=80",
    github: "https://github.com/yourusername/task-manager",
    live: "https://your-live-demo-link.com",
    category: "Fullstack",
  },
  {
    title: "Music Player",
    description:
      "A modern music player with playlists, search, and animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    img: "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=800&q=80",
    github: "https://github.com/yourusername/music-player",
    live: "https://your-live-demo-link.com",
    category: "Frontend",
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 text-white rounded-2xl shadow-xl w-full max-w-4xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h2 className="text-xl font-bold text-[#FDC700]">
                  {selectedProject.title}
                </h2>
                <button onClick={() => setSelectedProject(null)}>
                  <X className="w-6 h-6 text-gray-400 hover:text-white" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Left: Image */}
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right: Details */}
<div className="flex flex-col justify-between space-y-6">
  {/* Tabs */}
  <div>
    <div className="flex gap-6 border-b border-gray-700 mb-4">
      {["Project Details", "Tech Stack"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-2 px-2 font-semibold transition relative ${
            activeTab === tab
              ? "text-[#FDC700] border-b-2 border-[#FDC700]"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Dynamic Animated Content */}
    <AnimatePresence mode="wait">
      {activeTab === "Project Details" && (
        <motion.div
          key="details"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-300">{selectedProject.description}</p>
        </motion.div>
      )}

      {activeTab === "Tech Stack" && (
        <motion.div
          key="stack"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap gap-2"
        >
          {selectedProject.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-[#FDC700] text-black px-3 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>

  {/* Action Buttons */}
  <div className="flex gap-3">
    <a
      href={selectedProject.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
    >
      <Github className="w-4 h-4" /> Code
    </a>
    <a
      href={selectedProject.live}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-[#FDC700] text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
    >
      <ExternalLink className="w-4 h-4" /> Live Demo
    </a>
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

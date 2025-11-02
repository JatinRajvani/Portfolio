import { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { Github, ExternalLink ,Filter,X} from "lucide-react";
import TiltedCard from "../../Components/Design/TitleCard.jsx";

const projects = [
  {
    title: "Attendance and Payroll Management App",
    description:
      "A full-stack web application for managing employee attendance, leaves, holidays, and payroll processing.",
    briefdescription:
      "A full-stack web application designed to simplify employee management. It provides separate dashboards for HR/Admin and Employees, ensuring smooth handling of attendance, leave requests, holidays, and payroll generation. The system automates salary calculations, reduces manual errors, and improves workforce efficiency.",
    techindetails: [
      "React (Vite)",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB (Mongoose)",
      "JWT Authentication",
      "Multer",
      "Cloudinary (for file uploads)",
      "PDFKit / ReportLab"
    ],
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    img: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1757874895/AP2_rkekgb.png",
    github: "https://github.com/aryapatel23/Attendance-and-Payroll-Management",
    live: "https://attendance-and-payroll-management.vercel.app/",
    category: "Fullstack",
    features: [
      {
        role: "👨‍💼 HR/Admin",
        items: [
          "Manage employee profiles (Add, Edit, Delete)",
          "Track daily/monthly attendance",
          "Approve/Reject leave requests",
          "Manage holidays via calendar",
          "Generate & manage payroll (salary slips, deductions, leaves, bonuses)",
          "Export salary slips in PDF format"
        ]
      },
      {
        role: "👩‍💻 Employee",
        items: [
          "View & update profile",
          "Mark daily attendance",
          "Apply for leave",
          "View holiday calendar",
          "View monthly payroll & download salary slips"
        ]
      }
    ],
    startDate: "June 2025",
    endDate: "July 2025",
    duration: "1 Month",
    teamSize: "2",
    status: "Completed"
  },
  {
    title: "Homy – Hostel & Lifestyle Platform",
    description:
      "A full-stack platform that helps students, working professionals, and travelers find suitable hostels, PGs, homes, meals, transportation, and a community to connect with others.",
    briefdescription:
      "Homy is designed to make city living easier for students and professionals. It provides a one-stop solution to discover hostels/PGs with detailed information, book homemade meal services, explore transportation options, and connect with others in the community.",
    techindetails: [
      "React (Vite)",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB (Mongoose)",
      "JWT Authentication",
      "Multer",
      "Cloudinary (for images)",
      "RESTful API"
    ],
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    img: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1757956095/20250915_2230_Homy_App_Features_remix_01k5751pnwe3293hvc24xw7w2x_3_y2tkj4.png",
    github: "https://github.com/JatinRajvani/homy",
    live: "https://homy-phev.vercel.app/",
    category: "Fullstack",
    features: [
      {
        role: "🏠 Hostel/PG Listings",
        items: [
          "Search and filter hostels/PGs by price, location, and facilities",
          "Dedicated detail pages with full hostel information",
          "View room images and amenities",
          "Check availability and contact hostel owners"
        ]
      },
      {
        role: "🍱 Meal Services",
        items: [
          "Discover homemade tiffin services",
          "View weekly/monthly meal plans",
          "Ratings & reviews for meal providers",
          "Subscription options for meals"
        ]
      },
      {
        role: "🚌 Transportation",
        items: [
          "Browse available local transport services",
          "Find shuttle/bus services near hostels",
          "View routes and pricing"
        ]
      },
      {
        role: "👥 Community",
        items: [
          "Join community discussions",
          "Post and respond to queries",
          "Connect with fellow students and professionals"
        ]
      }
    ],
    startDate: "March 2025",
    endDate: "May 2025",
    duration: "2 Months",
    teamSize: "2",
    status: "In Progress"
  },
  {
    title: "EcoHubs – Second-Hand Ecommerce Platform",
    description:
      "A marketplace for buying and selling second-hand products with authentication, cart functionality, and product management features.",
    briefdescription:
      "EcoHubs allows users to securely buy and sell used products online, promoting sustainable consumption. It includes user authentication, product listings with images, cart management, and seller controls.",
    techindetails: [
      "React (Vite)",
      "Tailwind CSS",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Cloudinary (for product images)",
      "RESTful API"
    ],
    tech: ["React", "Vite", "Node.js", "MongoDB"],
    img: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1758051396/ecohubsimg_zzaglv.png",
    github: "https://github.com/JatinRajvani/odooxnmit",
    live: "https://ecofinds-second-hand.netlify.app/",
    category: "Fullstack",
    features: [
      {
        role: "🛒 Product Listings",
        items: [
          "Browse available second-hand products by category",
          "Search and filter items by name, price, or type",
          "View detailed product pages with descriptions and images"
        ]
      },
      {
        role: "👤 User Authentication",
        items: [
          "Secure login and signup with JWT",
          "Role-based access for buyers and sellers",
          "Profile management for users"
        ]
      },
      {
        role: "🛍️ Cart & Orders",
        items: [
          "Add/remove items from the shopping cart",
          "View total price before checkout",
          "Track orders (basic feature in progress)"
        ]
      },
      {
        role: "📸 Product Management",
        items: [
          "Upload product images via Cloudinary",
          "Edit and delete product listings",
          "Manage inventory as a seller"
        ]
      }
    ],
    startDate: "September 2025",
    endDate: "October 2025",
    duration: "1 Month",
    teamSize: "4",
    status: "In Progress"
  },
  {
    title: "Rental Management",
    description: "A modern UI kit built in Figma and implemented in React.",
    briefdescription:
      "Rental Management UI kit designed for landlords and tenants to manage properties, rent details, and communication efficiently.",
    techindetails: ["Figma", "React", "Tailwind CSS"],
    tech: ["Figma", "React", "Tailwind"],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    github: "https://github.com/yourusername/ui-kit",
    live: "https://your-live-demo-link.com",
    category: "UI",
    features: [
      {
        role: "🎨 UI/UX Features",
        items: [
          "Modern responsive design with Tailwind",
          "Clean Figma layout and reusable React components",
          "Optimized for design-to-code workflow"
        ]
      }
    ],
    startDate: "July 2025",
    endDate: "August 2025",
    duration: "1 Month",
    teamSize: "1",
    status: "Completed"
  },
  {
    title: "YouTube Clone – Video Streaming Platform",
    description:
      "A React-based video streaming app replicating core YouTube features using the YouTube API.",
    briefdescription:
      "This YouTube Clone integrates the YouTube API to display real-time videos, supports search, infinite scrolling, and responsive video playback.",
    techindetails: [
      "React (Vite)",
      "CSS",
      "YouTube Data API",
      "REST API integration"
    ],
    tech: ["React", "Vite", "CSS", "YouTube API"],
    img: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1758200202/yt-colne_image_iiybpo.png",
    github: "https://github.com/JatinRajvani/Clone-using-React",
    live: "https://thriving-phoenix-8688f2.netlify.app/",
    category: "Frontend",
    features: [
      {
        role: "▶️ Video Streaming",
        items: [
          "Play YouTube videos directly using API integration",
          "Responsive video player layout",
          "Display related video suggestions"
        ]
      },
      {
        role: "🔍 Search Functionality",
        items: [
          "Search for videos using the YouTube API",
          "Real-time results with query updates",
          "Easy navigation between video results"
        ]
      },
      {
        role: "♾️ Infinite Scrolling",
        items: [
          "Load more videos as you scroll down",
          "Seamless browsing without page refresh",
          "Improved UX with dynamic loading"
        ]
      }
    ],
    startDate: "November 2024",
    endDate: "December 2024",
    duration: "3 Weeks",
    teamSize: "1",
    status: "Completed"
  },
  {
    title: "Nvidia Clone",
    description:
      "A static replica of Nvidia’s website focusing on layout and visual accuracy.",
    briefdescription:
      "Static website clone built with HTML and CSS to practice design replication and structure.",
    techindetails: ["HTML", "CSS"],
    tech: ["HTML", "CSS"],
    features: [
      {
        role: "💻 Frontend UI",
        items: [
          "Static design recreation using HTML and CSS",
          "Responsive homepage layout",
          "Optimized image structure"
        ]
      }
    ],
    img: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1758202048/NVIDIA-logo-BL_nxm3uc.jpg",
    github: "https://github.com/JatinRajvani/Nvidia-Clone-",
    live: "https://nvidiaclone.netlify.app/",
    category: "Frontend",
    startDate: "September 2024",
    endDate: "September 2024",
    duration: "4 Days",
    teamSize: "1",
    status: "Completed"
  },
  {
    title: "Digital Clock",
    description:
      "A simple responsive digital clock with real-time updates and colorful gradient design.",
    briefdescription:
      "Responsive digital clock with AM/PM format and a colorful gradient border, built using HTML, CSS, and JavaScript.",
    techindetails: ["HTML", "CSS", "JavaScript"],
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      {
        role: "🕒 Clock Features",
        items: [
          "Displays real-time hours, minutes, and seconds",
          "12-hour AM/PM format",
          "Fully responsive layout"
        ]
      }
    ],
    img: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1758203000/Digital_Clock_ostfmi.png",
    github: "https://github.com/JatinRajvani/Digital-Clock",
    live: "https://clockwithcolorfulborder.netlify.app/",
    category: "Frontend",
    startDate: "August 2024",
    endDate: "August 2024",
    duration: "2 Days",
    teamSize: "1",
    status: "Completed"
  },
  {
    title: "Tata Motors Clone",
    description:
      "A static clone of Tata Motors’ website created using HTML and CSS to practice layout design.",
    briefdescription:
      "Static Tata Motors website clone made using HTML and CSS to replicate structure and style.",
    techindetails: ["HTML", "CSS"],
    tech: ["HTML", "CSS"],
    features: [
      {
        role: "💻 Frontend UI",
        items: [
          "Static clone of Tata Motors website",
          "Clean layout using flexbox and grids",
          "Basic responsive adjustments"
        ]
      }
    ],
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiKYhLxN3oNJ5hLR5FTIM_DzpHisodHWZ8UMdipslcnCB3H9lZMTr1ecIPWSQr",
    github: "https://github.com/JatinRajvani/Tata-Motors-Clone",
    live: "https://dazzling-crepe-3f968e.netlify.app/",
    category: "Frontend",
    startDate: "October 2024",
    endDate: "October 2024",
    duration: "5 Days",
    teamSize: "1",
    status: "Completed"
  },
  {
    title: "Skills-Swap",
    description:
      "A team-based task management app with drag-and-drop functionality and Firebase integration.",
    briefdescription:
      "Skills-Swap enables teams to collaborate efficiently using drag-and-drop task organization and real-time updates powered by Firebase.",
    techindetails: ["React", "Firebase", "Tailwind CSS"],
    tech: ["React", "Firebase", "Tailwind"],
    img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=800&q=80",
    github: "https://github.com/yourusername/task-manager",
    live: "https://your-live-demo-link.com",
    category: "Fullstack",
    features: [
      {
        role: "👥 Collaboration",
        items: [
          "Real-time team updates using Firebase",
          "Task assignment and progress tracking",
          "Drag-and-drop task organization"
        ]
      }
    ],
    startDate: "May 2025",
    endDate: "June 2025",
    duration: "1 Month",
    teamSize: "3",
    status: "In Progress"
  }
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
    <section id="projects" className="py-16 flex flex-col items-center">
      <div className="max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            My{" "}
            <span className="bg-gradient-to-r from-[#FDC700] to-[#ff9800] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-3 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A collection of my work showcasing creativity, clean code, and modern designs.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-between bg-gray-900 border border-gray-700 rounded-full px-3 py-2 shadow-lg max-w-xl mx-auto mb-16">
          <div className="flex items-center gap-2">
            <Filter className="text-[#FDC700] w-5 h-5" />
            <span className="text-gray-400 text-sm font-medium">Filter</span>
          </div>
          <div className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 
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
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {filteredProjects.map((project, index) => (
            <div key={index} className="w-full flex justify-center">
              {/* Desktop View (Hover Cards) */}
              <div className="hidden sm:block">
                <TiltedCard
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
                  <div className="relative w-[360px] h-[350px] group overflow-hidden rounded-xl">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-5 space-y-4">
                      <h3 className="text-xl font-bold text-[#FDC700] text-center">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm text-center">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-[#FDC700] text-black text-xs px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="mt-2 bg-[#FDC700] text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                </TiltedCard>
              </div>

              {/* Mobile View (Static Cards) */}
              <div className="block sm:hidden w-full max-w-sm bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4 flex flex-col gap-3">
                  <h3 className="text-lg font-bold text-[#FDC700]">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#FDC700]/80 text-black text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full mt-2 bg-[#FDC700] text-black font-semibold py-2 rounded-lg hover:bg-yellow-400 transition-all"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popup Modal */}
<AnimatePresence>
  {selectedProject && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-2 sm:px-4 py-4 overflow-y-auto"
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 40 }}
        transition={{ duration: 0.35, type: "spring", bounce: 0.25 }}
        className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] max-h-[90vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl shadow-2xl border border-gray-700/40 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center bg-gradient-to-r from-gray-800 to-gray-700 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-700/40 ">
          <div className="truncate">
            <motion.h2
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#FDC700] to-yellow-300 bg-clip-text text-transparent"
            >
              {selectedProject.title}
            </motion.h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              {selectedProject.category || "Web Application"}
            </p>
          </div>

          <motion.button
            onClick={() => setSelectedProject(null)}
            className="p-2 rounded-full bg-gray-700/50 hover:bg-red-500/20 transition-all duration-300 group"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-red-400" />
          </motion.button>
        </div>

        {/* Body */}
        <div className="p-3 sm:p-5 md:p-6 overflow-y-auto flex-1">
          <div className="flex flex-col lg:flex-row gap-5 md:gap-6">
            {/* Left */}
            <div className="w-full lg:w-2/5 space-y-5 md:space-y-6">
              {selectedProject.video ? (
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src={selectedProject.video}
                    title={selectedProject.title}
                    className="w-full h-full rounded-xl"
                    allowFullScreen
                  />
                </div>
              ) : (
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-64 sm:max-h-72 md:max-h-80 object-cover rounded-xl shadow-md"
                />
              )}

              {/* Project Info */}
              <div className="bg-gray-800/40 p-4 rounded-xl border border-gray-700/30 text-sm sm:text-base">
                <h3 className="text-[#FDC700] font-semibold mb-3 text-base sm:text-lg">
                  Project Info
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p><b>Duration:</b> {selectedProject.duration}</p>
                  <p><b>Team Size:</b> {selectedProject.teamSize}</p>
                  <p>
                    <b>Status:</b>{" "}
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full text-xs border border-green-500/30">
                      {selectedProject.status}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="w-full lg:w-3/5 space-y-5 md:space-y-6">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 bg-gray-800/50 p-1 rounded-xl border border-gray-700/40 sm:justify-start justify-center">
                {["Project Details", "Tech Stack", "Features"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold rounded-lg ${
                      activeTab === tab
                        ? "bg-[#FDC700] text-black shadow-md"
                        : "text-gray-300 hover:bg-gray-700/50"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-gray-800/30 rounded-xl p-4 sm:p-5 border border-gray-700/30 text-sm sm:text-base leading-relaxed text-gray-300">
                {activeTab === "Project Details" && (
                  <>
                    <h3 className="text-[#FDC700] font-semibold mb-2 sm:mb-3 text-base sm:text-lg">
                      About This Project
                    </h3>
                    <p>{selectedProject.briefdescription}</p>
                  </>
                )}
                {activeTab === "Tech Stack" && (
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techindetails.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#FDC700] text-black px-3 py-1 rounded-full text-xs sm:text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
{activeTab === "Features" && (
  <div className="space-y-6">
    {selectedProject.features?.map((feature, index) => (
      <div key={index}>
        {/* Role Title */}
        <h4 className="text-[#FDC700] font-semibold text-base sm:text-lg mb-2">
          {feature.role}
        </h4>

        {/* Feature Items */}
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          {feature.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)}

              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#FDC700] text-black font-semibold py-2 sm:py-3 rounded-lg hover:bg-yellow-400 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-700 text-white font-semibold py-2 sm:py-3 rounded-lg hover:bg-gray-600 transition"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </a>
              </div>
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


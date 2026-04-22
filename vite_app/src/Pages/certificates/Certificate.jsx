import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Filter } from "lucide-react";

export default function Certificates() {
  const certificates = [
     {
      title: "Oceanlab x Charusat Hacks 2026",
      by: "OceanLab",
      category: "Hackathon",
      description:
        "Built an AI-powered Conversation Intelligence Platform during Oceanlab x Charusat Hacks 2026, generating product insights, employee analytics, and actionable recommendations from call recordings. Led backend and AI pipeline development,and try to include real-time copilot experimentation.",
      certificateLink:
        "https://drive.google.com/file/d/1ITz7JO1OAj0My24pZr-QllijgWNQurlq/view?usp=drive_link",
    },
        {
      title: "AWS Cloud Virtual Internship",
      by: "EduSkills",
      category: "EduSkills",
      description:
        "Completed AWS Cloud Virtual Internship, gaining hands-on experience with cloud fundamentals and core services like EC2, Lambda, and DynamoDB. Learned how to deploy applications, manage resources, and use AWS services in real-world projects",
      certificateLink:
        "https://drive.google.com/file/d/1LPt4peMzPNy7mDiHL_Szbd5RqNE8lCha/view?usp=sharing",
    },
         {
      title: "Hack The Tank 3.0,",
      by: "GDGC SVNIT",
      category: "Hackathon",
      description:
        "Built an AI-based Testimonial Automation Platform during Hack The Tank 3.0, enabling video testimonial collection via shareable links with AI-driven dynamic questioning.IDeveloped backend for AI-led interviews and video recording, with initial implementation of reel generation using highlight extraction and silence removal.",
      certificateLink:
        "https://drive.google.com/file/d/1GSWlD_2pdFV8vAQvq0qbPaHXz00uMTit/view?usp=sharing",
    },
          {
      title: "Hack The Winter (The Second Wave)",
      by: "Graphic Era Hill University",
      category: "Hackathon",
      description:
        "Built SEBN (Smart Emergency Blood Network) during Hack The Winter — a governed platform enabling reliable emergency blood coordination across hospitals, blood banks, and NGOs. Implemented role-based authentication and developed the superadmin module end-to-end (frontend + backend) for access control and system governance.",
      certificateLink:
        "https://drive.google.com/file/d/1jbMJZ6wpB8nPd-Tuik7pOLomTZs4bhfJ/view?usp=sharing",
    },
            {
      title: "HackCrux 2026",
      by: "LNMIT Jaipur",
      category: "Hackathon",
      description:"Built an AI-powered Sales Conversation Intelligence Platform during Hackcrux 2026, enabling businesses to extract insights from sales and service call recordings.Developed and AI analysis pipelines to generate call insights, performance feedback, and actionable recommendations for improving future conversations.",
      certificateLink:
        "https://drive.google.com/file/d/1f1-P06spFUSWPR1X8hDJJFhYbSoViBQ9/view?usp=drive_link",
    },

    {
      title: "Google Cloud Generative AI Virtual Internship",
      by: "EduSkills",
      category: "EduSkills",
      description:
        "Completed a hands-on virtual internship exploring Google Cloud’s Generative AI ecosystem — worked with APIs, AI models, and real-world project workflows to build intelligent cloud solutions.",
      certificateLink:
        "https://drive.google.com/file/d/1Fwxv2PoKPWhjjTJN6r6Ur4SXDXaDaYgU/view?usp=sharing",
    },
    {
      title: "Odoo Hackathon 2025 – Final Round Participant",
      by: "Odoo",
      category: "Hackathon",
      description:
        "Participated in Odoo’s global hackathon challenge, developing innovative business solutions using the Odoo framework. Gained practical experience in UI/UX and ERP customization through teamwork and problem-solving.",
      certificateLink:
        "https://drive.google.com/file/d/1Mruk54zWYEMRwQucvHbhFMa_3Z16bcgv/view?usp=sharing",
    },
    {
      title: "Getting Started with Gateway Load Balancer",
      by: "Simplilearn",
      category: "Simplilearn",
      description:
        "Learned the fundamentals of AWS Gateway Load Balancer — understanding traffic distribution, security appliances, and load balancing architecture for scalable cloud applications.",
      certificateLink: "https://simpli-web.app.link/e/LjFaS8SJUXb",
    },
    {
      title:
        "Getting Started with Amazon DocumentDB (with MongoDB compatibility)",
      by: "Simplilearn",
      category: "Simplilearn",
      description:
        "Explored Amazon DocumentDB’s NoSQL database service, focusing on performance, scalability, and seamless MongoDB integration for backend and data-driven applications.",
      certificateLink: "https://simpli-web.app.link/e/dKYtkqPJUXb",
    },
    {
      title: "Azure Fundamentals",
      by: "Simplilearn",
      category: "Simplilearn",
      description:
        "Gained foundational knowledge of Microsoft Azure — including cloud concepts, core services, pricing models, and deployment of secure cloud resources.",
      certificateLink: "https://your-certificate-link.com",
    },
    {
      title: "Introduction to the Basics of Azure Services",
      by: "Simplilearn",
      category: "Simplilearn",
      description:
        "Understood essential Azure services and tools — from compute and storage to networking and security, strengthening my grasp of cloud infrastructure management.",
      certificateLink: "https://your-certificate-link.com",
    },
    {
      title: "GitHub Copilot Fundamentals",
      by: "Simplilearn",
      category: "Simplilearn",
      description:
        "Learned how to effectively use GitHub Copilot for AI-assisted coding, improving development efficiency with contextual code suggestions and intelligent automation.",
      certificateLink: "https://your-certificate-link.com",
    },
    {
      title: "JavaScript (Basic)",
      by: "HackerRank",
      category: "HackerRank",
      description:
        "Earned the JavaScript (Basic) certification by demonstrating a solid understanding of core JavaScript fundamentals including data types, functions, and control flow.",
      certificateLink: "https://www.hackerrank.com/certificates/6201c3164329",
    },
    {
      title: "JavaScript (Intermediate)",
      by: "HackerRank",
      category: "HackerRank",
      description:
        "Achieved the JavaScript (Intermediate) certificate showcasing skills in advanced concepts like closures, promises, and object-oriented programming.",
      certificateLink: "https://www.hackerrank.com/certificates/91a3aea31d1d",
    },
    {
      title: "React (Basic)",
      by: "HackerRank",
      category: "HackerRank",
      description:
        "Certified in React (Basic) for demonstrating knowledge in React components, props, hooks, and state management fundamentals.",
      certificateLink: "https://www.hackerrank.com/certificates/f7e8dec3f8ee",
    },
    {
      title: "Node.js (Basic)",
      by: "HackerRank",
      category: "HackerRank",
      description:
        "Earned the Node.js (Basic) certificate by showcasing understanding of core Node concepts like modules, event-driven architecture, and asynchronous programming.",
      certificateLink: "https://www.hackerrank.com/certificates/f29c87fbb466",
    },
    {
      title: "Problem Solving (Basic)",
      by: "HackerRank",
      category: "HackerRank",
      description:
        "Earned the Problem Solving (Basic) certificate by showcasing understanding of core problem-solving concepts and techniques.",
      certificateLink: "https://www.hackerrank.com/certificates/a258cae5ed56",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Simplilearn", "HackerRank" , "EduSkills","Hackathon"];

  const filteredCertificates =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

  return (
    <section id="certificates" className="py-20 flex flex-col items-center px-4 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
          My{" "}
          <span className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] bg-clip-text text-transparent">
            Certificates
          </span>
        </h2>
        <p className="mt-3 text-gray-400 text-center max-w-2xl mx-auto text-sm sm:text-base">
          A showcase of my learning journey — skills gained through dedication and
          hands-on projects.
        </p>
      </motion.div>

      {/* 🔹 Filter Buttons */}
      <div className="flex items-center justify-center sm:justify-center bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-xl px-4 sm:px-6 py-4 sm:py-3.5 shadow-lg sm:w-fit mx-auto mb-12 gap-4 sm:gap-3 flex-wrap">
        <div className="flex items-center gap-2 flex-shrink-0">
          <Filter className="text-[#F59E0B] w-4 h-4" />
          <span className="text-gray-400 text-xs sm:text-sm font-semibold whitespace-nowrap">Filter By:</span>
        </div>
        <div className="flex gap-2 sm:gap-2.5 flex-wrap justify-center w-full sm:w-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-4 py-2 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-black shadow-lg shadow-[#F59E0B]/50 font-bold"
                  : "bg-gray-800/70 text-gray-300 hover:bg-gray-700/90 hover:text-[#F59E0B] border border-gray-700/60 hover:border-[#F59E0B]/60 hover:shadow-md hover:shadow-[#F59E0B]/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 🔹 Certificates Grid */}
      <div
        className="grid gap-12 sm:gap-8 lg:gap-12 
                   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                   justify-items-center items-stretch w-full"
      >
        {filteredCertificates.map((cert, index) => (
          <div
            key={index}
            className="w-full max-w-[440px] sm:max-w-[420px] h-full"
          >
            <div
              className="flex flex-col justify-between bg-[#101828]/90 rounded-2xl w-full 
                         border border-[#F59E0B]/40 hover:border-[#F59E0B]/80 
                         shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]
                         transition-all duration-300 ease-out
                         p-5 sm:p-6 h-full min-h-[320px] relative"
              style={{ transform: "translateZ(0)", backfaceVisibility: "hidden", willChange: "transform" }}
            >
              {/* Icon */}
              <div className="absolute top-4 right-4 text-[#F59E0B] opacity-70">
                <Award size={24} className="sm:w-6 sm:h-6" />
              </div>

              {/* Content */}
              <div className="flex-grow pr-6 sm:pr-5">
                <h2
                  className="text-xl sm:text-2xl font-bold text-[#F59E0B] mb-2 line-clamp-2 leading-tight"
                  style={{ minHeight: "48px" }}
                >
                  {cert.title}
                </h2>

                <h3 className="text-gray-300 font-semibold text-xs sm:text-sm mb-3 italic truncate">
                  {cert.by}
                </h3>

                <p
                  className="text-gray-400 text-xs sm:text-sm leading-relaxed break-words"
                >
                  {cert.description}
                </p>
              </div>

              {/* Button */}
              <a
                href={cert.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 self-start bg-[#F59E0B] text-black px-4 py-2 rounded-md font-semibold text-xs sm:text-sm
                          sm:hover:bg-amber-500 transition duration-300"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

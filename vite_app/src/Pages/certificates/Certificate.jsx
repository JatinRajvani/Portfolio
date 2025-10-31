import { useState } from "react";
import { Award } from "lucide-react";

export default function Certificates() {
  const certificates = [
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
      category: "Odoo",
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
  const categories = ["All", "Simplilearn", "HackerRank", "Odoo", "EduSkills"];

  const filteredCertificates =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

  return (
    <section id="certificates" className="py-20 flex flex-col items-center px-4 sm:px-6 lg:px-10">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 text-center">
        My <span className="text-[#FDC700]">Certificates</span>
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mb-10 text-sm sm:text-base">
        A showcase of my learning journey — skills gained through dedication and
        hands-on projects.
      </p>

      {/* 🔹 Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 w-full max-w-3xl">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 sm:px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 
              ${
                selectedCategory === category
                  ? "bg-[#FDC700] text-black"
                  : "bg-[#1E293B] text-gray-300 hover:bg-[#FDC700]/20 hover:text-white"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 🔹 Certificates Grid */}
      <div
        className="grid gap-8 sm:gap-10 md:gap-12 
                   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                   justify-items-center w-full"
      >
        {filteredCertificates.map((cert, index) => (
          <div
            key={index}
            className="relative group w-full max-w-[360px] sm:max-w-[340px] 
                       rounded-2xl bg-gradient-to-br from-[#FDC700] to-transparent 
                       hover:from-yellow-400 hover:to-transparent transition-all duration-300 p-[2px]"
          >
            <div
              className="flex flex-col justify-between bg-[#101828]/90 backdrop-blur-lg rounded-2xl w-full 
                         border border-[#1E293B]/30 hover:border-[#FDC700]/60 
                         hover:shadow-[0_0_15px_rgba(253,199,0,0.3)]
                         transition-all duration-300 ease-out
                         p-5 sm:p-6 min-h-[280px] sm:min-h-[300px] relative"
            >
              {/* Icon */}
              <div className="absolute top-4 right-4 text-[#FDC700] opacity-70">
                <Award size={24} className="sm:w-6 sm:h-6" />
              </div>

              {/* Content */}
              <div className="flex-grow pr-6 sm:pr-10">
                <h2
                  className="text-xl sm:text-2xl font-bold text-[#FDC700] mb-2 line-clamp-2 leading-tight"
                  style={{ minHeight: "48px" }}
                >
                  {cert.title}
                </h2>

                <h3 className="text-gray-300 font-semibold text-xs sm:text-sm mb-3 italic truncate">
                  {cert.by}
                </h3>

                <p
                  className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-4"
                  style={{ minHeight: "80px" }}
                >
                  {cert.description}
                </p>
              </div>

              {/* Button */}
              <a
                href={cert.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 self-start bg-[#FDC700] text-black px-4 py-2 rounded-md font-semibold text-xs sm:text-sm
                          hover:bg-yellow-400 transition duration-300"
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

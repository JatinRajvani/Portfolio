import { Award } from "lucide-react"; // Optional, for icon (if using lucide-react)

export default function Certificates() {
  const certificates = [
    {
      title: "React Developer",
      by: "Coursera",
      description:
        "Completed an in-depth React course covering hooks, context, and state management.",
      certificateLink: "https://your-certificate-link.com",
    },
    {
      title: "UI/UX Design",
      by: "Figma Academy",
      description:
        "Learned advanced UI/UX principles and created modern design prototypes.",
      certificateLink: "https://your-certificate-link.com",
    },
    {
      title: "JavaScript Mastery",
      by: "Udemy",
      description:
        "Mastered modern ES6+ concepts and built real-world projects using asynchronous patterns.",
      certificateLink: "https://your-certificate-link.com",
    },
    {
      title: "Frontend Development",
      by: "freeCodeCamp",
      description:
        "Built responsive websites and dynamic user interfaces using React and Tailwind CSS.",
      certificateLink: "https://your-certificate-link.com",
    },
    {
      title: "Backend with Node.js",
      by: "CodeWithHarry",
      description:
        "Learned to build APIs, handle authentication, and integrate MongoDB using Express.",
      certificateLink: "https://your-certificate-link.com",
    },
    {
      title: "Git & GitHub",
      by: "LinkedIn Learning",
      description:
        "Mastered version control, collaboration workflows, and branching strategies.",
      certificateLink: "https://your-certificate-link.com",
    },
  ];

  return (
    <section id="certificates" className="py-20 flex flex-col items-center ">
      <h2 className="text-5xl font-extrabold text-white mb-6 text-center">
        My <span className="text-[#FDC700]">Certificates</span>
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mb-12">
        A showcase of my learning journey — skills gained through dedication and hands-on projects.
      </p>

      {/* Certificates Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-24">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="relative group w-[350px] h-[250px] p-[2px] rounded-2xl bg-gradient-to-br from-[#FDC700] to-transparent hover:from-yellow-400 hover:to-transparent transition-all duration-500"
          >
            <div
              className="bg-[#101828]/90 backdrop-blur-lg rounded-2xl h-full w-full p-6 flex flex-col justify-between 
                        border border-[#1E293B]/30 hover:border-[#FDC700]/60 
                        transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-[1deg]"
            >
              {/* Icon */}
              <div className="absolute top-5 right-5 text-[#FDC700] opacity-70">
                <Award size={26} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#FDC700] mb-2">{cert.title}</h2>
                <h3 className="text-gray-300 font-semibold text-sm mb-3 italic">
                  {cert.by}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
              </div>

              <a
                href={cert.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 self-start bg-[#FDC700] text-black px-4 py-2 rounded-md font-semibold 
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

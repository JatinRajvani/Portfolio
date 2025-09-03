const certificates = [
  {
    title: "React Developer",
    by: "Coursera",
    description: "Completed an in-depth React course covering hooks, context, and state management.",
    img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=800&q=80",
    certificateLink: "https://your-certificate-link.com",
  },
  {
    title: "UI/UX Design",
    by: "Figma Academy",
    description: "Learned advanced UI/UX principles and created modern design prototypes.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    certificateLink: "https://your-certificate-link.com",
  },
   {
    title: "UI/UX Design",
    by: "Figma Academy",
    description: "Learned advanced UI/UX principles and created modern design prototypes.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    certificateLink: "https://your-certificate-link.com",
  },
     {
    title: "UI/UX Design",
    by: "Figma Academy",
    description: "Learned advanced UI/UX principles and created modern design prototypes.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    certificateLink: "https://your-certificate-link.com",
  },
       {
    title: "UI/UX Design",
    by: "Figma Academy",
    description: "Learned advanced UI/UX principles and created modern design prototypes.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    certificateLink: "https://your-certificate-link.com",
  },
         {
    title: "UI/UX Design",
    by: "Figma Academy",
    description: "Learned advanced UI/UX principles and created modern design prototypes.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    certificateLink: "https://your-certificate-link.com",
  },
  // Add more certificates here
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-16 flex flex-col items-center">
      <h2 className="text-5xl font-extrabold text-white mb-6 text-center">
        My <span className="text-[#FDC700]">Certificates</span>
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mb-12">
        Showcase of my achievements and completed courses.
      </p>

      {/* Certificates Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-15 ">
        {certificates.map((cert, index) => (
          <div key={index} className="w-[350px] h-[330px] perspective group">
            <div
              className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side */}
<div
  className="absolute w-full h-full rounded-xl p-5 flex flex-col space-y-2 
             bg-[#101828]/90 border-2 border-[#101828] 
             items-center justify-center 
             transition-transform duration-300 group-hover:scale-105 
             shadow-[0_0_5px_#FDC700]"
  style={{ backfaceVisibility: "hidden" }}  
>
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-[200px] object-cover rounded-lg"
                />
                <h2 className="text-xl font-bold text-white text-center">{cert.title}</h2>
                <h3 className="text-md font-medium text-[#FDC700] text-center">{cert.by}</h3>
              </div>

              {/* Back Side */}
              <div
                className="absolute w-full h-full rounded-xl bg-[#101828]/90 border-2 border-[#FDC700] flex flex-col items-center justify-center p-5 space-y-4"
                style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
              >
                <h2 className="text-xl font-bold text-[#FDC700] text-center">{cert.title}</h2>
                <p className="text-gray-300 text-sm text-center">{cert.description}</p>
                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 bg-[#FDC700] text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// import React, { useState } from "react";
// import { Download, Eye, ExternalLink, FileText, User, Award, Briefcase, GraduationCap } from "lucide-react";

// export default function ResumePage() {
//   const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  
//   // Convert Google Drive sharing link to embeddable format
//   const driveFileId = "1hKpnTHMQ_IyR1QpOilYnNeFqpSxH6H6w";
//   const embedUrl = `https://drive.google.com/file/d/${driveFileId}/preview`;
//   const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;
//   const viewUrl = `https://drive.google.com/file/d/${driveFileId}/view`;

//   const handleDownload = () => {
//     // Open download link in new tab
//     window.open(downloadUrl, '_blank');
//   };

//   const handleViewFull = () => {
//     window.open(viewUrl, '_blank');
//   };

//   const resumeStats = [
//     { icon: User, label: "Full-Stack Developer", value: "Professional" },
//     { icon: Briefcase, label: "Experience", value: "2+ Years" },
//     { icon: GraduationCap, label: "Education", value: "Computer Science" },
//     { icon: Award, label: "Projects", value: "15+ Completed" }
//   ];

//   return (
//     <section
//       id="resume"
//       className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4"
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-[#FDC700]/10 border border-[#FDC700]/20 rounded-full px-4 py-2 mb-6">
//             <FileText className="w-4 h-4 text-[#FDC700]" />
//             <span className="text-[#FDC700] text-sm font-medium">Professional Resume</span>
//           </div>
          
//           <h1 className="text-6xl font-bold mb-6">
//             My <span className="text-[#FDC700]">Resume</span>
//           </h1>
          
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//             Explore my professional journey, technical skills, and achievements. Download or preview my resume to learn more about my experience and expertise.
//           </p>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//           {resumeStats.map((stat, index) => (
//             <div 
//               key={index}
//               className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300"
//             >
//               <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FDC700]/10 rounded-lg mb-4">
//                 <stat.icon className="w-6 h-6 text-[#FDC700]" />
//               </div>
//               <h3 className="text-lg font-semibold text-white mb-1">{stat.value}</h3>
//               <p className="text-gray-400 text-sm">{stat.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* Main Resume Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Resume Preview */}
//           <div className="lg:col-span-2">
//             <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-2xl font-bold text-white">Resume Preview</h2>
//                 <button
//                   onClick={() => setIsPreviewOpen(!isPreviewOpen)}
//                   className="flex items-center gap-2 text-[#FDC700] hover:text-yellow-400 transition-colors"
//                 >
//                   <Eye className="w-4 h-4" />
//                   {isPreviewOpen ? 'Hide Preview' : 'Show Preview'}
//                 </button>
//               </div>
              
//               {isPreviewOpen ? (
//                 <div className="relative">
//                   <div className="w-full h-[600px] rounded-lg overflow-hidden border border-gray-600 bg-white">
//                     <iframe
//                       src={embedUrl}
//                       title="Resume Preview"
//                       className="w-full h-full"
//                       frameBorder="0"
//                       loading="lazy"
//                     />
//                   </div>
//                   <div className="absolute top-2 right-2">
//                     <button
//                       onClick={handleViewFull}
//                       className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-black/70 transition-colors"
//                       title="View Full Screen"
//                     >
//                       <ExternalLink className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div 
//                   className="h-[600px] bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-lg border-2 border-dashed border-gray-600 flex flex-col items-center justify-center cursor-pointer hover:border-[#FDC700]/50 transition-colors"
//                   onClick={() => setIsPreviewOpen(true)}
//                 >
//                   <div className="text-center">
//                     <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FDC700]/10 rounded-full mb-4">
//                       <FileText className="w-8 h-8 text-[#FDC700]" />
//                     </div>
//                     <h3 className="text-xl font-semibold text-white mb-2">Click to Preview Resume</h3>
//                     <p className="text-gray-400">View my resume directly in your browser</p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Actions & Info Panel */}
//           <div className="space-y-6">
//             {/* Download Section */}
//             <div className="bg-gradient-to-br from-[#FDC700]/10 to-yellow-600/10 border border-[#FDC700]/20 rounded-2xl p-6">
//               <h3 className="text-xl font-bold text-white mb-4">Get My Resume</h3>
//               <p className="text-gray-300 mb-6">
//                 Download a PDF copy of my resume for your records or review.
//               </p>
              
//               <div className="space-y-3">
//                 <button
//                   onClick={handleDownload}
//                   className="w-full flex items-center justify-center gap-2 bg-[#FDC700] text-black font-semibold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
//                 >
//                   <Download className="w-5 h-5" />
//                   Download Resume
//                 </button>
                
//                 <button
//                   onClick={handleViewFull}
//                   className="w-full flex items-center justify-center gap-2 bg-gray-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-600 transition-all duration-300"
//                 >
//                   <ExternalLink className="w-5 h-5" />
//                   View in New Tab
//                 </button>
//               </div>
//             </div>

//             {/* Quick Info */}
//             <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
//               <h3 className="text-xl font-bold text-white mb-4">Quick Info</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-[#FDC700] rounded-full"></div>
//                   <span className="text-gray-300">Last Updated: January 2025</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//                   <span className="text-gray-300">Format: PDF Document</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
//                   <span className="text-gray-300">Size: ~150KB</span>
//                 </div>
//               </div>
//             </div>

//             {/* Contact CTA */}
//             <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-2xl p-6 text-center">
//               <h3 className="text-lg font-bold text-white mb-2">Interested?</h3>
//               <p className="text-gray-300 text-sm mb-4">
//                 Let's discuss how I can contribute to your team.
//               </p>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
//                 Get in Touch
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Additional Info */}
//         <div className="mt-16 text-center">
//           <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
//             <FileText className="w-4 h-4" />
//             <span>Resume includes detailed work experience, education, skills, and project portfolio</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useState } from "react";
import { Download, Eye, ExternalLink, FileText, User, Award, Briefcase, GraduationCap } from "lucide-react";

export default function ResumePage() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(true);
  
  // Convert Google Drive sharing link to embeddable format
  const driveFileId = "1xTHzLXdn2lThZ21lZO_qKs3AKXtpCKlx";
  const embedUrl = `https://drive.google.com/file/d/${driveFileId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;
  const viewUrl = `https://drive.google.com/file/d/${driveFileId}/view`;

  const handleDownload = () => {
    window.open(downloadUrl, '_blank');
  };

  const handleViewFull = () => {
    window.open(viewUrl, '_blank');
  };

  const resumeStats = [
    { icon: User, label: "Full-Stack Developer", value: "Professional" },
    { icon: Briefcase, label: "Experience", value: "2+ Years" },
    { icon: GraduationCap, label: "Education", value: "Computer Science" },
    { icon: Award, label: "Projects", value: "15+ Completed" }
  ];

  return (
    <section
      id="resume"
      className="min-h-screen  text-white "
    >
      {/* Full Page Two-Column Layout */}
      <div className="h-screen flex flex-col lg:flex-row">
        
        {/* Left Side - Full Resume Preview */}
        <div className="lg:w-1/2 h-1/2 lg:h-full bg-gray-800/20 border-r border-gray-700/50">
          <div className="h-full p-6 flex flex-col">
            {/* Preview Header */}
            <div className="flex items-center justify-between mb-4 w-full pt-2">
                  <h2 className="text-4xl lg:text-3xl font-bold mb-4 w-full text-center">
                Resume <span className="text-[#FDC700]">Preview</span>
              </h2>
              <div className="flex items-center gap-2 ">
                <button
                  onClick={() => setIsPreviewOpen(!isPreviewOpen)}
                  className="flex items-center gap-2 text-[#FDC700] hover:text-yellow-400 transition-colors text-sm"
                >
                  <Eye className="w-4 h-4" />
                  {isPreviewOpen ? 'Hide' : 'Show'}
                </button>
                {isPreviewOpen && (
                  <button
                    onClick={handleViewFull}
                    className="text-gray-400 hover:text-white transition-colors"
                    title="View Full Screen"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
            
            {/* Preview Content */}
            <div className="flex-1 min-h-0 ">
              {isPreviewOpen ? (
                <div className="w-full h-full rounded-lg overflow-hidden border border-gray-600 ">
                  <iframe
                    src={embedUrl}
                    title="Resume Preview"
                    className="w-full h-full"
                    frameBorder="0"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div 
                  className="h-full bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-lg border-2 border-dashed border-gray-600 flex flex-col items-center justify-center cursor-pointer hover:border-[#FDC700]/50 transition-colors"
                  onClick={() => setIsPreviewOpen(true)}
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FDC700]/10 rounded-full mb-6">
                      <FileText className="w-10 h-10 text-[#FDC700]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Click to Preview Resume</h3>
                    <p className="text-gray-400">View my resume directly here</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - All Content */}
        <div className="lg:w-1/2 flex-1 overflow-y-auto scrollbar-hide">
          <div className="p-8 flex flex-col min-h-0">
            
            {/* Header Section */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-[#FDC700]/10 border border-[#FDC700]/20 rounded-full px-4 py-2 mb-4">
                <FileText className="w-4 h-4 text-[#FDC700]" />
                <span className="text-[#FDC700] text-sm font-medium">Professional Resume</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                My <span className="text-[#FDC700]">Resume</span>
              </h1>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Explore my professional journey, technical skills, and achievements. Download or preview my resume to learn more about my experience.
              </p>
            </div>

            {/* Download Actions */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center hover:bg-gray-800/50 transition-all duration-300 mb-8 hover:border-[#FDC700] ">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FDC700]/20 rounded-full mb-3">
                  <Download className="w-6 h-6 text-[#FDC700]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Get My Resume</h3>
                <p className="text-gray-300 text-sm">
                  Download or view my resume for detailed information
                </p>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={handleDownload}
                  className="w-full flex items-center justify-center gap-3 bg-[#FDC700] text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
                
                <button
                  onClick={handleViewFull}
                  className="w-full flex items-center justify-center gap-3 bg-gray-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-600 transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  View in New Tab
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            {/* <div className="grid grid-cols-2 gap-4 mb-6">
              {resumeStats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center hover:bg-gray-800/50 transition-all duration-300 hover:border-[#FDC700]"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-[#FDC700]/10 rounded-lg mb-3">
                    <stat.icon className="w-5 h-5 text-[#FDC700]" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">{stat.value}</h4>
                  <p className="text-gray-400 text-xs">{stat.label}</p>
                </div>
              ))}
            </div> */}

            {/* Document Information */}
            {/* <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-6">
              <h4 className="text-lg font-semibold text-white mb-4">Document Information</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FDC700] rounded-full"></div>
                  <span className="text-gray-300 text-sm">Last Updated: January 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Format: PDF Document</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Size: ~150KB</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Pages: 2</span>
                </div>
              </div>
            </div> */}

            {/* Contact CTA */}
            {/* <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-6 text-center">
              <h4 className="text-lg font-bold text-white mb-2">Interested in Working Together?</h4>
              <p className="text-gray-300 text-sm mb-4">
                Let's discuss how I can contribute to your team and projects.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Get in Touch
              </button>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}
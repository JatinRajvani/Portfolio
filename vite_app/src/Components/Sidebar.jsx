// import { useState } from "react";
// import { IoHomeOutline } from "react-icons/io5";
// import {
//   FaRegUser,
//   FaProjectDiagram,
//   FaRegEnvelope,
//   FaFileDownload,
//   FaBars,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Hamburger Button for Small Screens */}
//       <div className="lg:hidden fixed top-4 left-4 z-50">
//         <FaBars
//           className="text-3xl text-white cursor-pointer"
//           onClick={() => setOpen(!open)}
//         />
//       </div>

//       {/* Backdrop Overlay for Sidebar */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//           onClick={() => setOpen(false)}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <div
//         className={`
//           fixed top-0 left-0 h-full bg-[#121212] text-white z-50 
//           transition-transform duration-300
//           ${open ? "translate-x-0" : "-translate-x-full"} 
//           w-52 p-4
//           lg:translate-x-0 lg:relative lg:w-[6%]
//           flex flex-col gap-4
//         `}
//       >
//         {/* Logo */}
//         <div className="h-[90px] bg-yellow-400 flex items-center justify-center rounded-sm text-2xl text-white">
//           <h1 className="w-[70px] h-[70px] bg-[var(--color-accent)] flex items-center justify-center font-semibold">
//             RJ
//           </h1>
//         </div>

//         {/* Navigation */}
//         <div className="flex items-center justify-center flex-col gap-10 mt-6 text-[25px]">
//           <Link to="/" onClick={() => setOpen(false)} title="Home">
//             <IoHomeOutline />
//           </Link>
//           <Link to="/about" onClick={() => setOpen(false)} title="About">
//             <FaRegUser />
//           </Link>
//           <Link to="/projects" onClick={() => setOpen(false)} title="Projects">
//             <FaProjectDiagram />
//           </Link>
//           <Link to="/contact" onClick={() => setOpen(false)} title="Contact">
//             <FaRegEnvelope />
//           </Link>
//           <Link to="/resume" onClick={() => setOpen(false)} title="Download Resume">
//             <FaFileDownload />
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaBars, FaRegUser, FaProjectDiagram, FaRegEnvelope, FaFileDownload } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Define all sidebar links with name, icon, and path
  const navLinks = [
    { name: "Home", icon: <IoHomeOutline />, path: "/" },
    { name: "About", icon: <FaRegUser />, path: "/about" },
    { name: "Projects", icon: <FaProjectDiagram />, path: "/projects" },
    { name: "Certificates", icon: <PiCertificate size={30} />, path: "/certificates" },
    { name: "Contact", icon: <FaRegEnvelope />, path: "/contact" },
    { name: "Resume", icon: <FaFileDownload />, path: "/resume" },
  ];

  return (
    <>
      {/* Hamburger Button for Small Screens */}
      <div className="lg:hidden fixed top-7 left-7 z-50">
        <FaBars
          className="text-3xl text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* Backdrop Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full text-white z-50
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          w-25 pt-5 pl-3 pb-4
          lg:translate-x-0 lg:relative lg:w-[6%]
          flex flex-col gap-4
        `}
      >
        {/* Logo */}
        <div className="h-[90px] bg-yellow-400 flex items-center justify-center rounded-sm text-2xl text-white">
          <h1 className="w-[70px] h-[70px] bg-[var(--color-accent)] flex items-center justify-center font-semibold">
            RJ
          </h1>
        </div>

        {/* Navigation */}
        <div className="bg-[#121212] h-165 rounded-sm flex items-center justify-center">
          <div className="flex items-center justify-center flex-col gap-12 text-[25px] relative group">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <div key={index} className="relative group">
                  <Link to={link.path}>
                    <div
                      className={`cursor-pointer transition-colors duration-200 ${
                        isActive ? "text-yellow-400" : "text-white"
                      }`}
                    >
                      {link.icon}
                    </div>
                  </Link>

                  {/* Tooltip */}
                  <div className="absolute left-12 top-1/2 -translate-y-1/2 bg-[#222] text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-10">
                    {link.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

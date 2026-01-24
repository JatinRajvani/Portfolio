import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/HomePage';
import Sidebar from './Components/Sidebar';
import StarField from './Components/StarsFile.jsx';
import MainProject from "./Pages/Projects/Mainproject.jsx";
import Maincertificatesection from './Pages/certificates/maincertificate.jsx';
import MainContact from './Pages/Contact/Maincontact.jsx';
import MainResumePage from './Pages/Resume/Mainresume.jsx';
import DesignDemo from './Pages/DesignDemo.jsx';
import MainAbout from './Pages/AboutUs/MainAbout.jsx';
function Layout() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-[var(--color-bg)] text-white">
        {/* Sidebar: Responsive behavior handled inside Sidebar component */}
        <Sidebar />

        {/* Main Content */}
        <div
          className="
    flex-1
    overflow-y-auto lg:overflow-y-hidden
    scrollbar-hide
    m-3 sm:m-4 md:m-5
    rounded-md
  "
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<MainAbout />} />
            <Route path="/stars" element={<StarField />} />
            <Route path="/projects" element={<MainProject />} />
            <Route path="/certificates" element={<Maincertificatesection />} />
            <Route path="/contact" element={<MainContact />} />
            <Route path="/resume" element={<MainResumePage />} />
            <Route path="/demo" element={<DesignDemo />} />
          </Routes>
        </div>



      </div>
    </BrowserRouter>
  );
}

export default Layout;

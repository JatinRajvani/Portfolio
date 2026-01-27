import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from 'react-icons/fa6';
import SEO from '../../Components/SEO';
import StructuredData from '../../Components/StructuredData';
import { seoConfig } from '../../config/seoConfig';

const Home = () => {
  return (
    <div className="relative w-full min-h-screen bg-[var(--color-bg)] overflow-hidden flex items-center justify-center">
      {/* SEO Meta Tags */}
      <SEO
        title="Jatin Rajvani - Full Stack Developer | Home"
        description="Welcome to Jatin Rajvani's portfolio. Full Stack Developer specializing in React, Node.js, and modern web technologies. Building innovative digital experiences."
        keywords="Jatin Rajvani, Full Stack Developer, React Developer, Web Developer, Portfolio, JavaScript, Node.js, UI/UX, Front-end Developer"
        canonicalUrl="https://jatinrajvani.me/"
        ogImage={seoConfig.default.ogImage}
        ogImageWidth={seoConfig.default.ogImageWidth}
        ogImageHeight={seoConfig.default.ogImageHeight}
      />

      {/* Structured Data */}
      <StructuredData data={seoConfig.structuredData} />

      {/* 1. Base Gradient - Obsidian Foundation */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-[#0a0a0b] to-black" />

      {/* 2. Gold Radial Spotlights - More Visible */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-[var(--color-accent)]/15 via-[var(--color-accent)]/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-amber-600/10 via-transparent to-transparent blur-3xl" />

      {/* 3. Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />

      {/* 4. Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1" fill="var(--color-accent)" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* 5. Animated Gradient Orbs (Subtle Movement) */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-[100px] animate-pulse-slow" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: Hero Text */}
          <div className="space-y-6 text-center lg:text-left order-1 lg:order-1">

            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300">Available for opportunities</span>
            </div>

            {/* Main Heading - Enhanced Design */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-white drop-shadow-lg">Hi, I'm</span>
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[var(--color-accent)] via-amber-400 to-yellow-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                  Jatin Rajvani
                </span>
                {/* Animated underline */}
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent)] via-amber-400 to-yellow-500 rounded-full animate-pulse-slow"></span>
              </span>
            </h1>

            {/* Role with Typewriter - Subtle */}
            <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-300">
              <span className="text-[var(--color-accent)]">
                <Typewriter
                  words={['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Explorer']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={2000}
                />
              </span>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
              Building digital experiences that blend{' '}
              <span className="text-[var(--color-accent)] font-medium">innovation</span>,{' '}
              <span className="text-[var(--color-accent)] font-medium">design</span>, and{' '}
              <span className="text-[var(--color-accent)] font-medium">functionality</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <button className="group relative px-8 py-3 bg-[var(--color-accent)] text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-accent)]/30 hover:-translate-y-0.5">
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="px-8 py-3 border-2 border-white/20 text-white font-medium rounded-lg backdrop-blur-sm hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all duration-300 hover:-translate-y-0.5">
                Get in Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 justify-center lg:justify-start pt-6">
              {[
                { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: <FaGithub />, href: 'https://github.com', label: 'GitHub' },
                { icon: <FaXTwitter />, href: 'https://x.com', label: 'Twitter' },
                { icon: <FaEnvelope />, href: 'mailto:your@email.com', label: 'Email' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Profile Photo */}
          <div className="flex justify-center items-center order-2 lg:order-2">
            <div className="relative group">

              {/* Animated Glow Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-accent)] via-amber-500 to-yellow-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500 animate-pulse-slow"></div>

              {/* Photo Container */}
              <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[440px] lg:h-[440px] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:border-[var(--color-accent)]/50">
                <img
                  src="https://res.cloudinary.com/doqzxuxb1/image/upload/v1769495165/jatinrajvani-portfolio-image_dyrnnc.png"
                  alt="Jatin Rajvani - Full Stack Developer"
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>

                {/* Hover Accent Border */}
                <div className="absolute inset-0 border-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 shadow-[0_0_30px_rgba(245,158,11,0.5)]"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 px-5 py-2.5 bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-sm font-bold rounded-full shadow-lg shadow-amber-400/60 backdrop-blur-sm border-2 border-amber-300 animate-pulse-slow">
                ✨ Open to Work
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;

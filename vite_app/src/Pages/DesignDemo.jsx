import React, { useState } from 'react';
import { IoHomeOutline, IoColorPaletteOutline } from "react-icons/io5";
import { FaRegUser, FaProjectDiagram, FaRegEnvelope, FaFileDownload } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";

const DesignDemo = () => {
    const [currentTheme, setCurrentTheme] = useState('luxury');

    const themes = {
        luxury: {
            name: "Obsidian Gold",
            desc: "Architectural & Muted. Matte Zinc + Sand Gold.",
            bg: "bg-[#09090b]", // Zinc 950
            surface: "bg-[#18181b]", // Zinc 900
            accent: "text-[#D97706]", // Amber 600 (Darker, more sophisticated)
            accentBg: "bg-[#D97706]",
            textPrimary: "text-[#FAFAFA]",
            textSecondary: "text-[#A1A1AA]",
            gradient: "from-amber-600 to-yellow-700",
            glow: "bg-amber-900/20",
        },
        cyber_gold: {
            name: "Cyber Gold",
            desc: "Futuristic & High Contrast. Deep Carbon + Neon Gold.",
            bg: "bg-[#000000]", // True Black
            surface: "bg-[#111111]", // Off Black
            accent: "text-[#FACC15]", // Yellow 400 (Bright Neon)
            accentBg: "bg-[#FACC15]",
            textPrimary: "text-[#FFFFFF]",
            textSecondary: "text-[#71717A]",
            gradient: "from-yellow-400 to-orange-500",
            glow: "bg-yellow-400/10",
            customStyle: { border: '1px solid #27272a' } // Adds a techy border feel
        },
        royal_gold: {
            name: "Royal Noir",
            desc: "Elegant & Warm. Espresso Black + Metallic Champange.",
            bg: "bg-[#0C0A09]", // Stone 950 (Warm Black)
            surface: "bg-[#1C1917]", // Stone 900
            accent: "text-[#FDE047]", // Yellow 300 (Champagne)
            accentBg: "bg-[#FDE047]",
            textPrimary: "text-[#F5F5F4]", // Stone 50
            textSecondary: "text-[#A8A29E]", // Stone 400
            gradient: "from-yellow-200 to-amber-200", // Metallic gradient
            glow: "bg-orange-900/10",
        }
    };

    const theme = themes[currentTheme];

    const navLinks = [
        { name: "Home", icon: <IoHomeOutline /> },
        { name: "About", icon: <FaRegUser /> },
        { name: "Projects", icon: <FaProjectDiagram /> },
        { name: "Certificates", icon: <PiCertificate size={30} /> },
        { name: "Contact", icon: <FaRegEnvelope /> },
    ];

    return (
        // FULL SCREEN OVERLAY
        <div
            className={`fixed inset-0 z-[100] flex ${theme.bg} ${theme.textPrimary} font-sans transition-colors duration-500`}
            style={theme.customStyle || {}}
        >

            {/* 1. SIDEBAR */}
            <div className="w-24 lg:w-[6%] relative flex flex-col gap-6 items-center py-6 border-r border-white/5 backdrop-blur-md bg-white/[0.02]">
                {/* Logo */}
                <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${theme.gradient} rounded-lg shadow-lg font-bold text-xl mb-4 text-white`}>
                    RJ
                </div>

                {/* Nav Items */}
                <div className="flex flex-col gap-8 w-full items-center">
                    {navLinks.map((link, idx) => (
                        <div key={idx} className={`group relative flex items-center justify-center p-3 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer text-2xl opacity-60 hover:opacity-100 ${theme.accent.replace('text-', 'hover:text-')}`}>
                            {link.icon}
                        </div>
                    ))}
                </div>
            </div>

            {/* 2. MAIN CONTENT AREA */}
            <div className="flex-1 overflow-y-auto p-8 lg:p-12 relative">
                {/* THEME SWITCHER */}
                <div className="absolute top-8 right-8 flex gap-4 bg-white/5 p-2 rounded-full backdrop-blur-md border border-white/10 z-50">
                    {Object.entries(themes).map(([key, t]) => (
                        <button
                            key={key}
                            onClick={() => setCurrentTheme(key)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${currentTheme === key ? 'bg-white/10 text-white shadow-sm' : 'text-white/50 hover:text-white'}`}
                        >
                            {t.name}
                        </button>
                    ))}
                </div>

                {/* Gradient Glow */}
                <div className={`absolute top-0 right-0 w-[600px] h-[600px] ${theme.glow} blur-[120px] rounded-full pointer-events-none transition-colors duration-700`} />

                <div className="relative z-10 max-w-4xl mx-auto mt-12">
                    <div className="mb-12">
                        <span className={`${theme.accent} text-sm font-semibold tracking-wider uppercase mb-2 block`}>
                            Theme Preview • {theme.name}
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
                            Stand Out. <br />
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradient}`}>
                                Be Unique.
                            </span>
                        </h1>
                        <p className={`${theme.textSecondary} text-lg max-w-2xl leading-relaxed`}>
                            {theme.desc} <br />
                            Currently previewing the <strong>{theme.name}</strong> palette. Notice how the mood changes?
                        </p>
                    </div>

                    {/* CARD EXAMPLES */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Card 1: Project Style */}
                        <div className={`group p-6 rounded-2xl border border-white/5 ${theme.surface}/40 backdrop-blur-sm hover:border-white/10 transition-all duration-300 hover:shadow-2xl`}>
                            <div className={`h-48 w-full ${theme.surface} rounded-lg mb-6 flex items-center justify-center border border-white/5 group-hover:scale-[1.02] transition-transform`}>
                                <span className="opacity-30 font-medium">Project Preview</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:underline decoration-1 underline-offset-4">Ecommerce API</h3>
                            <p className={`${theme.textSecondary} text-sm mb-6 leading-relaxed`}>
                                A robust backend system built with Node.js and scalable architecture.
                            </p>
                            <div className="flex gap-2">
                                <span className={`px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/5 ${theme.textPrimary}`}>Node.js</span>
                            </div>
                        </div>

                        {/* Card 2: Contact/Bio Style */}
                        <div className={`p-8 rounded-2xl border border-white/5 ${theme.surface}/20 backdrop-blur-sm flex flex-col justify-center`}>
                            <div className={`w-12 h-12 rounded-full ${theme.accentBg} mb-6 flex items-center justify-center text-black font-bold text-xl`}>
                                "
                            </div>
                            <p className="text-xl font-light italic opacity-90 mb-6">
                                I build pixel-perfect, engaging, and accessible digital experiences.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10"></div>
                                <div>
                                    <div className="font-bold">Jatin Rajvani</div>
                                    <div className={`${theme.accent} text-sm`}>Full Stack Engineer</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignDemo;

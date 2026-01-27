// SEO Configuration for all pages
export const seoConfig = {
    // Default/Global SEO
    default: {
        title: 'Jatin Rajvani - Full Stack Developer | Portfolio',
        description: 'Full Stack Developer specializing in React, Node.js, and modern web technologies. Explore my projects, skills, and experience in building innovative digital solutions.',
        keywords: 'Jatin Rajvani, Full Stack Developer, React Developer, Web Developer, Portfolio, JavaScript, Node.js, UI/UX',
        ogImage: '/og-image.png',
        ogImageWidth: '1200',
        ogImageHeight: '630',
        siteUrl: 'https://jatinrajvani.me',
    },

    // Page-specific SEO
    pages: {
        home: {
            title: 'Jatin Rajvani - Full Stack Developer | Home',
            description: 'Welcome to Jatin Rajvani\'s portfolio. Full Stack Developer specializing in React, Node.js, and modern web technologies. Building innovative digital experiences.',
            keywords: 'Jatin Rajvani, Full Stack Developer, React Developer, Web Developer, Portfolio, JavaScript, Node.js, UI/UX, Front-end Developer',
            canonicalUrl: '/',
        },

        about: {
            title: 'About Me - Jatin Rajvani | Full Stack Developer',
            description: 'Learn more about Jatin Rajvani - a passionate Full Stack Developer with expertise in React, Node.js, and modern web development. Explore my skills, education, and tech stack.',
            keywords: 'About Jatin Rajvani, Full Stack Developer Skills, Web Developer Experience, React Expert, Node.js Developer',
            canonicalUrl: '/about',
        },

        projects: {
            title: 'Projects - Jatin Rajvani | Portfolio',
            description: 'Explore my portfolio of web development projects. Showcasing innovative solutions built with React, Node.js, and cutting-edge technologies.',
            keywords: 'Web Development Projects, React Projects, Full Stack Projects, Portfolio Projects, JavaScript Applications',
            canonicalUrl: '/projects',
        },

        certificates: {
            title: 'Certificates & Achievements - Jatin Rajvani',
            description: 'View my professional certificates and achievements in web development, programming, and technology. Continuous learning and skill development.',
            keywords: 'Web Development Certificates, Programming Certificates, Professional Achievements, Tech Certifications',
            canonicalUrl: '/certificates',
        },

        contact: {
            title: 'Contact Me - Jatin Rajvani | Get In Touch',
            description: 'Get in touch with Jatin Rajvani for collaboration, job opportunities, or project inquiries. Let\'s build something amazing together!',
            keywords: 'Contact Jatin Rajvani, Hire Full Stack Developer, Web Developer Contact, Collaboration Opportunities',
            canonicalUrl: '/contact',
        },

        resume: {
            title: 'Resume - Jatin Rajvani | Full Stack Developer',
            description: 'View and download Jatin Rajvani\'s resume. Full Stack Developer with expertise in React, Node.js, and modern web technologies.',
            keywords: 'Jatin Rajvani Resume, Full Stack Developer Resume, Web Developer CV, Download Resume',
            canonicalUrl: '/resume',
        },
    },

    // Social Media Links
    social: {
        linkedin: 'https://www.linkedin.com/in/jatin-rajvani/',
        github: 'https://github.com/JatinRajvani',
        twitter: 'https://x.com/JatinRajvani',
        email: 'jatinrajvani.cg@gmail.com',
    },

    // Structured Data (JSON-LD)
    structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Jatin Rajvani',
        jobTitle: 'Full Stack Developer',
        url: 'https://jatinrajvani.me',
        sameAs: [
            'https://www.linkedin.com/in/jatin-rajvani/',
            'https://github.com/JatinRajvani',
            'https://x.com/JatinRajvani',
        ],
        description: 'Full Stack Developer specializing in React, Node.js, and modern web technologies.',
    },
};

export default seoConfig;

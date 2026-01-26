import { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Filter, X, ChevronLeft, ChevronRight, Zap, Database, Code, Palette, Server, Cpu } from "lucide-react";
import TiltedCard from "../../Components/Design/TitleCard.jsx";
import "./project.css";

// Tech icon mapping
const techIcons = {
  "React": <Code className="w-4 h-4" />,
  "Vite": <Zap className="w-4 h-4" />,
  "Node.js": <Server className="w-4 h-4" />,
  "MongoDB": <Database className="w-4 h-4" />,
  "Redux": <Cpu className="w-4 h-4" />,
  "Redux Toolkit": <Cpu className="w-4 h-4" />,
  "Tailwind CSS": <Palette className="w-4 h-4" />,
  "JWT": <Code className="w-4 h-4" />,
  "Cloudinary": <Database className="w-4 h-4" />,
  "Framer Motion": <Code className="w-4 h-4" />,
  "YouTube API": <Code className="w-4 h-4" />,
  "Figma": <Palette className="w-4 h-4" />,
  "Express": <Server className="w-4 h-4" />,
  "Firebase": <Database className="w-4 h-4" />,
};

const projects = [ 
{
  title: "VedantAttendance – Attendance Management System",
  role: "Full-Stack Developer",
  contributor: "Solo Project",
  description:
    "Built an attendance management system with face recognition and location-based tracking, ensuring secure authentication and consistent data across the full stack.",
  
  problem:
    "In traditional manual attendance systems, students were required to physically mark their attendance, including manually recording in-time and out-time. This process often resulted in long queues, crowding during peak hours, and significant time consumption. The manual nature of attendance marking made the process inconvenient for students and inefficient for administrators, especially when managing large groups.",

  yourContribution:
    "I worked on the project end to end, starting with designing and building the backend using Node.js and Express, along with JWT-based authentication for secure and role-based access. I developed the frontend in React, focusing on a responsive and easy-to-use interface, and used MongoDB to store and manage application data efficiently. In addition to this, I built a face recognition service using Python and deployed it on AWS to handle identity verification during attendance marking. Finally, I connected all parts of the system to make sure everything works smoothly together as a complete solution.",

  solution:
    "VedantAttendance automates attendance using face recognition and location-based validation, allowing students to mark attendance only within the classroom area. Face verification ensures the correct student marks attendance, preventing misuse. Students can view attendance history and statistics, while administrators manage students, branches, attendance, and approvals through a role-based system. The student interface is fully responsive for seamless mobile usage.",

  achievements: [
  "Significantly reduced time spent on attendance by eliminating physical queues through mobile-based face recognition.",
  "Enabled daily attendance marking for 200+ users using a secure and scalable system.",
  "Successfully implemented face recognition and location-based validation to prevent proxy attendance.",
  "Delivered a fully functional, role-based attendance platform deployed and tested across real-world environments."
]
,

techReasoning: {
  "React": "Used to build a responsive and intuitive user interface, optimized for mobile devices as most students mark attendance from their phones",
  "Redux Toolkit": "Managed global state for authentication, user roles, and attendance data across the application",
  "Node.js + Express": "Implemented REST APIs and business logic for attendance, user management, and role-based access",
  "MongoDB": "Stored student, attendance, branch, and batch data with a flexible schema for scalability",
  "JWT Authentication": "Provided secure and role-based access control for students and administrators",
  "Date-Time Normalization": "Ensured consistent attendance timestamps across frontend, backend, and database environments",
  "Python (Face Recognition Service)": "Handled face detection and verification for secure attendance marking",
  "Postman": "Used for testing and validating APIs during development",
  "AWS": "Deployed the face recognition service to ensure reliable and scalable identity verification",
  "Vercel": "Deployed the frontend for fast delivery and seamless user access",
  "Render": "Deployed backend services and APIs for stable production usage"
}
,

  briefdescription:
    "VedantAttendance is a full-stack web application designed to manage and track attendance efficiently. It provides separate dashboards for administrators and users, ensures accurate time handling across systems, and offers a reliable foundation for real-world attendance workflows.",

  techindetails: [
    "React",
    "CSS",
    "Redux Toolkit",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT Authentication"
  ],

  tech: ["MERN Stack", "Python", "AWS"],

  video: "",
  img: "https://res.cloudinary.com/doqzxuxb1/image/upload/c_crop,w_1200,h_675/v1769357403/clipboard-image-1769357253_ixhadt.png",
  github: "",
  live: "",

  category: "Fullstack",

features: [
  {
    role: "👨‍💼 Admin",
    items: [
      "Manage students, batches, and branches from a centralized dashboard",
      "View and manage daily and monthly attendance records",
      "Review and handle pending attendance approvals",
      "Monitor attendance activity across branches and batches",
      "Ensure secure and role-based access to system features"
    ]
  },
  {
    role: "👩‍💻 Student",
    items: [
      "Mark attendance using face recognition and location-based validation",
      "Mark attendance only within the classroom or authorized location",
      "View personal attendance history with statistics",
      "Access the system through a fully responsive mobile-friendly interface",
      "Securely log in and access attendance records"
    ]
  }
]
,

  startDate: "December 2025",
  endDate: "January 2026",
  duration: "1 Month",
  teamSize: "1",
  status: "Completed"
}
,
{
  title: "SEBN – Smart Emergency Blood Network",
  role: "Admin Module Developer",
  contributor: "Group Project",
  description:
    "Developed the admin governance module for a smart emergency blood network that streamlines blood request handling, donor coordination, and system oversight during critical situations.",

  problem:
    "In emergency medical situations, hospitals and patients often face delays in arranging blood due to the lack of real-time donor availability, fragmented communication between stakeholders, and manual coordination processes. Existing systems struggle with verification, monitoring, and centralized control, leading to inefficiencies when time is critical.",

  yourContribution:
    "I was responsible for designing and implementing the Admin role within SEBN. This included developing secure admin APIs using Node.js and Express, implementing role-based authentication with JWT, and designing MongoDB schemas for system governance. I built admin functionalities to monitor blood requests, manage users and hospitals, review system activity, and ensure data consistency across the platform. My work focused on system control, reliability, and operational clarity rather than end-user interactions.",

  solution:
    "SEBN is a centralized emergency blood coordination platform designed as a governance network connecting hospitals, blood banks, NGOs, and blood donors. When a hospital raises a blood request, the system checks live blood stock availability across nearby hospitals and blood banks. If the required blood is not available locally, the search area is gradually expanded to nearby regions to improve the chances of finding it quickly.If blood stock remains unavailable beyond a defined range, SEBN activates a fallback mechanism by identifying eligible nearby donors who can support emergency needs. The platform also maintains updated blood stock visibility and enables NGOs to organize blood donation camps, helping strengthen donor participation and ensure long-term reliability of the blood network.",

  achievements: [
    "Designed and implemented a centralized Admin governance module for emergency blood coordination.",
    "Enabled real-time monitoring of blood requests, donor responses, and hospital activity.",
    "Implemented secure, role-based access control using JWT for system administrators.",
    "Ensured data integrity and operational oversight through structured admin workflows."
  ],

  techReasoning: {
    "Node.js + Express": "Used to build scalable and secure REST APIs for admin operations and system governance",
    "MongoDB": "Stored users, hospitals, blood requests, and system activity with a flexible and extensible schema",
    "JWT Authentication": "Implemented secure role-based access for Admin, ensuring controlled system operations",
    "React": "Used for building admin dashboards to visualize and manage system data",
    "Redux Toolkit": "Managed global state for admin authentication and system data",
    "Role-Based Access Control (RBAC)": "Ensured clear separation of privileges between admin and other roles",
    "API Validation & Error Handling": "Improved system reliability during emergency workflows",
    "Postman": "Used to test and validate admin and system APIs during development"
  },

  briefdescription:
    "SEBN is a full-stack emergency response platform designed to improve blood availability coordination. The Admin module plays a critical role in ensuring governance, security, and operational visibility across the system.",

  techindetails: [
    "React",
    "CSS",
    "Redux Toolkit",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT Authentication"
  ],

  tech: ["MERN Stack"],

  video: "https://drive.google.com/file/d/11B8QSl-I51-MEBtz-P5Ga7FNi8T8gLhR/preview",
  img: "https://res.cloudinary.com/doqzxuxb1/image/upload/c_crop,w_1200,h_900,ar_4:3/v1769367456/sebnscreenshort_ugwlsu.png",
  github: "https://github.com/VasaraSujal/Hack_The_Winter?tab=readme-ov-file",
  live: "https://hackthewinter.netlify.app/",

  category: "Fullstack",

features: [
  {
    role: "🛡️ Super Admin",
    items: [
      "Oversee the entire SEBN network across hospitals, blood banks, and NGOs",
      "Manage platform-level configurations, permissions, and governance rules",
      "Monitor system-wide activity, emergency request flow, and data integrity",
      "Handle escalations and ensure reliable platform operations during emergencies"
    ]
  },
  {
    role: "🏥 Hospital",
    items: [
      "Raise emergency blood requests with required blood type and quantity",
      "View live blood stock availability across nearby blood banks and hospitals",
      "Track request status in real time as the search radius expands",
      "Coordinate with blood banks or donors through the platform"
    ]
  },
  {
    role: "🩸 Blood Bank",
    items: [
      "Manage and update available blood stock in real time",
      "Respond to emergency blood requests from hospitals",
      "Maintain accurate blood inventory records within the system",
      "Support emergency fulfillment through verified blood supply"
    ]
  },
  {
    role: "🤝 NGO",
    items: [
      "Create and manage blood donation camps",
      "Register and onboard new blood donors",
      "Share donation camp information within the network",
      "Strengthen donor availability and community participation"
    ]
  },
]
,

  startDate: "January 2026",
  endDate: "February 2026",
  duration: "1 Month",
  teamSize: "Group Project",
  status: "Completed"
}
,
{
  title: "MF Insights – Mutual Fund Data Exploration & Investment Calculators",
  role: "Full-Stack Developer",
  contributor: "Solo Project",
  description:
    "Developed a Next.js-based mutual fund exploration platform that consumes real mutual fund market data APIs and allows users to analyze individual funds using multiple investment calculators as part of a practical learning project.",

  problem:
    "Understanding how real-world financial platforms handle large, dynamic datasets and investment calculations requires more than theoretical knowledge. Many beginner projects rely on static or mock data and generic calculators, which do not reflect real production challenges such as API-driven data flow, fund-specific calculations, performance considerations, and structured presentation of financial information.",

  yourContribution:
    "I independently designed and developed the entire application. My work included integrating a real mutual fund data API, structuring and rendering large fund datasets, building dynamic routes for individual fund pages using Next.js, and implementing accurate financial calculation logic for SIP, Step-Up SIP, Lump Sum, and SWP calculators. The project was focused on strengthening my understanding of data-driven architecture, calculation workflows, and modern frontend patterns.",

  solution:
    "MF Insights was created as a hands-on learning project to simulate how modern finance applications consume and present real market data. The platform fetches live mutual fund information through an external API and displays it using a structured, performant Next.js architecture. For each mutual fund, users can apply different investment strategies using built-in calculators to observe potential outcomes. The goal was not to replace existing financial platforms, but to gain practical experience with Next.js, API integration, and reliable financial computation in a realistic application setup.",

  achievements: [
    "Integrated real-time mutual fund data using an external API",
    "Implemented fund-specific investment calculators including SIP, Step-Up SIP, Lump Sum, and SWP",
    "Built dynamic fund detail pages using Next.js routing",
    "Designed and completed a full-stack learning project independently"
  ],

  techReasoning: {
    "Next.js": "Used for building a performant, SEO-friendly, and API-driven application with dynamic routing",
    "Redux Toolkit": "Managed global state for mutual fund data and calculator inputs",
    "External Mutual Fund API": "Provided live and structured mutual fund market data",
    "Financial Calculation Logic": "Implemented accurate formulas for SIP, Step-Up SIP, Lump Sum, and SWP scenarios",
    "Error Handling & Data Validation": "Ensured application stability when dealing with inconsistent or unavailable API data"
  },

  briefdescription:
    "MF Insights is a learning-focused mutual fund analysis platform that combines real market data with investment calculators to practice real-world finance application development.",

  techindetails: [
    "Next.js",
    "CSS",
    "Redux Toolkit",
    "Node.js",
    "External Mutual Fund API"
  ],

  tech: ["Next.js", "Fintech"],

  video: "",
  img: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1769416153/ChatGPT_Image_Jan_26_2026_01_57_12_PM_ynhinw.png",
  github: "",
  live: "",

  category: "Fullstack",

  features: [
    {
      role: "📊 User",
      items: [
        "Browse and search mutual funds using real market data",
        "View detailed information for individual mutual funds",
        "Calculate SIP investments for selected funds",
        "Use Step-Up SIP calculators for progressive investment planning",
        "Evaluate Lump Sum investment scenarios",
        "Analyze SWP and Step-Up withdrawal strategies"
      ]
    }
  ],

  startDate: "—",
  endDate: "—",
  duration: "Solo Development",
  teamSize: "Solo Project",
  status: "Completed"
}
,
  {
    title: "Attendance and Payroll Management App",
    role: "Full-Stack Developer",
    contributor: "Team: 2 Members",
    description:
      "Reduced payroll processing time by 80% with dual-dashboard system for 100+ employees.",
    problem: "HR teams were spending 5+ hours weekly on manual attendance tracking and payroll calculations, leading to human errors, delayed salary processing, and employee dissatisfaction.",
    yourContribution: "Built complete authentication system with JWT, designed MongoDB schemas for complex HR workflows, implemented React components for dual dashboards, integrated Cloudinary for document storage, and created PDF generation for salary slips.",
    solution: "Developed an automated end-to-end system with real-time attendance tracking, intelligent leave management, and automatic salary calculations with detailed breakdowns.",
    achievements: [
      "Reduced payroll processing time from 3 hours to 30 minutes (80% improvement)",
      "Eliminated 100% of manual calculation errors",
      "Deployed to production with 99.2% uptime",
      "Successfully manages 100+ employees across multiple departments"
    ],
    techReasoning: {
      "React + Vite": "Fast development cycle with instant HMR and optimized production builds for dashboard performance",
      "Redux Toolkit": "Manages complex HR state across dual dashboards without prop drilling",
      "MongoDB": "Flexible schema accommodates diverse employee data and leave types",
      "Node.js + Express": "Handles concurrent requests from multiple users, ensures data consistency",
      "JWT Authentication": "Role-based access control for HR/Admin and Employee roles",
      "Cloudinary": "Reliable cloud storage for documents, salary slips, and employee records"
    },
    briefdescription:
      "A full-stack web application designed to simplify employee management. It provides separate dashboards for HR/Admin and Employees, ensuring smooth handling of attendance, leave requests, holidays, and payroll generation. The system automates salary calculations, reduces manual errors, and improves workforce efficiency.",
    techindetails: [
      "React (Vite)",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB (Mongoose)",
      "JWT Authentication",
      "Multer",
      "Cloudinary (for file uploads)",
      "PDFKit / ReportLab"
    ],
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    video: "https://www.youtube.com/embed/JBY8KdyZx3U",
    img: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1757874895/AP2_rkekgb.png",
    github: "https://github.com/aryapatel23/Attendance-and-Payroll-Management",
    live: "https://attendance-and-payroll-management.vercel.app/",
    category: "Fullstack",
    features: [
      {
        role: "👨‍💼 HR/Admin",
        items: [
          "Manage employee profiles (Add, Edit, Delete)",
          "Track daily/monthly attendance",
          "Approve/Reject leave requests",
          "Manage holidays via calendar",
          "Generate & manage payroll (salary slips, deductions, leaves, bonuses)",
          "Export salary slips in PDF format"
        ]
      },
      {
        role: "👩‍💻 Employee",
        items: [
          "View & update profile",
          "Mark daily attendance",
          "Apply for leave",
          "View holiday calendar",
          "View monthly payroll & download salary slips"
        ]
      }
    ],
    startDate: "June 2025",
    endDate: "July 2025",
    duration: "1 Month",
    teamSize: "2",
    status: "Completed"
  },
  {
    title: "Homy – Hostel & Lifestyle Platform",
    role: "Full-Stack Developer",
    contributor: "Team: 2 Members",
    description:
      "One-stop platform connecting 500+ users with hostels, meals, transport & community.",
    problem: "Students and young professionals struggled to find accommodation, food services, and community connections all in one place. They had to use multiple apps, making the transition to a new city chaotic and expensive.",
    yourContribution: "Designed and implemented the hostel/PG listing system with advanced filtering, built the meal services integration with subscription management, created the community forum features, and set up the payment integration for bookings.",
    solution: "Built an all-in-one platform where users discover hostels with detailed amenities, book homemade meals, find transportation, and connect with others - reducing app switching by 80%.",
    achievements: [
      "Connected 500+ active users within 2 months",
      "200+ hostels and PG listings verified",
      "1000+ meal orders per month",
      "50+ community discussions daily"
    ],
    techReasoning: {
      "React + Vite": "Real-time UI updates for listings and bookings",
      "Redux Toolkit": "Manages complex multi-entity state (hostels, meals, users, bookings)",
      "MongoDB": "Flexible schema for diverse hostel types and amenities",
      "Framer Motion": "Smooth animations enhance UX for mobile browsing",
      "Cloudinary": "High-performance image delivery for hostel photos"
    },
    briefdescription:
      "Homy is designed to make city living easier for students and professionals. It provides a one-stop solution to discover hostels/PGs with detailed information, book homemade meal services, explore transportation options, and connect with others in the community.",
    techindetails: [
      "React (Vite)",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB (Mongoose)",
      "JWT Authentication",
      "Multer",
      "Cloudinary (for images)",
      "RESTful API"
    ],
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    video: "https://www.youtube.com/embed/JBY8KdyZx3U",
    img: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1757956095/20250915_2230_Homy_App_Features_remix_01k5751pnwe3293hvc24xw7w2x_3_y2tkj4.png",
    github: "https://github.com/JatinRajvani/homy",
    live: "https://homy-phev.vercel.app/",
    category: "Fullstack",
    features: [
      {
        role: "🏠 Hostel/PG Listings",
        items: [
          "Search and filter hostels/PGs by price, location, and facilities",
          "Dedicated detail pages with full hostel information",
          "View room images and amenities",
          "Check availability and contact hostel owners"
        ]
      },
      {
        role: "🍱 Meal Services",
        items: [
          "Discover homemade tiffin services",
          "View weekly/monthly meal plans",
          "Ratings & reviews for meal providers",
          "Subscription options for meals"
        ]
      },
      {
        role: "🚌 Transportation",
        items: [
          "Browse available local transport services",
          "Find shuttle/bus services near hostels",
          "View routes and pricing"
        ]
      },
      {
        role: "👥 Community",
        items: [
          "Join community discussions",
          "Post and respond to queries",
          "Connect with fellow students and professionals"
        ]
      }
    ],
    startDate: "March 2025",
    endDate: "May 2025",
    duration: "2 Months",
    teamSize: "2",
    status: "In Progress"
  },
  {
    title: "EcoHubs – Second-Hand Ecommerce Platform",
    role: "Full-Stack Developer",
    contributor: "Team: 4 Members",
    description:
      "Sustainable e-commerce platform enabling 200+ users to buy/sell second-hand products.",
    problem: "Fast fashion creates massive waste. There was no trusted, easy-to-use platform for Gen-Z to buy and sell used products at fair prices while reducing environmental impact.",
    yourContribution: "Architected the product listing system with image optimization, implemented secure user authentication and payment processing, built the cart and order management system, and created the seller dashboard with inventory management.",
    solution: "Created a user-friendly marketplace where buyers find quality second-hand items and sellers easily list products, with verified reviews and secure transactions - promoting sustainable consumption.",
    achievements: [
      "200+ active users in beta testing",
      "500+ products listed and sold",
      "98% transaction success rate",
      "Reduced waste by promoting product reuse"
    ],
    techReasoning: {
      "React + Vite": "Fast load times for product browsing and discovery",
      "Redux Toolkit": "Manages cart state and user preferences across sessions",
      "MongoDB": "Flexible schema for product variations and user data",
      "Cloudinary": "Image optimization and responsive delivery for product photos",
      "JWT Authentication": "Secure user sessions for buyers and sellers"
    },
    briefdescription:
      "EcoHubs allows users to securely buy and sell used products online, promoting sustainable consumption. It includes user authentication, product listings with images, cart management, and seller controls.",
    techindetails: [
      "React (Vite)",
      "Tailwind CSS",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Cloudinary (for product images)",
      "RESTful API"
    ],
    tech: ["React", "Vite", "Node.js", "MongoDB"],
    video: "https://www.youtube.com/embed/JBY8KdyZx3U",
    img: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1758051396/ecohubsimg_zzaglv.png",
    github: "https://github.com/JatinRajvani/odooxnmit",
    live: "https://ecofinds-second-hand.netlify.app/",
    category: "Fullstack",
    features: [
      {
        role: "🛒 Product Listings",
        items: [
          "Browse available second-hand products by category",
          "Search and filter items by name, price, or type",
          "View detailed product pages with descriptions and images"
        ]
      },
      {
        role: "👤 User Authentication",
        items: [
          "Secure login and signup with JWT",
          "Role-based access for buyers and sellers",
          "Profile management for users"
        ]
      },
      {
        role: "🛍️ Cart & Orders",
        items: [
          "Add/remove items from the shopping cart",
          "View total price before checkout",
          "Track orders (basic feature in progress)"
        ]
      },
      {
        role: "📸 Product Management",
        items: [
          "Upload product images via Cloudinary",
          "Edit and delete product listings",
          "Manage inventory as a seller"
        ]
      }
    ],
    startDate: "September 2025",
    endDate: "October 2025",
    duration: "1 Month",
    teamSize: "4",
    status: "In Progress"
  },
  {
    title: "Rental Management",
    role: "UI/UX Developer",
    contributor: "Solo Project",
    description: "Modern UI kit with 30+ reusable React components for rental platforms.",
    problem: "Building rental platforms from scratch required creating consistent UI components repeatedly. There was a need for a reusable, well-documented component library.",
    yourContribution: "Designed 30+ reusable React components in Figma, implemented them with Tailwind CSS, created comprehensive documentation, and built a Storybook for component showcase.",
    solution: "Developed a complete UI kit that reduces development time by 60%, ensures design consistency, and can be integrated into any React project.",
    achievements: [
      "30+ production-ready components",
      "Complete Figma design system",
      "60% reduction in component development time",
      "Comprehensive component documentation"
    ],
    techReasoning: {
      "Figma": "Design system for consistency and collaboration",
      "React": "Component library for reusability",
      "Tailwind CSS": "Utility-first styling for rapid development"
    },
    briefdescription:
      "Rental Management UI kit designed for landlords and tenants to manage properties, rent details, and communication efficiently.",
    techindetails: ["Figma", "React", "Tailwind CSS"],
    tech: ["Figma", "React", "Tailwind"],
    video: "https://www.youtube.com/embed/JBY8KdyZx3U",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    github: "https://github.com/yourusername/ui-kit",
    live: "https://your-live-demo-link.com",
    category: "UI",
    features: [
      {
        role: "🎨 UI/UX Features",
        items: [
          "Modern responsive design with Tailwind",
          "Clean Figma layout and reusable React components",
          "Optimized for design-to-code workflow"
        ]
      }
    ],
    startDate: "July 2025",
    endDate: "August 2025",
    duration: "1 Month",
    teamSize: "1",
    status: "Completed"
  },
  {
    title: "YouTube Clone – Video Streaming Platform",
    role: "Frontend Developer",
    contributor: "Solo Project",
    description:
      "Real-time video streaming app with 10K+ videos indexed and infinite scroll.",
    problem: "Understanding how streaming platforms handle real-time video APIs, caching, and infinite scroll was a complex learning challenge.",
    yourContribution: "Integrated YouTube Data API for real-time video fetching, implemented infinite scroll with pagination, built responsive video player, and optimized API calls with caching.",
    solution: "Built a fully functional YouTube clone that streams 10K+ videos with seamless browsing, demonstrating mastery of API integration and performance optimization.",
    achievements: [
      "10K+ videos indexed and searchable",
      "50ms average response time with caching",
      "Seamless infinite scroll without lag",
      "Responsive across all devices"
    ],
    techReasoning: {
      "React + Vite": "Fast development and optimized bundling for smooth video browsing",
      "YouTube API": "Real-time video data and metadata integration",
      "Infinite Scroll": "Better UX than pagination for video discovery",
      "API Caching": "Reduces API calls and improves performance"
    },
    briefdescription:
      "This YouTube Clone integrates the YouTube API to display real-time videos, supports search, infinite scrolling, and responsive video playback.",
    techindetails: [
      "React (Vite)",
      "CSS",
      "YouTube Data API",
      "REST API integration"
    ],
    tech: ["React", "Vite", "CSS", "YouTube API"],
    video: "https://www.youtube.com/embed/JBY8KdyZx3U",
    img: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1758200202/yt-colne_image_iiybpo.png",
    github: "https://github.com/JatinRajvani/Clone-using-React",
    live: "https://thriving-phoenix-8688f2.netlify.app/",
    category: "Frontend",
    features: [
      {
        role: "▶️ Video Streaming",
        items: [
          "Play YouTube videos directly using API integration",
          "Responsive video player layout",
          "Display related video suggestions"
        ]
      },
      {
        role: "🔍 Search Functionality",
        items: [
          "Search for videos using the YouTube API",
          "Real-time results with query updates",
          "Easy navigation between video results"
        ]
      },
      {
        role: "♾️ Infinite Scrolling",
        items: [
          "Load more videos as you scroll down",
          "Seamless browsing without page refresh",
          "Improved UX with dynamic loading"
        ]
      }
    ],
    startDate: "November 2024",
    endDate: "December 2024",
    duration: "3 Weeks",
    teamSize: "1",
    status: "Completed"
  },
  {
    title: "Nvidia Clone",
    description:
      "A static replica of Nvidia’s website focusing on layout and visual accuracy.",
    briefdescription:
      "Static website clone built with HTML and CSS to practice design replication and structure.",
    techindetails: ["HTML", "CSS"],
    tech: ["HTML", "CSS"],
    features: [
      {
        role: "💻 Frontend UI",
        items: [
          "Static design recreation using HTML and CSS",
          "Responsive homepage layout",
          "Optimized image structure"
        ]
      }
    ],
    img: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1758202048/NVIDIA-logo-BL_nxm3uc.jpg",
    github: "https://github.com/JatinRajvani/Nvidia-Clone-",
    live: "https://nvidiaclone.netlify.app/",
    category: "Frontend",
    startDate: "September 2024",
    endDate: "September 2024",
    duration: "4 Days",
    teamSize: "1",
    status: "Completed"
  },
  {
    title: "Digital Clock",
    description:
      "A simple responsive digital clock with real-time updates and colorful gradient design.",
    briefdescription:
      "Responsive digital clock with AM/PM format and a colorful gradient border, built using HTML, CSS, and JavaScript.",
    techindetails: ["HTML", "CSS", "JavaScript"],
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      {
        role: "🕒 Clock Features",
        items: [
          "Displays real-time hours, minutes, and seconds",
          "12-hour AM/PM format",
          "Fully responsive layout"
        ]
      }
    ],
    img: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1758203000/Digital_Clock_ostfmi.png",
    github: "https://github.com/JatinRajvani/Digital-Clock",
    live: "https://clockwithcolorfulborder.netlify.app/",
    category: "Frontend",
    startDate: "August 2024",
    endDate: "August 2024",
    duration: "2 Days",
    teamSize: "1",
    status: "Completed"
  },
  {
    title: "Tata Motors Clone",
    description:
      "A static clone of Tata Motors’ website created using HTML and CSS to practice layout design.",
    briefdescription:
      "Static Tata Motors website clone made using HTML and CSS to replicate structure and style.",
    techindetails: ["HTML", "CSS"],
    tech: ["HTML", "CSS"],
    features: [
      {
        role: "💻 Frontend UI",
        items: [
          "Static clone of Tata Motors website",
          "Clean layout using flexbox and grids",
          "Basic responsive adjustments"
        ]
      }
    ],
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiKYhLxN3oNJ5hLR5FTIM_DzpHisodHWZ8UMdipslcnCB3H9lZMTr1ecIPWSQr",
    github: "https://github.com/JatinRajvani/Tata-Motors-Clone",
    live: "https://dazzling-crepe-3f968e.netlify.app/",
    category: "Frontend",
    startDate: "October 2024",
    endDate: "October 2024",
    duration: "5 Days",
    teamSize: "1",
    status: "Completed"
  },
  {
    title: "Skills-Swap",
    description:
      "A team-based task management app with drag-and-drop functionality and Firebase integration.",
    briefdescription:
      "Skills-Swap enables teams to collaborate efficiently using drag-and-drop task organization and real-time updates powered by Firebase.",
    techindetails: ["React", "Firebase", "Tailwind CSS"],
    tech: ["React", "Firebase", "Tailwind"],
    img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=800&q=80",
    github: "https://github.com/yourusername/task-manager",
    live: "https://your-live-demo-link.com",
    category: "Fullstack",
    features: [
      {
        role: "👥 Collaboration",
        items: [
          "Real-time team updates using Firebase",
          "Task assignment and progress tracking",
          "Drag-and-drop task organization"
        ]
      }
    ],
    startDate: "May 2025",
    endDate: "June 2025",
    duration: "1 Month",
    teamSize: "3",
    status: "In Progress"
  }
];


const categories = ["All", "Frontend", "UI", "Fullstack"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("Project Details");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Get project index for counter and navigation
  const projectIndex = selectedProject ? projects.findIndex(p => p.title === selectedProject.title) : -1;
  
  const handlePrevious = () => {
    if (projectIndex > 0) {
      setSelectedProject(projects[projectIndex - 1]);
      setActiveTab("Project Details");
    }
  };

  const handleNext = () => {
    if (projectIndex < projects.length - 1) {
      setSelectedProject(projects[projectIndex + 1]);
      setActiveTab("Project Details");
    }
  };

  return (
    <section id="projects" className="py-16 flex flex-col items-center">
      <div className="max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-2">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            My{" "}
            <span className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-3 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A collection of my work showcasing creativity, clean code, and modern designs.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center sm:justify-center bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-xl px-4 sm:px-6 py-4 sm:py-3.5 shadow-lg sm:w-fit mx-auto mb-16 gap-4 sm:gap-3 flex-wrap">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Filter className="text-[#F59E0B] w-4 h-4" />
            <span className="text-gray-400 text-xs sm:text-sm font-semibold whitespace-nowrap">Filter By:</span>
          </div>
          <div className="flex gap-2 sm:gap-2.5 flex-wrap justify-center w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-4 py-2 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-black shadow-lg shadow-[#F59E0B]/50 font-bold"
                    : "bg-gray-800/70 text-gray-300 hover:bg-gray-700/90 hover:text-[#F59E0B] border border-gray-700/60 hover:border-[#F59E0B]/60 hover:shadow-md hover:shadow-[#F59E0B]/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:gap-6 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center w-full">
          {filteredProjects.map((project, index) => (
            <div key={index} className="w-full flex justify-center">
              {/* Desktop View - Simple Card */}
              <div className="hidden sm:block w-full max-w-sm h-[560px] group cursor-pointer">
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 shadow-lg hover:shadow-2xl hover:shadow-[#F59E0B]/30 hover:border-[#F59E0B]/40 group-hover:scale-105 transition-all duration-300 h-full flex flex-col gap-4">
                  
                  {/* Inner Card - Image/Video */}
                  <div className="relative w-full h-60 group overflow-hidden bg-black rounded-xl border border-gray-700/30">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                    />
                    {project.video && (
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <iframe
                          src={project.video}
                          title={project.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                  </div>

                  {/* Inner Card - Content */}
                  <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/30 rounded-xl p-4 flex flex-col gap-3 flex-1">
                    {/* Role & Contributor Badges */}
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-[#F59E0B]/15 text-[#F59E0B] text-xs px-2.5 py-1 rounded-md border border-[#F59E0B]/30 font-medium">
                        👤 {project.role}
                      </span>
                      <span className="bg-gray-700/40 text-gray-300 text-xs px-2.5 py-1 rounded-md border border-gray-600/30">
                        👥 {project.contributor}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#F59E0B] line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-base line-clamp-2">
                      {project.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex gap-3 text-xs text-gray-400 flex-wrap">
                      <span>📅 {project.duration}</span>
                      <span>✅ {project.status}</span>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="bg-[#F59E0B]/20 text-[#F59E0B] text-xs px-2 py-1 rounded-lg border border-[#F59E0B]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-black px-3 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#F59E0B]/50 hover:scale-105 transition-all text-sm"
                      >
                        View Project
                      </button>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-700/50 text-white px-3 py-2.5 rounded-lg font-semibold hover:bg-gray-600 hover:border-[#F59E0B]/40 hover:shadow-md transition-all flex items-center justify-center gap-1 text-sm border border-gray-600/50 group/btn"
                      >
                        <Github className="w-4 h-4 group-hover/btn:text-[#F59E0B] transition-colors" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile View - Nested Card Design (Matching Desktop) */}
              <div className="block sm:hidden w-full max-w-sm h-[560px]">
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col gap-4">
                  
                  {/* Inner Card - Image */}
                  <div className="relative w-full h-48 overflow-hidden bg-black rounded-xl border border-gray-700/30">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Inner Card - Content */}
                  <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/30 rounded-xl p-4 flex flex-col gap-3 flex-1">
                    {/* Role & Contributor Badges */}
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-[#F59E0B]/15 text-[#F59E0B] text-xs px-2.5 py-1 rounded-md border border-[#F59E0B]/30 font-medium">
                        👤 {project.role}
                      </span>
                      <span className="bg-gray-700/40 text-gray-300 text-xs px-2.5 py-1 rounded-md border border-gray-600/30">
                        👥 {project.contributor}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#F59E0B] line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-base line-clamp-2">
                      {project.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex gap-3 text-xs text-gray-400 flex-wrap">
                      <span>📅 {project.duration}</span>
                      <span>✅ {project.status}</span>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="bg-[#F59E0B]/20 text-[#F59E0B] text-xs px-2 py-1 rounded-lg border border-[#F59E0B]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-black px-3 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#F59E0B]/50 hover:scale-105 transition-all text-sm"
                      >
                        View Project
                      </button>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-700/50 text-white px-3 py-2.5 rounded-lg font-semibold hover:bg-gray-600 hover:border-[#F59E0B]/40 hover:shadow-md transition-all flex items-center justify-center gap-1 text-sm border border-gray-600/50 group/btn"
                      >
                        <Github className="w-4 h-4 group-hover/btn:text-[#F59E0B] transition-colors" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popup Modal */}
<AnimatePresence>
  {selectedProject && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-2 sm:px-4 py-4 overflow-y-auto pt-[75px] sm:pt-0"
      style={{ backdropFilter: "blur(12px)" }}
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 40 }}
        transition={{ duration: 0.35, type: "spring", bounce: 0.25 }}
        className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] max-h-[90vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl shadow-2xl border border-gray-700/40 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center bg-gradient-to-r from-gray-800 to-gray-700 px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-700/40 gap-2 sm:gap-2">
          {/* Left: Navigation - Show on all sizes */}
          <div className="flex items-center gap-2 sm:gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevious}
              disabled={projectIndex === 0}
              className="p-2 sm:p-2 rounded-lg bg-gray-700/50 hover:bg-[#F59E0B]/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 hover:text-[#F59E0B]" />
            </motion.button>
            <span className="text-xs text-gray-400 bg-gray-900/40 px-2 sm:px-2 py-1 sm:py-1 rounded-lg font-medium whitespace-nowrap">
              {projectIndex + 1}/{projects.length}
            </span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              disabled={projectIndex === projects.length - 1}
              className="p-2 sm:p-2 rounded-lg bg-gray-700/50 hover:bg-[#F59E0B]/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 hover:text-[#F59E0B]" />
            </motion.button>
          </div>

          {/* Center: Title */}
          <div className="sm:truncate flex-1 mx-1 sm:mx-4 min-w-0">
            <motion.h2
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#D97706] bg-clip-text text-transparent line-clamp-2"
            >
              {selectedProject.title}
            </motion.h2>
            <p className="text-gray-400 text-xs sm:text-sm hidden sm:block truncate">
              {selectedProject.category || "Web Application"}
            </p>
          </div>

          {/* Right: Close Button */}
          <motion.button
            onClick={() => setSelectedProject(null)}
            className="p-2 sm:p-2 rounded-full bg-gray-700/50 hover:bg-red-500/20 transition-all duration-300 group flex-shrink-0"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-red-400" />
          </motion.button>
        </div>

        {/* Body */}
        <div className="p-3 sm:p-5 md:p-6 flex-1 will-change-scroll overflow-y-auto">
          <div className="flex flex-col lg:flex-row gap-5 md:gap-6">
            {/* Left */}
            <div className="w-full lg:w-2/5 space-y-5 md:space-y-6">
              {selectedProject.video ? (
                <div className="aspect-video sm:aspect-video w-full rounded-xl overflow-hidden shadow-md max-h-[220px] sm:max-h-none">
                  <iframe
                    src={selectedProject.video}
                    title={selectedProject.title}
                    className="w-full h-full rounded-xl"
                    allowFullScreen
                  />
                </div>
              ) : (
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[220px] sm:max-h-64 md:max-h-72 lg:max-h-80 object-cover rounded-xl shadow-md"
                />
              )}

              {/* Project Info */}
              <div className="bg-gray-800/40 p-4 rounded-xl border border-gray-700/30 text-sm sm:text-base">
                <h3 className="text-[#F59E0B] font-semibold mb-3 text-base sm:text-lg">
                  Project Info
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p><b>Duration:</b> {selectedProject.duration}</p>
                  <p><b>Team Size:</b> {selectedProject.teamSize}</p>
                  <p>
                    <b>Status:</b>{" "}
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full text-xs border border-green-500/30">
                      {selectedProject.status}
                    </span>
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-black font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:shadow-lg hover:shadow-[#F59E0B]/40 transition-all text-sm sm:text-base"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  View Live Project
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-700/80 backdrop-blur-sm text-white font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-gray-600 border border-gray-600/50 transition-all text-sm sm:text-base"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  View Source Code
                </motion.a>
              </div>
            </div>

            {/* Right */}
            <div className="w-full lg:w-3/5 space-y-5 md:space-y-6">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 bg-gray-800/50 p-1 rounded-xl border border-gray-700/40 sm:justify-start justify-center">
                {["Project Details", "Tech Stack", "Features"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 sm:flex-none px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold rounded-lg ${
                      activeTab === tab
                        ? "bg-[#F59E0B] text-black shadow-md"
                        : "text-gray-300 hover:bg-gray-700/50"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-gray-800/30 rounded-xl p-4 sm:p-5 border border-gray-700/30 text-sm sm:text-base leading-relaxed text-gray-300 space-y-4 sm:max-h-[calc(90vh-210px)] sm:overflow-y-auto">
                {activeTab === "Project Details" && (
                  <div className="space-y-6">
                    {/* Problem */}
                    <div>
                      <h4 className="text-[#F59E0B] font-semibold text-lg mb-2">🎯 Problem</h4>
                      <p className="text-gray-300 leading-relaxed">{selectedProject.problem}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-[#F59E0B] font-semibold text-lg mb-2">✨ Solution</h4>
                      <p className="text-gray-300 leading-relaxed">{selectedProject.solution}</p>
                    </div>

                    {/* Your Contribution */}
                    <div>
                      <h4 className="text-[#F59E0B] font-semibold text-lg mb-2">💻 My Contribution</h4>
                      <p className="text-gray-300 leading-relaxed">{selectedProject.yourContribution}</p>
                    </div>


                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-[#F59E0B] font-semibold text-lg mb-3">🏆 Key Achievements</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedProject.achievements?.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gradient-to-br from-[#F59E0B]/20 to-[#D97706]/10 p-3 rounded-lg border border-[#F59E0B]/30 hover:border-[#F59E0B]/60 transition-all duration-300"
                          >
                            <p className="text-gray-200 text-sm font-medium">{achievement}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "Tech Stack" && (
                  <div className="space-y-4">
                    {selectedProject.techReasoning ? (
                      Object.entries(selectedProject.techReasoning).map(([tech, reason], i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="bg-gradient-to-r from-gray-900/60 to-gray-800/40 p-3 rounded-lg border border-gray-700/30 hover:border-[#F59E0B]/40 transition-all duration-300"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-[#F59E0B]/20">
                              {techIcons[tech] || <Code className="w-4 h-4 text-[#F59E0B]" />}
                            </span>
                            <h5 className="text-[#F59E0B] font-semibold">{tech}</h5>
                          </div>
                          <p className="text-gray-300 text-sm ml-8">{reason}</p>
                        </motion.div>
                      ))
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techindetails.map((tech, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-gradient-to-br from-[#F59E0B] to-[#D97706] text-black px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-[#F59E0B]/30 transition-all"
                          >
                            <span className="flex items-center justify-center">
                              {techIcons[tech] || <Code className="w-3 h-3" />}
                            </span>
                            {tech}
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
{activeTab === "Features" && (
  <div className="space-y-6">
    {selectedProject.features?.map((feature, index) => (
      <div key={index}>
        {/* Role Title */}
        <h4 className="text-[#F59E0B] font-semibold text-base sm:text-lg mb-2">
          {feature.role}
        </h4>

        {/* Feature Items */}
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          {feature.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)}

              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


      </div>
    </section>
  );
}


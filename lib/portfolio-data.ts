/**
 * Portfolio Data Module
 * Contains all portfolio information including projects with complete structured data fields:
 * - datePublished: Publication date for each project
 * - "image": Project screenshot or logo URL
 * - keywords: Array of relevant keywords for SEO
 * - "url": Canonical URL for the project
 */

import { Briefcase, Rocket, Building2, Code, Database, Shield, Wrench, Layers } from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Momin Mohasin",
    title: "Full-Stack Developer",
    tagline: "Tech Enthusiast",
    description: "Passionate about creating scalable web applications with modern technologies",
    detailedDescription: "I build modern, scalable web applications with React, Next.js, Node.js, Django, and FastAPI. Currently working at Brilliantech Software Pvt Ltd, passionate about impactful solutions.",
    avatar: "/momin.jpg",
    resumeUrl: "/resume.pdf"
  },

  stats: {
    experience: {
      label: "Years Experience",
      value: "1+",
      icon: "Briefcase",
      color: "text-blue-500",
      description: "Professional development experience"
    },
    projects: {
      label: "Projects Completed",
      value: "18+",
      icon: "Rocket",
      color: "text-green-500",
      description: "Delivered scalable solutions"
    },
    companies: {
      label: "Companies Worked",
      value: "2",
      icon: "Building2",
      color: "text-purple-500",
      description: "Leading tech companies"
    }
  },

  highlights: {
    expertise: {
      title: "Full-Stack Expertise",
      description: "MERN, MEAN, Django, FastAPI & more",
      icon: "Code",
      color: "text-blue-500"
    },
    methodology: {
      title: "Agile Development",
      description: "Scrum, CI/CD, and modern development practices",
      icon: "Wrench",
      color: "text-green-500"
    },
    impact: {
      title: "Business Impact",
      description: "Solutions that drive growth and user satisfaction",
      icon: "Rocket",
      color: "text-purple-500"
    }
  },

  skills: {
    Languages: {
      icon: "Code",
      color: "text-purple-500",
      skills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "PHP",
      ]
    },
    Frameworks: {
      icon: "Code",
      color: "text-blue-500",
      skills: [
        "Next.js",
        "Angular",
        "Node.js",
        "NestJS",
        "Express.js",
        "Fastify",
        "Django",
        "FastAPI",
      ]
    },
    Libraries: {
      icon: "Layers",
      color: "text-green-500",
      skills: [
        "React",
        "Framer Motion",
        "Shadcn UI",
        "Lucide Icons",
        "TailwindCSS",
        "Bootstrap",
      ]
    },
    Databases: {
      icon: "Database",
      color: "text-orange-500",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "SQLite",
        "Prisma",
        "SQLAlchemy",
        "Mongoose",
        "Sequelize",
        "TypeORM",
      ]
    },
    "Tools / DevOps": {
      icon: "Wrench",
      color: "text-red-500",
      skills: [
        "Git",
        "GitHub",
        "Linux",
        "Docker",
        "DigitalOcean",
        "AWS (S3, EC2)",
        "Nginx",
        "PM2",
        "CI/CD (GitHub Actions)",
        "Nano / Vim",
      ]
    },
    "Authentication / Security": {
      icon: "Shield",
      color: "text-yellow-500",
      skills: [
        "Advanced JWT",
        "OAuth 2.0",
        "Advanced RBAC",
        "HttpOnly Cookies",
      ]
    },
    "Others / Advanced": {
      icon: "Layers",
      color: "text-indigo-500",
      skills: [
        "WebRTC",
        "WebSockets",
        "Redis",
        "Stripe",
        "Cashfree",
        "Razorpay",
        "Zoom SDK",
        "Calendly",
        "Twilio",
        "SendGrid",
        "Strapi (Headless CMS)",
        "Firebase",
      ]
    },
  },

  about: {
    paragraphs: [
      'Hi, I\'m Momin Mohasin, a passionate Full-Stack Developer who enjoys turning ideas into scalable and modern web applications. I specialize in building with React, Next.js, Node.js, Django, and FastAPI, and I love learning new technologies to stay ahead.',
      'I\'m currently working as a Full-Stack Developer at Brilliantech Software Pvt Ltd. I\'m passionate about mastering modern technologies, improving system performance, and delivering high-quality solutions that create real business value.',
      'Beyond coding, I\'m a tech enthusiast who enjoys experimenting with new stacks and building side projects like live-streaming platforms, AR try-on apps, and real-time chat systems.',
    ]
  },

  experience: [
    {
      company: "Brilliantech Software Pvt Ltd",
      logo: "/bt.png",
      role: "Full-Stack Developer",
      period: "Jul 2025 - Present",
      startDate: "2025-07-01",
      location: "Pune, Maharashtra, India",
      techs: [
        "MERN Stack",
        "MEAN Stack",
        "React",
        "Next.js",
        "Node.js",
        "REST APIs",
        "Django",
        "FastAPI",
      ],
      description:
        "Working on full-stack development projects using MERN stack and other modern technologies, delivering scalable and responsive web applications.",
    },
    {
      company: "TECHONSY Software Pvt Ltd",
      logo: "/ts.png",
      role: "Software Engineer",
      period: "Jan 2025 - Jun 2025",
      startDate: "2025-01-01",
      endDate: "2025-06-01",
      location: "Pune, Maharashtra, India",
      techs: ["Angular", "TypeScript", "MEAN Stack", "REST APIs"],
      description:
        "Contributed to full-stack development using the MEAN stack. Developed LMS, integrated REST APIs, optimized API rendering, and implemented responsive UI/UX.",
      highlights: [
        "Developed a Learning Management System (LMS) using Angular v19 and TypeScript.",
        "Built and integrated RESTful APIs, improving app performance and scalability.",
        "Implemented mobile-friendly UI/UX and responsive design.",
        "Participated in Agile sprints, daily stand-ups, and code reviews.",
      ],
    },
  ],

  projects: [
    {
      name: "Vendor Verification & Fraud Detection Platform",
      description: "A secure vendor verification and fraud detection platform that enables users to register, verify identity, and connect with trusted entities to securely share sensitive financial data such as banking details.",
      datePublished: "2024-06-15",
      image: "/projects/vendor-verification.png",
      keywords: ["vendor verification", "fraud detection", "security", "Next.js", "NestJS", "PostgreSQL"],
      url: "https://momin-mohasin.me/projects#vendor-verification",
      category: "SoftwareApplication",
      technologies: ["Next.js", "NestJS", "Node.js", "PostgreSQL", "TypeORM", "Tailwind CSS", "WebSockets", "REST APIs", "AWS EC2", "AWS RDS", "AWS S3"]
    },
    {
      name: "Ad Monetization Platform",
      description: "A customer-centric ad monetization platform designed to deliver targeted advertisements directly to end users at the point of purchase across multiple devices.",
      datePublished: "2024-04-20",
      image: "/projects/ad-monetization.png",
      keywords: ["ad monetization", "advertising platform", "React", "Node.js", "real-time updates"],
      url: "https://momin-mohasin.me/projects#ad-monetization",
      category: "SoftwareApplication",
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Sequelize", "Tailwind CSS", "Server-Sent Events", "REST APIs"]
    },
    {
      name: "LinkCode LMS & Admin Portal",
      description: "Enterprise-grade Learning Management System and administrative portal for managing student training, attendance, payments, and academic performance.",
      datePublished: "2025-01-15",
      image: "/projects/linkcode-lms.png",
      keywords: ["LMS", "learning management", "Angular", "education platform", "student management"],
      url: "https://app.linkcode.in",
      category: "EducationalApplication",
      technologies: ["Angular", "TypeScript", "Node.js", "REST APIs", "MongoDB"]
    },
    {
      name: "Sadhguru Tiles & Marbles - Digital Catalog Platform",
      description: "A commercial digital storefront and product catalog platform for a premium tiles and bathware supplier, designed to showcase collections and drive in-store visits.",
      datePublished: "2024-08-10",
      image: "/projects/sadhguru-tiles.png",
      keywords: ["e-commerce", "product catalog", "tiles", "bathware", "Angular"],
      url: "https://sg-tiles.vercel.app/",
      category: "BusinessApplication",
      technologies: ["Angular", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"]
    },
    {
      name: "m Chat",
      description: "A privacy-focused, temporary chat platform designed for short-lived conversations without message persistence or data storage.",
      datePublished: "2024-03-05",
      image: "/projects/mchat.png",
      keywords: ["chat application", "real-time communication", "WebSockets", "privacy", "Next.js"],
      url: "https://mchat.momin-mohasin.me/",
      category: "SoftwareApplication",
      technologies: ["Next.js", "React.js", "WebSockets", "Real-Time Communication"]
    },
    {
      name: "KarLo",
      description: "A location-aware To-Do and reminder platform that triggers reminders based on real-world location context using geofencing.",
      datePublished: "2024-02-20",
      image: "/projects/karlo.png",
      keywords: ["geofencing", "reminders", "location-based", "FastAPI", "React"],
      url: "https://karlo.momin-mohasin.me/",
      category: "SoftwareApplication",
      technologies: ["React.js", "FastAPI", "PostgreSQL", "Alembic", "Google Maps API", "Geolocation Services"]
    },
    {
      name: "m_share",
      description: "A secure, read-only code-sharing platform built for developers with privacy-first snippet sharing and strict access control.",
      datePublished: "2024-05-12",
      image: "/projects/mshare.png",
      keywords: ["code sharing", "security", "privacy", "Next.js", "authentication"],
      url: "https://mshare.momin-mohasin.me/",
      category: "SoftwareApplication",
      technologies: ["Next.js", "React.js", "Tailwind CSS", "Authentication", "Secure Access Control"]
    },
    {
      name: "Scroll Screen Blocker (Android)",
      description: "An Android app to block addictive content like Reels and Shorts, empowering users to regain control over screen time.",
      datePublished: "2023-11-08",
      image: "/projects/stopscroll.png",
      keywords: ["Android app", "screen time management", "content blocking", "Java"],
      url: "https://play.google.com/store/apps/details?id=com.uma.scrollblock&pli=1",
      category: "MobileApplication",
      technologies: ["Android", "Java", "XML"]
    },
    {
      name: "Note App (Python)",
      description: "A simple and efficient note-taking application built with Python Flask framework for managing notes with CRUD functionality.",
      datePublished: "2023-09-14",
      image: "/projects/note-app.png",
      keywords: ["note-taking", "Flask", "Python", "CRUD", "web application"],
      url: "https://momin-mohasin.me/projects#note-app",
      category: "SoftwareApplication",
      technologies: ["Python", "Flask", "JavaScript", "SQLite", "HTML", "CSS", "TailwindCSS"]
    },
    {
      name: "Tasky",
      description: "A basic task management application built with Django, featuring user authentication, task creation, updates, and deletion.",
      datePublished: "2023-08-22",
      image: "/projects/tasky.png",
      keywords: ["task management", "Django", "Python", "productivity"],
      url: "https://momin-mohasin.me/projects#tasky",
      category: "SoftwareApplication",
      technologies: ["Django", "JavaScript", "SQLite", "Bootstrap", "HTML", "CSS"]
    },
    {
      name: "MBook - Audiobook App",
      description: "An Android app for audiobook lovers, providing browsing, listening, offline mode, bookmarks, and progress tracking.",
      datePublished: "2023-07-10",
      image: "/projects/mbook.png",
      keywords: ["audiobook", "Android app", "media player", "Java"],
      url: "https://momin-mohasin.me/projects#mbook",
      category: "MobileApplication",
      technologies: ["Android", "Java", "Firebase"]
    },
    {
      name: "Mtask - Task Management System",
      description: "A full-featured task management system built with Django, supporting authentication, task categories, assignment, and collaboration.",
      datePublished: "2023-06-18",
      image: "/projects/mtask.png",
      keywords: ["task management", "Django", "collaboration", "team management"],
      url: "https://momin-mohasin.me/projects#mtask",
      category: "SoftwareApplication",
      technologies: ["Django", "SQLite", "Bootstrap", "HTML", "CSS", "JavaScript", "Django Rest Framework"]
    },
    {
      name: "MCrouchet",
      description: "An e-commerce Android application for crochet enthusiasts with product browsing, secure login, cart, and payment gateway.",
      datePublished: "2023-05-25",
      image: "/projects/mcrouchet.png",
      keywords: ["e-commerce", "Android app", "shopping", "Firebase"],
      url: "https://momin-mohasin.me/projects#mcrouchet",
      category: "MobileApplication",
      technologies: ["Android", "Java", "XML", "Firebase"]
    },
    {
      name: "MTimer",
      description: "A simple Android timer app with background functionality, customizable alerts, and notifications for time-sensitive tasks.",
      datePublished: "2023-04-12",
      image: "/projects/mtimer.png",
      keywords: ["timer", "Android app", "utility", "notifications"],
      url: "https://momin-mohasin.me/projects#mtimer",
      category: "MobileApplication",
      technologies: ["Android", "Java", "XML"]
    },
    {
      name: "Recipe Finder",
      description: "An Android app that helps users discover recipes using Gemini API with search and exploration features.",
      datePublished: "2023-03-30",
      image: "/projects/recipe-finder.png",
      keywords: ["recipe", "Android app", "Gemini API", "food"],
      url: "https://momin-mohasin.me/projects#recipe-finder",
      category: "MobileApplication",
      technologies: ["Android", "Java", "XML", "Firebase", "Gemini API"]
    },
    {
      name: "Mtube",
      description: "A React.js web application that integrates with the YouTube API to allow users to search, browse, and watch videos.",
      datePublished: "2023-02-14",
      image: "/projects/mtube.png",
      keywords: ["video streaming", "YouTube API", "React", "web application"],
      url: "https://momin-mohasin.me/projects#mtube",
      category: "SoftwareApplication",
      technologies: ["React.js", "tailwindcss", "YouTube API"]
    },
    {
      name: "MNovels",
      description: "An Android app built in Java for reading novels and books with a clean and user-friendly interface for book lovers.",
      datePublished: "2023-01-20",
      image: "/projects/mnovels.png",
      keywords: ["ebook", "Android app", "reading", "books"],
      url: "https://momin-mohasin.me/projects#mnovels",
      category: "MobileApplication",
      technologies: ["Android", "Java", "XML", "Firebase"]
    }
  ]
};
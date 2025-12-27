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
      value: "15+",
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
      ]
    },
    "Authentication / Security": {
      icon: "Shield",
      color: "text-yellow-500",
      skills: [
        "JWT",
        "OAuth 2.0",
        "Role-Based Access Control (RBAC)",
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
      period: "Jul 2025 – Present",
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
      period: "Jan 2025 – Jun 2025",
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
  ]
};
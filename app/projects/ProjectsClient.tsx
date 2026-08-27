"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/ui/StatusBadge";
import { InlineTabs } from "@/components/ui/InlineTab";
import { useState } from "react";
import { portfolioData } from "@/lib/portfolio-data";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { generateProjectMetadata } from "@/lib/seo-utils";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
export type ProjectStatus =
  | "completed"
  | "inprogress"
  | "published"
  | "planned";

export type ProjectType =
  | "web"
  | "frontend"
  | "backend"
  | "fullstack"
  | "android";

export type ProjectCategory = "personal" | "company";

interface BaseProject {
  name: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  status: ProjectStatus;
  type?: ProjectType;
}

/* -------- Personal Project -------- */
export interface PersonalProject extends BaseProject {
  category: "personal";
  purpose?: string;
  keyFeatures?: string[];
  link?: string;
}

/* -------- Company Project -------- */
export interface CompanyProject extends BaseProject {
  category: "company";
  company?: string;
  client?: string;
  role: string;
  responsibilities: string[];
  integrations?: string[];
  features?: string[];
  tools?: string[];
  impact?: string;
  link?: string;
}
export const companyProjects: CompanyProject[] = [
  {
    name: "Vendor Verification & Fraud Detection Platform",
    category: "company",
    company: "Brilliantech Software Pvt Ltd",
    client: "",
    role: "Full-Stack Developer (Lead)",
    type: "web",
    status: "completed",

    description:
      "A secure vendor verification and fraud detection platform that enables users to register, verify identity, and connect with trusted entities to securely share sensitive financial data such as banking details. The system uses encrypted, access-controlled data exchange, real-time notifications, and advanced security mechanisms to minimize fraud and ensure trusted business interactions.",

    technologies: [
      "Next.js",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "TypeORM",
      "Tailwind CSS",
      "WebSockets",
      "REST APIs",
      "AWS EC2",
      "AWS RDS",
      "AWS S3",
    ],

    integrations: [
      "Stripe",
      "Twilio Verify",
      "SendGrid",
      "Calendly",
      "Zoom",
      "Address Auto-Suggest API",
    ],

    tools: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "AWS"],

    responsibilities: [
      "Led end-to-end development including backend architecture using NestJS and frontend using Next.js",
      "Designed relational database schema using PostgreSQL and TypeORM",
      "Deployed backend services on AWS EC2 and managed PostgreSQL database via AWS RDS",
      "Deployed frontend applications and dashboards on Vercel with domain and subdomain configuration",
      "Configured domain routing and subdomain architecture for seamless frontend-backend communication",
      "Implemented secure authentication with HTTP-only cookies, CSRF protection, double authentication, and silent token rotation",
      "Implemented token blacklisting and secure session management",
      "Built real-time notification system for admins and vendors using WebSockets",
      "Integrated third-party services including Stripe, Twilio Verify, SendGrid, Calendly, and Zoom",
      "Designed and implemented subscription-based payment system",
      "Implemented secure file uploads using AWS S3 presigned URLs",
      "Used public IDs instead of sequential IDs to prevent enumeration attacks",
      "Ensured scalability, security, and performance optimization across the system",
    ],

    features: [
      "Vendor identity verification and onboarding",
      "Secure and encrypted financial data sharing",
      "Real-time notifications using WebSockets",
      "Fraud detection and validation mechanisms",
      "Role-based authentication and authorization",
      "Subscription and payment management system",
      "Secure file upload via presigned URLs",
      "Domain and subdomain-based architecture",
      "Public ID-based resource access for enhanced security",
    ],

    impact:
      "Delivered a production-ready, secure platform with scalable cloud deployment that reduces fraud risk and enables trusted financial data exchange between vendors, improving transparency and operational efficiency.",

    link: "/",
  },
  {
    name: "Ad Monetization Platform",
    category: "company",
    company: "Brilliantech Software Pvt Ltd",
    client: "",
    role: "Full-Stack Developer (Lead)",
    type: "web",
    status: "completed",

    description:
      "A customer-centric ad monetization platform designed to deliver targeted advertisements directly to end users at the point of purchase. Businesses can create and manage campaigns that run across POS systems, digital cubes, mobile devices, tablets, PCs, and smart TVs, ensuring real-time and context-aware ad delivery when customers are actively buying.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
      "Tailwind CSS",
      "Server-Sent Events (SSE)",
      "REST APIs",
    ],

    integrations: ["Razorpay", "Cashfree Payments", "Authentication System"],

    tools: ["Git", "GitHub", "Vercel", "Postman", "VS Code"],

    responsibilities: [
      "Developed responsive UI for creating and managing ad campaigns",
      "Built and integrated REST APIs with real-time updates using SSE",
      "Implemented secure authentication and role-based access control",
      "Integrated payment gateways (Razorpay and Cashfree)",
      "Optimized performance and ensured SEO-friendly rendering",
      "Led development and managed team collaboration",
    ],

    features: [
      "Direct-to-customer ad delivery at point of purchase",
      "Multi-device ad support (POS, cubes, mobile, tablet, TV, PC)",
      "Real-time campaign updates",
      "Centralized dashboard for ad management",
      "Payment-enabled campaign activation",
      "Scalable architecture",
    ],

    impact:
      "Enabled businesses to influence customer decisions in real-time by displaying targeted ads exactly where purchases happen, increasing conversion rates and enhancing in-store digital engagement.",

    link: "/",
  },
  {
    name: "Canextgen",
    category: "company",
    company: "Freelance",
    client: "Canextgen",
    role: "Full-Stack Developer",
    type: "web",
    status: "completed",

    description:
      "A responsive, SEO-optimized production website developed and deployed using Next.js and TypeScript, hosted on a custom domain through Vercel.",

    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Web3Forms"],

    tools: ["Git", "GitHub", "Vercel"],

    responsibilities: [
      "Developed and deployed a responsive, SEO-optimized production website using Next.js and TypeScript",
      "Configured custom domain hosting and deployment pipeline through Vercel",
      "Implemented structured metadata and semantic markup for search engine visibility",
    ],
  },
  {
    name: "Everlogic Consulting",
    category: "company",
    company: "Freelance",
    client: "Everlogic Consulting",
    role: "Full-Stack Developer",
    type: "fullstack",
    status: "completed",

    description:
      "A full-stack production application with authentication, dashboard modules, REST APIs, and database models, built and deployed for a consulting business.",

    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Web3Forms"],

    tools: ["Git", "GitHub", "Vercel", "Postman"],

    responsibilities: [
      "Built and deployed a full-stack production application with authentication and role-based dashboard modules",
      "Designed REST APIs and database models to support consulting workflows",
      "Deployed and configured hosting on a custom domain through Vercel",
    ],
  },
  {
    name: "BeVerifyd",
    category: "company",
    company: "Freelance",
    client: "BeVerifyd",
    role: "Full-Stack Developer",
    type: "web",
    status: "completed",

    description:
      "A responsive production web application with modern UI, third-party API integrations, and database services, deployed on a custom domain.",

    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Web3Forms"],

    tools: ["Git", "GitHub", "Vercel"],

    responsibilities: [
      "Developed and deployed a responsive production web application with a modern UI",
      "Integrated third-party APIs and database services for core functionality",
      "Configured and deployed the application on a custom domain",
    ],
  },
  {
    name: "LinkCode LMS & Admin Portal",
    category: "company",
    company: "TECHONSY Software Pvt Ltd",
    role: "Software Engineer",
    description:
      "Enterprise-grade Learning Management System and administrative portal used to manage student training, attendance, payments, academic performance, and placement workflows.",
    technologies: ["Angular", "TypeScript", "Node.js", "REST APIs", "MongoDB"],
    integrations: [
      "Payment Gateway",
      "Zoom SDK",
      "Email Notifications",
      "Student Attendance System",
    ],
    tools: ["Git", "GitHub", "Postman", "AWS", "Jira"],
    responsibilities: [
      "Developed LMS modules for students and administrators",
      "Implemented attendance, fee tracking, and reporting APIs",
      "Optimized performance for concurrent users across batches",
      "Ensured secure handling of academic and financial data",
    ],
    impact:
      "Actively used by 12,500+ students across multiple training programs.",
    status: "completed",
    type: "fullstack",
    link: "https://app.linkcode.in",
  },
  {
    name: "Sadhguru Tiles & Marbles - Digital Catalog Platform",
    category: "company",
    company: "Freelance",
    client: "Sadhguru Tiles & Marbles, Pune",
    role: "Full-Stack Developer",

    description:
      "A commercial digital storefront and product catalog platform for a premium tiles and bathware supplier, designed to showcase collections, authorized brands, and drive in-store visits.",

    type: "web",
    status: "completed",

    technologies: [
      "Angular",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST APIs",
    ],

    integrations: [
      "Brand Catalog Assets",
      "Google Maps Location Integration",
      "Authentication System",
    ],

    tools: ["Git", "GitHub", "Vercel", "Postman"],

    responsibilities: [
      "Developed responsive UI for showcasing tile and bathware collections",
      "Integrated brand-wise product catalogs and digital assets",
      "Implemented authentication and structured navigation flows",
      "Optimized UI for performance and SEO-friendly rendering",
    ],

    impact:
      "Enabled customers to explore curated product collections and brands online before visiting the physical showroom (O2O experience).",

    link: "https://sg-tiles.vercel.app/",
  },
];

const projects = [
  {
    name: "m Chat",
    category: "personal",
    description:
      "m Chat is a privacy-focused, temporary chat platform designed for short-lived conversations without message persistence or data storage.",
    purpose:
      "Provide a lightweight and safe environment for ephemeral conversations without leaving digital traces.",
    keyFeatures: [
      "Temporary chat rooms",
      "Ephemeral messages that auto-delete after session ends",
      "No message storage or conversation history",
      "Clear safety guidelines against sharing sensitive information",
      "Minimal, distraction-free interface",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "WebSockets",
      "Real-Time Communication",
    ],
    status: "completed",
    type: "web",
    link: "https://mchat.momin-mohasin.me/",
  },

  {
    name: "KarLo",
    category: "personal",
    description:
      "KarLo is a location-aware To-Do and reminder platform branded as 'Apna Reminder Dost', designed to trigger reminders based on real-world location context.",
    purpose:
      "Help users remember tasks exactly when and where they matter most using geofencing.",
    keyFeatures: [
      "Geofenced reminders based on user location",
      "Smart notifications triggered by proximity",
      "Fast task creation with minimal user input",
      "Designed for commuters and modern multitaskers",
    ],
    technologies: [
      "React.js",
      "FastAPI",
      "PostgreSQL",
      "Alembic",
      "Google Maps API",
      "Geolocation Services",
    ],
    status: "completed",
    type: "fullstack",
    link: "https://karlo.momin-mohasin.me/",
  },
  {
    name: "m_share",
    category: "personal",
    description:
      "m_share is a secure, read-only code-sharing platform built for developers who need privacy-first snippet sharing with strict access control and anti-leak measures.",
    purpose:
      "Enable secure and controlled sharing of code snippets without risking unauthorized redistribution.",
    keyFeatures: [
      "Authenticated access with granular permissions",
      "Invisible watermarking to discourage screenshots and leaks",
      "Ephemeral code snippets with automatic expiration",
      "Minimalist monochrome UI with syntax highlighting",
      "No analytics, tracking, or third-party integrations",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Authentication",
      "Secure Access Control",
    ],
    status: "inprogress",
    type: "web",
    link: "https://mshare.momin-mohasin.me/",
  },

  {
    name: "Sad Guru Tiles",
    category: "personal",
    description:
      "A professional business website built for a tiles company, showcasing products and services with a modern responsive design.",
    technologies: [
      "Angular.js",
      "Express.js",
      "TailwindCSS",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "Google Gemini API",
    ],
    status: "completed",
    link: "https://sg-tiles.vercel.app/",
  },
  {
    name: "Scroll Screen Blocker (Android)",
    category: "personal",
    description:
      "StopScroll: An Android app to block addictive content like Reels and Shorts, empowering users to regain control over screen time with content blocking, usage tracking, and customizable controls.",
    technologies: ["Android", "Java", "XML"],
    status: "published",
    link: "https://play.google.com/store/apps/details?id=com.uma.scrollblock&pli=1",
  },
  {
    name: "Note App (Python)",
    category: "personal",
    description:
      "A simple and efficient note-taking application built with Python Flask framework for managing notes with CRUD functionality.",
    technologies: [
      "Python",
      "Flask",
      "JavaScript",
      "SQLite",
      "HTML",
      "CSS",
      "TailwindCSS",
    ],
    status: "completed",
  },
  {
    name: "Tasky",
    category: "personal",
    description:
      "Tasky is a basic task management application built with Django, featuring user authentication, task creation, updates, and deletion. It allows users to manage their profiles and stay organized.",
    technologies: [
      "Django",
      "JavaScript",
      "SQLite",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
    status: "completed",
  },

  {
    name: "MBook - Audiobook App",
    category: "personal",
    description:
      "An Android app for audiobook lovers, providing browsing, listening, offline mode, bookmarks, and progress tracking. Designed for commuters and self-learners who prefer audio content.",
    technologies: ["Android", "Java", "Firebase"],
    status: "completed",
  },
  {
    name: "Mtask - Task Management System",
    category: "personal",
    description:
      "A full-featured task management system built with Django, supporting authentication, task categories, assignment, progress tracking, user roles, collaboration, and notifications.",
    technologies: [
      "Django",
      "SQLite",
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript",
      "Django Rest Framework",
    ],
    status: "completed",
  },
  {
    name: "MCrouchet",
    category: "personal",
    description:
      "An e-commerce Android application for crochet enthusiasts. Features include product browsing, secure login, cart, payment gateway, and an admin panel for managing content and orders.",
    technologies: ["Android", "Java", "XML", "Firebase"],
    status: "completed",
  },
  {
    name: "MTimer",
    category: "personal",
    description:
      "A simple Android timer app with background functionality, customizable alerts, and notifications for time-sensitive tasks. Supports multiple timers and runs even when the app is closed.",
    technologies: ["Android", "Java", "XML"],
    status: "completed",
  },
  {
    name: "Recipe Finder",
    category: "personal",
    description:
      "An Android app that helps users discover recipes using Gemini API. Built in Java, it allows searching and exploring a variety of recipes with ease.",
    technologies: ["Android", "Java", "XML", "Firebase", "Gemini API"],
    status: "completed",
  },
  {
    name: "Mtube",
    category: "personal",
    description:
      "A React.js web application that integrates with the YouTube API to allow users to search, browse, and watch videos in a modern UI.",
    technologies: ["React.js", "tailwindcss", "YouTube API"],
    status: "completed",
  },
  {
    name: "MNovels",
    category: "personal",
    description:
      "An Android app built in Java for reading novels and books with a clean and user-friendly interface for book lovers.",
    technologies: ["Android", "Java", "XML", "Firebase"],
    status: "completed",
  },
];

const MotionCard = motion(Card);
type ProjectTab = "experience" | "company" | "personal";

/**
 * Generates metadata for a project for SEO purposes
 * This function creates unique metadata for each project that can be used
 * for social sharing, search engine optimization, and structured data
 */
function getProjectMetadata(project: any) {
  return generateProjectMetadata({
    name: project.name,
    description: project.description,
    technologies: project.technologies,
    image: project.image,
    url: `/projects#${project.name.toLowerCase().replace(/\s+/g, '-')}`
  });
}
interface ProjectsProps {
  /** Company name -> dynamically computed tenure (e.g. "1 yr 1 mo"), from a Server Component. */
  experienceDurations?: Record<string, string>;
}

const Projects = ({ experienceDurations = {} }: ProjectsProps) => {
  const [activeTab, setActiveTab] = useState<ProjectTab>("company");

  const tabs: { title: string; value: ProjectTab }[] = [
    { title: "Experience", value: "experience" },
    { title: "Company & Clients", value: "company" },
    { title: "Personal", value: "personal" },
  ];

  return (
    <>
      <section className="w-full mt-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-6xl px-4 md:px-6 py-8 md:py-14"
        >
          <div className="text-center mb-10">
            <motion.h1
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3"
            >
              {activeTab === "experience" ? "Experience" : "Projects"}
            </motion.h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
              {activeTab === "experience"
                ? "Where I've worked and what I've built along the way."
                : "A mix of client, company, and personal engineering work."}
            </p>
          </div>
          <div className="w-full justify-center items-center">
            <InlineTabs
              tabs={tabs}
              activeTab={activeTab}
              onChange={setActiveTab}
            />

            {activeTab === "experience" && (
              <div className="mt-10">
                <div className="flex flex-col gap-5">
                  {portfolioData.experience.map((exp) => (
                    <Card
                      key={exp.company}
                      className="rounded-2xl border-border/60 hover:border-primary/30"
                    >
                      <CardHeader className="flex gap-4">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={52}
                          height={52}
                          className="rounded-lg object-cover ring-1 ring-border"
                        />

                        <div className="flex flex-col">
                          <CardTitle className="font-semibold text-lg">
                            {exp.role}
                          </CardTitle>

                          <CardDescription className="text-sm flex flex-wrap items-center gap-1.5">
                            <span>{exp.company} · {exp.period}</span>
                            {experienceDurations[exp.company] && (
                              <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-primary/10 text-primary">
                                {experienceDurations[exp.company]}
                                {!exp.endDate && " so far"}
                              </span>
                            )}
                          </CardDescription>

                          <CardDescription className="text-xs text-muted-foreground/70 mt-0.5">
                            {exp.location}
                          </CardDescription>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <CardDescription className="mb-3 text-wrap leading-relaxed">
                          {exp.description}
                        </CardDescription>
                        {exp.highlights && (
                          <ul className="space-y-1.5 text-sm mb-4 text-muted-foreground">
                            {exp.highlights.map((highlight, index) => (
                              <li key={index} className="flex gap-2">
                                <span className="text-primary mt-1.5 size-1 rounded-full bg-primary shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        <CardFooter className="flex flex-wrap gap-1.5 mt-2 px-0">
                          {exp.techs.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="px-2.5 py-1 text-xs font-medium bg-muted/60"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </CardFooter>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "company" && (
              <div className="mt-10">
                {companyProjects.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {companyProjects.map((project) => {
                      const metadata = getProjectMetadata(project);
                      return (
                        <MotionCard
                          key={project.name}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          whileHover={{ y: -4 }}
                          className="rounded-2xl border-border/60 hover:border-primary/30 flex flex-col transition-colors duration-300"
                          data-project-name={project.name}
                          data-project-title={metadata.title}
                          data-project-description={metadata.description}
                        >
                        {/* ---------- Header ---------- */}
                        <CardHeader>
                          <CardTitle className="text-base font-semibold">
                            {project.name}
                          </CardTitle>

                          <CardDescription className="text-sm flex flex-wrap items-center gap-1.5 mt-1">
                            {project.company && (
                              <>
                                <span className="font-medium text-foreground">
                                  {project.company}
                                </span>
                                <span className="text-border">•</span>
                              </>
                            )}
                            {project.client && (
                              <>
                                <span className="text-muted-foreground text-xs">for {project.client}</span>
                                <span className="text-border">•</span>
                              </>
                            )}
                            <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-primary/10 text-primary">
                              {project.role}
                            </span>
                          </CardDescription>
                        </CardHeader>

                        {/* ---------- Content ---------- */}
                        <CardContent className="space-y-4 text-sm">
                          <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>

                          {/* Technologies */}
                          <div>
                            <p className="font-medium mb-1.5 text-xs uppercase tracking-wide text-muted-foreground">Tech Stack</p>
                            <ul className="flex flex-wrap gap-1.5">
                              {project.technologies.map((tech) => (
                                <li
                                  key={tech}
                                  className="rounded-md bg-muted/60 px-2 py-0.5 text-xs font-medium"
                                >
                                  {tech}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Integrations */}
                          {project.integrations && (
                            <div>
                              <p className="font-medium mb-1.5 text-xs uppercase tracking-wide text-muted-foreground">Integrations</p>
                              <ul className="list-disc pl-4 text-muted-foreground space-y-0.5">
                                {project.integrations.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Responsibilities */}
                          <div>
                            <p className="font-medium mb-1.5 text-xs uppercase tracking-wide text-muted-foreground">Responsibilities</p>
                            <ul className="list-disc pl-4 text-muted-foreground space-y-0.5">
                              {project.responsibilities
                                .slice(0, 3)
                                .map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                            </ul>
                          </div>

                          {/* Features */}
                          {project.features && (
                            <div>
                              <p className="font-medium mb-1.5 text-xs uppercase tracking-wide text-muted-foreground">Key Features</p>
                              <ul className="list-disc pl-4 text-muted-foreground space-y-0.5">
                                {project.features.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Tools */}
                          {project.tools && (
                            <div>
                              <p className="font-medium mb-1.5 text-xs uppercase tracking-wide text-muted-foreground">Tools</p>
                              <ul className="flex flex-wrap gap-1.5">
                                {project.tools.map((tool) => (
                                  <li
                                    key={tool}
                                    className="rounded-md bg-muted/60 px-2 py-0.5 text-xs font-medium"
                                  >
                                    {tool}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Impact */}
                          {project.impact && (
                            <div className="text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 rounded-lg border-l-2 border-emerald-500/40 pl-2.5 py-2">
                              {project.impact}
                            </div>
                          )}
                        </CardContent>

                        {/* ---------- Footer ---------- */}
                        <CardFooter className="mt-auto">
                          <StatusBadge status={project.status} />

                          {project.link && (
                            <CardAction className="ml-auto">
                              <Button asChild variant="outline" size="sm">
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  View
                                </a>
                              </Button>
                            </CardAction>
                          )}
                        </CardFooter>
                      </MotionCard>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground py-12">
                    No company projects available at the moment.
                  </div>
                )}
              </div>
            )}

            {activeTab === "personal" && (
              <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {projects.map((project) => {
                    const metadata = getProjectMetadata(project);
                    return (
                      <MotionCard
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        whileHover={{ y: -4 }}
                        key={project.name}
                        className="rounded-2xl border-border/60 hover:border-primary/30 flex flex-col transition-colors duration-300"
                        data-project-name={project.name}
                        data-project-title={metadata.title}
                        data-project-description={metadata.description}
                      >
                      <CardHeader>
                        <CardTitle className="text-base font-semibold">
                          {project.name}
                        </CardTitle>

                        <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <ul className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <li
                              key={tech}
                              className="rounded-md bg-muted/60 px-2 py-0.5 text-xs font-medium"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter className="mt-auto">
                        <StatusBadge status={project.status} />

                        {project.link && (
                          <CardAction className="ml-auto">
                            <Button asChild variant={"outline"} size={"sm"}>
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="no-underline text-sm font-medium"
                              >
                                View
                              </a>
                            </Button>
                          </CardAction>
                        )}
                      </CardFooter>
                    </MotionCard>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Projects;

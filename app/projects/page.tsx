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
import { useMemo, useState } from "react";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
  client: string;
  role: string;
  responsibilities: string[];
  integrations?: string[];
  tools?: string[];
  impact?: string;
  link?: string;
}
export const companyProjects: CompanyProject[] = [
  {
    name: "LinkCode LMS & Admin Portal",
    category: "company",
    client: "LinkCode Technologies, Pune",
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
    name: "Sadhguru Tiles & Marbles – Digital Catalog Platform",
    category: "company",
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
    status: "inprogress",
    type: "fullstack",
    link: "https://karlo.momin-mohasin.me/",
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
    status: "inprogress",
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
    status: "inprogress",
  },
];

const MotionCard = motion(Card);
type ProjectTab = "all" | "company" | "personal";
const Projects = () => {
  const [activeTab, setActiveTab] = useState<ProjectTab>("company");

  const tabs: { title: string; value: ProjectTab }[] = [
    // { title: "All", value: "all" },
    { title: "Company & Clients", value: "company" },
    { title: "Personal", value: "personal" },
  ];

  return (
    <>
      <section className="w-full font-mono mt-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-6xl px-4 md:px-6 py-8 md:py-12"
        >
          <motion.h1
            variants={item}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8"
          >
            Projects
          </motion.h1>
          <div className="w-full justify-center items-center">
            <InlineTabs
              tabs={tabs}
              activeTab={activeTab}
              onChange={setActiveTab}
            />

            {/* {activeTab === "company" && (
              <div className=" mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {companyProjects.map((project) => (
                    <MotionCard
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      key={project.name}
                      className="rounded-lg border shadow-sm"
                    >
                      <CardHeader>
                        <CardTitle className="text-lg font-bold">
                          {project.name}
                        </CardTitle>

                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5">
                          {project.technologies.map((tech) => (
                            <li key={tech}>{tech}</li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
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
                  ))}
                  {companyProjects.length === 0 && (
                    <div className="col-span-3 text-center text-muted-foreground">
                      No company projects available at the moment. Please check
                      back later.
                    </div>
                  )}
                </div>
              </div>
            )} */}
            {activeTab === "company" && (
              <div className="mt-6">
                {companyProjects.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {companyProjects.map((project) => (
                      <MotionCard
                        key={project.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        whileHover={{ scale: 1.03 }}
                        className="rounded-lg border shadow-sm flex flex-col"
                      >
                        {/* ---------- Header ---------- */}
                        <CardHeader>
                          <CardTitle className="text-lg font-bold">
                            {project.name}
                          </CardTitle>

                          <CardDescription className="text-sm">
                            <span className="font-medium text-foreground">
                              {project.client}
                            </span>
                            <span className="text-muted-foreground"> • </span>

                            <span
                              className="
      text-xs font-medium
      px-2 py-0.5 rounded-md
      bg-sky-500/10 text-sky-700
      dark:bg-sky-400/10 dark:text-sky-300
      backdrop-blur
      ring-1 ring-sky-500/20
    "
                            >
                              {project.role}
                            </span>
                          </CardDescription>
                        </CardHeader>

                        {/* ---------- Content ---------- */}
                        <CardContent className="space-y-4 text-sm">
                          <p className="text-muted-foreground">
                            {project.description}
                          </p>

                          {/* Technologies */}
                          <div>
                            <p className="font-medium mb-1">Tech Stack</p>
                            <ul className="flex flex-wrap gap-1">
                              {project.technologies.map((tech) => (
                                <li
                                  key={tech}
                                  className="rounded bg-muted px-2 py-0.5 text-xs"
                                >
                                  {tech}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Integrations */}
                          {project.integrations && (
                            <div>
                              <p className="font-medium mb-1">Integrations</p>
                              <ul className="list-disc pl-5 text-muted-foreground">
                                {project.integrations.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Responsibilities */}
                          <div>
                            <p className="font-medium mb-1">Responsibilities</p>
                            <ul className="list-disc pl-5 text-muted-foreground">
                              {project.responsibilities
                                .slice(0, 3)
                                .map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                            </ul>
                          </div>

                          {/* Impact */}
                          {project.impact && (
                            <div className="text-xs text-emerald-600 dark:text-emerald-400">
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
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground py-12">
                    No company projects available at the moment.
                  </div>
                )}
              </div>
            )}

            {activeTab === "personal" && (
              <div className=" mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <MotionCard
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      key={project.name}
                      className="rounded-lg border shadow-sm"
                    >
                      <CardHeader>
                        <CardTitle className="text-lg font-bold">
                          {project.name}
                        </CardTitle>

                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5">
                          {project.technologies.map((tech) => (
                            <li key={tech}>{tech}</li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
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
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                key={project.name}
                className="rounded-lg border shadow-sm"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-bold">
                    {project.name}
                  </CardTitle>

                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5">
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
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
            ))}
          </div> */}
        </motion.div>
      </section>
    </>
  );
};

export default Projects;

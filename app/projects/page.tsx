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

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MotionCard = motion(Card);

const Projects = () => {
  const projects = [
    {
      name: "KarLo",
      description:
        "KarLo is a location-based To-Do reminder platform that helps users create and manage tasks with geolocation triggers. The app sends notifications when users are near predefined locations.",
      technologies: ["React.js", "FastAPI", "MongoDB", "Google Maps API"],
      status: "inProgress",
      link: "https://kar-lo-frontend.vercel.app/",
    },
    {
      name: "Sad Guru Tiles",
      description:
        "A professional business website built for a tiles company, showcasing products and services with a modern responsive design.",
      technologies: ["Next.js", "TailwindCSS"],
      status: "complete",
      link: "https://sg-tiles.vercel.app/",
    },
    {
      name: "Scroll Screen Blocker (Android)",
      description:
        "StopScroll: An Android app to block addictive content like Reels and Shorts, empowering users to regain control over screen time with content blocking, usage tracking, and customizable controls.",
      technologies: ["Android", "Java", "Firebase"],
      status: "published",
      link: "https://play.google.com/store/apps/details?id=com.uma.scrollblock&pli=1",
    },
    {
      name: "Note App (Python)",
      description:
        "A simple and efficient note-taking application built with Python Flask framework for managing notes with CRUD functionality.",
      technologies: ["Python", "Flask", "SQLite", "HTML", "CSS"],
      status: "complete",
    },
    {
      name: "Tasky",
      description:
        "Tasky is a basic task management application built with Django, featuring user authentication, task creation, updates, and deletion. It allows users to manage their profiles and stay organized.",
      technologies: [
        "Django",
        "SQLite",
        "Bootstrap",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      status: "complete",
    },

    {
      name: "MBook - Audiobook App",
      description:
        "An Android app for audiobook lovers, providing browsing, listening, offline mode, bookmarks, and progress tracking. Designed for commuters and self-learners who prefer audio content.",
      technologies: ["Android", "Java", "Firebase"],
      status: "complete",
    },
    {
      name: "Mtask - Task Management System",
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
      status: "complete",
    },
    {
      name: "MCrouchet",
      description:
        "An e-commerce Android application for crochet enthusiasts. Features include product browsing, secure login, cart, payment gateway, and an admin panel for managing content and orders.",
      technologies: ["Android", "Java", "Firebase"],
      status: "complete",
    },
    {
      name: "MTimer",
      description:
        "A simple Android timer app with background functionality, customizable alerts, and notifications for time-sensitive tasks. Supports multiple timers and runs even when the app is closed.",
      technologies: ["Android", "Java", "Firebase"],
      status: "complete",
    },
    {
      name: "Recipe Finder",
      description:
        "An Android app that helps users discover recipes using Gemini API. Built in Java, it allows searching and exploring a variety of recipes with ease.",
      technologies: ["Android", "Java", "Firebase", "Gemini API"],
      status: "inProgress",
    },
    {
      name: "Mtube",
      description:
        "A React.js web application that integrates with the YouTube API to allow users to search, browse, and watch videos in a modern UI.",
      technologies: ["React.js", "YouTube API"],
      status: "complete",
    },
    {
      name: "MNovels",
      description:
        "An Android app built in Java for reading novels and books with a clean and user-friendly interface for book lovers.",
      technologies: ["Android", "Java", "Firebase"],
      status: "inProgress",
    },
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
            Experience
          </motion.h1>
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
                  <span className="text-sm text-muted-foreground">
                    Status:{" "}
                    {project?.status}{" "}
                    <span
                      className={`w-2 h-2 rounded-full inline-block ${
                        ["complete", "published"].includes(project?.status)
                          ? "bg-emerald-500"
                          : "bg-amber-500"
                      }`}
                    />
                  </span>
                  {project.link && (
                    <CardAction className="ml-auto">
                      <Button asChild variant={"default"} size={"sm"}>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="no-underline text-sm font-medium"
                        >
                          View Project
                        </a>
                      </Button>
                    </CardAction>
                  )}
                </CardFooter>
              </MotionCard>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Projects;

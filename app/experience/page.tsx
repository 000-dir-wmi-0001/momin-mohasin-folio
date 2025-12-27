"use client";
// import Skills from "@/components/Skills";
import React from "react";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function getDuration(from: string, to?: string) {
  const start = new Date(from);
  const end = to ? new Date(to) : new Date();

  // Normalize both dates to first day of month
  const startYear = start.getFullYear();
  const startMonth = start.getMonth();

  const endYear = end.getFullYear();
  const endMonth = end.getMonth();

  // Inclusive month calculation
  let totalMonths =
    (endYear - startYear) * 12 +
    (endMonth - startMonth) +
    1; // 👈 include current month

  if (totalMonths < 1) totalMonths = 1;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years > 0 && months > 0) {
    return `${years} yr ${months} mo`;
  }

  if (years > 0) return `${years} yr`;
  return `${months} mo`;
}


const experiences = [
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
];

const Experience = () => {
  return (
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

        <div className="flex flex-col gap-8">
          {experiences.map((exp) => (
            <Card
              key={exp.company}
              className="rounded-xl border shadow-sm backdrop-blur bg-white/60 dark:bg-zinc-900/50"
            >
              <CardHeader className="flex gap-4">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={56}
                  height={56}
                  className="rounded-md object-cover"
                />

                <div className="flex flex-col">
                  <CardTitle className="font-bold text-xl">
                    {exp.role}
                  </CardTitle>

                  <CardDescription className="text-sm text-muted-foreground">
                    {exp.company} · {exp.period}
                    <span className="mx-1">·</span>
                    <span className="font-medium text-foreground/80">
                      ({getDuration(exp.startDate, exp.endDate)})
                    </span>
                  </CardDescription>

                  <CardDescription className="text-xs text-muted-foreground/80 mt-1">
                    {exp.location}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent>
                <CardDescription className="mb-2 text-wrap">
                  {exp.description}
                </CardDescription>
                {exp.highlights && (
                  <ul className="list-disc pl-5 text-sm mb-2">
                    {exp.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                )}
                <CardFooter className="flex flex-wrap gap-2 mt-2">
                  {exp.techs.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="px-3 py-1 text-sm hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
      {/* <Skills /> */}
    </section>
  );
};

export default Experience;

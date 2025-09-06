"use client";
import Skills from "@/components/Skills";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const experiences = [
  {
    company: "Brilliantech Software Pvt Ltd",
    logo: "/bt.png",
    role: "Full-Stack Developer",
    period: "Jul 2025 – Present",
    location: "Pune, Maharashtra, India",
    techs: ["MERN Stack","MEAN Stack","React", "Next.js", "Node.js",  "REST APIs","Django", "FastAPI",],
    description:
      "Working on full-stack development projects using MERN stack and other modern technologies, delivering scalable and responsive web applications.",
  },
  {
    company: "TECHONSY Software Pvt Ltd",
    logo: "/ts.png",
    role: "Software Engineer",
    period: "Jan 2025 – Jun 2025",
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
          {experiences.map((exp)=>(
            <Card key={exp.company} className="rounded-xl border shadow-sm backdrop-blur bg-white/60 dark:bg-zinc-900/50">
              <CardHeader className="flex items-center gap-4 mb-4">
                {/* <Avatar>
                  <AvatarImage src={exp.logo} />
                  <AvatarFallback>{exp.company.charAt (0)}</AvatarFallback>
                </Avatar> */}
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={60}
                  height={60}
                  className="object-cover"
                />
                <CardTitle className="font-bold text-xl">{exp.role}

                <CardDescription className="text-sm text-muted-foreground">
                  {exp.company} · {exp.period} · {exp.location}
                </CardDescription>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-2 text-wrap">{exp.description}</CardDescription>
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

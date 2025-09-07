"use client";
import Link from "next/link";
import { motion, Variants } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


const MotionButton = motion(Button);
const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Individual child variant
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const About = () => {
  const skills = [
    // Frameworks
    "Next.js",
    "Angular",
    "Node.js",
    "Express.js",
    "NestJS",
    "Django",
    "Django REST Framework",
    "Django Ninja",
    "FastAPI",

    // Libraries
    "React",
    "Framer Motion",
    "Shadcn UI",
    "Lucide Icons",
    "TailwindCSS",
    "Bootstrap",

    // Languages
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "PHP",

    // Databases
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "SQLite",
    "Prisma",
    "SQLAlchemy",
    "Mongoose",
    "Sequelize",

    // Tools / DevOps
    "Git",
    "GitHub",
    "Linux",
    // "Docker",
    // "CI/CD (GitHub Actions / GitLab CI)",

    // Authentication / Security
    "JWT",
    "OAuth 2.0",
    "Role-Based Access Control (RBAC)",

    // Others / Advanced
    "WebRTC",
    "WebSockets",
    // "Redis",
    // "Kafka",
  ];

  return (
    <section className="w-full font-mono">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-6xl px-4 md:px-6 py-8 md:py-12"
      >
        {/* Title */}
        <motion.h1
          variants={item}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8"
        >
          About Me
        </motion.h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left: Profile Card */}
          <motion.aside
            variants={item}
            className="md:col-span-1 rounded-xl border shadow-sm backdrop-blur bg-white/60 dark:bg-zinc-900/50 p-5 sticky md:top-24"
          >
            <div className="flex flex-col items-center text-center gap-3">
              <Avatar className="size-24 shadow-md">
                <AvatarImage src="/momin.jpg" alt="Momin Mohasin" />
                <AvatarFallback>MM</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-xl font-bold">Momin Mohasin</p>
                <p className="text-sm text-muted-foreground">
                  Full-Stack Developer
                </p>
              </div>

              <div className="flex gap-2 mt-2">
                <MotionButton className="cursor-pointer" variants={buttonVariants} initial="hidden" whileHover="whileHover" whileTap="whileTap" asChild size="sm">
                  <a
                    className="no-underline flex items-center gap-2"
                    href="/resume.pdf"
                    download="Momin_Mohasin_Resume.pdf"
                  >
                    Resume
                  </a>
                </MotionButton>
                <MotionButton className="cursor-pointer" variants={buttonVariants} variant={'outline'} initial="hidden" whileHover="whileHover" whileTap="whileTap" asChild size="sm">
                  <Link href="/contact">Contact</Link>
                </MotionButton>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-6">
              <p className="text-sm font-semibold mb-3">Skills</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <Badge
                    key={s}
                    variant="secondary"
                    className="px-3 py-1 text-sm hover:scale-105 transition-transform duration-200"
                  >
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Right: Story */}
          <div className="md:col-span-2 space-y-5">
            <motion.div
              variants={item}
              className="rounded-xl border shadow-sm p-5 backdrop-blur bg-white/60 dark:bg-zinc-900/50"
            >
              <p className="text-base md:text-lg text-center md:text-left leading-relaxed max-w-prose mx-auto md:mx-0">
                Hi, I’m Momin Mohasin, a passionate Full-Stack Developer who
                enjoys turning ideas into scalable and modern web applications.
                I specialize in building with React, Next.js, Node.js, Django,
                and FastAPI, and I love learning new technologies to stay ahead.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="rounded-xl border shadow-sm p-5 backdrop-blur bg-white/60 dark:bg-zinc-900/50"
            >
              <p className="text-base md:text-lg text-center md:text-left leading-relaxed max-w-prose mx-auto md:mx-0">
                I’m currently working at Brilliantech Software Pvt Ltd as a
                Full-Stack Developer. My immediate career goal is to keep
                growing my expertise and achieve a ₹12 LPA role, while
                contributing to impactful projects that solve real problems.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="rounded-xl border shadow-sm p-5 backdrop-blur bg-white/60 dark:bg-zinc-900/50"
            >
              <p className="text-base md:text-lg text-center md:text-left leading-relaxed max-w-prose mx-auto md:mx-0">
                Beyond coding, I’m a tech enthusiast who enjoys experimenting
                with new stacks and building side projects like live-streaming
                platforms, AR try-on apps, and real-time chat systems.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.ul
              variants={item}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {[
                { label: "Years Experience", value: "1+" },
                { label: "Projects", value: "15+" },
                { label: "Companies", value: "2" },
              ].map((stat) => (
                <li
                  key={stat.label}
                  className="rounded-lg border p-4 text-center bg-white/60 dark:bg-zinc-900/50"
                >
                  <p className="text-2xl font-extrabold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

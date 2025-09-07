"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import { useTheme } from "next-themes";
import { ArrowRight, FileDown } from "lucide-react";
import Link from "next/link";

const MotionImage = motion(Image);
const MotionButton = motion(Button);

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Hero = () => {
  // const { theme, systemTheme } = useTheme();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full max-w-6xl mx-auto px-5 m-5 flex flex-col md:flex-row items-center md:items-start justify-between lg:mt-10 gap-6 md:gap-10 mb-4"
    >
      {/* Theme Emoji */}
      {/* <motion.p
        variants={item}
        className="absolute top-4 right-4 text-2xl select-none rotate-20"
        aria-label="Theme indicator"
      >
        {currentTheme === "dark" ? "🤍" : "🖤"}
      </motion.p> */}

      {/* Hero Image */}
      <MotionImage
        src="/momin.jpg"
        alt="Momin Mohasin portrait"
        width={360}
        height={360}
        priority
        quality={100}
        sizes="(min-width: 768px) 360px, 60vw"
        className="rounded-xl object-cover w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-90 lg:h-90 mb-6 md:mb-0"
        draggable={false}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        variants={item}
      />

      {/* Hero Text */}
      <div className="text-center md:text-left max-w-2xl mt-2 md:mt-0">
        <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold">
          Hi, I&apos;m Momin
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-lg font-medium text-muted-foreground"
        >
          Full-Stack Developer | Tech Enthusiast
        </motion.h2>

        <motion.p
          variants={item}
          className="text-sm md:text-base px-2 md:px-0 leading-relaxed text-muted-foreground"
        >
          I build modern, scalable web applications with React, Next.js,
          Node.js, Django, and more. Currently working at Brilliantech Software
          Pvt Ltd, passionate about impactful solutions.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center md:justify-start gap-3 mt-4"
        >
          <MotionButton
            asChild
            variant="default"
            className="cursor-pointer gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring" }}
          >
            <Link href="/projects" className="flex items-center gap-2">
              View My Work <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionButton>

          <MotionButton
            asChild
            variant="outline"
            className="cursor-pointer gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring" }}
          >
            <a
              className="no-underline flex items-center gap-2"
              href="/resume.pdf"
              download="Momin_Mohasin_Resume.pdf"
            >
              <FileDown className="w-4 h-4" /> Download Resume
            </a>
          </MotionButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;

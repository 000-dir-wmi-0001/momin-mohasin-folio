"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileDown, Sparkles } from "lucide-react";
import Link from "next/link";

const MotionImage = motion(Image);
const MotionButton = motion(Button);

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }, // Reduced stagger and added small delay
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 }, // Reduced y offset
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }, // Reduced duration
  },
};

const Hero = () => {
  return (
    <motion.div
      // variants={container}
      initial={false}
      animate="visible"
      className="relative w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-12 lg:py-20"
      style={{ contain: 'layout style paint' }} // CSS containment for better performance
    >
      {/* Simplified Background Elements - Reduced complexity for better LCP */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-16 md:-left-32 w-32 h-32 md:w-64 md:h-64 bg-primary/2 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 -right-16 md:-right-32 w-32 h-32 md:w-64 md:h-64 bg-secondary/2 rounded-full blur-2xl" />

        {/* Simplified Grid Pattern - Reduced opacity and complexity */}
        <div className="absolute inset-0 opacity-[0.005] bg-[linear-gradient(45deg,#000_1px,transparent_1px),linear-gradient(-45deg,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 text-center lg:text-left max-w-4xl">
        {/* Enhanced Badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-6 py-3 mb-10 text-sm font-semibold text-primary bg-primary/8 rounded-full border border-primary/15 backdrop-blur-sm shadow-lg"
        >
          <Sparkles className="w-4 h-4 animate-pulse" />
          Welcome to my portfolio ✨
        </motion.div>

        {/* Main Heading */}
        {/* <motion.h1
          variants={item}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
        > */}
<h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">

          Hi, I&apos;m{" "}
          <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Momin Mohasin
          </span>
        </h1>
        {/* </motion.h1> */}

        {/* Subtitle */}
        <motion.h2
          variants={item}
          className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-8 leading-relaxed font-light"
        >
          Full-Stack Developer & Tech Enthusiast
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto lg:mx-0 leading-relaxed mb-10 font-light"
        >
          I build modern, scalable web applications with React, Next.js, Node.js, Django, and FastAPI.
          Currently working at Brilliantech Software Pvt Ltd, passionate about creating impactful digital solutions.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
        >
          <MotionButton
            asChild
            size="lg"
            className="group px-10 py-5 text-lg font-semibold gap-3 bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 rounded-2xl transform hover:scale-105"
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/projects" className="flex items-center gap-3">
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </MotionButton>

          <MotionButton
            asChild
            variant="outline"
            size="lg"
            className="group px-10 py-5 text-lg font-semibold gap-3 border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 rounded-2xl backdrop-blur-sm transform hover:scale-105"
            whileTap={{ scale: 0.98 }}
          >
            <a
              href="/resume.pdf"
              download="Momin_Mohasin_Resume.pdf"
              className="flex items-center gap-3"
            >
              <FileDown className="w-5 h-5" />
              Download Resume
            </a>
          </MotionButton>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        variants={item}
        className="relative z-10 shrink-0"
      >
        <div className="relative bg-white rounded-full">
          {/* Subtle Image Glow */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-2xl scale-110 animate-pulse opacity-60" />

          <MotionImage
            src="/momin.jpg"
            alt="Momin Mohasin portrait"
            width={240}
            height={240}
            priority
            quality={75}
            sizes="(min-width: 1024px) 240px, (min-width: 768px) 192px, 160px"
            className="relative rounded-full object-cover w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 shadow-2xl backdrop-blur-sm"
            style={{ mixBlendMode: 'darken' }}
            draggable={false}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
          />

          {/* Subtle Floating Elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-4 -right-4 w-8 h-8 bg-primary/15 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/15 rounded-full blur-sm"
          />


        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;

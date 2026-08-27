"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileDown, Sparkles } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/lib/portfolio-data";

const MotionImage = motion.create(Image);
const MotionButton = motion.create(Button);

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

interface HeroProps {
  /** Dynamically computed total experience (e.g. "1.5+"), from a Server Component. */
  experienceValue?: string;
}

const Hero = ({ experienceValue }: HeroProps) => {
  const stats = [
    { value: experienceValue ?? portfolioData.stats.experience.value, label: "Years Exp." },
    { value: portfolioData.stats.projects.value, label: "Projects" },
    { value: portfolioData.stats.companies.value, label: "Companies" },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative w-full max-w-7xl mx-auto px-4 md:px-6 py-20 lg:py-28"
      style={{ contain: "layout style paint" }}
    >
      {/* Technical backdrop: faint dot grid + single soft glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(var(--foreground) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 50% 40%, black 40%, transparent 100%)",
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-xl h-96 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">
        {/* Content */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground bg-muted/50 rounded-full border border-border/70"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Welcome to my portfolio
          </motion.div>

          <h1 className="mb-6">
            <motion.span
              variants={item}
              className="block text-xs md:text-sm font-mono font-medium tracking-[0.2em] text-muted-foreground uppercase mb-3"
            >
              Hi, I&apos;m
            </motion.span>

            <span className="sr-only">Momin Mohasin</span>
            <motion.span
              aria-hidden="true"
              variants={item}
              className="block text-6xl sm:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.95] tracking-tighter mb-4"
            >
              Momin
              <br />
              Mohasin
            </motion.span>

            <motion.span
              variants={item}
              className="block text-lg md:text-xl font-semibold text-muted-foreground"
            >
              AI &amp; Full-Stack Software Engineer
            </motion.span>
          </h1>

          <motion.p
            variants={item}
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
          >
            I build scalable production applications with React, Next.js,
            NestJS, and FastAPI, with hands-on experience building AI/LLM-powered
            features using RAG and LangChain. Currently working at Brilliantech
            Software Pvt Ltd, passionate about creating impactful digital
            solutions.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            variants={item}
            className="flex items-center justify-center lg:justify-start gap-6 mb-10"
          >
            {stats.map((stat, i) => (
              <React.Fragment key={stat.label}>
                {i > 0 && <div className="h-8 w-px bg-border" />}
                <div>
                  <p className="text-2xl font-bold tabular-nums leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </React.Fragment>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <MotionButton
              asChild
              size="lg"
              className="group px-7 gap-2.5 shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/projects" className="flex items-center gap-2.5">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </MotionButton>

            <MotionButton
              asChild
              variant="outline"
              size="lg"
              className="group px-7 gap-2.5"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="/resume.pdf"
                download="Momin_Mohasin_Resume.pdf"
                className="flex items-center gap-2.5"
              >
                <FileDown className="w-4 h-4" />
                Download Resume
              </a>
            </MotionButton>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          variants={item}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Offset panel behind the photo */}
            <div className="absolute -inset-3 translate-x-3 translate-y-3 rounded-4xl border border-border/70 hidden sm:block" />

            {/* Photo frame */}
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 rounded-4xl overflow-hidden ring-1 ring-border shadow-2xl bg-muted">
              <MotionImage
                src="/momin.jpg"
                alt="Momin Mohasin - AI & Full-Stack Software Engineer specializing in React, Next.js, NestJS, FastAPI, and LLM integration"
                fill
                priority
                quality={75}
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 288px, 256px"
                className="object-cover"
                draggable={false}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              />

              {/* Corner brackets */}
              <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-background/70" />
              <span className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-background/70" />
              <span className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-background/70" />
              <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-background/70" />
            </div>

            {/* Floating status badge */}
            <div className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2.5">
                <span className="relative flex size-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <div>
                  <p className="text-xs font-semibold leading-tight">
                    Open to opportunities
                  </p>
                  <p className="text-[11px] text-muted-foreground leading-tight">
                    Pune, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default React.memo(Hero);

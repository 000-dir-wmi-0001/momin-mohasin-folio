"use client";

import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroSectionProps {
  name: string;
  title: string;
  tagline?: string;
  description: string;
  avatar: string;
  resumeUrl: string;
  showButtons?: boolean;
  variant?: "home" | "about";
}

export const HeroSection = ({
  name,
  title,
  tagline,
  description,
  avatar,
  resumeUrl,
  showButtons = true,
  variant = "home"
}: HeroSectionProps) => {
  const isAbout = variant === "about";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`text-center ${isAbout ? 'mb-12' : ''}`}
    >
      <div className={`flex flex-col ${isAbout ? 'md:flex-row' : ''} items-center justify-center gap-8 ${isAbout ? 'mb-8' : ''}`}>
        <Avatar className={`shadow-lg ring-4 ring-primary/20 ${isAbout ? 'size-32 md:size-40' : 'size-32'}`}>
          <AvatarImage src={avatar} alt={`${name} portrait`} />
          <AvatarFallback className={isAbout ? "text-2xl" : ""}>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className={`text-center ${isAbout ? 'md:text-left' : ''}`}>
          <h1 className={`font-extrabold mb-2 ${isAbout ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-4xl md:text-5xl'}`}>
            {isAbout ? `Hi, I'm ${name.split(' ')[0]}` : `Hi, I'm ${name.split(' ')[0]}`}
          </h1>
          <p className={`text-muted-foreground mb-4 ${isAbout ? 'text-xl md:text-2xl' : 'text-xl'}`}>
            {title} {tagline && `| ${tagline}`}
          </p>
          <p className={`text-muted-foreground max-w-2xl ${isAbout ? 'text-lg' : ''}`}>
            {description}
          </p>
          {showButtons && (
            <div className={`flex flex-wrap justify-center ${isAbout ? 'md:justify-start' : ''} gap-3 mt-6`}>
              <Button asChild>
                <a
                  className="no-underline flex items-center gap-2"
                  href={resumeUrl}
                  download={`${name.replace(' ', '_')}_Resume.pdf`}
                >
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
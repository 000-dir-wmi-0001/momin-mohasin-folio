"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { Code2, Server, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const MotionCard = motion(Card);


const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc:
        "Building modern, responsive, and scalable web applications using React, Next.js, Node.js, Django, and FastAPI.",
      Icon: Code2,
    },
    {
      title: "Backend & APIs",
      desc:
        "Designing RESTful APIs, real-time WebSocket services, and scalable backend systems with Node.js, Django, and FastAPI.",
      Icon: Server,
    },
    {
      title: "Innovations",
      desc:
        "Building innovative side projects like KarLo, a location-based To-Do reminder platform, and more.",
      Icon: Sparkles,
    },
  ];

  return (
    <section className="w-full font-mono">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-6xl px-4 md:px-6"
      >
        <motion.h2
          variants={item}
          className="text-2xl md:text-3xl font-extrabold text-center mb-6"
        >
          Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map(({ title, desc, Icon }, i) => (
            <motion.div
              key={title}
              variants={item}
              transition={{ delay: i * 0.05, type: "spring" }}
            >
              <MotionCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur bg-white/60 dark:bg-zinc-900/50 hover:bg-primary/5 transition-colors">
                <CardHeader className="flex flex-row items-start gap-3">
                  <span className="rounded-md border p-2 bg-white/60 dark:bg-zinc-900/40">
                    <Icon className="w-5 h-5 text-primary" />
                  </span>
                  <div>
                    <CardTitle className="text-lg">{title}</CardTitle>
                    <CardDescription className="mt-1">{desc}</CardDescription>
                  </div>
                </CardHeader>
                <CardFooter>
                  <Button asChild size="sm" variant="ghost">
                    <Link href="/contact">Work with me</Link>
                  </Button>
                </CardFooter>
              </MotionCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;

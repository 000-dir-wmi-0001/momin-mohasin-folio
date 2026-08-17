"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { Code2, Server, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

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
      title: "AI & LLM Integration",
      desc:
        "Building AI/LLM-powered features and applications using RAG, LangChain, embeddings, and vector search integrated with Node.js and Python backends.",
      Icon: BrainCircuit,
    },
  ];

  return (
    <section className="w-full">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-4xl px-4 md:px-6"
      >
        <motion.h3
          variants={item}
          className="text-sm font-semibold uppercase tracking-wide text-muted-foreground text-center mb-8"
        >
          Services
        </motion.h3>

        <div className="rounded-2xl border border-border/60 bg-card divide-y divide-border/60 overflow-hidden">
          {services.map(({ title, desc, Icon }, i) => (
            <motion.div
              key={title}
              variants={item}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 md:p-7 transition-colors duration-300 hover:bg-muted/30"
            >
              <span className="text-xs font-mono text-muted-foreground/70 tracking-widest shrink-0 sm:w-8">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="rounded-lg bg-muted/60 p-2.5 shrink-0 transition-colors duration-300 group-hover:bg-primary/10">
                <Icon className="w-5 h-5 text-primary" />
              </span>

              <div className="flex-1">
                <h4 className="text-base font-semibold">{title}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>

              <Button
                asChild
                size="sm"
                variant="ghost"
                className="shrink-0 text-muted-foreground hover:text-primary sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
              >
                <Link href="/contact">Work with me →</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;

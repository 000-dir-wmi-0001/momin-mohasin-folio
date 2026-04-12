"use client";

import { motion } from "motion/react";
import { portfolioData } from "@/lib/portfolio-data";
import { Code, Wrench, Rocket } from "lucide-react";

const iconMap = {
  Code,
  Wrench,
  Rocket,
};

export function HighlightsSection() {
  const highlights = Object.values(portfolioData.highlights);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {highlights.map((highlight, index) => {
        const IconComponent = iconMap[highlight.icon as keyof typeof iconMap] || Code;

        return (
          <motion.div
            key={highlight.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
            className="group"
          >
            <div className="p-6 rounded-3xl border border-border/30 bg-card/70 backdrop-blur-md hover:bg-card/85 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/8 transition-all duration-500 group-hover:-translate-y-4">
              <div className="text-center">
                <div className="inline-flex p-3 rounded-2xl bg-linear-to-br from-primary/6 via-secondary/6 to-accent/6 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <IconComponent className={`w-7 h-7 ${highlight.color} drop-shadow-sm`} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                  {highlight.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/80 transition-colors duration-300 font-light">
                  {highlight.description}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
      {highlights.map((highlight, index) => {
        const IconComponent = iconMap[highlight.icon as keyof typeof iconMap] || Code;

        return (
          <motion.div
            key={highlight.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl border border-border/60 bg-card p-6 md:p-7 transition-colors duration-300 hover:border-primary/30"
          >
            {/* Corner bracket accent, revealed on hover */}
            <span className="absolute top-4 right-4 w-3 h-3 border-t border-r border-transparent group-hover:border-primary/50 transition-colors duration-300" />

            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono text-muted-foreground/70 tracking-widest">
                {String(index + 1).padStart(2, "0")}
              </span>
              <IconComponent className={`w-5 h-5 ${highlight.color}`} />
            </div>

            <h3 className="text-lg font-semibold mb-2.5 text-foreground">
              {highlight.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {highlight.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

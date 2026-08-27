"use client";

import React from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/lib/portfolio-data";
import { Briefcase, Rocket, Building2 } from "lucide-react";

const iconMap = {
  Briefcase,
  Rocket,
  Building2,
};

interface StatsSectionProps {
  /** Dynamically computed total experience (e.g. "1.5+"), from a Server Component. */
  experienceValue?: string;
}

export const StatsSection = React.memo(({ experienceValue }: StatsSectionProps) => {
  const { experience, ...restStats } = portfolioData.stats;
  const stats = [
    experienceValue ? { ...experience, value: experienceValue } : experience,
    ...Object.values(restStats),
  ];

  return (
    <div className="relative rounded-2xl border border-border/60 bg-card mb-16 md:mb-20 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
        {stats.map((stat, index) => {
          const IconComponent =
            iconMap[stat.icon as keyof typeof iconMap] || Briefcase;

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-80px" }}
              className="group relative p-7 md:p-8 transition-colors duration-300 hover:bg-muted/30"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-muted-foreground/70 tracking-widest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <IconComponent className={`w-5 h-5 ${stat.color}`} />
              </div>

              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight tabular-nums">
                {stat.value}
              </div>

              {/* Label */}
              <h3 className="text-sm font-semibold mb-2 text-foreground/90 uppercase tracking-wide">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-sm">
                {stat.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
});

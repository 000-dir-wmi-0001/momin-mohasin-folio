"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Code, Layers, Database, Wrench, Shield } from "lucide-react";

interface SkillCategory {
  icon: string;
  color: string;
  skills: string[];
}

interface SkillsShowcaseProps {
  skillCategories: Record<string, SkillCategory>;
  title?: string;
}

const iconMap = {
  Code,
  Layers,
  Database,
  Wrench,
  Shield,
};

export const SkillsShowcase = ({ skillCategories, title = "Technical Skills" }: SkillsShowcaseProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-linear-to-r from-foreground via-foreground/90 to-foreground bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {Object.entries(skillCategories).map(([category, categoryData], categoryIndex) => {
          const IconComponent = iconMap[categoryData.icon as keyof typeof iconMap] || Code;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group relative transform hover:scale-105 transition-transform duration-500"
            >
              {/* Enhanced Background Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700 scale-105 group-hover:scale-110 opacity-0 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-linear-to-br from-primary/8 to-secondary/8 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

              {/* Main Card */}
              <div className="relative p-8 rounded-2xl border border-border/40 bg-card/90 backdrop-blur-md hover:bg-card/95 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden">
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-transparent via-primary/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />

                {/* Category Header */}
                <div className="relative z-10 flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`p-3 rounded-xl bg-linear-to-br from-primary/10 via-secondary/10 to-accent/10 shadow-lg transform`}
                  >
                    <IconComponent className={`w-6 h-6 ${categoryData.color} drop-shadow-sm`} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {category}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {categoryData.skills.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="relative z-10 grid grid-cols-2 gap-3">
                  {categoryData.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="group/skill"
                    >
                      <Badge
                        variant="secondary"
                        className="w-full justify-center px-3 py-2 text-sm font-medium bg-muted/60 hover:bg-primary/10 hover:text-primary hover:border-primary/30 border border-border/50 transition-all duration-300 hover:shadow-md hover:shadow-primary/20 backdrop-blur-sm"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ animationDelay: '0.5s' }} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
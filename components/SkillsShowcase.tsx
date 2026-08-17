"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Code, Layers, Database, Wrench, Shield, Sparkles } from "lucide-react";

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
  Sparkles,
};

export const SkillsShowcase = ({
  skillCategories,
  title = "",
}: SkillsShowcaseProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-8"
    >
      {title && (
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 tracking-tight"
        >
          {title}
        </motion.h3>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {Object.entries(skillCategories).map(
          ([category, categoryData], categoryIndex) => {
            const IconComponent =
              iconMap[categoryData.icon as keyof typeof iconMap] || Code;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (categoryIndex % 3) * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-border/60 bg-card p-6 md:p-7 transition-colors duration-300 hover:border-primary/30"
              >
                {/* Corner bracket accent, revealed on hover */}
                <span className="absolute top-4 right-4 w-3 h-3 border-t border-r border-transparent group-hover:border-primary/50 transition-colors duration-300" />

                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="p-2.5 rounded-lg bg-muted/60 transition-colors duration-300 group-hover:bg-primary/10">
                    <IconComponent
                      className={`w-5 h-5 ${categoryData.color}`}
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-foreground">
                      {category}
                    </h4>
                    <p className="text-xs font-mono text-muted-foreground">
                      {categoryData.skills.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2">
                  {categoryData.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-2.5 py-1 text-xs font-medium bg-muted/60 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/30 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </motion.div>
  );
};

"use client";

import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
  description?: string;
  size?: "sm" | "lg";
}

export const StatsCard = ({
  label,
  value,
  icon: Icon,
  color,
  description,
  size = "sm"
}: StatsCardProps) => {
  const isLarge = size === "lg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`text-center p-${isLarge ? '8' : '6'} rounded-xl border bg-card hover:shadow-lg transition-shadow`}
    >
      <Icon className={`${isLarge ? 'w-12 h-12' : 'w-8 h-8'} mx-auto mb-${isLarge ? '4' : '2'} ${color}`} />
      <p className={`text-${isLarge ? '4xl' : '3xl'} font-extrabold text-primary ${isLarge ? 'mb-2' : 'mb-1'}`}>{value}</p>
      <p className={`text-${isLarge ? 'xl' : 'sm'} font-semibold ${isLarge ? 'mb-2' : 'mb-1'}`}>{label}</p>
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
};
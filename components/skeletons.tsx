"use client";

import { motion } from "motion/react";

// Skeleton for Stats Section
export function StatsSectionSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-16 md:mb-24">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="group relative"
        >
          <div className="relative p-6 rounded-3xl border border-border/40 bg-card/90 md:backdrop-blur-md min-h-[260px] animate-pulse">
            <div className="flex flex-col items-center text-center">
              {/* Icon skeleton */}
              <div className="p-4 rounded-2xl bg-muted/20 mb-6 animate-pulse">
                <div className="w-8 h-8 bg-muted/40 rounded"></div>
              </div>

              {/* Value skeleton */}
              <div className="h-10 bg-muted/20 rounded mb-3 w-20 animate-pulse"></div>

              {/* Label skeleton */}
              <div className="h-6 bg-muted/20 rounded mb-3 w-24 animate-pulse"></div>

              {/* Description skeleton */}
              <div className="space-y-2">
                <div className="h-4 bg-muted/20 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-muted/20 rounded w-3/4 animate-pulse"></div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Skeleton for Highlights Section
export function HighlightsSectionSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="group relative"
        >
          <div className="p-6 rounded-xl border border-border/40 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 animate-pulse">
            <div className="flex items-start gap-4">
              {/* Icon skeleton */}
              <div className="p-3 rounded-lg bg-muted/20 animate-pulse">
                <div className="w-6 h-6 bg-muted/40 rounded"></div>
              </div>

              <div className="flex-1">
                {/* Title skeleton */}
                <div className="h-6 bg-muted/20 rounded mb-2 w-3/4 animate-pulse"></div>

                {/* Description skeleton */}
                <div className="space-y-2">
                  <div className="h-4 bg-muted/20 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-muted/20 rounded w-5/6 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Skeleton for Services Section
export function ServicesSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="group relative animate-pulse"
        >
          <div className="p-8 rounded-2xl border border-border/40 bg-card/90 backdrop-blur-sm hover:shadow-xl transition-all duration-500 min-h-[300px]">
            <div className="text-center">
              {/* Icon skeleton */}
              <div className="w-16 h-16 bg-muted/20 rounded-2xl mx-auto mb-6 animate-pulse"></div>

              {/* Title skeleton */}
              <div className="h-7 bg-muted/20 rounded mb-4 w-3/4 mx-auto animate-pulse"></div>

              {/* Description skeleton */}
              <div className="space-y-3">
                <div className="h-4 bg-muted/20 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-muted/20 rounded w-5/6 mx-auto animate-pulse"></div>
                <div className="h-4 bg-muted/20 rounded w-4/6 mx-auto animate-pulse"></div>
              </div>

              {/* Features skeleton */}
              <div className="mt-6 space-y-2">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted/20 rounded-full animate-pulse"></div>
                    <div className="h-4 bg-muted/20 rounded w-3/4 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Skeleton for Skills Showcase
export function SkillsShowcaseSkeleton() {
  return (
    <div className="space-y-12">
      {[1, 2, 3].map((categoryIndex) => (
        <motion.div
          key={categoryIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.1 }}
          className="animate-pulse"
        >
          {/* Category title skeleton */}
          <div className="h-8 bg-muted/20 rounded mb-8 w-48 animate-pulse"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((skillIndex) => (
              <motion.div
                key={skillIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (categoryIndex * 6 + skillIndex) * 0.05 }}
                className="group relative"
              >
                <div className="p-4 rounded-xl border border-border/40 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    {/* Icon skeleton */}
                    <div className="w-12 h-12 bg-muted/20 rounded-lg mx-auto mb-3 animate-pulse"></div>

                    {/* Skill name skeleton */}
                    <div className="h-4 bg-muted/20 rounded w-16 mx-auto animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Skeleton for FAQ Section
export function FAQSectionSkeleton() {
  return (
    <div className="w-full py-16 md:py-24 lg:py-32">
      <div className="relative mx-auto max-w-4xl px-4 md:px-6">
        {/* Header skeleton */}
        <div className="text-center mb-16 md:mb-24 animate-pulse">
          <div className="h-12 bg-muted/20 rounded mb-8 w-80 mx-auto animate-pulse"></div>
          <div className="h-16 bg-muted/20 rounded mb-8 w-96 mx-auto animate-pulse"></div>
          <div className="h-6 bg-muted/20 rounded w-80 mx-auto animate-pulse"></div>
        </div>

        {/* FAQ items skeleton */}
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border/40 bg-card/90 backdrop-blur-sm overflow-hidden animate-pulse"
            >
              <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="h-6 bg-muted/20 rounded w-3/4 animate-pulse"></div>
                  <div className="w-5 h-5 bg-muted/20 rounded animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
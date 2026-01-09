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

export const StatsSection = React.memo(() => {
  const stats = Object.values(portfolioData.stats);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-16 md:mb-24">
      {stats.map((stat) => {
        const IconComponent =
          iconMap[stat.icon as keyof typeof iconMap] || Briefcase;

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: "-80px" }}
            className="group relative"
          >
            {/* Background glow — DESKTOP ONLY */}
            <div className="absolute inset-0 hidden md:block bg-linear-to-br from-primary/8 via-secondary/8 to-accent/8 rounded-3xl blur-2xl opacity-60" />
            <div className="absolute inset-0 hidden md:block bg-linear-to-br from-primary/5 to-secondary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Card */}
            <div className="relative p-6 rounded-3xl border border-border/40 bg-card/90 md:backdrop-blur-md hover:bg-card/95 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 min-h-[260px]">
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="p-4 rounded-2xl bg-linear-to-br from-primary/8 via-secondary/8 to-accent/8 mb-6 shadow-lg">
                  <IconComponent
                    className={`w-8 h-8 ${stat.color} drop-shadow-sm`}
                  />
                </div>

                {/* Value — NO SCALE (CLS SAFE) */}
                <div className="text-4xl font-bold mb-3 bg-linear-to-r from-foreground to-foreground/90 bg-clip-text text-transparent">
                  {stat.value}
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold mb-3 text-foreground/90">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-base">
                  {stat.description}
                </p>
              </div>

              {/* Decorative dots — DESKTOP ONLY */}
              <div className="absolute top-4 right-4 hidden md:block w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
              <div className="absolute bottom-4 left-4 hidden md:block w-1 h-1 bg-secondary/20 rounded-full animate-pulse" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
});


// "use client";

// import { motion } from "motion/react";
// import { portfolioData } from "@/lib/portfolio-data";
// import { Briefcase, Rocket, Building2 } from "lucide-react";

// const iconMap = {
//   Briefcase,
//   Rocket,
//   Building2,
// };

// export function StatsSection() {
//   const stats = Object.values(portfolioData.stats);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-16 md:mb-24">
//       {stats.map((stat, index) => {
//         const IconComponent = iconMap[stat.icon as keyof typeof iconMap] || Briefcase;

//         return (
//           <motion.div
//             key={stat.label}
//             initial={{ opacity: 0, y: 50, scale: 0.9 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="group relative"
//           >
//             {/* Enhanced Glow Effect */}
//             <div className="absolute inset-0 bg-linear-to-br from-primary/8 via-secondary/8 to-accent/8 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 scale-110 group-hover:scale-125" />
//             <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

//             <div className="relative p-6 rounded-3xl border border-border/40 bg-card/90 backdrop-blur-md hover:bg-card/95 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group-hover:-translate-y-3">
//               <div className="flex flex-col items-center text-center">
//                 <div className="p-4 rounded-2xl bg-linear-to-br from-primary/8 via-secondary/8 to-accent/8 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                   <IconComponent className={`w-8 h-8 ${stat.color} drop-shadow-sm`} />
//                 </div>
//                 <div className="text-4xl font-bold mb-3 bg-linear-to-r from-foreground to-foreground/90 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
//                   {stat.value}
//                 </div>
//                 <h3 className="text-lg font-semibold mb-3 text-foreground/90 group-hover:text-foreground transition-colors duration-300">
//                   {stat.label}
//                 </h3>
//                 <p className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground/80 transition-colors duration-300">
//                   {stat.description}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// }
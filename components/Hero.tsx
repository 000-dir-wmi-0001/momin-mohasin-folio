"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { ArrowRight, FileDown } from "lucide-react";
import Link from "next/link";

const MotionImage = motion(Image);
const MotionButton = motion(Button);

// Parent container variant with staggered children
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Individual child variant
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }, // TS-safe, avoids stiffness/damping errors
  },
};

const Hero = () => {
  const { theme, systemTheme } = useTheme();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
            className=" px-5 m-5 flex justify-around items-center"
    
      // className="flex flex-col md:flex-row justify-around w-full py-6 items-center shadow-md p-4 m-5 relative"
    >
      {/* Theme Emoji */}
      {/* <motion.p
        variants={item}
        className="absolute top-4 right-4 text-2xl select-none rotate-20"
        aria-label="Theme indicator"
      >
        {currentTheme === "dark" ? "🤍" : "🖤"}
      </motion.p> */}

      {/* Hero Image */}
      <MotionImage
        src="/momin.jpg"
        alt="Hero Image"
        width={360}
        height={360}
        priority
        quality={100}
        blurDataURL="/heroo.png"
        placeholder="blur"
        className="rounded-lg object-cover mb-10 left-0"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={item}
      />

      {/* Hero Text */}
      <div className="text-center max-w-xl mt-6 md:mt-0">
        <motion.h1 variants={item} className="text-5xl font-bold">
          Hi, I&apos;m Momin
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-lg font-medium text-muted-foreground"
        >
          Full-Stack Developer | Tech Enthusiast
        </motion.h2>

        <motion.p
          variants={item}
          className="text-sm px-2 leading-relaxed text-muted-foreground"
        >
          I build modern, scalable web applications with React, Next.js,
          Node.js, Django, and more. Currently working at Brilliantech Software
          Pvt Ltd, passionate about impactful solutions.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={item} className="flex justify-center gap-4 mt-4">
          <MotionButton
            variant="default"
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring" }}
          >
            <Link href="/projects" className="flex items-center gap-2">
              View My Work <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionButton>

          <MotionButton
            variant="outline"
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring" }}
          > <a
          className="no-underline flex items-center gap-2"
    href="/resume.pdf"
    download="Momin_Mohasin_Resume.pdf">

              <FileDown className="w-4 h-4" /> Download Resume
    </a>
            {/* <Link href="/resume" className="flex items-center gap-2">
            </Link> */}
          </MotionButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;

// "use client";

// import React from "react";
// import { motion, Variants } from "motion/react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { useTheme } from "next-themes";
// import { ArrowRight, FileDown } from "lucide-react";

// const MotionImage = motion(Image);
// const MotionButton = motion(Button);

// // Parent container variant with staggered children
// const container: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2 },
//   },
// };

// // Individual child variant
// const item: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6 }, // TS-safe, avoids stiffness/damping errors
//   },
// };

// const Hero = () => {
//   const { theme, systemTheme } = useTheme();
//   const currentTheme = theme === "system" ? systemTheme : theme;

//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate="visible"
//       className="rounded-xl border shadow-sm backdrop-blur bg-white/60 dark:bg-zinc-900/50 px-5 py-8 m-5 flex flex-col md:flex-row items-center gap-8 justify-between"
//     >
//       {/* Theme Emoji */}
//       {/* <motion.p
//         variants={item}
//         className="absolute top-4 right-4 text-2xl select-none rotate-20"
//         aria-label="Theme indicator"
//       >
//         {currentTheme === "dark" ? "🤍" : "🖤"}
//       </motion.p> */}

//       {/* Hero Image */}
//       <MotionImage
//         src="/momin.jpg"
//         alt="Momin Mohasin portrait"
//         width={360}
//         height={360}
//         priority
//         quality={90}
//         className="rounded-xl object-cover md:size-64 aspect-square"
//         whileHover={{ scale: 1.03 }}
//         whileTap={{ scale: 0.97 }}
//         variants={item}
//       />

//       {/* Hero Text */}
//   <div className="text-center md:text-left max-w-2xl mt-2 md:mt-0">
//         <motion.h1 variants={item} className="text-5xl font-bold">
//           Hi, I'm Momin
//         </motion.h1>

//         <motion.h2
//           variants={item}
//           className="text-lg font-medium text-muted-foreground"
//         >
//           Full-Stack Developer | Tech Enthusiast
//         </motion.h2>

//         <motion.p
//           variants={item}
//           className="text-sm md:text-base px-2 md:px-0 leading-relaxed text-muted-foreground"
//         >
//           I build modern, scalable web applications with React, Next.js,
//           Node.js, Django, and more. Currently working at Brilliantech Software
//           Pvt Ltd, passionate about impactful solutions.
//         </motion.p>

//         {/* Action Buttons */}
//         <motion.div variants={item} className="flex justify-center md:justify-start gap-3 mt-4">
//           <MotionButton
//             asChild
//             variant="default"
//             className="cursor-pointer gap-2"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.9 }}
//             transition={{ type: "spring" } as any }
//           >
//             <Link href="/projects">
//               <ArrowRight className="w-4 h-4" /> View My Work
//             </Link>
//           </MotionButton>

//           <MotionButton
//             asChild
//             variant="outline"
//             className="cursor-pointer gap-2"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.9 }}
//             transition={{ type: "spring" } as any }
//           >
//             <Link href="/resume">
//               <FileDown className="w-4 h-4" /> Download Resume
//             </Link>
//           </MotionButton>
//         </motion.div>

//         {/* Quick skills */}
//         <motion.ul variants={item} className="mt-5 flex flex-wrap justify-center md:justify-start gap-2">
//           {["React", "Next.js", "TypeScript", "Node.js", "Django", "FastAPI"].slice(0,6).map((s) => (
//             <li key={s} className="text-xs md:text-sm rounded-full border px-3 py-1 bg-white/60 dark:bg-zinc-900/40">
//               {s}
//             </li>
//           ))}
//         </motion.ul>

//         {/* Stats */}
//         <motion.ul variants={item} className="mt-4 grid grid-cols-3 gap-3 text-center md:text-left">
//           {[
//             { value: "2+", label: "Years" },
//             { value: "15+", label: "Projects" },
//             { value: "2", label: "Companies" },
//           ].map((st) => (
//             <li key={st.label} className="rounded-md border p-2 bg-white/60 dark:bg-zinc-900/40">
//               <p className="text-lg font-extrabold">{st.value}</p>
//               <p className="text-xs text-muted-foreground">{st.label}</p>
//             </li>
//           ))}
//         </motion.ul>
//       </div>
//     </motion.div>
//   );
// };

// export default Hero;

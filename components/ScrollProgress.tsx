'use client';

import { motion, useScroll } from "motion/react";

const ScrollProgress = () => {
  const  {scrollYProgress}  = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        transformOrigin: "0%",
        left: 0,
        right: 0,
        top: 0,
        height: "2px",
        originX: 0,
      }}
      className="bg-primary shadow-[0_0_8px_var(--primary)]"
    />
  );
};

export default ScrollProgress;

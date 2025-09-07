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
        height: "4px",
        originX: 0,
      }}
      className="bg-primary"
    />
  );
};

export default ScrollProgress;

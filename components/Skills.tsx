import React from 'react'
import { motion, Variants } from "motion/react"
import { Badge } from "./ui/badge"

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
}

const techs = [
  "Next.js",
  "React.js",
  "NestJS",
  "Express.js",
  "Node.js",
  "Django",
  "FastAPI",
]
const Skills = () => {
  return (
    <div>
       {/* Tech Badges */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-2 mt-4"
        >
          {techs.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="px-3 py-1 text-sm hover:scale-105 transition-transform duration-200"
            >
              {tech}
            </Badge>
          ))}
        </motion.div>
    </div>
  )
}

export default Skills
 {/* Tech Badges */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-2 mt-4"
        >
          {techs.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="px-3 py-1 text-sm hover:scale-105 transition-transform duration-200"
            >
              {tech}
            </Badge>
          ))}
        </motion.div>
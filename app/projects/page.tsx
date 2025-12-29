import ProjectsClient from './ProjectsClient';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Full Stack Developer Portfolio",
  description:
    "Explore real-world full stack and backend projects built by Momin Mohasin using React, Next.js, NestJS, FastAPI, Django, and modern web technologies.",
};

export default function Projects() {
  return <ProjectsClient />;
}

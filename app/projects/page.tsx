import ProjectsClient from './ProjectsClient';
import type { Metadata } from "next";
import { generateProjectSchema, generateHreflangTags } from "@/lib/seo-utils";
import { portfolioData } from "@/lib/portfolio-data";
import { formatDuration } from "@/lib/date-utils";

export const metadata: Metadata = {
  title: "Projects - AI & Full Stack Software Engineer Portfolio",
  description:
    "Explore real-world full stack, backend, and AI/LLM-powered projects built by Momin Mohasin using React, Next.js, NestJS, FastAPI, Django, and modern web technologies.",
  alternates: {
    canonical: "https://momin-mohasin.me/projects",
    ...generateHreflangTags("/projects")
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://momin-mohasin.me/projects",
    title: "Projects - AI & Full Stack Software Engineer Portfolio",
    description:
      "Explore real-world full stack, backend, and AI/LLM-powered projects built by Momin Mohasin using React, Next.js, NestJS, FastAPI, Django, and modern web technologies.",
    siteName: "Momin Mohasin Portfolio",
    images: [
      {
        url: "/og-momin.png",
        width: 1200,
        height: 630,
        alt: "Momin Mohasin - AI & Full Stack Software Engineer Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - AI & Full Stack Software Engineer Portfolio",
    description:
      "Explore real-world full stack, backend, and AI/LLM-powered projects built by Momin Mohasin using React, Next.js, NestJS, FastAPI, Django, and modern web technologies.",
    images: ["/og-momin.png"],
    creator: "@mominmohasin",
  },
};

export default function Projects() {
  // Breadcrumb structured data is already emitted site-wide by the root
  // layout's <BreadcrumbSchema />, which is pathname-aware — a page-level
  // copy here would just duplicate it.

  // Computed server-side (see lib/date-utils.ts for why) so the "Present"
  // role's tenure — and every past role's — stays accurate without manual
  // upkeep of the hand-written `period` strings in portfolio-data.ts.
  const experienceDurations = Object.fromEntries(
    portfolioData.experience.map((exp) => [
      exp.company,
      formatDuration(exp.startDate, exp.endDate),
    ])
  );

  const projectStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Momin Mohasin's Portfolio Projects",
    "description": "Collection of full-stack development projects showcasing expertise in modern web technologies",
    "numberOfItems": portfolioData.projects.length,
    "itemListElement": portfolioData.projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": generateProjectSchema(project)
    }))
  };

  return (
    <>
      <script
        id="projects-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectStructuredData) }}
      />
      <ProjectsClient experienceDurations={experienceDurations} />
    </>
  );
}

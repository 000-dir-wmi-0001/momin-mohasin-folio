import ProjectsClient from './ProjectsClient';
import type { Metadata } from "next";
import Script from "next/script";
import { generateProjectSchema, generateBreadcrumbSchema, generateHreflangTags } from "@/lib/seo-utils";
import { portfolioData } from "@/lib/portfolio-data";

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
  const breadcrumbSchema = generateBreadcrumbSchema("/projects");
  
  const projectStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Momin Mohasin's Portfolio Projects",
    "description": "Collection of full-stack development projects showcasing expertise in modern web technologies",
    "numberOfItems": portfolioData.projects.length,
    "itemListElement": portfolioData.projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": project.name,
        "description": project.description,
        ...(project.image && { "image": project.image }),
        ...(project.datePublished && { "datePublished": project.datePublished }),
        ...(project.keywords && { "keywords": project.keywords.join(', ') }),
        ...(project.url && { "url": project.url }),
        ...(project.category && { "applicationCategory": project.category }),
        "operatingSystem": "Web Browser",
        ...(project.technologies && { "programmingLanguage": project.technologies }),
        "author": {
          "@type": "Person",
          "name": "Momin Mohasin"
        }
      }
    }))
  };

  return (
    <>
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script
        id="projects-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(projectStructuredData)}
      </Script>
      <ProjectsClient />
    </>
  );
}

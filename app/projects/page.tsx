import ProjectsClient from './ProjectsClient';
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Projects - Full Stack Developer Portfolio",
  description:
    "Explore real-world full stack and backend projects built by Momin Mohasin using React, Next.js, NestJS, FastAPI, Django, and modern web technologies.",
};

export default function Projects() {
  const projectStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Momin Mohasin's Portfolio Projects",
    "description": "Collection of full-stack development projects showcasing expertise in modern web technologies",
    "numberOfItems": 15,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": "LinkCode LMS & Admin Portal",
          "description": "Enterprise-grade Learning Management System and administrative portal for managing student training, attendance, payments, and academic performance.",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Web Browser",
          "programmingLanguage": ["Angular", "TypeScript", "Node.js"],
          "author": {
            "@type": "Person",
            "name": "Momin Mohasin"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "SoftwareApplication",
          "name": "Sadhguru Tiles & Marbles - Digital Catalog Platform",
          "description": "Digital catalog platform for tiles and marbles business with product showcase and inquiry management.",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web Browser",
          "programmingLanguage": ["React", "Node.js", "MongoDB"],
          "author": {
            "@type": "Person",
            "name": "Momin Mohasin"
          }
        }
      }
    ]
  };

  return (
    <>
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

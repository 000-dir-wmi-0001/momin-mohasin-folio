import ContactClient from './ContactClient';
import type { Metadata } from "next";
import Script from "next/script";
import { generateBreadcrumbSchema } from "@/lib/seo-utils";

export const metadata: Metadata = {
  title: "Contact - Hire Full Stack Developer",
  description:
    "Get in touch with Momin Mohasin, a Full Stack Developer from Pune, India, open to full-time roles and freelance opportunities.",
  alternates: { 
    canonical: "https://momin-mohasin.me/contact",
    languages: {
      'en-IN': 'https://momin-mohasin.me/contact',
      'en': 'https://momin-mohasin.me/contact',
      'x-default': 'https://momin-mohasin.me/contact'
    }
  },
};

export default function Contact() {
  const breadcrumbSchema = generateBreadcrumbSchema("/contact");
  
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "name": "Momin Mohasin - Professional Contact",
    "telephone": "+91 7249826872",
    "email": "momindy321@gmail.com",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  };

  return (
    <>
      <Script
        id="contact-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script
        id="contact-point-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(contactSchema)}
      </Script>
      <div className="will-change-auto">
        <ContactClient />
      </div>
    </>
  );
}
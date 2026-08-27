import ContactClient from './ContactClient';
import type { Metadata } from "next";

const CONTACT_TITLE = "Contact - Hire an AI & Full Stack Software Engineer";
const CONTACT_DESCRIPTION =
  "Get in touch with Momin Mohasin, an AI & Full Stack Software Engineer from Pune, India, open to full-time roles and freelance opportunities.";

export const metadata: Metadata = {
  title: CONTACT_TITLE,
  description: CONTACT_DESCRIPTION,
  alternates: {
    canonical: "https://momin-mohasin.me/contact",
    languages: {
      'en-IN': 'https://momin-mohasin.me/contact',
      'en': 'https://momin-mohasin.me/contact',
      'x-default': 'https://momin-mohasin.me/contact'
    }
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://momin-mohasin.me/contact",
    title: CONTACT_TITLE,
    description: CONTACT_DESCRIPTION,
    siteName: "Momin Mohasin Portfolio",
    images: [
      {
        url: "/og-momin.png",
        width: 1200,
        height: 630,
        alt: "Contact Momin Mohasin - AI & Full Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: CONTACT_TITLE,
    description: CONTACT_DESCRIPTION,
    images: ["/og-momin.png"],
    creator: "@mominmohasin",
  },
};

export default function Contact() {
  // Breadcrumb AND ContactPoint structured data are already emitted
  // site-wide by the root layout (<BreadcrumbSchema /> plus the global
  // "contact-structured-data" script, which is a strict superset of what
  // used to be duplicated here) — no page-level copy needed.
  return (
    <div className="will-change-auto">
      <ContactClient />
    </div>
  );
}
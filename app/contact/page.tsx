import ContactClient from './ContactClient';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Hire Full Stack Developer",
  description:
    "Get in touch with Momin Mohasin, a Full Stack Developer from Pune, India, open to full-time roles and freelance opportunities.",
  other: {
    'dns-prefetch': 'https://api.example.com', // Replace with your actual API domain
    'preconnect': 'https://fonts.googleapis.com',
    'preload': '/_next/static/css/app/contact/page.css',
  },
};

export default function Contact() {
  return (
    <div className="will-change-auto">
      <ContactClient />
    </div>
  );
}
import ContactClient from './ContactClient';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Hire Full Stack Developer",
  description:
    "Get in touch with Momin Mohasin, a Full Stack Developer from Pune, India, open to full-time roles and freelance opportunities.",
};

export default function Contact() {
  return <ContactClient />;
}
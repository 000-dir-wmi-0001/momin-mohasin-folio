import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { generateFAQSchema } from "@/lib/seo-utils";
import { faqData } from "@/lib/faq-data";
import { MotionConfig } from "motion/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "sans-serif",
  ],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600"],
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});

export const metadata: Metadata = {
  title: {
    default: "Momin Mohasin - AI & Full Stack Software Engineer",
    template: "%s | Momin Mohasin",
  },
  description:
    "Explore Momin Mohasin's portfolio - AI & Full Stack Software Engineer from Pune, India. Expert in React, Next.js, NestJS, FastAPI, Django, LLM integration with RAG and LangChain, and scalable backend systems. View innovative projects and get in touch for collaborations.",

  keywords: [
  "Momin Mohasin",
  "AI & Full Stack Software Engineer",
  "AI Software Engineer Pune",
  "Full Stack Developer Pune",
  "Mid-Level Full Stack Developer India",
  "Backend-heavy Full Stack Developer",
  "Full Stack Developer with Project Leadership Experience",
  "Next.js & NestJS Full Stack Engineer",
  "Python FastAPI Developer",
  "Django Backend Developer",
  "React.js Specialist",
  "TypeScript Software Engineer",
  "REST API Developer",
  "GraphQL API Developer",
  "LLM Integration Developer",
  "RAG Developer",
  "LangChain Developer",
  "Generative AI Developer",
  "AI Application Development",
  "Real-time WebSocket Developer",
  "PostgreSQL & MongoDB Database Design",
  "Docker & Kubernetes Cloud Deployment",
  "AWS Cloud Deployment",
  "Scalable Web Applications",
  "Software Engineer Portfolio",
  "Pune Developer",
  "Indian Full Stack Developer",
  "Modern Web Development",
  "Backend API Development",
  "Frontend React Development",
],

  authors: [{ name: "Momin Mohasin" }],
  creator: "Momin Mohasin",
  publisher: "Momin Mohasin",

  metadataBase: new URL("https://momin-mohasin.me"),
  alternates: {
    canonical: "/",
    languages: {
      'en-IN': 'https://momin-mohasin.me',
      'en': 'https://momin-mohasin.me',
      'x-default': 'https://momin-mohasin.me'
    }
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://momin-mohasin.me",
    title: "Momin Mohasin - AI & Full Stack Software Engineer",
    description:
      "AI & Full Stack Software Engineer from Pune, India with experience in React, Next.js, NestJS, FastAPI, Django, LLM integration, and real-world backend systems.",
    siteName: "Momin Mohasin Portfolio",
    images: [
      {
        url: "/og-momin.png",
        width: 1200,
        height: 630,
        alt: "Momin Mohasin - AI & Full Stack Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Momin Mohasin - AI & Full Stack Software Engineer",
    description:
      "AI & Full Stack Software Engineer specializing in modern web, backend, and LLM-powered technologies.",
    images: ["/og-momin.png"],
    creator: "@mominmohasin",
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "D1gQW36z0ywReJh5n3Vta-QdJRtjfqe4l7-Ql7FgZ_U",
  },
  icons: {
    icon: "/og-momin.png",
    shortcut: "/og-momin.png",
    apple: "/og-momin.png",
  },
  manifest: "/manifest.json",
   other: {
    "msvalidate.01": "25C4CE3A7C2779B0115120600E473DCC",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  // Optimize for mobile performance
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MotionConfig reducedMotion="user">
            <ErrorBoundary>
              <PerformanceMonitor />
              <Header />
              {children}
              <Footer />
              <SpeedInsights />
            </ErrorBoundary>
          </MotionConfig>
        </ThemeProvider>

        {/* Microsoft Clarity Analytics */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "usxqm1qi9j");
          `}
        </Script>

        {/* Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Momin Mohasin",
            "jobTitle": "AI & Full Stack Software Engineer",
            "description": "AI & Full Stack Software Engineer from Pune, India specializing in React, Next.js, NestJS, FastAPI, Django, LLM integration (RAG, LangChain), and scalable backend development.",
            "url": "https://momin-mohasin.me",
            "email": "momindy321@gmail.com",
            "telephone": "+91 7249826872",
            "sameAs": [
              "https://github.com/000-dir-wmi-0001",
              "https://www.linkedin.com/in/momin-mohasin/",
              "https://twitter.com/mominmohasin"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pune",
              "addressCountry": "India"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 7249826872",
              "email": "momindy321@gmail.com",
              "contactType": "professional",
              "availableLanguage": "English"
            },
            "knowsAbout": [
              "React",
              "Next.js",
              "NestJS",
              "FastAPI",
              "Django",
              "TypeScript",
              "PostgreSQL",
              "MongoDB",
              "Docker",
              "Kubernetes",
              "AWS",
              "GraphQL",
              "LLM Integration",
              "RAG",
              "LangChain",
              "Generative AI"
            ]
          })}
        </Script>

        {/* Contact Information Structured Data */}
        <Script
          id="contact-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            "name": "Momin Mohasin - Professional Contact",
            "telephone": "+91 7249826872",
            "email": "momindy321@gmail.com",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"],
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "18:00",
              "timeZone": "Asia/Kolkata"
            }
          })}
        </Script>

        {/* Organization Structured Data */}
        <Script
          id="organization-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Brilliantech Software Pvt Ltd",
            "description": "Leading software development company specializing in web and mobile applications.",
            "url": "https://brilliantech.com",
            "logo": "https://momin-mohasin.me/Bt.png",
            "employee": {
              "@type": "Person",
              "name": "Momin Mohasin",
              "jobTitle": "Full Stack Developer"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pune",
              "addressCountry": "India"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "telephone": "+91 7249826872",
              "email": "momindy321@gmail.com"
            }
          })}
        </Script>

        {/* FAQ Structured Data */}
        <Script
          id="faq-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(generateFAQSchema(faqData))}
        </Script>

        {/* WebSite Structured Data */}
        <Script
          id="website-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Momin Mohasin Portfolio",
            "url": "https://momin-mohasin.me",
            "description": "Portfolio of Momin Mohasin, an AI & Full Stack Software Engineer specializing in modern web technologies and LLM-powered applications.",
            "author": {
              "@type": "Person",
              "name": "Momin Mohasin"
            },
            "publisher": {
              "@type": "Person",
              "name": "Momin Mohasin"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://momin-mohasin.me/projects?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>

        {/* Breadcrumb Schema for Navigation */}
        <BreadcrumbSchema />

        <Analytics />
      </body>
    </html>
  );
}

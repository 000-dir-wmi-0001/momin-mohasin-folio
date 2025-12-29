import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import Script from "next/script";

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
    default: "Momin Mohasin – Full Stack Developer",
    template: "%s | Momin Mohasin",
  },
  description:
    "Full Stack Developer from Pune, India specializing in React, Next.js, NestJS, FastAPI, Django, and scalable backend development. View projects and skills.",

  keywords: [
    "Momin Mohasin",
    "Full Stack Developer",
    "Full Stack Developer Pune",
    "React Developer",
    "Next.js Developer",
    "NestJS Developer",
    "FastAPI Developer",
    "Django Developer",
    "Backend Developer",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "Python",
    "REST API Developer",
    "WebSocket Developer",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Portfolio",
  ],

  authors: [{ name: "Momin Mohasin" }],
  creator: "Momin Mohasin",
  publisher: "Momin Mohasin",

  metadataBase: new URL("https://momin-mohasin.me"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://momin-mohasin.me",
    title: "Momin Mohasin – Full Stack Developer",
    description:
      "Full Stack Developer from Pune, India with experience in React, Next.js, NestJS, FastAPI, Django, and real-world backend systems.",
    siteName: "Momin Mohasin Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Momin Mohasin – Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Momin Mohasin – Full Stack Developer",
    description:
      "Full Stack Developer specializing in modern web and backend technologies.",
    images: ["/og-image.jpg"],
    creator: "@mominmohasin",
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "D1gQW36z0ywReJh5n3Vta-QdJRtjfqe4l7-Ql7FgZ_U",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>
            <PerformanceMonitor />
            <Header />
            {children}
            <Footer />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}

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
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600'],
  fallback: ['ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
});

export const metadata: Metadata = {
  title: {
    default: "Momin Mohasin - Full-Stack Developer & Tech Enthusiast",
    template: "%s | Momin Mohasin"
  },
  description: "Momin Mohasin's personal portfolio website showcasing expertise in React, Next.js, Node.js, Django, FastAPI, and modern web development technologies. View projects, experience, and technical skills.",
  keywords: [
    "Momin Mohasin",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Django Developer",
    "FastAPI Developer",
    "Web Developer",
    "Backend Developer",
    "Frontend Developer",
    "JavaScript",
    "TypeScript",
    "Python",
    "Portfolio"
  ],
  authors: [{ name: "Momin Mohasin" }],
  creator: "Momin Mohasin",
  publisher: "Momin Mohasin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://momin-mohasin.me'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://momin-mohasin.me',
    title: 'Momin Mohasin - Full-Stack Developer & Tech Enthusiast',
    description: 'Portfolio showcasing expertise in modern web development technologies including React, Next.js, Node.js, Django, and FastAPI.',
    siteName: 'Momin Mohasin Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Momin Mohasin - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momin Mohasin - Full-Stack Developer & Tech Enthusiast',
    description: 'Portfolio showcasing expertise in modern web development technologies.',
    images: ['/og-image.jpg'],
    creator: '@mominmohasin',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'D1gQW36z0ywReJh5n3Vta-QdJRtjfqe4l7-Ql7FgZ_U',
  },
  other: {
    'dns-prefetch': 'https://fonts.googleapis.com',
    'preconnect': 'https://fonts.gstatic.com',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
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
        <Script
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9990858894070712"
          crossOrigin="anonymous"
        />
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

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Compass } from "lucide-react";

const NOT_FOUND_TITLE = "Page Not Found";
const NOT_FOUND_DESCRIPTION = "The page you're looking for doesn't exist or has been moved.";

export const metadata: Metadata = {
  title: NOT_FOUND_TITLE,
  description: NOT_FOUND_DESCRIPTION,
  robots: {
    index: false,
    follow: false,
  },
  // Explicitly override every top-level key the root layout defines —
  // Next.js inherits any key a segment doesn't set of its own, so leaving
  // these out would silently pull in the homepage's canonical/OG/Twitter
  // data onto a 404 page.
  alternates: {},
  openGraph: {
    title: NOT_FOUND_TITLE,
    description: NOT_FOUND_DESCRIPTION,
  },
  twitter: {
    title: NOT_FOUND_TITLE,
    description: NOT_FOUND_DESCRIPTION,
  },
};

export default function NotFound() {
  return (
    <main className="w-full min-h-[70vh] flex items-center justify-center px-4 md:px-6 py-20">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center px-3.5 py-1.5 mb-6 text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground bg-muted/50 rounded-full border border-border/70">
          <Compass className="w-3.5 h-3.5 mr-1.5 shrink-0 text-primary" />
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Page not found
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

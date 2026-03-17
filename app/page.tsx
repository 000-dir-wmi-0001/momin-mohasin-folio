import Hero from "@/components/Hero";
import { portfolioData } from "@/lib/portfolio-data";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { StatsSectionSkeleton, HighlightsSectionSkeleton, ServicesSkeleton, SkillsShowcaseSkeleton, FAQSectionSkeleton } from "@/components/skeletons";
import { ScrollToTop } from "@/components/scroll-to-top";
import { User, Code, Settings } from "lucide-react";

// Dynamically import components that are not immediately visible
const StatsSection = dynamic(() => import("@/components/StatsSection").then(mod => ({ default: mod.StatsSection })), {
  loading: () => <StatsSectionSkeleton />
});

const HighlightsSection = dynamic(() => import("@/components/HighlightsSection").then(mod => ({ default: mod.HighlightsSection })), {
  loading: () => <HighlightsSectionSkeleton />
});

const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <ServicesSkeleton />
});

const SkillsShowcase = dynamic(() => import("@/components/SkillsShowcase").then(mod => ({ default: mod.SkillsShowcase })), {
  loading: () => <SkillsShowcaseSkeleton />
});

const FAQSection = dynamic(() => import("@/components/FAQSection").then(mod => ({ default: mod.FAQSection })), {
  loading: () => <FAQSectionSkeleton />
});


export const metadata: Metadata = {
  title: "Momin Mohasin - Full Stack Developer",
  description:
    "Full Stack Developer from Pune, India with hands-on experience in React, Next.js, NestJS, FastAPI, Django, and real-world backend systems.",
  alternates: { canonical: "https://momin-mohasin.me" },
};


export default function Home() {
  return (
    <main className="w-full scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center" id="hero" aria-label="Hero section">
        <Hero />
      </section>

      {/* Professional Overview */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden" id="overview" aria-labelledby="overview-heading">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/[0.015] via-background to-secondary/[0.015]" />
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/3 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center px-6 py-3 mb-8 text-sm font-semibold text-primary bg-primary/8 rounded-full border border-primary/15 backdrop-blur-sm shadow-lg">
              <User className="w-4 h-4 mr-2 flex-shrink-0" />
              Professional Overview
            </div>
            <h2 id="overview-heading" className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Combining{" "}
              <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:from-accent hover:via-primary hover:to-secondary transition-all duration-500">
                Expertise
              </span>{" "}
              with Results
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Technical proficiency meets strategic thinking in modern web development
            </p>
          </div>

          <StatsSection />
          <HighlightsSection />
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden" id="skills" aria-labelledby="skills-heading">
        {/* Background */}
        <div className="absolute inset-0 bg-muted/10" />
        <div className="absolute top-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-secondary/4 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center px-6 py-3 mb-8 text-sm font-semibold text-primary bg-primary/8 rounded-full border border-primary/15 backdrop-blur-sm shadow-lg">
              <Code className="w-4 h-4 mr-2 flex-shrink-0" />
              Technical Expertise
            </div>
            <h2 id="skills-heading" className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Modern{" "}
              <span className="bg-linear-to-r from-secondary via-primary to-accent bg-clip-text text-transparent hover:from-accent hover:via-secondary hover:to-primary transition-all duration-500">
                Technology Stack
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Comprehensive proficiency across cutting-edge technologies and development frameworks
            </p>
          </div>
          <SkillsShowcase skillCategories={portfolioData.skills} />
        </div>
      </section>

      {/* Service Expertise */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden" id="services" aria-labelledby="services-heading">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-tl from-primary/[0.015] via-background to-accent/[0.015]" />
        <div className="absolute top-1/2 left-0 w-64 h-64 md:w-96 md:h-96 bg-accent/3 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center px-6 py-3 mb-8 text-sm font-semibold text-primary bg-primary/8 rounded-full border border-primary/15 backdrop-blur-sm shadow-lg">
              <Settings className="w-4 h-4 mr-2 flex-shrink-0" />
              Service Expertise
            </div>
            <h2 id="services-heading" className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Transforming{" "}
              <span className="bg-linear-to-r from-accent via-primary to-secondary bg-clip-text text-transparent hover:from-secondary hover:via-accent hover:to-primary transition-all duration-500">
                Ideas
              </span>{" "}
              into Reality
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Comprehensive solutions tailored to transform your digital vision into reality
            </p>
          </div>
          <Services />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative overflow-hidden" aria-labelledby="faq-heading">
        <FAQSection />
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}

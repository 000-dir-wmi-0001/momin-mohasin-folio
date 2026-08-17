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
  title: "Momin Mohasin - AI & Full Stack Software Engineer",
  description:
    "AI & Full Stack Software Engineer from Pune, India with hands-on experience in React, Next.js, NestJS, FastAPI, Django, LLM integration (RAG, LangChain), and real-world backend systems.",
  alternates: { 
    canonical: "https://momin-mohasin.me",
    languages: {
      'en-IN': 'https://momin-mohasin.me',
      'en': 'https://momin-mohasin.me',
      'x-default': 'https://momin-mohasin.me'
    }
  },
};


export default function Home() {
  return (
    <main className="w-full scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center" id="hero" aria-label="Hero section">
        <h1 className="sr-only">Hi, I'm Momin Mohasin, AI & Full-Stack Software Engineer</h1>
        <Hero />
      </section>

      {/* Professional Overview */}
      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden border-t border-border/60" id="overview" aria-labelledby="overview-heading">
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3.5 py-1.5 mb-6 text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground bg-muted/50 rounded-full border border-border/70">
              <User className="w-3.5 h-3.5 mr-1.5 shrink-0 text-primary" />
              Professional Overview
            </div>
            <h3 id="overview-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight tracking-tight">
              Combining <span className="text-primary">Expertise</span> with Results
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Technical proficiency meets strategic thinking in modern web development
            </p>
          </div>

          <StatsSection />
          <HighlightsSection />
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden border-t border-border/60 bg-muted/20" id="skills" aria-labelledby="skills-heading">
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3.5 py-1.5 mb-6 text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground bg-muted/50 rounded-full border border-border/70">
              <Code className="w-3.5 h-3.5 mr-1.5 shrink-0 text-primary" />
              Technical Expertise
            </div>
            <h3 id="skills-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight tracking-tight">
              Modern <span className="text-primary">Technology Stack</span>
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Comprehensive proficiency across cutting-edge technologies and development frameworks
            </p>
          </div>
          <SkillsShowcase skillCategories={portfolioData.skills} />
        </div>
      </section>

      {/* Service Expertise */}
      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden border-t border-border/60" id="services" aria-labelledby="services-heading">
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3.5 py-1.5 mb-6 text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground bg-muted/50 rounded-full border border-border/70">
              <Settings className="w-3.5 h-3.5 mr-1.5 shrink-0 text-primary" />
              Service Expertise
            </div>
            <h3 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight tracking-tight">
              Transforming <span className="text-primary">Ideas</span> into Reality
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
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

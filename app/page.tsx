import Hero from "@/components/Hero";
import { portfolioData } from "@/lib/portfolio-data";
import { StatsSection } from "@/components/StatsSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Loading from "./loading";

// Dynamically import components that are not immediately visible
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <Loading />
});

const SkillsShowcase = dynamic(() => import("@/components/SkillsShowcase").then(mod => ({ default: mod.SkillsShowcase })), {
  loading: () => <Loading />
});


export const metadata: Metadata = {
  title: "Momin Mohasin - Full Stack Developer",
  description:
    "Full Stack Developer from Pune, India with hands-on experience in React, Next.js, NestJS, FastAPI, Django, and real-world backend systems.",
};


export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <Hero />
      </section>

      {/* Professional Overview */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/[0.015] via-background to-secondary/[0.015]" />
        <div className="absolute top-0 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-secondary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 bg-accent/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(45deg,#000_1px,transparent_1px),linear-gradient(-45deg,#000_1px,transparent_1px)] bg-[size:15px_15px] md:bg-[size:20px_20px]" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-block px-6 py-3 mb-8 text-sm font-semibold text-primary bg-primary/8 rounded-full border border-primary/15 backdrop-blur-sm shadow-lg">
              ✨ Professional Overview
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Combining{" "}
              <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
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
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-muted/10" />
        <div className="absolute top-0 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-secondary/4 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,#000_1px,transparent_1px),linear-gradient(-45deg,#000_1px,transparent_1px)] bg-[size:15px_15px] md:bg-[size:25px_25px]" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Modern{" "}
              <span className="bg-linear-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
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
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-linear-to-tl from-primary/[0.015] via-background to-accent/[0.015]" />
        <div className="absolute top-1/2 left-0 w-48 h-48 md:w-96 md:h-96 bg-accent/3 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-0 right-1/3 w-32 h-32 md:w-64 md:h-64 bg-secondary/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3.5s' }} />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(45deg,#000_1px,transparent_1px),linear-gradient(-45deg,#000_1px,transparent_1px)] bg-[size:15px_15px] md:bg-[size:20px_20px]" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-block px-6 py-3 mb-8 text-sm font-semibold text-accent bg-accent/8 rounded-full border border-accent/15 backdrop-blur-sm shadow-lg">
              ✨ Service Expertise
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Transforming{" "}
              <span className="bg-linear-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
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
    </main>
  );
}

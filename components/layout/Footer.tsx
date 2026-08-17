"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, Sparkles, MapPin, Clock, ArrowUp } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
};

const Footer = () => {
  const year = new Date().getFullYear();
  const [mounted, setMounted] = React.useState(false);
  const [now, setNow] = React.useState<Date | null>(null);

  React.useEffect(() => {
    setMounted(true);
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);

  const timeStr = now
    ? new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" }).format(now)
    : "—";

  const stack = [
    "MernStack",
    "MeanStack",
    "Next.js",
    "Nest.js",
    "Node.js",
    "Django",
    "FastAPI",
  ];

  return (
    <div className="w-full border-t border-border/60 mt-10 bg-muted/20">
      <footer className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-14 md:py-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {/* CTA */}
          <motion.div variants={item} className="rounded-2xl border border-border/60 bg-card p-6 transition-colors duration-300 hover:border-primary/30">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center rounded-lg bg-primary/10 p-2 mt-0.5">
                <Sparkles className="w-4 h-4 text-primary" />
              </span>
              <div>
                <p className="text-base font-semibold tracking-tight">Let&rsquo;s build something great.</p>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  I&rsquo;m open to impactful web projects. If you have an idea, I&rsquo;d love to help ship it.
                </p>
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              <Button asChild size="sm">
                <Link href="/contact">Contact</Link>
              </Button>
              <Button asChild size="sm" variant="outline">
              <Link href="/resume.pdf" download="Momin_Mohasin_Resume.pdf">Resume</Link>
              </Button>
            </div>
          </motion.div>

          {/* Tech stack chips */}
          <motion.div variants={item} className="rounded-2xl border border-border/60 bg-card p-6 transition-colors duration-300 hover:border-primary/30">
            <p className="text-sm font-semibold mb-3.5">Tech I enjoy</p>
            <div className="flex flex-wrap gap-1.5">
              {stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border/70 bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-primary/30"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
              <Heart className="w-3.5 h-3.5" />
              Built with curiosity and care
            </div>
          </motion.div>

          {/* Status + Socials + Back to top */}
          <motion.div variants={item} className="rounded-2xl border border-border/60 bg-card p-6 transition-colors duration-300 hover:border-primary/30">
            <p className="text-sm font-semibold mb-3.5">Status</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Open to opportunities
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                Remote-friendly
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                {/* Only render client time after mount to avoid SSR/client mismatch */}
                <span suppressHydrationWarning>
                  Local time: {mounted ? timeStr : "—"}
                </span>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-2">
              <Button asChild size="icon" variant="outline" aria-label="GitHub">
                <Link href="https://github.com/000-dir-wmi-0001" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="icon" variant="outline" aria-label="LinkedIn">
                <Link href="https://www.linkedin.com/in/momin-mohasin/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="icon" variant="outline" aria-label="Email">
                <Link href="/contact">
                  <Mail className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="ml-auto text-muted-foreground hover:text-foreground"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <ArrowUp />
                Top
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom line */}
        <div className="mt-10 pt-6 border-t border-border/60 text-center text-xs text-muted-foreground">
          © {year} Momin Mohasin — Built with Next.js, Tailwind CSS, and Motion.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

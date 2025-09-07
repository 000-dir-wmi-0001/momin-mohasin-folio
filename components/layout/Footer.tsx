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
    <div className="w-full border-t mt-10 bg-white/60 dark:bg-black/40 backdrop-blur-md">
      <footer className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {/* CTA */}
          <motion.div variants={item} className="rounded-xl border shadow-sm p-5 bg-white/60 dark:bg-zinc-900/50">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="text-lg font-bold">Let’s build something great.</p>
                <p className="text-sm text-muted-foreground mt-1">
                  I’m open to impactful web projects. If you have an idea, I’d love to help ship it.
                </p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button asChild size="sm">
                <Link href="/contact">Contact</Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link href="/">Resume</Link>
              </Button>
            </div>
          </motion.div>

          {/* Tech stack chips */}
          <motion.div variants={item} className="rounded-xl border shadow-sm p-5 bg-white/60 dark:bg-zinc-900/50">
            <p className="text-sm font-semibold mb-3">Tech I enjoy</p>
            <div className="flex flex-wrap gap-2">
              {stack.map((s) => (
                <Button key={s} size="sm" variant="outline" className="rounded-full">
                  {s}
                </Button>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Heart className="w-3.5 h-3.5" />
              Built with curiosity and care
            </div>
          </motion.div>

          {/* Status + Socials + Back to top */}
          <motion.div variants={item} className="rounded-xl border shadow-sm p-5 bg-white/60 dark:bg-zinc-900/50">
            <p className="text-sm font-semibold mb-3">Status</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500" />
                Open to opportunities
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Remote-friendly
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {/* Only render client time after mount to avoid SSR/client mismatch */}
                <span suppressHydrationWarning>
                  Local time: {mounted ? timeStr : "—"}
                </span>
              </li>
            </ul>

            <div className="mt-4 flex gap-2">
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
                variant="outline"
                className="ml-auto"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <ArrowUp />
                Back to top
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom line */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {year} Momin Mohasin — Built with Next.js, Tailwind CSS, and Motion.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

"use client";
import Hero from "@/components/Hero";
import { motion } from "motion/react";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero/>
      <Services/>

      {/* <section className="mt-8 mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring" } as any}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[{
            title: 'About Me', desc: 'Get to know my background and interests.', href: '/about'
          },{
            title: 'Experience', desc: 'A quick look at where I’ve worked.', href: '/experience'
          },{
            title: 'Contact', desc: 'Have an idea? Let’s talk.', href: '/contact'
          }].map((c) => (
            <Link key={c.title} href={c.href} className="rounded-xl border shadow-sm p-4 backdrop-blur bg-white/60 dark:bg-zinc-900/50 hover:bg-primary/5 transition-colors">
              <p className="font-bold">{c.title}</p>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </Link>
          ))}
        </motion.div>
      </section> */}
    </>
  );
}

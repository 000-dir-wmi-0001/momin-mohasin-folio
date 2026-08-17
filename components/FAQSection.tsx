"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqData, type FAQItem } from "@/lib/faq-data";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 md:py-28 lg:py-32 border-t border-border/60">
      <div className="relative mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center px-3.5 py-1.5 mb-6 text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground bg-muted/50 rounded-full border border-border/70">
            <HelpCircle className="w-3.5 h-3.5 mr-1.5 shrink-0 text-primary" />
            Frequently Asked Questions
          </div>
          <h3 id="faq-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight tracking-tight">
            Got Questions?
            <span className="block text-primary">I&apos;ve Got Answers</span>
          </h3>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Here are some common questions about my services, experience, and how I can help bring your project to life.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: Math.min(index * 0.06, 0.3), duration: 0.4 }}
              className="rounded-xl border border-border/60 bg-card overflow-hidden transition-colors duration-300 hover:border-primary/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 transition-colors duration-200 hover:bg-muted/40"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm md:text-base font-semibold text-foreground">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 rounded-full bg-muted/60 p-1"
                >
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-5 text-sm">
            Still have questions? I&apos;d love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm rounded-full hover:bg-primary/90 transition-colors duration-200 font-medium"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
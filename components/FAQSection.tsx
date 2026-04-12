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
    <section className="w-full py-16 md:py-24 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/[0.015] via-background to-secondary/[0.015]" />
      <div className="absolute top-0 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-secondary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center px-6 py-3 mb-8 text-sm font-semibold text-primary bg-primary/8 rounded-full border border-primary/15 backdrop-blur-sm shadow-lg">
            <HelpCircle className="w-4 h-4 mr-2 flex-shrink-0" />
            Frequently Asked Questions
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Got Questions?
            <span className="block text-primary">I've Got Answers</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some common questions about my services, experience, and how I can help bring your project to life.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl border shadow-sm bg-white/60 dark:bg-zinc-900/50 backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Still have questions? I'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
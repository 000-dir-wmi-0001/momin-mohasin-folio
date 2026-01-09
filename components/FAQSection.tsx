"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in full-stack development with expertise in React, Next.js, NestJS, FastAPI, Django, TypeScript, PostgreSQL, MongoDB, Docker, and AWS. I focus on building scalable web applications with modern technologies."
  },
  {
    question: "Do you work on freelance projects?",
    answer: "Yes, I'm open to freelance opportunities and collaborations. I can help with web development projects, API development, database design, and full-stack application development. Feel free to reach out to discuss your project requirements."
  },
  {
    question: "What is your experience level?",
    answer: "I have over 1+ years of professional experience in software development, working with multiple companies and delivering production-ready applications. I'm experienced in agile development practices and have worked on both small projects and large-scale applications."
  },
  {
    question: "Do you provide maintenance and support for projects?",
    answer: "Yes, I provide ongoing maintenance and support for projects I've developed. This includes bug fixes, feature updates, performance optimizations, and technical support to ensure your application continues to run smoothly."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on complexity and scope. Simple projects might take 1-2 weeks, while complex full-stack applications could take 4-8 weeks or more. I provide detailed timelines and milestones for each project after understanding the requirements."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! I work with clients globally and am comfortable with different time zones. I communicate effectively in English and can adapt to various project management methodologies and collaboration tools."
  }
];

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
          <div className="inline-block px-6 py-3 mb-8 text-sm font-semibold text-primary bg-primary/8 rounded-full border border-primary/15 backdrop-blur-sm shadow-lg">
            <HelpCircle className="w-4 h-4 inline mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Got Questions?
            <span className="block text-primary">I've Got Answers</span>
          </h2>
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
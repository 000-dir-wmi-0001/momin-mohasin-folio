/**
 * Shared FAQ Data Module
 * Centralized FAQ data for use across components and layout
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in full-stack development with expertise in React, Next.js, NestJS, FastAPI, Django, TypeScript, PostgreSQL, MongoDB, Docker, Kubernetes, and AWS. I also have hands-on experience building AI/LLM-powered applications using RAG, LangChain, embeddings, and vector search, integrating Python-based AI services with Node.js backends."
  },
  {
    question: "Do you work on freelance projects?",
    answer: "Yes, I'm open to freelance opportunities and collaborations. I can help with web development projects, API development, database design, AI/LLM integration, and full-stack application development. Feel free to reach out to discuss your project requirements."
  },
  {
    question: "What is your experience level?",
    answer: "I have over 1.5+ years of professional experience in software development, working with multiple companies and delivering production-ready applications. I'm experienced in agile development practices and have worked on both small projects and large-scale applications."
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

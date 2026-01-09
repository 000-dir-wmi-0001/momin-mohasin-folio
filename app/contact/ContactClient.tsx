'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion, Variants } from 'motion/react';

// Dynamically import heavy components
const Button = dynamic(() => import('@/components/ui/button').then(mod => ({ default: mod.Button })), {
  loading: () => <div className="h-10 w-24 bg-muted animate-pulse rounded" />
});

const Input = dynamic(() => import('@/components/ui/input').then(mod => ({ default: mod.Input })), {
  loading: () => <div className="h-10 w-full bg-muted animate-pulse rounded" />
});

const Textarea = dynamic(() => import('@/components/ui/textarea').then(mod => ({ default: mod.Textarea })), {
  loading: () => <div className="h-32 w-full bg-muted animate-pulse rounded" />
});

// Lazy load icons
const Mail = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Mail })), {
  loading: () => <div className="w-4 h-4 bg-muted animate-pulse rounded" />
});

const Loader2 = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Loader2 })), {
  loading: () => <div className="w-4 h-4 bg-muted animate-pulse rounded animate-spin" />
});

// Import form hook normally (can't be dynamically imported)
import { useForm } from 'react-hook-form';
import { FormState } from "@/interface/contact"
import { sendContactForm } from "@/api/api";


const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } },
};




export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormState>();

  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = React.useState<string>('');

  const onSubmit = async (data: FormState) => {
    setServerMessage('');
    try {
      setStatus('loading');
      await sendContactForm(data);
      setStatus('success');
      setServerMessage('Thanks! Your message has been sent.');
      reset?.();
    } catch (err: unknown) {
      setStatus('error');
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      setServerMessage(message);
    } finally {
      setTimeout(() => setStatus('idle'), 1200);
    }
  };

  return (
    <section className="w-full font-mono min-h-screen">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-3xl px-4 md:px-6 py-8 md:py-12"
        style={{
          contain: 'layout style paint',
          // Optimize for mobile scrolling
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <motion.h1
          variants={item}
          className="text-3xl md:text-4xl font-extrabold text-center select-none"
        >
          Contact
        </motion.h1>
        <motion.p
          variants={item}
          className="text-center text-sm text-muted-foreground mt-2 select-none"
        >
          Have a project in mind? Send a message and I’ll get back to you.
        </motion.p>

        <motion.form
          variants={item}
          onSubmit={handleSubmit ? handleSubmit(onSubmit) : undefined}
          className="mt-8 rounded-xl border shadow-sm p-5 md:p-6 backdrop-blur bg-white/60 dark:bg-zinc-900/50"
          style={{ contain: 'layout style paint' }}
        >
          {/* Honeypot */}
          <input
            type="text"
            className="hidden"
            tabIndex={-1}
            aria-hidden="true"
            {...(register ? register('website') : {})}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-sm font-semibold">Name</label>
              <Suspense fallback={<div className="mt-1 h-10 w-full bg-muted animate-pulse rounded-md" />}>
                <Input
                  id="name"
                  aria-invalid={!!errors?.name}
                  {...(register ? register('name', { required: 'Name is required' }) : {})}
                  className="mt-1 w-full rounded-md border bg-background px-3 py-3 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 text-base"
                  placeholder="Your name"
                  autoComplete="name"
                  // Mobile optimizations
                  inputMode="text"
                  autoCapitalize="words"
                />
              </Suspense>
              {errors?.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold">Email</label>
              <Suspense fallback={<div className="mt-1 h-10 w-full bg-muted animate-pulse rounded-md" />}>
                <Input
                  id="email"
                  type="email"
                  aria-invalid={!!errors?.email}
                  {...(register ? register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                  }) : {})}
                  className="mt-1 w-full rounded-md border bg-background px-3 py-3 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 text-base"
                  placeholder="you@example.com"
                  autoComplete="email"
                  // Mobile optimizations
                  inputMode="email"
                  autoCapitalize="none"
                  autoCorrect="off"
                />
              </Suspense>
              {errors?.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="subject" className="text-sm font-semibold">Subject (optional)</label>
            <Suspense fallback={<div className="mt-1 h-10 w-full bg-muted animate-pulse rounded-md" />}>
              <Input
                id="subject"
                {...(register ? register('subject', { required: false }) : {})}
                className="mt-1 w-full rounded-md border bg-background px-3 py-3 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 text-base"
                placeholder="How can I help?"
                autoComplete="off"
                // Mobile optimizations
                inputMode="text"
                autoCapitalize="sentences"
              />
            </Suspense>
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="text-sm font-semibold">Message</label>
            <Suspense fallback={<div className="mt-1 h-32 w-full bg-muted animate-pulse rounded-md" />}>
              <Textarea
                id="message"
                aria-invalid={!!errors?.message}
                {...(register ? register('message', { required: 'Message is required' }) : {})}
                className="mt-1 min-h-32 w-full rounded-md border bg-background px-3 py-3 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 resize-none text-base"
                placeholder="Tell me a bit about your project..."
                autoComplete="off"
                // Mobile optimizations
                inputMode="text"
                autoCapitalize="sentences"
                rows={4}
              />
            </Suspense>
            {errors?.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
          </div>

          {/* Feedback */}
          {serverMessage && (
            <div
              className={`mt-4 rounded-md border px-3 py-2 text-sm ${
                status === 'success'
                  ? 'border-emerald-500/40 text-emerald-600 dark:text-emerald-400'
                  : status === 'error'
                  ? 'border-destructive/40 text-destructive'
                  : 'border-border text-muted-foreground'
              }`}
            >
              {serverMessage}
            </div>
          )}

          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Suspense fallback={<div className="h-10 w-32 bg-muted animate-pulse rounded" />}>
              <Button
                type="submit"
                disabled={status === 'loading'}
                className="gap-2 flex-1 sm:flex-none"
                size="default"
              >
                {status === 'loading' ? (
                  <Suspense fallback={<div className="w-4 h-4 bg-muted animate-pulse rounded" />}>
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </Suspense>
                ) : (
                  <Suspense fallback={<div className="w-4 h-4 bg-muted animate-pulse rounded" />}>
                    <Mail className="w-4 h-4" />
                  </Suspense>
                )}
                {status === 'loading' ? 'Sending...' : 'Send message'}
              </Button>
            </Suspense>
            <Suspense fallback={<div className="h-10 w-20 bg-muted animate-pulse rounded" />}>
              <Button
                type="button"
                variant="outline"
                onClick={() => reset?.()}
                className="flex-1 sm:flex-none"
                size="default"
              >
                Reset
              </Button>
            </Suspense>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}
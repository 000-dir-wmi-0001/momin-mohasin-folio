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

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";


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

    // Honeypot: bots fill hidden fields — silently no-op instead of tipping them off
    if (data.website) {
      setStatus('success');
      setServerMessage('Thanks! Your message has been sent.');
      reset?.();
      setTimeout(() => setStatus('idle'), 1200);
      return;
    }

    try {
      setStatus('loading');

      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: data.name,
        email: data.email,
        subject: data.subject || `New message from ${data.name}`,
        message: data.message,
      };

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setServerMessage(result.message || 'Thanks! Your message has been sent.');
        reset?.();
      } else {
        throw new Error(result.message || 'Something went wrong.');
      }
    } catch (err: unknown) {
      setStatus('error');
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      setServerMessage(message);
    } finally {
      setTimeout(() => setStatus('idle'), 1200);
    }
  };

  return (
    <section className="w-full min-h-screen">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-2xl px-4 md:px-6 py-14 md:py-20"
        style={{
          contain: 'layout style paint',
          // Optimize for mobile scrolling
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <motion.h1
          variants={item}
          className="text-3xl md:text-4xl font-bold text-center tracking-tight select-none"
        >
          Contact
        </motion.h1>
        <motion.p
          variants={item}
          className="text-center text-sm md:text-base text-muted-foreground mt-3 select-none max-w-md mx-auto"
        >
          Have a project in mind? Send a message and I’ll get back to you.
        </motion.p>

        <motion.form
          variants={item}
          onSubmit={handleSubmit ? handleSubmit(onSubmit) : undefined}
          className="mt-10 rounded-2xl border border-border/60 bg-card p-6 md:p-8"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground/90">Name</label>
              <Suspense fallback={<div className="mt-1.5 h-10 w-full bg-muted animate-pulse rounded-lg" />}>
                <Input
                  id="name"
                  aria-invalid={!!errors?.name}
                  {...(register ? register('name', { required: 'Name is required' }) : {})}
                  className="mt-1.5 w-full"
                  placeholder="Your name"
                  autoComplete="name"
                  // Mobile optimizations
                  inputMode="text"
                  autoCapitalize="words"
                />
              </Suspense>
              {errors?.name && <p className="mt-1.5 text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground/90">Email</label>
              <Suspense fallback={<div className="mt-1.5 h-10 w-full bg-muted animate-pulse rounded-lg" />}>
                <Input
                  id="email"
                  type="email"
                  aria-invalid={!!errors?.email}
                  {...(register ? register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                  }) : {})}
                  className="mt-1.5 w-full"
                  placeholder="you@example.com"
                  autoComplete="email"
                  // Mobile optimizations
                  inputMode="email"
                  autoCapitalize="none"
                  autoCorrect="off"
                />
              </Suspense>
              {errors?.email && <p className="mt-1.5 text-xs text-destructive">{errors.email.message}</p>}
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="subject" className="text-sm font-medium text-foreground/90">Subject (optional)</label>
            <Suspense fallback={<div className="mt-1.5 h-10 w-full bg-muted animate-pulse rounded-lg" />}>
              <Input
                id="subject"
                {...(register ? register('subject', { required: false }) : {})}
                className="mt-1.5 w-full"
                placeholder="How can I help?"
                autoComplete="off"
                // Mobile optimizations
                inputMode="text"
                autoCapitalize="sentences"
              />
            </Suspense>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="text-sm font-medium text-foreground/90">Message</label>
            <Suspense fallback={<div className="mt-1.5 h-32 w-full bg-muted animate-pulse rounded-lg" />}>
              <Textarea
                id="message"
                aria-invalid={!!errors?.message}
                {...(register ? register('message', { required: 'Message is required' }) : {})}
                className="mt-1.5 min-h-32 w-full resize-none"
                placeholder="Tell me a bit about your project..."
                autoComplete="off"
                // Mobile optimizations
                inputMode="text"
                autoCapitalize="sentences"
                rows={4}
              />
            </Suspense>
            {errors?.message && <p className="mt-1.5 text-xs text-destructive">{errors.message.message}</p>}
          </div>

          {/* Feedback */}
          {serverMessage && (
            <div
              className={`mt-5 rounded-lg border px-3.5 py-2.5 text-sm ${
                status === 'success'
                  ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400'
                  : status === 'error'
                  ? 'border-destructive/30 bg-destructive/5 text-destructive'
                  : 'border-border text-muted-foreground'
              }`}
            >
              {serverMessage}
            </div>
          )}

          <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Suspense fallback={<div className="h-10 w-32 bg-muted animate-pulse rounded-lg" />}>
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
            <Suspense fallback={<div className="h-10 w-20 bg-muted animate-pulse rounded-lg" />}>
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
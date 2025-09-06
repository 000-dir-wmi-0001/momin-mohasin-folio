'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Mail, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {useForm} from 'react-hook-form';
import {FormState} from "@/interface/contact"
import { sendContactForm } from '@/api/api';
import { Textarea } from '@/components/ui/textarea';

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
      reset();
    } catch (err: unknown) {
      setStatus('error');
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      setServerMessage(message);
    } finally {
      setTimeout(() => setStatus('idle'), 1200);
    }
  };

  return (
    <section className="w-full font-mono">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-3xl px-4 md:px-6 py-8 md:py-12"
      >
        <motion.h1 variants={item} className="text-3xl md:text-4xl font-extrabold text-center">
          Contact
        </motion.h1>
        <motion.p variants={item} className="text-center text-sm text-muted-foreground mt-2">
          Have a project in mind? Send a message and I’ll get back to you.
        </motion.p>

        <motion.form
          variants={item}
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 rounded-xl border shadow-sm p-5 md:p-6 backdrop-blur bg-white/60 dark:bg-zinc-900/50"
        >
          {/* Honeypot */}
          <input type="text" className="hidden" tabIndex={-1} aria-hidden="true" {...register('website')} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-sm font-semibold">Name</label>
              <Input
               aria-invalid={!!errors.name}
               {...register('name', { required: 'Name is required' })}
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold">Email</label>
              <Input
                aria-invalid={!!errors.email}
                {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="subject" className="text-sm font-semibold">Subject (optional)</label>
            <Input
              {...register('subject',{required:false})}
              className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              placeholder="How can I help?"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="text-sm font-semibold">Message</label>
            <Textarea
              aria-invalid={!!errors.message}
              {...register('message', { required: 'Message is required' })}
              className="mt-1 min-h-32 w-full rounded-md border bg-background px-3 py-2 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              placeholder="Tell me a bit about your project..."
            />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
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

          <div className="mt-6 flex items-center gap-3">
            <Button type="submit" disabled={status === 'loading'} className="gap-2">
              {status === 'loading' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Mail className="w-4 h-4" />
              )}
              {status === 'loading' ? 'Sending...' : 'Send message'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => reset()}
            >
              Reset
            </Button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}
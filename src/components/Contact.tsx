import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { personal } from '@/data/portfolio';
import { supabase } from '@/lib/supabase';
import SectionHeading from './SectionHeading';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email address';
    if (!form.subject.trim()) e.subject = 'Please enter a subject';
    if (!form.message.trim()) e.message = 'Please enter a message';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-lg border bg-ink-800/60 px-4 py-3 text-sm text-textmain placeholder:text-textsub/50 transition-colors focus:outline-none focus:ring-2 ${
      errors[field]
        ? 'border-red-500/50 focus:ring-red-500/20'
        : 'border-cyber-500/15 focus:border-cyber-500/40 focus:ring-cyber-500/15'
    }`;

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-0 top-1/3 h-[300px] w-[300px] rounded-full bg-flame-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-[300px] w-[300px] rounded-full bg-cyber-500/5 blur-[120px]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Let's Build Something Great"
          title="GET IN TOUCH"
          subtitle="Have an opportunity, a project idea, or a development role in mind? Let's connect and discuss how I can contribute."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="group flex items-center gap-4 rounded-xl border border-cyber-500/10 bg-ink-700/40 p-4 transition-all hover:border-flame-500/30"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-flame-500/15 to-cyber-500/15">
                  <Mail size={20} className="text-flame-500" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-widest text-textsub">Email</p>
                  <p className="truncate text-sm font-medium text-textmain group-hover:text-cyber-400">
                    {personal.email}
                  </p>
                </div>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-cyber-500/10 bg-ink-700/40 p-4 transition-all hover:border-cyber-500/30"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-flame-500/15 to-cyber-500/15">
                  <Linkedin size={20} className="text-cyber-400" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-widest text-textsub">LinkedIn</p>
                  <p className="truncate text-sm font-medium text-textmain group-hover:text-cyber-400">
                    gunesh-deva
                  </p>
                </div>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-cyber-500/10 bg-ink-700/40 p-4 transition-all hover:border-cyber-500/30"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-flame-500/15 to-cyber-500/15">
                  <Github size={20} className="text-cyber-400" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-widest text-textsub">GitHub</p>
                  <p className="truncate text-sm font-medium text-textmain group-hover:text-cyber-400">
                    @{personal.githubHandle}
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-cyber-500/10 bg-ink-700/40 p-6"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-textsub">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    placeholder="Your name"
                    className={inputClass('name')}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-textsub">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder="you@example.com"
                    className={inputClass('email')}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-textsub">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange('subject')}
                  placeholder="What's this about?"
                  className={inputClass('subject')}
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-textsub">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange('message')}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputClass('message')} resize-none`}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-flame-500 to-flame-600 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:hover:scale-100 sm:w-auto"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400"
                    role="status"
                  >
                    <CheckCircle size={16} />
                    Your message has been sent successfully. I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                    role="alert"
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Please try emailing directly at {personal.email}.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

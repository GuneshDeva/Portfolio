import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personal } from '@/data/portfolio';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/10 bg-[#18247a] py-12 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-display text-lg font-bold text-white">{personal.brand}</p>
            <p className="mt-1 text-sm text-white/70">
              Building scalable applications and reliable backends.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/75 transition-all hover:border-white/40 hover:text-white"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/75 transition-all hover:border-white/40 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/75 transition-all hover:border-white/40 hover:text-white"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="text-center">
          <p className="text-sm text-white/65">&copy; 2026 {personal.name}. All rights reserved.</p>
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollTop}
            className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-flame-500 to-flame-600 text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

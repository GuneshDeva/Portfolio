import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Moon, Sun } from 'lucide-react';
import { navLinks, personal } from '@/data/portfolio';

type NavbarProps = {
  darkMode: boolean;
  onToggleTheme: () => void;
};

export default function Navbar({ darkMode, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/85 backdrop-blur-xl border-b border-black/10 dark:bg-ink-900/85 dark:border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#home"
          onClick={(e) => handleClick(e, '#home')}
          className="group flex items-center gap-2.5"
          aria-label="Home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-flame-500 to-flame-600 shadow-lg shadow-flame-500/30 transition-transform group-hover:scale-105">
            <span className="font-display text-sm font-bold leading-none text-white">GM</span>
          </div>
        </a>

        <div className="hidden items-center lg:flex">
          <div className={`flex items-center gap-0.5 rounded-full border px-2 py-1.5 backdrop-blur-sm transition-all duration-300 ${scrolled ? 'border-black/8 bg-white/70' : 'border-black/5 bg-white/50'}`}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all ${isActive ? 'text-ink-900' : 'text-textsub hover:text-textmain'}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-flame-500 to-flame-600"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={onToggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/75 text-textsub shadow-sm transition-all hover:border-cyber-500/40 hover:text-cyber-600 dark:border-white/10 dark:bg-ink-800/70 dark:text-textsub"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="group flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#111a58]/20 transition-all hover:bg-[#25378f] hover:shadow-xl hover:shadow-[#111a58]/30 active:scale-95"
          >
            Get In Touch
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:rotate-45">
              <ArrowUpRight size={12} />
            </span>
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onToggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/75 text-textsub shadow-sm transition-colors hover:text-textmain dark:border-white/10 dark:bg-ink-800/70"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/75 text-textsub shadow-sm transition-colors hover:text-textmain dark:border-white/10 dark:bg-ink-800/70"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-black/10 bg-white/95 backdrop-blur-xl lg:hidden dark:border-white/10 dark:bg-ink-900/95"
          >
            <ul className="space-y-1 px-5 py-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${isActive ? 'bg-flame-500/15 text-flame-500' : 'text-textsub hover:bg-ink-700/60 hover:text-textmain'}`}
                    >
                      {link.label}
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-flame-500" />}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleClick(e, '#contact')}
                  className="flex items-center justify-center gap-2 rounded-xl bg-ink-900 px-4 py-3 text-sm font-semibold text-white"
                >
                  Get In Touch
                  <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

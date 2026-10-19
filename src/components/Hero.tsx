import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
import { personal, heroTechLabels } from '@/data/portfolio';

function useTypingEffect(words: string[], typingSpeed = 90, deletingSpeed = 45, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          isDeleting ? currentWord.slice(0, prev.length - 1) : currentWord.slice(0, prev.length + 1),
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

/* Floating pill positions around the arch */
const pillPositions = [
  { label: 'Java',          style: { top: '17%',  left: '1%'   }, delay: 0 },
  { label: 'Spring Boot',   style: { top: '30%',  left: '-20%'   }, delay: 0.4 },
  { label: 'Microservices', style: { top: '41%',  left: '-35%'   }, delay: 0.8 },
  { label: 'Angular',       style: { top: '22%',  right: '1%'  }, delay: 0.2 },
  { label: 'REST APIs',     style: { top: '40%',  right: '-10%'  }, delay: 0.6 },
];

export default function Hero() {
  const typed = useTypingEffect(['Java Developer', 'Full Stack Developer', 'Software Engineer', 'Backend Engineer']);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden bg-ink-700 pt-[72px]"
    >
      {/* ── Ambient blobs ── */}
      <div className="pointer-events-none absolute -left-60 top-10 h-[600px] w-[600px] rounded-full bg-flame-500/6 blur-[160px]" />
      <div className="pointer-events-none absolute -right-60 top-20 h-[600px] w-[600px] rounded-full bg-cyber-500/6 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-cyber-500/5 blur-[120px]" />

      {/* ── Bottom fade ── */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-ink-700 via-ink-700/70 to-transparent" />

      {/* ══════════════════════════════════
          MAIN HERO BODY  (fills remaining height)
      ══════════════════════════════════ */}
      <div className="relative flex flex-1 flex-col items-center justify-center">

        {/* ── BIG BACKGROUND WORD ── */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display font-bold uppercase leading-none tracking-tight text-ink-900/[0.055]"
          style={{ fontSize: 'clamp(80px, 18vw, 220px)' }}
        >
          DEVELOPER
        </motion.p>

        {/* ── ARCH + PROFILE ── */}
        <div className="relative flex items-end justify-center" style={{ height: 'clamp(320px, 55vh, 560px)' }}>

          {/* Arch shape */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            style={{
              width:  'clamp(200px, 28vw, 360px)',
              height: 'clamp(280px, 50vh, 520px)',
              borderRadius: '999px 999px 0 0',
              background: 'linear-gradient(170deg, rgba(63,95,245,0.18) 0%, rgba(111,141,255,0.12) 60%, rgba(28,169,232,0.08) 100%)',
              border: '1px solid rgba(63,95,245,0.28)',
              borderBottom: 'none',
              boxShadow: '0 0 80px rgba(63,95,245,0.14), inset 0 0 60px rgba(111,141,255,0.08)',
            }}
          />

          {/* Inner glow ring behind profile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            style={{
              width:  'clamp(180px, 25vw, 320px)',
              height: 'clamp(250px, 45vh, 470px)',
              borderRadius: '999px 999px 0 0',
              background: 'radial-gradient(ellipse at 50% 70%, rgba(63,95,245,0.12) 0%, transparent 70%)',
            }}
          />

          {/* Profile placeholder — sits inside arch, bottom-aligned */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex items-end justify-center overflow-hidden"
            style={{
              width:  'clamp(160px, 22vw, 290px)',
              height: 'clamp(220px, 44vh, 440px)',
              borderRadius: '999px 999px 0 0',
              border: '1.5px solid rgba(63,95,245,0.35)',
              borderBottom: 'none',
              background: 'linear-gradient(180deg, rgba(201,207,219,0.95) 0%, rgba(238,240,245,0.98) 100%)',
              boxShadow: '0 0 40px rgba(63,95,245,0.16)',
            }}
          >
            <img
              src="/images/profile.png"
              alt="Gunesh Murumulla"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
              className="absolute inset-0 z-10 h-full w-full object-cover object-top"
            />
            {/* SVG placeholder silhouette */}
            <div className="flex h-full w-full flex-col items-center justify-end pb-4">
              <svg
                viewBox="0 0 200 260"
                fill="none"
                className="h-full w-full"
                aria-label="Profile photo placeholder"
              >
                {/* Head */}
                <circle
                  cx="100" cy="88" r="48"
                  fill="url(#ph-head)"
                  opacity="0.35"
                />
                {/* Shoulders / body */}
                <path
                  d="M20 280 C20 210 52 175 100 175 C148 175 180 210 180 280"
                  fill="url(#ph-body)"
                  opacity="0.3"
                />
                <defs>
                  <radialGradient id="ph-head" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#6f8dff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#1ca9e8" stopOpacity="0.5" />
                  </radialGradient>
                  <linearGradient id="ph-body" x1="100" y1="175" x2="100" y2="280" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1ca9e8" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#3f5ff5" stopOpacity="0.25" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* Overlay label */}
            <div className="absolute inset-x-0 top-1/3 flex items-center justify-center">
              <span className="rounded-full border border-black/10 bg-white/85 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-textsub backdrop-blur-sm">
                Your Photo Here
              </span>
            </div>
          </motion.div>

          {/* ── Floating tech pills ── */}
          {pillPositions.map(({ label, style, delay }) => (
            <motion.div
              key={label}
              className="absolute z-20"
              style={style as React.CSSProperties}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: delay + 0.6 },
                scale:   { duration: 0.5, delay: delay + 0.6 },
                y: { duration: 3 + delay, repeat: Infinity, ease: 'easeInOut', delay: delay + 1 },
              }}
            >
              <span className="block rounded-2xl border border-cyber-500/30 bg-white/90 px-3.5 py-1.5 font-mono text-[11px] font-medium text-cyber-600 shadow-lg shadow-cyber-500/10 backdrop-blur-md">
                {label}
              </span>
            </motion.div>
          ))}

          {/* ── Stats card — bottom-right of arch ── */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-6 z-20"
            style={{ right: 'clamp(-40px, -4vw, -20px)' }}
          >
            <div className="rounded-2xl border border-white/10 bg-ink-700/70 px-5 py-4 shadow-xl backdrop-blur-md">
              <p className="font-body text-xs text-textsub">Years of</p>
              <p className="font-body text-xs text-textsub">Experience</p>
              <p className="mt-1 font-display text-4xl font-bold text-textmain">
                4<span className="text-flame-500">+</span>
              </p>
            </div>
          </motion.div>

          {/* ── Social pill — bottom-left of arch ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="absolute bottom-8 z-20 flex flex-col gap-2"
            style={{ left: 'clamp(-40px, -4vw, -20px)' }}
          >
            {[
              { href: personal.github,   label: 'GitHub',   Icon: Github },
              { href: personal.linkedin, label: 'LinkedIn', Icon: Linkedin },
              { href: `mailto:${personal.email}`, label: 'Email', Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white/80 text-textsub shadow-sm backdrop-blur-md transition-all hover:border-cyber-500/40 hover:text-cyber-600"
              >
                <Icon size={15} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── BOTTOM TEXT ROW ── */}
        <div className="relative z-20 w-full max-w-7xl px-5 pb-14 sm:px-8 lg:px-10">
          <div className="flex flex-col items-center gap-6 pt-8 sm:flex-row sm:items-end sm:justify-between">

            {/* Left: name + title */}
            <div className="text-center sm:text-left">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-mono text-sm uppercase tracking-[0.25em] text-textsub"
              >
                Hey, I'm Gunesh.
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-1 font-display font-bold leading-none tracking-tight text-textmain"
                style={{ fontSize: 'clamp(28px, 5vw, 60px)' }}
              >
                Java Full Stack
                <span className="gradient-text-flame"> Developer</span>
              </motion.h1>

              {/* Typing line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-2 flex items-center justify-center gap-1 sm:justify-start"
              >
                <span className="font-mono text-sm font-medium text-cyber-600">{typed}</span>
                <span className="typing-cursor" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="mt-3 max-w-xl text-sm leading-relaxed text-textsub sm:text-base"
              >
                {personal.tagline}
              </motion.p>
            </div>

            {/* Right: CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <button
                onClick={() => scrollTo('#projects')}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-flame-500 to-flame-600 px-6 py-3 text-sm font-semibold text-ink-900 shadow-lg shadow-flame-500/25 transition-all hover:shadow-flame-500/40 hover:scale-[1.03] active:scale-95"
              >
                Explore My Work
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 rounded-full border border-black/12 bg-white/75 px-6 py-3 text-sm font-semibold text-textmain shadow-sm backdrop-blur-sm transition-all hover:border-cyber-500/40 hover:text-cyber-600 hover:shadow-md active:scale-95"
              >
                <Mail size={15} />
                Contact Me
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-1 text-textsub/50 transition-colors hover:text-cyber-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-label="Scroll to About"
      >
        <ChevronDown size={18} className="animate-scroll-bounce" />
      </motion.button>
    </section>
  );
}

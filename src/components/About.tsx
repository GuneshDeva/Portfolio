import { motion } from 'framer-motion';
import { Download, GraduationCap, Code2, Server, Boxes, Film } from 'lucide-react';
import { personal, highlights } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import ProfilePlaceholder from './ProfilePlaceholder';

const highlightIcons = [GraduationCap, Code2, Server, Boxes, Film];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full bg-flame-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="A Little About Me"
          title="WHO IS GUNESH?"
          subtitle="Software developer by profession, creative thinker by passion."
        />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: profile illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-md">
              {/* Glow behind card */}
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-flame-500/10 to-cyber-500/10 blur-2xl" />

              {/* Image card — tall rectangle, no cropping */}
              <div
                className="relative overflow-hidden rounded-2xl border border-cyber-500/25 shadow-xl"
                style={{ aspectRatio: '3 / 4' }}
              >
                <img
                  src="/images/profile.png"
                  alt="Gunesh Murumulla"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                  className="absolute inset-0 z-10 h-full w-full object-cover object-top"
                />
                {/* Gradient overlay for readability of location badge */}
                <div className="absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-ink-900/80 to-transparent" />

                {/* Location badge */}
                <div className="absolute bottom-3 left-1/2 z-30 -translate-x-1/2 rounded-full border border-cyber-500/20 bg-ink-800/80 px-4 py-2 backdrop-blur-sm">
                  <span className="font-mono text-xs text-cyber-400">
                    {personal.location}
                  </span>
                </div>
              </div>

              {/* Decorative floating dots */}
              <motion.div
                className="absolute -right-2 top-1/4 h-2 w-2 rounded-full bg-flame-500"
                animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -left-3 bottom-1/4 h-1.5 w-1.5 rounded-full bg-cyber-500"
                animate={{ y: [0, 12, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>

          {/* Right: bio + highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-base leading-relaxed text-textsub sm:text-lg">
              {personal.bio}
            </p>

            {/* Highlights */}
            <div className="mt-8 space-y-3">
              {highlights.map((item, i) => {
                const Icon = highlightIcons[i] ?? Code2;
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center gap-3 rounded-lg border border-cyber-500/10 bg-ink-700/40 px-4 py-3 transition-colors hover:border-flame-500/30"
                  >
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-flame-500/15 to-cyber-500/15">
                      <Icon size={18} className="text-flame-500" />
                    </div>
                    <span className="text-sm font-medium text-textmain">{item}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Download resume */}
            <a
              href="/resume.pdf"
              download
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-flame-500/30 bg-flame-500/10 px-5 py-3 text-sm font-semibold text-flame-500 transition-all hover:bg-flame-500/20 hover:glow-orange"
            >
              <Download size={16} />
              Download Resume
            </a>
            <p className="mt-2 font-mono text-xs text-textsub/60">
              Add your resume as resume.pdf in the public folder to enable download.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

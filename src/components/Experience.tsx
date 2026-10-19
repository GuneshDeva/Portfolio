import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Briefcase } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-0 top-1/3 h-[300px] w-[300px] rounded-full bg-cyber-500/5 blur-[120px]" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="My Professional Journey"
          title="WORK EXPERIENCE"
          subtitle="Roles and responsibilities across enterprise, hospitality, and full-stack development."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyber-500/40 via-cyber-500/20 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const isOpen = expanded === i;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex flex-col gap-4 pl-12 md:flex-row md:items-center md:gap-8 md:pl-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-2 -translate-x-1/2 md:left-1/2">
                    <div className="relative">
                      <div className="h-3.5 w-3.5 rounded-full bg-flame-500 ring-4 ring-flame-500/20" />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-flame-500/40"
                        animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className={`md:w-1/2 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="rounded-xl border border-cyber-500/10 bg-ink-700/50 p-5 transition-all hover:border-cyber-500/25 hover:bg-ink-700/70">
                      {/* Date */}
                      <span className="font-mono text-xs font-medium text-flame-500">
                        {exp.dates}
                      </span>

                      {/* Title */}
                      <h3 className="mt-2 font-display text-lg font-semibold text-textmain">
                        {exp.title}
                      </h3>

                      {/* Company + location */}
                      <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-textsub">
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={14} className="text-cyber-400" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-cyber-400" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Tech badges */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-cyber-500/15 bg-ink-800/60 px-2 py-0.5 font-mono text-[11px] text-cyber-400/90"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Expandable responsibilities */}
                      <button
                        onClick={() => setExpanded(isOpen ? null : i)}
                        className="mt-4 flex items-center gap-1 text-sm font-medium text-textsub transition-colors hover:text-cyber-400"
                        aria-expanded={isOpen}
                      >
                        {isOpen ? 'Hide details' : 'View details'}
                        <ChevronDown
                          size={14}
                          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="mt-3 space-y-2 overflow-hidden"
                          >
                            {exp.responsibilities.map((r, j) => (
                              <li
                                key={j}
                                className="flex gap-2 text-sm leading-relaxed text-textsub"
                              >
                                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-flame-500" />
                                {r}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

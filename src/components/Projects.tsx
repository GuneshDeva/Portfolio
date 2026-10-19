import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, X, Video } from 'lucide-react';
import { projects } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-0 top-1/4 h-[300px] w-[300px] rounded-full bg-flame-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Selected Projects"
          title="FEATURED WORK"
          subtitle="A selection of projects spanning full-stack applications and microservices architecture."
        />

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-cyber-500/10 bg-ink-700/50 transition-colors hover:border-cyber-500/30"
              >
                {/* Visual area */}
                <div className="relative h-44 overflow-hidden">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none';
                      }}
                      className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-br from-flame-500/10 via-transparent to-cyber-500/10" />
                  {/* Decorative corners */}
                  <div className="absolute left-3 top-3 h-6 w-6 border-l border-t border-flame-500/30" />
                  <div className="absolute right-3 bottom-3 h-6 w-6 border-b border-r border-cyber-500/30" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-semibold text-textmain transition-colors group-hover:text-cyber-400">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-textsub">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-cyber-500/15 bg-ink-800/60 px-2 py-0.5 font-mono text-[10px] text-cyber-400/80"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="rounded-md border border-flame-500/15 bg-ink-800/60 px-2 py-0.5 font-mono text-[10px] text-flame-500/80">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex items-center gap-3">
                    <button
                      onClick={() => setSelected(projects.indexOf(project))}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-flame-500 transition-colors hover:text-flame-400"
                    >
                      View Details
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </button>
                    <div className="ml-auto flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-textsub transition-colors hover:text-cyber-400"
                          aria-label="GitHub repository"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-textsub transition-colors hover:text-cyber-400"
                          aria-label="Live demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {project.videoUrl && (
                        <a
                          href={project.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-textsub transition-colors hover:text-cyber-400"
                          aria-label="Video demo"
                        >
                          <Video size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-cyber-500/20 bg-ink-700 p-6"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 text-textsub transition-colors hover:text-textmain"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {projects[selected].image && (
                <img
                  src={projects[selected].image}
                  alt={`${projects[selected].title} preview`}
                  className="mb-5 h-52 w-full rounded-xl object-cover object-top"
                />
              )}
              <h3 className="font-display text-xl font-semibold text-textmain">
                {projects[selected].title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-textsub">
                {projects[selected].description}
              </p>

              {/* Technologies */}
              <h4 className="mt-5 font-mono text-xs uppercase tracking-widest text-cyber-400">
                Tech Stack
              </h4>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {projects[selected].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-cyber-500/15 bg-ink-800/60 px-2.5 py-1 font-mono text-xs text-cyber-400/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features */}
              <h4 className="mt-5 font-mono text-xs uppercase tracking-widest text-flame-500">
                Key Features
              </h4>
              <ul className="mt-2 space-y-2">
                {projects[selected].features.map((feat, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-sm leading-relaxed text-textsub"
                  >
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-flame-500" />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Links */}
              {(projects[selected].githubUrl || projects[selected].liveUrl || projects[selected].videoUrl) && (
                <div className="mt-6 flex gap-3">
                  {projects[selected].githubUrl && (
                    <a
                      href={projects[selected].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-cyber-500/20 px-4 py-2 text-sm text-cyber-400 transition-colors hover:bg-cyber-500/10"
                    >
                      <Github size={16} /> Source Code
                    </a>
                  )}
                  {projects[selected].liveUrl && (
                    <a
                      href={projects[selected].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-flame-500 to-flame-600 px-4 py-2 text-sm font-semibold text-ink-900"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {projects[selected].videoUrl && (
                    <a
                      href={projects[selected].videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-cyber-500/20 px-4 py-2 text-sm text-cyber-600 transition-colors hover:bg-cyber-500/10"
                    >
                      <Video size={16} /> Video Demo
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

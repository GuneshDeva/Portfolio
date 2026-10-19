import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { personal } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

export default function GitHubActivity() {
  const githubStatsUrl = `https://github-readme-stats.vercel.app/api?username=${personal.githubHandle}&show_icons=true&theme=tokyonight&hide_border=true&title_color=FF9800&icon_color=00D9FF&text_color=A7B0BE`;
  const githubStreakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${personal.githubHandle}&theme=tokyonight&hide_border=true&ring=FF9800&fire=FF9800&currStreakLabel=00D9FF`;

  return (
    <section id="github" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full bg-cyber-500/5 blur-[120px]" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="My Developer Activity"
          title="GITHUB & PROFILES"
          subtitle="Open-source contributions and development activity."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* GitHub stats card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl border border-cyber-500/10 bg-ink-700/40 p-5"
          >
            <div className="mb-3 flex items-center gap-2">
              <Github size={18} className="text-cyber-400" />
              <h3 className="font-display text-sm font-semibold text-textmain">
                GitHub Stats
              </h3>
            </div>
            <img
              src={githubStatsUrl}
              alt={`${personal.githubHandle}'s GitHub statistics`}
              loading="lazy"
              className="w-full rounded-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <noscript>
              <p className="text-sm text-textsub">GitHub statistics require JavaScript to load.</p>
            </noscript>
          </motion.div>

          {/* Streak card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-cyber-500/10 bg-ink-700/40 p-5"
          >
            <div className="mb-3 flex items-center gap-2">
              <Github size={18} className="text-flame-500" />
              <h3 className="font-display text-sm font-semibold text-textmain">
                Contribution Streak
              </h3>
            </div>
            <img
              src={githubStreakUrl}
              alt={`${personal.githubHandle}'s GitHub contribution streak`}
              loading="lazy"
              className="w-full rounded-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </motion.div>
        </div>

        {/* Profile links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex flex-wrap justify-center gap-4"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-cyber-500/20 bg-ink-700/50 px-5 py-3 text-sm font-medium text-cyber-400 transition-all hover:border-cyber-500/50 hover:bg-ink-700"
          >
            <Github size={18} />
            @{personal.githubHandle}
            <ExternalLink size={14} className="opacity-60" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-cyber-500/20 bg-ink-700/50 px-5 py-3 text-sm font-medium text-cyber-400 transition-all hover:border-cyber-500/50 hover:bg-ink-700"
          >
            <Linkedin size={18} />
            LinkedIn
            <ExternalLink size={14} className="opacity-60" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

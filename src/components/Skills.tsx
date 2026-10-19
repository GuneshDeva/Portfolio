import { motion } from 'framer-motion';
import { skillGroups, additionalSkills } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import { Icon } from './IconMapper';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[300px] w-[300px] rounded-full bg-flame-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Tech Stack & Expertise"
          title="SKILLS & TECHNOLOGIES"
          subtitle="A comprehensive toolkit spanning backend, frontend, databases, and DevOps."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="group relative rounded-2xl border border-cyber-500/10 bg-ink-700/40 p-6 transition-all hover:border-cyber-500/25 hover:bg-ink-700/60"
            >
              {/* Card header */}
              <div className="mb-5 flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    group.accent === 'flame'
                      ? 'bg-flame-500/15 text-flame-500'
                      : 'bg-cyber-500/15 text-cyber-400'
                  }`}
                >
                  <Icon name={group.icon} size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold text-textmain">
                  {group.title}
                </h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-1.5 rounded-lg border border-cyber-500/10 bg-ink-800/60 px-3 py-2 transition-all hover:scale-105 hover:border-flame-500/30"
                  >
                    <Icon
                      name={skill.icon}
                      size={14}
                      className="text-cyber-400/80 transition-colors group-hover:text-cyber-400"
                    />
                    <span className="font-mono text-xs font-medium text-textsub transition-colors hover:text-textmain">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Glow line at bottom */}
              <div
                className={`absolute bottom-0 left-6 right-6 h-px ${
                  group.accent === 'flame'
                    ? 'bg-gradient-to-r from-flame-500/0 via-flame-500/30 to-flame-500/0'
                    : 'bg-gradient-to-r from-cyber-500/0 via-cyber-500/30 to-cyber-500/0'
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional skills row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="font-mono text-sm text-textsub">Also familiar with:</span>
          {additionalSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 rounded-lg border border-flame-500/15 bg-flame-500/5 px-4 py-2 transition-all hover:scale-105 hover:border-flame-500/40"
            >
              <Icon name={skill.icon} size={16} className="text-flame-500" />
              <span className="font-mono text-sm font-medium text-textmain">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

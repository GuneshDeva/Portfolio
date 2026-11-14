import { motion } from 'framer-motion';
import { creativeTools } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import { Icon } from './IconMapper';

export default function CreativeSkills() {
  return (
    <section id="creative" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-flame-500/5 blur-[140px]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Beyond Code — Creative Editing"
          title="CREATIVE SKILLS"
          subtitle="Combining technical problem-solving with visual storytelling."
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto -mt-8 mb-12 max-w-2xl text-center text-base leading-relaxed text-textsub"
        >
          When I'm not building applications, I channel my creativity into video editing
          and digital content — crafting visual stories with the same precision I bring to code.
        </motion.p>

        {/* Tool badges in gallery-style grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {creativeTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col items-center gap-3 rounded-xl border border-cyber-500/10 bg-ink-700/40 p-6 text-center transition-all hover:border-flame-500/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-flame-500/10 to-cyber-500/10 transition-all group-hover:from-flame-500/20 group-hover:to-cyber-500/20">
                <Icon
                  name={tool.icon}
                  size={24}
                  className="text-cyber-400 transition-colors group-hover:text-flame-500"
                />
              </div>
              <span className="text-sm font-medium text-textsub transition-colors group-hover:text-textmain">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>

       
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.3 }}
  className="mt-10"
>
  <h3 className="mb-6 text-center text-xl font-semibold text-textmain">
    Video Editing Samples
  </h3>

  {/* Both videos inside the same grid */}
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

    {/* Video 1 */}
    <div className="overflow-hidden rounded-xl border border-cyber-500/15 bg-ink-700/40">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="aspect-video w-full bg-black object-contain"
      >
        <source src="/videos/main.mp4" type="video/mp4" />
        Your browser does not support video playback.
      </video>

      <p className="p-4 text-sm font-medium text-textsub">
        Amazon Prime Logo Animation
      </p>
    </div>

    {/* Video 2 */}
    <div className="overflow-hidden rounded-xl border border-cyber-500/15 bg-ink-700/40">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="aspect-video w-full bg-black object-contain"
      >
        <source
          src="/videos/30days- 30 videos- Day 7 final Final.mp4"
          type="video/mp4"
        />
        Your browser does not support video playback.
      </video>

      <p className="p-4 text-sm font-medium text-textsub">
        LinkedIn Logo Animation
      </p>
    </div>

    {/* Video 3 */}
    <div className="overflow-hidden rounded-xl border border-cyber-500/15 bg-ink-700/40">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="aspect-video w-full bg-black object-contain"
      >
        <source
          src="/videos/Comp 2.mp4"
          type="video/mp4"
        />
        Your browser does not support video playback.
      </video>

      <p className="p-4 text-sm font-medium text-textsub">
        Cartoon Style Animation
      </p>
    </div>
 {/* Video 4 */}
    <div className="overflow-hidden rounded-xl border border-cyber-500/15 bg-ink-700/40">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="aspect-video w-full bg-black object-contain"
      >
        <source
          src="/videos/Main_1.mp4"
          type="video/mp4"
        />
        Your browser does not support video playback.
      </video>

      <p className="p-4 text-sm font-medium text-textsub">
        Partical Disslove Animation -iPhone 
      </p>
    </div>
  </div>
</motion.div>

      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { services } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import { Icon } from './IconMapper';

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-[300px] w-[300px] rounded-full bg-cyber-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What I Can Build"
          title="SERVICES"
          subtitle="From backend architecture to full-stack applications and creative content."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-cyber-500/10 bg-ink-700/40 p-6 transition-colors hover:border-flame-500/25"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-flame-500/0 blur-2xl transition-all duration-500 group-hover:bg-flame-500/10" />

              {/* Icon */}
              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-flame-500/10 to-cyber-500/10 transition-all group-hover:from-flame-500/20 group-hover:to-cyber-500/20">
                <Icon
                  name={service.icon}
                  size={26}
                  className="text-cyber-400 transition-colors group-hover:text-flame-500"
                />
              </div>

              <h3 className="font-display text-base font-semibold text-textmain">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-textsub">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-flame-500/0 via-flame-500/0 to-cyber-500/0 transition-all duration-500 group-hover:from-flame-500/30 group-hover:via-cyber-500/30 group-hover:to-flame-500/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

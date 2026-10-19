import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  label: string;
  title: string;
  subtitle?: ReactNode;
  centered?: boolean;
};

export default function SectionHeading({ label, title, subtitle, centered = true }: Props) {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm font-medium uppercase tracking-[0.3em] text-flame-500"
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-3 font-display text-3xl font-semibold text-textmain sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`mt-4 max-w-2xl text-textsub ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.div>
      )}
    </div>
  );
}

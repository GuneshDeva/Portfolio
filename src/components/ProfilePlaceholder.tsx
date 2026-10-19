import { motion } from 'framer-motion';

type Props = {
  size?: number;
  className?: string;
};

export default function ProfilePlaceholder({ size = 360, className = '' }: Props) {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Animated glow rings */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(63,95,245,0.16) 0%, rgba(28,169,232,0.08) 50%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Rotating dashed ring */}
      <motion.div
        className="absolute rounded-full border border-dashed border-cyber-500/20"
        style={{ inset: 8 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      {/* Inner circle with gradient border */}
      <div
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: size * 0.82,
          height: size * 0.82,
          background:
            'linear-gradient(135deg, rgba(63,95,245,0.18), rgba(28,169,232,0.14))',
          border: '2px solid rgba(63, 95, 245, 0.35)',
          boxShadow:
            '0 0 40px rgba(63, 95, 245, 0.16), 0 0 80px rgba(28, 169, 232, 0.10)',
        }}
      >
        <img
          src="/images/profile.png"
          alt="Gunesh Murumulla"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
          className="absolute inset-0 z-10 h-full w-full rounded-full object-cover"
        />
        {/* Placeholder silhouette */}
        <div className="flex flex-col items-center justify-center">
          <svg
            width={size * 0.35}
            height={size * 0.35}
            viewBox="0 0 100 100"
            fill="none"
            className="opacity-40"
          >
            <circle cx="50" cy="38" r="18" fill="url(#grad-head)" />
            <path
              d="M18 90 C18 70 35 60 50 60 C65 60 82 70 82 90"
              fill="url(#grad-body)"
            />
            <defs>
              <linearGradient id="grad-head" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#3f5ff5" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#1ca9e8" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="grad-body" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#3f5ff5" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#1ca9e8" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
          <p className="mt-2 font-mono text-xs uppercase tracking-widest text-textsub">
            Your Photo Here
          </p>
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
  );
}

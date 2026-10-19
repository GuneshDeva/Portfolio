import { motion } from 'framer-motion';

type Dot = {
  id: number;
  x: string;
  y: string;
  size: number;
  duration: number;
  delay: number;
  color: string;
};

const dots: Dot[] = [
  { id: 1, x: '10%', y: '15%', size: 4, duration: 8, delay: 0, color: 'rgb(var(--flame-500))' },
  { id: 2, x: '85%', y: '20%', size: 3, duration: 10, delay: 1, color: 'rgb(var(--cyber-500))' },
  { id: 3, x: '20%', y: '60%', size: 5, duration: 12, delay: 2, color: 'rgb(var(--flame-400))' },
  { id: 4, x: '70%', y: '70%', size: 3, duration: 9, delay: 0.5, color: 'rgb(var(--cyber-400))' },
  { id: 5, x: '45%', y: '30%', size: 4, duration: 11, delay: 1.5, color: 'rgb(var(--flame-500))' },
  { id: 6, x: '60%', y: '85%', size: 3, duration: 7, delay: 2.5, color: 'rgb(var(--cyber-500))' },
  { id: 7, x: '30%', y: '80%', size: 4, duration: 13, delay: 0.8, color: 'rgb(var(--flame-400))' },
  { id: 8, x: '90%', y: '50%', size: 3, duration: 8.5, delay: 1.8, color: 'rgb(var(--cyber-400))' },
  { id: 9, x: '5%', y: '45%', size: 4, duration: 10.5, delay: 2.2, color: 'rgb(var(--flame-500))' },
  { id: 10, x: '50%', y: '55%', size: 3, duration: 9.5, delay: 0.3, color: 'rgb(var(--cyber-500))' },
  { id: 11, x: '75%', y: '10%', size: 4, duration: 12.5, delay: 1.2, color: 'rgb(var(--flame-400))' },
  { id: 12, x: '15%', y: '35%', size: 3, duration: 8.8, delay: 2.8, color: 'rgb(var(--cyber-400))' },
];

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full"
          style={{
            left: dot.x,
            top: dot.y,
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.15, 0.5, 0.15],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

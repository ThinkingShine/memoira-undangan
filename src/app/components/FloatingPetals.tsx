import { motion } from "motion/react";
import { useMemo } from "react";

function Petal({ delay, x, duration, size, drift }: { delay: number; x: number; duration: number; size: number; drift: number }) {
  return (
    <motion.div
      initial={{ y: -50, x: `${x}vw`, opacity: 0, rotate: 0 }}
      animate={{
        y: "110vh",
        x: [`${x}vw`, `${x + drift}vw`, `${x - drift / 2}vw`, `${x + drift}vw`],
        opacity: [0, 0.7, 0.7, 0],
        rotate: 360,
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.1, 0.9, 1],
      }}
      className="fixed top-0 pointer-events-none z-10"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 20 20" className="w-full h-full text-[#b08d57]" fill="currentColor" opacity="0.5">
        <path d="M10 2 C 6 6, 6 12, 10 18 C 14 12, 14 6, 10 2 Z" />
      </svg>
    </motion.div>
  );
}

export function FloatingPetals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        delay: Math.random() * 10,
        x: Math.random() * 100,
        duration: 14 + Math.random() * 12,
        size: 10 + Math.random() * 14,
        drift: 3 + Math.random() * 6,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((p) => (
        <Petal key={p.id} {...p} />
      ))}
    </div>
  );
}

export function Sparkles() {
  const dots = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 3,
      })),
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      {dots.map((d) => (
        <motion.div
          key={d.id}
          className="absolute w-1 h-1 rounded-full bg-[#b08d57]"
          style={{ left: `${d.x}%`, top: `${d.y}%` }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.4, 0.5],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

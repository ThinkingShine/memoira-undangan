import { motion, Variants } from "motion/react";
import { ReactNode } from "react";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.15 },
  },
};

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={`relative py-20 px-6 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionTitle({ overline, title }: { overline?: string; title: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
      }}
      className="text-center mb-10"
    >
      {overline && (
        <motion.p
          initial={{ letterSpacing: "0.1em", opacity: 0 }}
          whileInView={{ letterSpacing: "0.4em", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-[#b08d57] uppercase text-xs mb-3"
        >
          {overline}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ fontFamily: "'Great Vibes', cursive", color: "#3d4a2b" }}
        className="text-5xl md:text-6xl"
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}

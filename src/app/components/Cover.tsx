import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { CornerOrnament } from "./OrnamentDivider";
import { Sparkles } from "./FloatingPetals";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function Cover({ onOpen, guestName }: { onOpen: () => void; guestName?: string | null }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#f7f3ea] via-[#eef2ea] to-[#dde5d8] flex items-center justify-center"
    >
      <Sparkles />

      {[
        "top-0 left-0",
        "top-0 right-0 -scale-x-100",
        "bottom-0 left-0 -scale-y-100",
        "bottom-0 right-0 -scale-100",
      ].map((pos, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3 + i * 0.15, ease: "easeOut" }}
          className={`absolute ${pos} w-32 h-32`}
        >
          <CornerOrnament className="w-full h-full text-[#b08d57]" />
        </motion.div>
      ))}

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 L50 30 L80 40 L50 50 L40 80 L30 50 L0 40 L30 30 Z' fill='none' stroke='%23556b3d' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.25, delayChildren: 0.2 }}
        className="relative z-20 text-center px-6 max-w-2xl"
      >
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.4em" }}
          className="text-[#556b3d] uppercase text-xs mb-6"
        >
          The Wedding Of
        </motion.p>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 1 }}
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#3d4a2b" }}
          className="text-6xl md:text-8xl leading-tight"
        >
          Ervine{" "}
          <motion.span
            animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block text-[#b08d57]"
          >
            &
          </motion.span>{" "}
          Fikri
        </motion.h1>

        <motion.div variants={fadeUp} transition={{ duration: 0.8 }} className="my-8 flex items-center justify-center gap-4">
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="h-px w-16 bg-[#b08d57] origin-right"
          />
          <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#556b3d] tracking-widest">
            26 · 08 · 2026
          </p>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="h-px w-16 bg-[#b08d57] origin-left"
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-[#5a5a4f] italic mb-10 max-w-md mx-auto"
        >
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri..."
        </motion.p>

        {guestName && (
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <p
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.3em" }}
              className="text-[#5a5a4f] uppercase text-[10px] mb-2"
            >
              Kepada Yth.
            </p>
            <p
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#3d4a2b" }}
              className="text-2xl md:text-3xl italic"
            >
              {guestName}
            </p>
            <p
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-[#5a5a4f] italic text-sm mt-1"
            >
              di Tempat
            </p>
          </motion.div>
        )}

        <motion.div variants={fadeUp} transition={{ duration: 0.8 }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            animate={{ boxShadow: ["0 0 0px #b08d57", "0 0 24px #b08d5755", "0 0 0px #b08d57"] }}
            transition={{ boxShadow: { duration: 2.5, repeat: Infinity }, scale: { type: "spring", stiffness: 300 } }}
            className="inline-block rounded-full"
          >
            <Button
              onClick={onOpen}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="bg-[#556b3d] hover:bg-[#3d4a2b] text-[#f7f3ea] tracking-widest px-8 py-6 rounded-full border border-[#b08d57]"
            >
              <Mail className="mr-2 h-4 w-4" />
              Buka Undangan
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-[#b08d57] flex justify-center pt-2"
        >
          <span className="w-1 h-2 rounded-full bg-[#b08d57]" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

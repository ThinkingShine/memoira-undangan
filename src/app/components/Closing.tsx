import { motion } from "motion/react";
import { Section } from "./Section";
import { OrnamentDivider } from "./OrnamentDivider";

export function Closing() {
  return (
    <Section className="bg-gradient-to-b from-[#f7f3ea] to-[#dde5d8] text-center">
      <div className="max-w-2xl mx-auto">
        <OrnamentDivider />

        <p
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-[#5a5a4f] italic leading-relaxed mb-8"
        >
          Merupakan suatu kebahagiaan dan kehormatan bagi kami,
          apabila Bapak/Ibu/Saudara/i berkenan hadir
          dan memberikan doa restu kepada kedua mempelai.
          Atas kehadiran dan doa restunya, kami ucapkan terima kasih.
        </p>

        <p
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-[#5a5a4f] text-sm tracking-wider mb-10"
        >
          Wassalamu'alaikum Warahmatullahi Wabarakatuh
        </p>

        <p
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.4em" }}
          className="text-[#b08d57] text-xs uppercase mb-4"
        >
          Kami yang berbahagia
        </p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#3d4a2b" }}
          className="text-5xl md:text-6xl"
        >
          Ervine{" "}
          <motion.span
            animate={{ color: ["#b08d57", "#d4a574", "#b08d57"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            &
          </motion.span>{" "}
          Fikri
        </motion.h2>

        <p
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-[#5a5a4f]/70 text-xs mt-12 tracking-wider"
        >
          Made with love by us · 2026 ·
        </p>
      </div>
    </Section>
  );
}

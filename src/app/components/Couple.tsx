import { motion } from "motion/react";
import { Section, SectionTitle } from "./Section";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { OrnamentDivider } from "./OrnamentDivider";
import { groomPhoto, bridePhoto } from "../lib/photos";

function Profile({
  name,
  parents,
  image,
  isGroom,
  fromLeft,
}: {
  name: string;
  parents: { father: string; mother: string };
  image: string;
  isGroom?: boolean;
  fromLeft?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-center"
    >
      <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }} className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6">
        <motion.div
          animate={{ rotate: [3, -3, 3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full border-2 border-[#b08d57]"
        />
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-2 rounded-full overflow-hidden border border-[#b08d57]/40"
        >
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-bottom"
          />
        </motion.div>
      </motion.div>
      <p
        style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.3em" }}
        className="text-[#b08d57] text-xs uppercase mb-2"
      >
        {isGroom ? "Mempelai Pria" : "Mempelai Wanita"}
      </p>
      <h3
        style={{ fontFamily: "'Cormorant Garamond', serif", color: "#3d4a2b" }}
        className="text-3xl md:text-4xl mb-3"
      >
        {name}
      </h3>
      <p
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
        className="text-[#5a5a4f] italic"
      >
        {isGroom ? "Putra dari" : "Putri dari"}
        <br />
        Bapak {parents.father}
        <br />
        & Ibu {parents.mother}
      </p>
    </motion.div>
  );
}

export function Couple() {
  return (
    <Section className="bg-gradient-to-b from-[#eef2ea] to-[#f7f3ea]">
      <SectionTitle overline="The Bride & Groom" title="Mempelai" />

      <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-4 items-center">
        <Profile
          fromLeft
          name="Ervine Chastine Marind, S.Gz., M.Sc., ANutr"
          parents={{ father: "Margono (Alm.)", mother: "Sri Indawati" }}
          image={bridePhoto}
        />

        <div className="flex justify-center my-4">
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ fontFamily: "'Great Vibes', cursive", color: "#b08d57" }}
            className="text-7xl md:text-8xl inline-block"
          >
            &
          </motion.span>
        </div>

        <Profile
          isGroom
          name="Muhammad Fikri Mubarok, S.H., M.Sc"
          parents={{ father: "Sumarno", mother: "Siti Romdhoniyati, S.Pd" }}
          image={groomPhoto}
        />
      </div>

      <OrnamentDivider />
    </Section>
  );
}

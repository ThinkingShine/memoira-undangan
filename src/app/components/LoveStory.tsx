import { motion } from "motion/react";
import { Section, SectionTitle } from "./Section";
import { Heart, GraduationCap, MapPin, Sparkles, Plane } from "lucide-react";

const story = [
  {
    icon: MapPin,
    title: "Dipertemukan di Tanah Rantau",
    body: "Takdir mempertemukan kami di sebuah acara komunitas Muslim Indonesia di Sheffield, Britania Raya. Di tengah dinginnya udara Inggris, hangatnya silaturahmi menjadi awal kisah ini.",
  },
  {
    icon: GraduationCap,
    title: "Dua Kota, Satu Tujuan",
    body: "Fikri menempuh studi Master di University of Leeds, sementara Ervine menempuh studi Master di University of Nottingham. Terbentang dua kota penuh sejarah, diantara kami saling bersapa dan mengenal.",
  },
  {
    icon: Heart,
    title: "Jarak Bukan Penghalang",
    body: "Perjalanan Leeds–Nottingham menjadi saksi bisu pertemuan demi pertemuan kami. Kereta yang melaju, secangkir teh hangat, dan obrolan panjang yang perlahan merangkai rasa yang tumbuh menjadi cinta.",
  },
  {
    icon: Plane,
    title: "Terbang Melamar",
    body: "Ketika studi telah usai, Fikri melamar Ervine pada bulan Oktober 2025. Menjadi titik awal perjalanan menuju pernikahan, dengan jarak 11.000 km membentang jarak antara kami.",
  },
  {
    icon: Sparkles,
    title: "Menuju Babak Baru",
    body: "Bulan Agustus 2026 ini dengan penuh keyakinan kami siap memulai babak baru dalam ikatan pernikahan, Semoga Allah memberkahi perjalanan ibadah pernikahan ini.",
  },
];

export function LoveStory() {
  return (
    <Section className="bg-[#f7f3ea]">
      <SectionTitle overline="Our Love Story" title="Cerita Cinta Kami" />

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ originY: 0 }}
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#b08d57] to-transparent"
        />

        {story.map((item, i) => {
          const Icon = item.icon;
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`relative mb-12 md:grid md:grid-cols-2 md:gap-8 ${
                isLeft ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div className={`pl-16 md:pl-0 ${isLeft ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <h4
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#3d4a2b" }}
                  className="text-2xl mb-2"
                >
                  {item.title}
                </h4>
                <p
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-[#5a5a4f] italic leading-relaxed"
                >
                  {item.body}
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 w-12 h-12 rounded-full bg-[#f7f3ea] border-2 border-[#b08d57] flex items-center justify-center shadow-md"
              >
                <Icon className="w-5 h-5 text-[#556b3d]" />
              </motion.div>

              <div className="hidden md:block" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

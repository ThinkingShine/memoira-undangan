import { motion } from "motion/react";
import { Section, SectionTitle } from "./Section";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { galleryPhotos as photos } from "../lib/photos";

export function Gallery() {
  return (
    <Section className="bg-[#f7f3ea]">
      <SectionTitle overline="Our Moments" title="Galeri" />

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {photos.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="relative aspect-square overflow-hidden rounded-lg border border-[#b08d57]/30 group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full h-full"
            >
              <ImageWithFallback
                src={src}
                alt={`Moment ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#3d4a2b]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute bottom-3 left-3 text-[#f7f3ea] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              <span className="text-2xl">Moment {i + 1}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

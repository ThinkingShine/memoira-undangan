import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// Akad Nikah: 26 Agustus 2026, 08.00 WIB (GMT+7 / Asia/Jakarta).
// Offset +07:00 ditulis eksplisit agar hitungan sama di device manapun,
// karena Date.now() selalu mengembalikan waktu absolut (UTC).
const TARGET = new Date("2026-08-26T08:00:00+07:00").getTime();

export function Countdown() {
  const [tl, setTl] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET - Date.now());
      setTl({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Hari", value: tl.d },
    { label: "Jam", value: tl.h },
    { label: "Menit", value: tl.m },
    { label: "Detik", value: tl.s },
  ];

  return (
    <>
    <div className="flex justify-center gap-3 md:gap-6">
      {items.map((it, idx) => (
        <motion.div
          key={it.label}
          initial={{ opacity: 0, y: 30, rotateX: -90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: idx * 0.15 }}
          whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(176, 141, 87, 0.25)" }}
          className="bg-[#f7f3ea] border border-[#b08d57]/40 rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-[70px] md:min-w-[90px] text-center shadow-sm overflow-hidden"
        >
          <div
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#3d4a2b" }}
            className="text-3xl md:text-4xl h-10 md:h-12 relative flex items-center justify-center"
          >
            <AnimatePresence mode="popLayout">
              <motion.span
                key={it.value}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute"
              >
                {String(it.value).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </div>
          <div
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.2em" }}
            className="text-[10px] md:text-xs text-[#b08d57] uppercase mt-1"
          >
            {it.label}
          </div>
        </motion.div>
      ))}
    </div>
    <p
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="text-center text-[10px] text-[#b08d57]/80 tracking-wider mt-4"
    >
      Menuju Akad Nikah · 26 Agustus 2026, 08.00 WIB (GMT+7)
    </p>
    </>
  );
}

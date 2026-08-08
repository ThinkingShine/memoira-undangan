import { motion } from "motion/react";
import { Section, SectionTitle } from "./Section";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Countdown } from "./Countdown";
import { OrnamentDivider } from "./OrnamentDivider";

function EventCard({
  heading,
  date,
  day,
  time,
  venue,
  address,
  mapsUrl,
  note,
}: {
  heading: string;
  date: string;
  day: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl: string;
  note?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(61, 74, 43, 0.15)" }}
    >
    <Card className="bg-[#f7f3ea] border-[#b08d57]/40 p-8 text-center shadow-md transition-shadow">
      <h3
        style={{ fontFamily: "'Great Vibes', cursive", color: "#3d4a2b" }}
        className="text-4xl mb-6"
      >
        {heading}
      </h3>

      <div className="space-y-4 text-[#5a5a4f]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        <div className="flex items-center justify-center gap-3">
          <Calendar className="w-4 h-4 text-[#556b3d]" />
          <div className="text-left">
            <div className="italic">{day}</div>
            <div className="text-xl text-[#3d4a2b]">{date}</div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Clock className="w-4 h-4 text-[#556b3d]" />
          <span>{time}</span>
        </div>
        <div className="flex items-start justify-center gap-3">
          <MapPin className="w-4 h-4 text-[#556b3d] mt-1" />
          <div>
            <div className="text-xl text-[#3d4a2b]">{venue}</div>
            <div className="text-sm italic">{address}</div>
          </div>
        </div>
      </div>

      <Button
        asChild
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
        className="mt-6 bg-[#556b3d] hover:bg-[#3d4a2b] text-[#f7f3ea] tracking-wider rounded-full"
      >
        <a href={mapsUrl} target="_blank" rel="noreferrer">
          <MapPin className="w-4 h-4 mr-2" />
          Lihat Lokasi
        </a>
      </Button>

      {note && (
        <p
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="mt-5 text-sm italic text-[#7a7a6a] leading-relaxed border-t border-[#b08d57]/30 pt-4 text-left"
        >
          <span className="font-semibold not-italic text-[#556b3d]">NB:</span>{" "}
          {note}
        </p>
      )}
    </Card>
    </motion.div>
  );
}

export function EventDetails() {
  return (
    <Section className="bg-gradient-to-b from-[#eef2ea] to-[#f7f3ea]">
      <SectionTitle overline="Save The Date" title="Detail Acara" />

      <div className="max-w-3xl mx-auto mb-10">
        <p
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-center text-[#5a5a4f] italic mb-8"
        >
          Menghitung hari menuju hari bahagia kami
        </p>
        <Countdown />
      </div>

      <OrnamentDivider />

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        <EventCard
          heading="Akad Nikah"
          day="Rabu"
          date="26 Agustus 2026"
          time="08.00 WIB — selesai"
          venue="Masjid An Noor"
          address="Ciputat, Tangerang Selatan"
          mapsUrl="https://maps.google.com/?q=Masjid+An+Noor+Ciputat"
          note="Dengan segala kerendahan hati dan tanpa mengurangi rasa hormat, prosesi akad nikah kami akan dilaksanakan dalam lingkup keluarga dan sahabat terdekat. Terima kasih atas doa, restu, dan pengertian yang diberikan."
        />
        <EventCard
          heading="Walimatul ‘Ursy"
          day="Rabu"
          date="26 Agustus 2026"
          time="15.30 WIB — selesai"
          venue="Rumah Mempelai Perempuan"
          address="Perumahan Mangunjaya 1, Tambun, Bekasi, Jawa Barat"
          mapsUrl="https://maps.google.com/?q=Perumahan+Mangunjaya+1+Tambun+Bekasi"
        />
        <EventCard
          heading="Ngunduh Mantu"
          day="Minggu"
          date="30 Agustus 2026"
          time="09.00 WIB — selesai"
          venue="Balai Desa Gempol"
          address="Klaten, Jawa Tengah"
          mapsUrl="https://maps.google.com/?q=Balai+Desa+Gempol+Klaten"
          note="Dengan segala kerendahan hati, kami mohon maaf karena tidak menerima tamu di rumah. Terima kasih atas doa dan pengertiannya."
        />
      </div>
    </Section>
  );
}

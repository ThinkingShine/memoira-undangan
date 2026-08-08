import { useEffect, useState } from "react";
import { Section, SectionTitle } from "./Section";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { OrnamentDivider } from "./OrnamentDivider";
import { toast } from "sonner";
import { Heart, Send } from "lucide-react";
import { api } from "../lib/api";
import { getGuestNameFromUrl } from "../lib/guests";

type Wish = {
  id: string;
  name: string;
  message: string;
  attendance: string;
  event?: string;
  guests: number;
  createdAt: number;
};

const EVENT_OPTIONS = [
  "Walimatul 'Ursy (Bekasi)",
  "Ngunduh Mantu (Klaten)",
  "Keduanya (Bekasi & Klaten)",
];

function timeAgo(ts: number) {
  const diff = Date.now() - ts;
  const m = Math.floor(diff / 60000);
  if (m < 1) return "Baru saja";
  if (m < 60) return `${m} menit lalu`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} jam lalu`;
  const d = Math.floor(h / 24);
  return `${d} hari lalu`;
}

export function RSVPWishes() {
  const guestName = getGuestNameFromUrl();
  const [name, setName] = useState(guestName || "");
  const [guests, setGuests] = useState("1");
  const [attendance, setAttendance] = useState("Hadir");
  const [event, setEvent] = useState(EVENT_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    api
      .listWishes()
      .then((w) => setWishes(w))
      .catch((e) => console.error("Failed to load wishes:", e));
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast.error("Mohon isi nama dan pesan");
      return;
    }
    setSubmitting(true);
    try {
      const { wish } = await api.createWish({
        name: name.trim(),
        message: message.trim(),
        attendance,
        event: attendance === "Tidak Hadir" ? "" : event,
        guests: Number(guests) || 1,
      });
      setWishes([wish, ...wishes]);
      setMessage("");
      if (!guestName) setName("");
      setGuests("1");
      setAttendance("Hadir");
      setEvent(EVENT_OPTIONS[0]);
      toast.success("Terima kasih atas doa dan ucapannya 🤍");
    } catch (err) {
      console.error("Submit wish failed:", err);
      toast.error("Gagal mengirim. Coba lagi.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section className="bg-gradient-to-b from-[#eef2ea] to-[#f7f3ea]">
      <SectionTitle overline="RSVP & Wishes" title="Konfirmasi Kehadiran" />

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
        <Card className="bg-[#f7f3ea] border-[#b08d57]/40 p-6">
          <form onSubmit={submit} className="space-y-4">
            <div>
              <Label style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#3d4a2b]">
                Nama
              </Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama Anda"
                className="bg-white border-[#b08d57]/30"
              />
            </div>
            <div>
              <Label style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#3d4a2b]">
                Jumlah Tamu
              </Label>
              <Input
                type="number"
                min={1}
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="bg-white border-[#b08d57]/30"
              />
            </div>
            <div>
              <Label style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#3d4a2b]">
                Kehadiran
              </Label>
              <RadioGroup value={attendance} onValueChange={setAttendance} className="flex gap-4 mt-2">
                {["Hadir", "Tidak Hadir", "Ragu"].map((v) => (
                  <div key={v} className="flex items-center gap-2">
                    <RadioGroupItem value={v} id={v} />
                    <Label htmlFor={v} style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#5a5a4f]">
                      {v}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            {attendance !== "Tidak Hadir" && (
              <div>
                <Label style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#3d4a2b]">
                  Acara yang Dihadiri
                </Label>
                <RadioGroup value={event} onValueChange={setEvent} className="mt-2 space-y-2">
                  {EVENT_OPTIONS.map((v) => (
                    <div key={v} className="flex items-center gap-2">
                      <RadioGroupItem value={v} id={`event-${v}`} />
                      <Label
                        htmlFor={`event-${v}`}
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        className="text-[#5a5a4f]"
                      >
                        {v}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}
            <div>
              <Label style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#3d4a2b]">
                Ucapan & Doa
              </Label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tulis doa terbaik untuk kami..."
                rows={4}
                className="bg-white border-[#b08d57]/30"
              />
            </div>
            <Button
              type="submit"
              disabled={submitting}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="w-full bg-[#556b3d] hover:bg-[#3d4a2b] text-[#f7f3ea] tracking-wider rounded-full"
            >
              <Send className="w-4 h-4 mr-2" />
              {submitting ? "Mengirim..." : "Kirim"}
            </Button>
          </form>
        </Card>

        <div>
          <p
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-center text-[#5a5a4f] italic mb-4"
          >
            Ucapan dari para tamu ({wishes.length})
          </p>
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
            {wishes.length === 0 ? (
              <p className="text-center text-[#5a5a4f]/60 italic text-sm py-8">
                Jadilah yang pertama memberi doa untuk kami
              </p>
            ) : (
              wishes.map((w) => (
                <Card key={w.id} className="bg-[#f7f3ea] border-[#b08d57]/30 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#556b3d] text-[#f7f3ea] flex items-center justify-center">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <div
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: "#3d4a2b" }}
                        className="text-lg leading-tight"
                      >
                        {w.name}
                      </div>
                      <div className="text-[10px] text-[#b08d57] tracking-wider uppercase">
                        {w.attendance}
                        {w.event ? ` · ${w.event}` : ""} · {timeAgo(w.createdAt)}
                      </div>
                    </div>
                  </div>
                  <p
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-[#5a5a4f] italic text-sm"
                  >
                    {w.message}
                  </p>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>

      <OrnamentDivider />
    </Section>
  );
}

import { useEffect, useMemo, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { toast } from "sonner";
import { Toaster } from "./ui/sonner";
import {
  Plus,
  Send,
  Copy,
  Trash2,
  Download,
  Upload,
  Eye,
  Check,
  Users,
  MessageSquare,
  RotateCcw,
  Save,
} from "lucide-react";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Guest,
  buildInviteUrl,
  buildWhatsAppLinkFromMessage,
  renderWaMessage,
  DEFAULT_WA_TEMPLATE,
} from "../lib/guests";
import { api } from "../lib/api";

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

export function Dashboard() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("");
  const [bulk, setBulk] = useState("");
  const [template, setTemplate] = useState(DEFAULT_WA_TEMPLATE);
  const [savingTemplate, setSavingTemplate] = useState(false);
  const [previewGuest, setPreviewGuest] = useState<Guest | null>(null);
  const [previewMessage, setPreviewMessage] = useState("");
  const [wishes, setWishes] = useState<
    {
      id: string;
      name: string;
      message: string;
      attendance: string;
      event?: string;
      guests: number;
    }[]
  >([]);

  useEffect(() => {
    api
      .listGuests()
      .then((g) => setGuests(g))
      .catch((e) => {
        console.error("Failed to load guests:", e);
        toast.error("Gagal memuat daftar tamu dari server");
      })
      .finally(() => setLoading(false));

    api
      .getWaTemplate()
      .then((t) => {
        if (t) setTemplate(t);
      })
      .catch((e) => {
        console.error("Failed to load WhatsApp template:", e);
        toast.error("Gagal memuat template pesan WhatsApp, memakai template bawaan");
      });

    api
      .listWishes()
      .then((w) => setWishes(w))
      .catch((e) => {
        console.error("Failed to load wishes:", e);
        toast.error("Gagal memuat ucapan dari server");
      });
  }, []);

  const removeWish = async (id: string, name: string) => {
    if (!confirm(`Hapus ucapan dari ${name}?`)) return;
    try {
      await api.deleteWish(id);
      setWishes((prev) => prev.filter((w) => w.id !== id));
      toast.success(`Ucapan dari ${name} dihapus`);
    } catch (e) {
      console.error(`Failed to delete wish ${id} from ${name}:`, e);
      toast.error("Gagal menghapus ucapan dari server");
    }
  };

  const stats = useMemo(() => {
    const total = guests.length;
    const sent = guests.filter((g) => g.sent).length;
    return { total, sent, pending: total - sent };
  }, [guests]);

  const filtered = useMemo(() => {
    const q = filter.toLowerCase().trim();
    if (!q) return guests;
    return guests.filter(
      (g) =>
        g.name.toLowerCase().includes(q) ||
        g.phone.includes(q) ||
        (g.category || "").toLowerCase().includes(q)
    );
  }, [guests, filter]);

  const addGuest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast.error("Nama dan nomor WhatsApp wajib diisi");
      return;
    }
    const guest: Guest = {
      id: uid(),
      name: name.trim(),
      phone: phone.trim(),
      category: category.trim() || undefined,
    };
    try {
      await api.saveGuest(guest);
      setGuests([guest, ...guests]);
      setName("");
      setPhone("");
      setCategory("");
      toast.success("Tamu ditambahkan");
    } catch (e) {
      console.error("Add guest failed:", e);
      toast.error("Gagal menyimpan ke server");
    }
  };

  const removeGuest = async (id: string) => {
    try {
      await api.deleteGuest(id);
      setGuests(guests.filter((g) => g.id !== id));
    } catch (e) {
      console.error("Delete guest failed:", e);
      toast.error("Gagal menghapus");
    }
  };

  const toggleSent = async (id: string) => {
    const g = guests.find((x) => x.id === id);
    if (!g) return;
    const updated = { ...g, sent: !g.sent };
    try {
      await api.saveGuest(updated);
      setGuests(guests.map((x) => (x.id === id ? updated : x)));
    } catch (e) {
      console.error("Toggle sent failed:", e);
      toast.error("Gagal memperbarui status");
    }
  };

  const copyLink = (g: Guest) => {
    navigator.clipboard.writeText(buildInviteUrl(g.name));
    toast.success("Link tersalin");
  };

  const openPreview = (g: Guest) => {
    setPreviewGuest(g);
    setPreviewMessage(renderWaMessage(template, g.name, buildInviteUrl(g.name)));
  };

  const sendWA = async () => {
    const g = previewGuest;
    if (!g) return;
    if (!previewMessage.trim()) {
      toast.error("Pesan tidak boleh kosong");
      return;
    }
    window.open(buildWhatsAppLinkFromMessage(g.phone, previewMessage), "_blank");
    setPreviewGuest(null);
    const updated = { ...g, sent: true };
    try {
      await api.saveGuest(updated);
      setGuests(guests.map((x) => (x.id === g.id ? updated : x)));
    } catch (e) {
      console.error(`Mark sent failed for guest ${g.name} (${g.id}):`, e);
      toast.error("Pesan dibuka, tapi status kirim gagal disimpan");
    }
  };

  const saveTemplate = async () => {
    if (!template.trim()) {
      toast.error("Template tidak boleh kosong");
      return;
    }
    setSavingTemplate(true);
    try {
      await api.saveWaTemplate(template);
      toast.success("Template pesan disimpan");
    } catch (e) {
      console.error("Save WhatsApp template failed:", e);
      toast.error("Gagal menyimpan template ke server");
    } finally {
      setSavingTemplate(false);
    }
  };

  const resetTemplate = () => {
    setTemplate(DEFAULT_WA_TEMPLATE);
    toast.info("Template dikembalikan ke versi bawaan. Klik Simpan untuk menerapkan.");
  };

  const previewInvite = (g: Guest) => {
    window.open(buildInviteUrl(g.name), "_blank");
  };

  const exportCsv = () => {
    const rows = [
      ["name", "phone", "category", "sent"],
      ...guests.map((g) => [g.name, g.phone, g.category || "", g.sent ? "yes" : "no"]),
    ];
    const csv = rows.map((r) => r.map((c) => `"${(c || "").replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "daftar-tamu.csv";
    a.click();
  };

  const importBulk = async () => {
    const lines = bulk.split("\n").map((l) => l.trim()).filter(Boolean);
    const newGuests: Guest[] = [];
    for (const line of lines) {
      const parts = line.split(/[,;\t]/).map((p) => p.trim());
      if (parts.length < 2) continue;
      const [n, p, c] = parts;
      if (!n || !p) continue;
      newGuests.push({ id: uid(), name: n, phone: p, category: c || undefined });
    }
    if (newGuests.length === 0) {
      toast.error("Format: Nama, Nomor, Kategori (per baris)");
      return;
    }
    try {
      await api.saveGuestsBulk(newGuests);
      setGuests([...newGuests, ...guests]);
      setBulk("");
      toast.success(`${newGuests.length} tamu ditambahkan`);
    } catch (e) {
      console.error("Bulk import failed:", e);
      toast.error("Gagal import ke server");
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f3ea] p-6" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Toaster position="top-center" />
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <p className="text-[#b08d57] text-xs tracking-[0.4em] uppercase">Wedding Admin</p>
          <h1
            style={{ fontFamily: "'Great Vibes', cursive", color: "#3d4a2b" }}
            className="text-5xl mt-2"
          >
            Dashboard Tamu
          </h1>
          <p className="text-[#5a5a4f] text-sm mt-2">
            Kelola daftar tamu undangan dan kirim undangan personal via WhatsApp.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { label: "Total Tamu", value: stats.total, icon: Users, color: "#556b3d" },
            { label: "Terkirim", value: stats.sent, icon: Check, color: "#3d4a2b" },
            { label: "Belum Dikirim", value: stats.pending, icon: Send, color: "#b08d57" },
          ].map((s) => (
            <Card key={s.label} className="bg-white border-[#b08d57]/30 p-5 flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                style={{ background: s.color }}
              >
                <s.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs tracking-wider uppercase text-[#5a5a4f]">{s.label}</div>
                <div className="text-3xl text-[#3d4a2b]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {s.value}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Card className="bg-white border-[#b08d57]/30 p-5">
            <h3 className="text-[#3d4a2b] mb-3">Tambah Tamu</h3>
            <form onSubmit={addGuest} className="space-y-3">
              <div>
                <Label className="text-[#5a5a4f] text-xs">Nama Tamu</Label>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Bapak Budi Santoso" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label className="text-[#5a5a4f] text-xs">No. WhatsApp</Label>
                  <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="08123456789" />
                </div>
                <div>
                  <Label className="text-[#5a5a4f] text-xs">Kategori</Label>
                  <Input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Keluarga / Teman" />
                </div>
              </div>
              <Button type="submit" className="w-full bg-[#556b3d] hover:bg-[#3d4a2b] text-white">
                <Plus className="w-4 h-4 mr-2" />
                Tambah
              </Button>
            </form>
          </Card>

          <Card className="bg-white border-[#b08d57]/30 p-5">
            <h3 className="text-[#3d4a2b] mb-3">Import Massal</h3>
            <p className="text-xs text-[#5a5a4f] mb-2">
              Satu tamu per baris, dipisah koma. Format: <em>Nama, Nomor, Kategori</em>
            </p>
            <textarea
              value={bulk}
              onChange={(e) => setBulk(e.target.value)}
              rows={5}
              placeholder={"Budi Santoso, 08123456789, Keluarga\nSiti Aminah, 08987654321, Teman"}
              className="w-full p-2 border border-[#b08d57]/40 rounded text-sm bg-[#f7f3ea] text-[#3d4a2b]"
            />
            <div className="flex gap-2 mt-2">
              <Button onClick={importBulk} className="flex-1 bg-[#556b3d] hover:bg-[#3d4a2b] text-white">
                <Upload className="w-4 h-4 mr-2" />
                Import
              </Button>
              <Button onClick={exportCsv} variant="outline" className="border-[#b08d57]/40 text-[#3d4a2b]">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </Card>
        </div>

        <Card className="bg-white border-[#b08d57]/30 p-5">
          <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
            <h3 className="text-[#3d4a2b]">Daftar Tamu</h3>
            <Input
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Cari nama / nomor / kategori..."
              className="max-w-xs"
            />
          </div>

          {loading ? (
            <div className="text-center py-10 text-[#5a5a4f] text-sm">
              Memuat dari cloud...
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-10 text-[#5a5a4f] text-sm">
              Belum ada tamu. Tambahkan di form atas.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama</TableHead>
                    <TableHead>No. WhatsApp</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((g) => (
                    <TableRow key={g.id}>
                      <TableCell className="text-[#3d4a2b]">{g.name}</TableCell>
                      <TableCell className="text-[#5a5a4f] text-sm">{g.phone}</TableCell>
                      <TableCell>
                        {g.category && (
                          <Badge variant="outline" className="border-[#b08d57]/40 text-[#556b3d]">
                            {g.category}
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <button onClick={() => toggleSent(g.id)}>
                          {g.sent ? (
                            <Badge className="bg-[#556b3d] text-white">Terkirim</Badge>
                          ) : (
                            <Badge variant="outline" className="border-[#b08d57]/40 text-[#b08d57]">
                              Belum
                            </Badge>
                          )}
                        </button>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="inline-flex gap-1">
                          <Button size="sm" variant="ghost" onClick={() => previewInvite(g)} title="Preview">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" onClick={() => copyLink(g)} title="Salin link">
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => openPreview(g)}
                            className="bg-[#25D366] hover:bg-[#1da851] text-white"
                            title="Kirim WhatsApp"
                          >
                            <Send className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeGuest(g.id)}
                            title="Hapus"
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </Card>

        <Card className="bg-white border-[#b08d57]/30 p-6 mt-6">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-1">
            <h2 className="text-[#3d4a2b]" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem" }}>
              Template Pesan WhatsApp
            </h2>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={resetTemplate} className="border-[#b08d57]/40">
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
              <Button
                size="sm"
                onClick={saveTemplate}
                disabled={savingTemplate}
                className="bg-[#556b3d] hover:bg-[#3d4a2b] text-[#f7f3ea]"
              >
                <Save className="w-4 h-4 mr-2" />
                {savingTemplate ? "Menyimpan..." : "Simpan"}
              </Button>
            </div>
          </div>
          <p className="text-xs text-[#5a5a4f] mb-3">
            Gunakan <code className="text-[#b08d57]">{"{nama}"}</code> untuk nama tamu dan{" "}
            <code className="text-[#b08d57]">{"{link}"}</code> untuk link undangan personal. Format WhatsApp:{" "}
            <code>*tebal*</code>, <code>_miring_</code>. Template tersimpan di cloud, jadi berlaku di semua device.
          </p>
          <Textarea
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            rows={16}
            className="font-mono text-xs border-[#b08d57]/30"
          />
        </Card>

        <Card className="bg-white border-[#b08d57]/30 p-6 mt-6">
          <h2 className="text-[#3d4a2b] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem" }}>
            Ucapan & Doa Masuk
          </h2>
          <p className="text-xs text-[#5a5a4f] mb-4">
            Hapus ucapan yang tidak ingin ditampilkan di halaman undangan.
          </p>

          {wishes.length === 0 ? (
            <p className="text-sm text-[#5a5a4f]/70 py-4">Belum ada ucapan yang masuk.</p>
          ) : (
            <div className="space-y-3">
              {wishes.map((w) => (
                <div
                  key={w.id}
                  className="flex items-start justify-between gap-4 border border-[#b08d57]/20 rounded-lg p-4"
                >
                  <div>
                    <div className="text-[#3d4a2b]" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.125rem" }}>
                      {w.name}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-[#b08d57] mb-1">
                      {w.attendance}
                      {w.event ? ` · ${w.event}` : ""} · {w.guests} tamu
                    </div>
                    <p className="text-sm text-[#5a5a4f] italic">{w.message}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => removeWish(w.id, w.name)}
                    title="Hapus ucapan"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </Card>

        <p className="text-center text-xs text-[#5a5a4f]/70 mt-6">
          Tip: Buka <code>?dashboard=1</code> untuk akses halaman ini · Data tamu dan ucapan tersimpan di cloud database.
        </p>
      </div>

      <Dialog open={!!previewGuest} onOpenChange={(open) => !open && setPreviewGuest(null)}>
        <DialogContent className="bg-[#f7f3ea] border-[#b08d57]/40 max-w-lg">
          <DialogHeader>
            <DialogTitle style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[#3d4a2b] text-2xl">
              Preview Pesan
            </DialogTitle>
            <DialogDescription className="text-[#5a5a4f] text-xs">
              Untuk {previewGuest?.name} · {previewGuest?.phone}. Pesan masih bisa diedit di bawah sebelum dikirim.
            </DialogDescription>
          </DialogHeader>

          <Textarea
            value={previewMessage}
            onChange={(e) => setPreviewMessage(e.target.value)}
            rows={14}
            className="bg-white border-[#b08d57]/30 text-xs whitespace-pre-wrap"
          />
          <p className="text-[10px] text-[#5a5a4f]/70">
            {previewMessage.length} karakter · perubahan di sini hanya berlaku untuk tamu ini
          </p>

          <DialogFooter>
            <Button variant="outline" onClick={() => setPreviewGuest(null)} className="border-[#b08d57]/40">
              Batal
            </Button>
            <Button
              onClick={() => {
                if (previewGuest) {
                  navigator.clipboard.writeText(previewMessage);
                  toast.success("Pesan tersalin");
                }
              }}
              variant="outline"
              className="border-[#b08d57]/40"
            >
              <Copy className="w-4 h-4 mr-2" />
              Salin
            </Button>
            <Button onClick={sendWA} className="bg-[#556b3d] hover:bg-[#3d4a2b] text-[#f7f3ea]">
              <MessageSquare className="w-4 h-4 mr-2" />
              Kirim via WhatsApp
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export type Guest = {
  id: string;
  name: string;
  phone: string;
  category?: string;
  sent?: boolean;
};

export function getGuestNameFromUrl(): string | null {
  const params = new URLSearchParams(window.location.search);
  const to = params.get("to");
  return to ? decodeURIComponent(to) : null;
}

// Custom domain used for invitations sent to guests. It redirects to this app.
export const INVITE_BASE_URL = "https://undangan.memoira.my.id";

export function buildInviteUrl(guestName: string): string {
  return `${INVITE_BASE_URL}?to=${encodeURIComponent(guestName)}`;
}

export const WA_PLACEHOLDERS = {
  name: "{nama}",
  link: "{link}",
};

export const DEFAULT_WA_TEMPLATE = `*Undangan Pernikahan*
_Ervine & Fikri_

Assalamu'alaikum Warahmatullahi Wabarakatuh

Kepada Bapak/Ibu/Saudara/i yang kami hormati,
*{nama}*

Dengan memohon rahmat dan ridha Allah Subhanahu wa Ta'ala, serta tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri pernikahan kami:

*Ervine Chastine Marind, S.Gz., M.Sc., ANutr*
_Putri dari Bapak Margono (Alm.) & Ibu Sri Indawati_

&

*Muhammad Fikri Mubarok, S.H., M.Sc*
_Putra dari Bapak Sumarno & Ibu Siti Romdhoniyati, S.Pd_

〰〰〰〰〰〰〰〰〰〰

*Akad Nikah*
Rabu, 26 Agustus 2026 · 08.00 WIB
Masjid An Noor, Ciputat, Tangerang Selatan

*Walimatul 'Ursy*
Rabu, 26 Agustus 2026 · 15.30 WIB
Rumah Mempelai Perempuan
Perumahan Mangunjaya 1, Tambun, Bekasi, Jawa Barat

*Ngunduh Mantu*
Minggu, 30 Agustus 2026 · 09.00 WIB
Balai Desa Gempol, Klaten, Jawa Tengah

〰〰〰〰〰〰〰〰〰〰

Detail acara, titik lokasi, serta konfirmasi kehadiran dapat diakses melalui undangan digital berikut:

{link}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai. Atas perhatian dan doa yang diberikan, kami sampaikan terima kasih.

Wassalamu'alaikum Warahmatullahi Wabarakatuh

Hormat kami yang berbahagia,
*Ervine & Fikri*`;

/** Isi placeholder {nama} dan {link} pada template menjadi pesan siap kirim. */
export function renderWaMessage(template: string, name: string, inviteUrl: string): string {
  return template
    .replaceAll(WA_PLACEHOLDERS.name, name)
    .replaceAll(WA_PLACEHOLDERS.link, inviteUrl);
}

export function normalizePhone(phone: string): string {
  return phone.replace(/[^\d]/g, "").replace(/^0/, "62");
}

/** Bangun link wa.me dari pesan final (sudah diedit di preview). */
export function buildWhatsAppLinkFromMessage(phone: string, message: string): string {
  return `https://wa.me/${normalizePhone(phone)}?text=${encodeURIComponent(message)}`;
}

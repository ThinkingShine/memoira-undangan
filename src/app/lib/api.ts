import { projectId, publicAnonKey } from "../../../utils/supabase/info";
import type { Guest } from "./guests";

const BASE = `https://${projectId}.supabase.co/functions/v1/make-server-d157ad67`;

function headers() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${publicAnonKey}`,
  };
}

async function handle<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API ${res.status}: ${text}`);
  }
  return res.json();
}

export const api = {
  async listGuests(): Promise<Guest[]> {
    const res = await fetch(`${BASE}/guests`, { headers: headers() });
    const data = await handle<{ guests: Guest[] }>(res);
    return data.guests || [];
  },

  async saveGuest(g: Guest): Promise<Guest> {
    const res = await fetch(`${BASE}/guests`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(g),
    });
    const data = await handle<{ guest: Guest }>(res);
    return data.guest;
  },

  async saveGuestsBulk(list: Guest[]): Promise<number> {
    const res = await fetch(`${BASE}/guests/bulk`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({ guests: list }),
    });
    const data = await handle<{ count: number }>(res);
    return data.count;
  },

  async deleteGuest(id: string): Promise<void> {
    const res = await fetch(`${BASE}/guests/${id}`, {
      method: "DELETE",
      headers: headers(),
    });
    await handle(res);
  },

  async listWishes(): Promise<any[]> {
    const res = await fetch(`${BASE}/wishes`, { headers: headers() });
    const data = await handle<{ wishes: any[] }>(res);
    return data.wishes || [];
  },

  async createWish(payload: {
    name: string;
    message: string;
    attendance: string;
    event?: string;
    guests: number;
  }) {
    const res = await fetch(`${BASE}/wishes`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(payload),
    });
    return handle<{ wish: any }>(res);
  },

  async getWaTemplate(): Promise<string | null> {
    const res = await fetch(`${BASE}/settings/wa-template`, { headers: headers() });
    const data = await handle<{ template: string | null }>(res);
    return data.template;
  },

  async saveWaTemplate(template: string): Promise<void> {
    const res = await fetch(`${BASE}/settings/wa-template`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({ template }),
    });
    await handle(res);
  },

  async deleteWish(id: string): Promise<void> {
    const res = await fetch(`${BASE}/wishes/${id}`, {
      method: "DELETE",
      headers: headers(),
    });
    await handle(res);
  },
};

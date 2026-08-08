import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

app.use("*", logger(console.log));
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

const PREFIX = "guest:";
const WISH_PREFIX = "wish:";

app.get("/make-server-d157ad67/health", (c) => c.json({ status: "ok" }));

app.get("/make-server-d157ad67/guests", async (c) => {
  try {
    const guests = await kv.getByPrefix(PREFIX);
    return c.json({ guests: guests || [] });
  } catch (e) {
    console.log(`Error listing guests: ${e}`);
    return c.json({ error: `Failed to list guests: ${e}` }, 500);
  }
});

app.post("/make-server-d157ad67/guests", async (c) => {
  try {
    const body = await c.req.json();
    const { id, name, phone, category, sent } = body;
    if (!id || !name || !phone) {
      return c.json({ error: "id, name, phone required" }, 400);
    }
    const guest = { id, name, phone, category: category || null, sent: !!sent };
    await kv.set(`${PREFIX}${id}`, guest);
    return c.json({ guest });
  } catch (e) {
    console.log(`Error saving guest: ${e}`);
    return c.json({ error: `Failed to save guest: ${e}` }, 500);
  }
});

app.post("/make-server-d157ad67/guests/bulk", async (c) => {
  try {
    const { guests } = await c.req.json();
    if (!Array.isArray(guests)) {
      return c.json({ error: "guests must be array" }, 400);
    }
    const keys = guests.map((g: any) => `${PREFIX}${g.id}`);
    await kv.mset(keys, guests);
    return c.json({ count: guests.length });
  } catch (e) {
    console.log(`Error bulk saving guests: ${e}`);
    return c.json({ error: `Failed bulk save: ${e}` }, 500);
  }
});

app.delete("/make-server-d157ad67/guests/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await kv.del(`${PREFIX}${id}`);
    return c.json({ ok: true });
  } catch (e) {
    console.log(`Error deleting guest: ${e}`);
    return c.json({ error: `Failed to delete guest: ${e}` }, 500);
  }
});

app.get("/make-server-d157ad67/wishes", async (c) => {
  try {
    const wishes = await kv.getByPrefix(WISH_PREFIX);
    const sorted = (wishes || []).sort(
      (a: any, b: any) => (b.createdAt || 0) - (a.createdAt || 0)
    );
    return c.json({ wishes: sorted });
  } catch (e) {
    console.log(`Error listing wishes: ${e}`);
    return c.json({ error: `Failed to list wishes: ${e}` }, 500);
  }
});

app.post("/make-server-d157ad67/wishes", async (c) => {
  try {
    const body = await c.req.json();
    const { name, message, attendance, guests, event } = body;
    if (!name || !message) {
      return c.json({ error: "name and message required" }, 400);
    }
    const id = crypto.randomUUID();
    const wish = {
      id,
      name,
      message,
      attendance: attendance || "Hadir",
      event: event || "",
      guests: guests || 1,
      createdAt: Date.now(),
    };
    await kv.set(`${WISH_PREFIX}${id}`, wish);
    return c.json({ wish });
  } catch (e) {
    console.log(`Error saving wish: ${e}`);
    return c.json({ error: `Failed to save wish: ${e}` }, 500);
  }
});

app.delete("/make-server-d157ad67/wishes/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await kv.del(`${WISH_PREFIX}${id}`);
    return c.json({ ok: true });
  } catch (e) {
    console.log(`Error deleting wish ${c.req.param("id")}: ${e}`);
    return c.json({ error: `Failed to delete wish: ${e}` }, 500);
  }
});

const WA_TEMPLATE_KEY = "settings:wa-template";

app.get("/make-server-d157ad67/settings/wa-template", async (c) => {
  try {
    const saved = await kv.get(WA_TEMPLATE_KEY);
    return c.json({ template: saved?.template ?? null });
  } catch (e) {
    console.log(`Error loading WhatsApp template: ${e}`);
    return c.json({ error: `Failed to load WhatsApp template: ${e}` }, 500);
  }
});

app.post("/make-server-d157ad67/settings/wa-template", async (c) => {
  try {
    const { template } = await c.req.json();
    if (typeof template !== "string" || !template.trim()) {
      return c.json({ error: "template must be a non-empty string" }, 400);
    }
    await kv.set(WA_TEMPLATE_KEY, { template, updatedAt: Date.now() });
    return c.json({ template });
  } catch (e) {
    console.log(`Error saving WhatsApp template: ${e}`);
    return c.json({ error: `Failed to save WhatsApp template: ${e}` }, 500);
  }
});

Deno.serve(app.fetch);

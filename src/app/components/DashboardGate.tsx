import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Lock } from "lucide-react";
import { Dashboard } from "./Dashboard";

const PASSWORD = "fikri-ervine-2026";
const KEY = "wedding-admin-auth-v1";

export function DashboardGate() {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem(KEY) === "1") setAuthed(true);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem(KEY, "1");
      setAuthed(true);
      setError("");
    } else {
      setError("Password salah");
    }
  };

  if (authed) return <Dashboard />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f3ea] via-[#eef2ea] to-[#dde5d8] flex items-center justify-center p-6">
      <Card className="bg-white border-[#b08d57]/30 p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <div className="inline-flex w-14 h-14 rounded-full bg-[#556b3d] text-white items-center justify-center mb-4">
            <Lock className="w-6 h-6" />
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.3em" }} className="text-[#b08d57] uppercase text-xs">
            Wedding Admin
          </p>
          <h1 style={{ fontFamily: "'Great Vibes', cursive", color: "#3d4a2b" }} className="text-4xl mt-2">
            Login Dashboard
          </h1>
        </div>

        <form onSubmit={submit} className="space-y-4" style={{ fontFamily: "'Inter', sans-serif" }}>
          <div>
            <Input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Masukkan password"
              autoFocus
            />
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
          </div>
          <Button type="submit" className="w-full bg-[#556b3d] hover:bg-[#3d4a2b] text-white">
            Masuk
          </Button>
        </form>

        <p className="text-center text-xs text-[#5a5a4f]/70 mt-6">
          Akses terbatas untuk pengelola undangan
        </p>
      </Card>
    </div>
  );
}

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Cover } from "./components/Cover";
import { Opening } from "./components/Opening";
import { Couple } from "./components/Couple";
import { LoveStory } from "./components/LoveStory";
import { EventDetails } from "./components/EventDetails";
import { Gallery } from "./components/Gallery";
import { RSVPWishes } from "./components/RSVPWishes";
import { Closing } from "./components/Closing";
import { MusicToggle } from "./components/MusicToggle";
import { FloatingPetals } from "./components/FloatingPetals";
import { DashboardGate } from "./components/DashboardGate";
import { Toaster } from "./components/ui/sonner";
import { getGuestNameFromUrl } from "./lib/guests";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [isDashboard, setIsDashboard] = useState(false);
  const [guestName, setGuestName] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsDashboard(params.get("dashboard") === "1");
    setGuestName(getGuestNameFromUrl());
  }, []);

  const open = () => {
    setOpened(true);
    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" });
    }, 400);
  };

  if (isDashboard) {
    return <DashboardGate />;
  }

  return (
    <div className="size-full min-h-screen bg-[#f7f3ea]">
      <AnimatePresence>
        {!opened && (
          <motion.div
            key="cover"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-40"
          >
            <Cover onOpen={open} guestName={guestName} />
          </motion.div>
        )}
      </AnimatePresence>

      {opened && <FloatingPetals />}

      {opened && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Cover onOpen={open} guestName={guestName} />
          <Opening />
          <Couple />
          <LoveStory />
          <EventDetails />
          <Gallery />
          <RSVPWishes />
          <Closing />
        </motion.main>
      )}

      <MusicToggle active={opened} />
      <Toaster position="top-center" />
    </div>
  );
}

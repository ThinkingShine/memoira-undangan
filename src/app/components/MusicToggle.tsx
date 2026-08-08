import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

const VIDEO_ID = "dsOGH_ZBdCM";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

function loadYouTubeApi(): Promise<void> {
  if (window.YT && window.YT.Player) return Promise.resolve();
  return new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve();
    };
    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
  });
}

export function MusicToggle({ active }: { active: boolean }) {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef<any>(null);

  // Preload the iframe API early so playback can start the moment the guest
  // opens the invitation (that click is the gesture browsers require).
  useEffect(() => {
    loadYouTubeApi().catch((e) => console.error("Failed to load YouTube iframe API:", e));
  }, []);

  // Create the player only after the invitation is opened, so the very first
  // playVideo() call happens within an already-granted user gesture.
  useEffect(() => {
    if (!active || playerRef.current) return;
    let cancelled = false;

    loadYouTubeApi()
      .then(() => {
        if (cancelled || playerRef.current) return;
        playerRef.current = new window.YT.Player("yt-bg-player", {
          videoId: VIDEO_ID,
          playerVars: {
            autoplay: 1,
            controls: 0,
            loop: 1,
            playlist: VIDEO_ID,
            modestbranding: 1,
            playsinline: 1,
          },
          events: {
            onReady: (e: any) => {
              e.target.setVolume(40);
              e.target.playVideo();
            },
            onStateChange: (e: any) => {
              const YT = window.YT.PlayerState;
              if (e.data === YT.PLAYING) setPlaying(true);
              else if (e.data === YT.PAUSED || e.data === YT.ENDED) setPlaying(false);
            },
            onError: (e: any) =>
              console.error(`YouTube player error while playing ${VIDEO_ID}: code ${e.data}`),
          },
        });
      })
      .catch((e) => console.error("Failed to init background music player:", e));

    return () => {
      cancelled = true;
    };
  }, [active]);

  const toggle = () => {
    const p = playerRef.current;
    if (!p) return;
    if (playing) p.pauseVideo?.();
    else p.playVideo?.();
  };

  return (
    <>
      {/* Kept mounted in a single place so YouTube's iframe is never unmounted. */}
      <div className="fixed -left-[9999px] -top-[9999px]" aria-hidden>
        <div id="yt-bg-player" />
      </div>
      {active && (
        <button
          onClick={toggle}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#556b3d] text-[#f7f3ea] shadow-lg border border-[#b08d57] flex items-center justify-center hover:bg-[#3d4a2b] transition"
          aria-label={playing ? "Matikan musik" : "Nyalakan musik"}
        >
          {playing ? <Music className="w-5 h-5 animate-pulse" /> : <VolumeX className="w-5 h-5" />}
        </button>
      )}
    </>
  );
}

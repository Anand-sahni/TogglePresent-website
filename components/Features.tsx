"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const features = [
  {
    title: "Hide desktop icons",
    filename: "hide-icons",
    description:
      "Instantly clear your desktop of every icon for a clean, distraction-free screen.",
    video: "/hide-desktop-icons.mp4",
  },
  {
    title: "Disable notifications",
    filename: "silence",
    description:
      "Silence all notifications so nothing interrupts your presentation or demo.",
    video: "/disable-notifications.mp4",
  },
  {
    title: "Mute speaker",
    filename: "mute",
    description:
      "Cut your Mac's audio output with one click — no fumbling with volume controls.",
    video: "/mute-speaker.mp4",
  },
  {
    title: "Minimize active apps",
    filename: "minimize",
    description:
      "Send all open windows to the dock, giving you a fresh, clean workspace.",
    video: "/minimize-active-apps.mp4",
  },
  {
    title: "Change wallpaper",
    filename: "wallpaper",
    description:
      "Switch to a neutral or branded wallpaper that's perfect for presenting.",
    video: "/change-wallpaper.mp4",
  },
];

function FeatureCard({
  feature,
  onVideoClick,
}: {
  feature: (typeof features)[number];
  onVideoClick: (video: string) => void;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-line bg-panel transition-all duration-300 hover:border-line-bright hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
      {/* macOS window chrome */}
      <div className="flex items-center gap-1.5 border-b border-line bg-panel-2 px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[10px] text-muted">
          {feature.filename}.mp4
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted transition-colors group-hover:text-signal">
          <span className="h-1.5 w-1.5 rounded-full bg-muted/40 transition-all group-hover:bg-signal group-hover:shadow-[0_0_6px_rgba(61,230,140,0.8)]" />
          On
        </span>
      </div>

      <button
        type="button"
        aria-label={`Expand ${feature.title} video`}
        className="relative block w-full cursor-pointer overflow-hidden"
        onClick={() => onVideoClick(feature.video)}
      >
        <video autoPlay loop muted playsInline className="w-full">
          <source src={feature.video} type="video/quicktime" />
          <source src={feature.video} type="video/mp4" />
        </video>
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/20">
          <svg
            className="h-9 w-9 text-white opacity-0 drop-shadow-lg transition-opacity duration-200 group-hover:opacity-90"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15"
            />
          </svg>
        </span>
      </button>

      <div className="p-5 text-left">
        <h3 className="mb-1.5 font-display text-[16px] font-bold text-ink">
          {feature.title}
        </h3>
        <p className="text-[13.5px] leading-relaxed text-muted">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default function Features() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="features" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="mb-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              Features
            </span>
            <h2 className="mb-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Five switches. One click.
            </h2>
            <p className="mx-auto max-w-lg text-base text-muted">
              Everything embarrassing about your desktop, handled before you
              plug in the HDMI.
            </p>
          </div>
        </Reveal>

        {/* Bento grid: 2 large cards on top, 3 smaller cards below */}
        <div className="grid gap-6 sm:grid-cols-2">
          {features.slice(0, 2).map((feature, i) => (
            <Reveal key={feature.title} delay={i * 100}>
              <FeatureCard feature={feature} onVideoClick={setActiveVideo} />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.slice(2).map((feature, i) => (
            <Reveal key={feature.title} delay={i * 100}>
              <FeatureCard feature={feature} onVideoClick={setActiveVideo} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Fullscreen video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-void/90 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            aria-label="Close video"
            className="absolute right-6 top-6 rounded-full bg-panel-2 p-2 text-ink transition-colors hover:bg-line-bright"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="max-h-[85vh] max-w-[90vw] rounded-2xl border border-line-bright shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <source src={activeVideo} type="video/quicktime" />
            <source src={activeVideo} type="video/mp4" />
          </video>
        </div>
      )}
    </section>
  );
}

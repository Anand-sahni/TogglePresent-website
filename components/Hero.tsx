"use client";

import { useState, useEffect } from "react";

const statuses = [
  { off: "3 notifications waiting", on: "Notifications silenced" },
  { off: "26 desktop icons", on: "Desktop clear" },
  { off: "Sound on", on: "Audio muted" },
  { off: "9 windows open", on: "Windows minimized" },
  { off: "Wallpaper: beach-trip.jpg", on: "Wallpaper: clean" },
];

function StatusChip({
  status,
  isOn,
  index,
}: {
  status: (typeof statuses)[number];
  isOn: boolean;
  index: number;
}) {
  const delay = `${index * 90}ms`;
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] transition-colors duration-500 ${
        isOn ? "border-signal/25 bg-signal/[0.06]" : "border-ember/20 bg-ember/[0.05]"
      }`}
      style={{ transitionDelay: delay }}
    >
      <span
        className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-500 ${
          isOn ? "bg-signal shadow-[0_0_8px_rgba(61,230,140,0.8)]" : "bg-ember"
        }`}
        style={{ transitionDelay: delay }}
      />
      <span className="grid">
        <span
          aria-hidden={isOn}
          className={`col-start-1 row-start-1 whitespace-nowrap text-ember/90 transition-opacity duration-400 ${
            isOn ? "opacity-0" : "opacity-100"
          }`}
          style={{ transitionDelay: delay }}
        >
          {status.off}
        </span>
        <span
          aria-hidden={!isOn}
          className={`col-start-1 row-start-1 whitespace-nowrap text-signal transition-opacity duration-400 ${
            isOn ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: delay }}
        >
          {status.on}
        </span>
      </span>
    </span>
  );
}

function ShowModeSwitch() {
  const [isOn, setIsOn] = useState(false);
  const [hasAutoFlipped, setHasAutoFlipped] = useState(false);

  // Orchestrated load moment: the switch flips itself on once, then it's yours
  useEffect(() => {
    if (hasAutoFlipped) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = setTimeout(
      () => {
        setIsOn(true);
        setHasAutoFlipped(true);
      },
      reduced ? 0 : 1400,
    );
    return () => clearTimeout(timer);
  }, [hasAutoFlipped]);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-5">
        <span
          className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
            isOn ? "text-muted/50" : "text-ember"
          }`}
        >
          Work mode
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={isOn}
          aria-label="Toggle show mode"
          onClick={() => {
            setIsOn((v) => !v);
            setHasAutoFlipped(true);
          }}
          className={`relative h-12 w-[92px] shrink-0 cursor-pointer rounded-full border transition-all duration-500 ${
            isOn
              ? "border-signal/40 bg-signal/20 shadow-[0_0_40px_rgba(61,230,140,0.35),inset_0_0_16px_rgba(61,230,140,0.25)]"
              : "border-line-bright bg-panel-2"
          }`}
        >
          <span
            className={`absolute top-1/2 h-9 w-9 -translate-y-1/2 rounded-full transition-all duration-500 ${
              isOn
                ? "left-[calc(100%-42px)] bg-signal shadow-[0_0_18px_rgba(61,230,140,0.9)]"
                : "left-1.5 bg-[#3a415f]"
            }`}
          />
        </button>
        <span
          className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
            isOn ? "text-signal" : "text-muted/50"
          }`}
        >
          Show mode
        </span>
      </div>

      <div className="flex max-w-2xl flex-wrap items-center justify-center gap-2">
        {statuses.map((status, i) => (
          <StatusChip key={status.on} status={status} isOn={isOn} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Callback ref: catches the case where the video already has data
  // before React attaches the onLoadedData listener
  const videoRef = (el: HTMLVideoElement | null) => {
    if (el && el.readyState >= 3) {
      setVideoLoaded(true);
    }
  };

  return (
    <section className="relative flex flex-col items-center px-6 pb-24 pt-40 text-center">
      {/* Aurora backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora absolute -top-40 left-1/2 h-[560px] w-[820px] -translate-x-[70%] rounded-full bg-violet/20 blur-[140px]" />
        <div className="aurora-slow absolute -top-20 left-1/2 h-[480px] w-[720px] -translate-x-[15%] rounded-full bg-cyan/[0.13] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(148,158,220,0.18) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
          }}
        />
      </div>

      <span className="rise-1 mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-panel/80 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        <span className="text-cyan">⌘</span> Lives in your menu bar
      </span>

      <h1 className="rise-2 mb-6 max-w-3xl font-display text-[clamp(2.75rem,7vw,5rem)] font-extrabold leading-[1.02] tracking-tight text-ink">
        Flip your Mac into <span className="text-glow">show&nbsp;mode</span>
      </h1>

      <p className="rise-3 mb-10 max-w-xl text-lg leading-relaxed text-muted">
        One click puts your Mac in presentation mode — hide desktop icons,
        mute audio, silence notifications, minimize every window, and swap
        your wallpaper. Click again and everything comes back.
      </p>

      <div className="rise-4 mb-16 flex flex-col items-center gap-5 sm:flex-row">
        <a
          href="https://github.com/Anand-sahni/TogglePresent/raw/main/TogglePresent.dmg"
          className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-violet to-cyan px-7 py-3.5 text-[15px] font-semibold text-void transition-all hover:shadow-[0_0_40px_rgba(139,124,255,0.5)]"
        >
          <svg
            className="h-5 w-5 transition-transform group-hover:translate-y-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download for macOS
        </a>
        <a
          href="#pricing"
          className="font-mono text-[13px] text-muted underline decoration-line-bright underline-offset-4 transition-colors hover:text-ink"
        >
          $4.99 · lifetime license
        </a>
      </div>

      {/* Signature: the show-mode switch */}
      <div className="rise-5 mb-20 w-full">
        <ShowModeSwitch />
      </div>

      {/* Demo video in a macOS window frame */}
      <div className="rise-5 w-full max-w-4xl">
        <div className="relative">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-r from-violet/25 to-cyan/25 blur-3xl" />
          <div className="overflow-hidden rounded-2xl border border-line-bright bg-panel shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-2 border-b border-line bg-panel-2 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-[11px] text-muted">
                TogglePresent.app
              </span>
            </div>
            {!videoLoaded && <div className="aspect-video w-full animate-pulse bg-panel-2" />}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              aria-label="Demo of TogglePresent switching a Mac into presentation mode"
              onLoadedData={() => setVideoLoaded(true)}
              className={`w-full ${videoLoaded ? "" : "absolute inset-0 opacity-0"}`}
            >
              <source src="/main-section-recording.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

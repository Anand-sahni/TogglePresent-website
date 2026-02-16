"use client";

import { useState, useRef, useEffect } from "react";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // If video already has data by the time the effect runs
    if (video.readyState >= 3) {
      setVideoLoaded(true);
    }
  }, []);

  return (
    <section className="relative flex min-h-[100vh] flex-col items-center justify-center px-6 pt-16 text-center">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-gradient-to-br from-blue-50 via-blue-100/50 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>

      <h1 className="animate-fade-in-up-delay-1 mt-16 mb-6 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-slate-900">
        Single click, worry free{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
          presentations
        </span>
      </h1>

      <p className="animate-fade-in-up-delay-2 mb-10 max-w-xl text-lg leading-relaxed text-slate-500">
        Instantly hide desktop icons, mute audio, silence notifications,
        minimize apps, and change wallpaper all from your menu bar.
      </p>

      <div className="animate-fade-in-up-delay-3 flex flex-col items-center gap-4 sm:flex-row">
        <a
          href="https://github.com/Anand-sahni/TogglePresent/raw/main/TogglePresent.dmg"
          className="group inline-flex items-center gap-2.5 rounded-xl bg-blue-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
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
      </div>

      {/* Main demo video */}
      <div className="animate-fade-in-up-delay-3 mt-16 w-full max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border border-blue-200 shadow-2xl shadow-blue-100/50">
          {!videoLoaded && (
            <div className="aspect-video w-full animate-pulse bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 bg-[length:200%_100%] animate-shimmer" />
          )}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            className={`w-full ${videoLoaded ? "" : "absolute inset-0 opacity-0"}`}
          >
            <source src="/main-section-recording.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

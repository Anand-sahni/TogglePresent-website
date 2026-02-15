"use client";

import { useState } from "react";

const features = [
  {
    title: "Hide Desktop Icons",
    description:
      "Instantly clear your desktop of all icons for a clean, distraction-free screen.",
    video: "/hide-desktop-icons.mp4",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
  },
  {
    title: "Disable Notifications",
    description:
      "Silence all notifications so nothing interrupts your presentation or demo.",
    video: "/disable-notifications.mp4",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
  {
    title: "Mute Speaker",
    description:
      "Mute your Mac's audio output with one click no fumbling with volume controls.",
    video: "/mute-speaker.mp4",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
  },
  {
    title: "Minimize Active Apps",
    description:
      "Minimize all open windows to the dock, giving you a fresh, clean workspace.",
    video: "/minimize-active-apps.mp4",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
      </svg>
    ),
  },
  {
    title: "Change Wallpaper",
    description:
      "Switch to a neutral or branded wallpaper that's perfect for presenting.",
    video: "/change-wallpaper.mp4",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M2.25 18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 002.25 6v12zM12.75 8.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
];

function FeatureCard({
  feature,
  large,
  onVideoClick,
}: {
  feature: (typeof features)[number];
  large?: boolean;
  onVideoClick: (video: string) => void;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-blue-100 bg-white transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50">
      <div
        className="relative cursor-pointer overflow-hidden border-b border-blue-100 bg-blue-50"
        onClick={() => onVideoClick(feature.video)}
      >
        <video autoPlay loop muted playsInline className="w-full">
          <source src={feature.video} type="video/quicktime" />
          <source src={feature.video} type="video/mp4" />
        </video>
        {/* Expand icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/10">
          <svg
            className="h-10 w-10 text-white opacity-0 drop-shadow-lg transition-opacity duration-200 group-hover:opacity-80"
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
        </div>
      </div>
      <div className={large ? "p-6" : "p-5"}>
        <div
          className={`mb-3 inline-flex rounded-xl border border-blue-100 bg-blue-50 ${large ? "p-2.5" : "p-2"} text-blue-600 shadow-sm transition-colors group-hover:bg-blue-100 group-hover:text-blue-700`}
        >
          {feature.icon}
        </div>
        <h3
          className={`${large ? "mb-2 text-lg" : "mb-1.5 text-[15px]"} font-semibold text-slate-900`}
        >
          {feature.title}
        </h3>
        <p
          className={`${large ? "text-sm" : "text-[13px]"} leading-relaxed text-slate-500`}
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default function Features() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="features" className="relative bg-white px-6 py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/60 to-white" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full px-3 py-1 text-5xl font-extrabold uppercase tracking-widest text-blue-600">
            Features
          </span>
          <h2 className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl">
            Everything you need to present
          </h2>
          <p className="mx-auto max-w-lg text-base text-slate-500">
            Five toggleable features that transform your Mac into the perfect
            presentation machine.
          </p>
        </div>

        {/* Bento grid: 2 large cards on top, 3 smaller cards below */}
        <div className="grid gap-6 sm:grid-cols-2">
          {features.slice(0, 2).map((feature) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              large
              onVideoClick={setActiveVideo}
            />
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.slice(2).map((feature) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              onVideoClick={setActiveVideo}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
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
            className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl"
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

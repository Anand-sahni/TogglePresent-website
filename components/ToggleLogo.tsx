"use client";

import { useState } from "react";

export default function ToggleLogo({
  size = 32,
  interactive = false,
}: {
  size?: number;
  interactive?: boolean;
}) {
  const [isOn, setIsOn] = useState(true);

  const width = size * 2.2;
  const height = size;
  const trackRadius = height / 2;
  const thumbSize = height * 0.7;
  const thumbRadius = thumbSize / 2;
  const thumbOnX = width - thumbSize / 2 - height * 0.18;
  const thumbOffX = thumbSize / 2 + height * 0.18;
  const thumbX = isOn ? thumbOnX : thumbOffX;
  const thumbY = height / 2;

  const uniqueId = `logo-${size}-${interactive ? "i" : "s"}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={interactive ? () => setIsOn((prev) => !prev) : undefined}
      className={
        interactive
          ? "cursor-pointer transition-transform duration-150 active:scale-95"
          : undefined
      }
    >
      {/* Track background */}
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        rx={trackRadius}
        fill={isOn ? "#2563eb" : "#94a3b8"}
        style={{ transition: "fill 0.3s ease" }}
      />
      {/* Track inner gradient */}
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        rx={trackRadius}
        fill={isOn ? `url(#trackGradient-${uniqueId})` : "none"}
        style={{ transition: "fill 0.3s ease" }}
      />
      {/* Thumb */}
      <rect
        x={thumbX - thumbRadius}
        y={thumbY - thumbSize / 2}
        width={thumbSize}
        height={thumbSize}
        rx={thumbRadius}
        fill={`url(#thumbGradient-${uniqueId})`}
        // stroke={isOn ? "#3b82f6" : "#cbd5e1"}
        // strokeWidth={6}
        style={{ transition: "x 0.3s ease, stroke 0.3s ease" }}
      />
      <defs>
        <linearGradient
          id={`trackGradient-${uniqueId}`}
          x1="0"
          y1="0"
          x2={width}
          y2={height}
        >
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient
          id={`thumbGradient-${uniqueId}`}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#e0eaff" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>
      </defs>
    </svg>
  );
}

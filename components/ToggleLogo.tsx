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
      role="img"
      aria-label="TogglePresent logo"
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
        fill={isOn ? `url(#trackGradient-${uniqueId})` : "#2a2f4a"}
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
        style={{ transition: "x 0.3s ease" }}
      />
      <defs>
        <linearGradient
          id={`trackGradient-${uniqueId}`}
          x1="0"
          y1="0"
          x2={width}
          y2={height}
        >
          <stop offset="0%" stopColor="#8b7cff" />
          <stop offset="100%" stopColor="#53d4ff" />
        </linearGradient>
        <linearGradient
          id={`thumbGradient-${uniqueId}`}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dfe6ff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "TogglePresent — one-click presentation mode for your Mac";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#07080e",
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 30% 20%, rgba(139,124,255,0.25), transparent), radial-gradient(ellipse 60% 50% at 75% 80%, rgba(83,212,255,0.18), transparent)",
        }}
      >
        {/* Toggle mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: 180,
            height: 84,
            borderRadius: 42,
            background: "linear-gradient(100deg, #8b7cff, #53d4ff)",
            padding: 10,
            justifyContent: "flex-end",
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              background: "#ffffff",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 800,
            color: "#eef1ff",
            letterSpacing: -3,
          }}
        >
          TogglePresent
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 34,
            color: "#99a1c8",
          }}
        >
          One-click presentation mode for your Mac
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: 44,
            padding: "14px 32px",
            borderRadius: 999,
            border: "1px solid rgba(61,230,140,0.4)",
            background: "rgba(61,230,140,0.08)",
            color: "#3de68c",
            fontSize: 26,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              background: "#3de68c",
            }}
          />
          Show mode: ON
        </div>
      </div>
    ),
    size,
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TogglePresent — One click. Full focus.",
  description:
    "A macOS menu bar app that instantly prepares your Mac for presentations. Hide desktop icons, mute audio, disable notifications, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

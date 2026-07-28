import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const siteUrl = "https://www.togglepresent.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TogglePresent — One-Click Presentation Mode for Mac",
    template: "%s | TogglePresent",
  },
  description:
    "TogglePresent is a macOS menu bar app that preps your Mac for presentations in one click: hide desktop icons, mute audio, silence notifications, minimize windows, and swap your wallpaper. $4.99 lifetime license.",
  keywords: [
    "presentation mode Mac",
    "hide desktop icons Mac",
    "macOS menu bar app",
    "disable notifications Mac presentation",
    "mute Mac one click",
    "clean desktop for screen sharing",
    "prepare Mac for demo",
    "TogglePresent",
  ],
  applicationName: "TogglePresent",
  authors: [{ name: "TogglePresent" }],
  creator: "TogglePresent",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "TogglePresent",
    title: "TogglePresent — One-Click Presentation Mode for Mac",
    description:
      "Flip your Mac into show mode. One click hides desktop icons, mutes audio, silences notifications, minimizes windows, and swaps your wallpaper — then puts it all back.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TogglePresent — One-Click Presentation Mode for Mac",
    description:
      "Flip your Mac into show mode. One click hides desktop icons, mutes audio, silences notifications, minimizes windows, and swaps your wallpaper.",
  },
  verification: {
    google: "g2iKAafEcO0XXZbu1zYPiMAR_XQ8-axBreeUjYpRZac",
    other: {
      "msvalidate.01": "37F0E0EFBC679CB78F966973E1177E06",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#07080e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}

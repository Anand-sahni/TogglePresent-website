import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TogglePresent",
  operatingSystem: "macOS 14.0 or later",
  applicationCategory: "UtilitiesApplication",
  description:
    "A macOS menu bar app that prepares your Mac for presentations in one click: hide desktop icons, mute audio, silence notifications, minimize windows, and change wallpaper.",
  url: "https://www.togglepresent.app",
  offers: {
    "@type": "Offer",
    price: "4.99",
    priceCurrency: "USD",
    category: "Lifetime license",
  },
  featureList: [
    "Hide desktop icons",
    "Disable notifications",
    "Mute speaker",
    "Minimize active apps",
    "Change wallpaper",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-void">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Download />
      <Footer />
    </main>
  );
}

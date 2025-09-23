import type { Metadata } from "next";
import { Playfair_Display, Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LightRays from "@/components/LightRays";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "3 Jokers Entertainment - Theater & Film Collective",
  description: "A dynamic theater and film collective creating compelling stories through live performance and cinematic excellence. Professional theater production, film creation, and collaborative artistic projects.",
  keywords: ["theater production", "film collective", "live performance", "theater", "film production", "collaborative projects", "artistic collective"],
  authors: [{ name: "3 Jokers Entertainment" }],
  openGraph: {
    title: "3 Jokers Entertainment - Theater & Film Collective",
    description: "A dynamic theater and film collective creating compelling stories through live performance and cinematic excellence.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "3 Jokers Entertainment - Theater & Film Collective",
    description: "A dynamic theater and film collective creating compelling stories through live performance and cinematic excellence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${oswald.variable} antialiased text-white min-h-screen relative`}
      >
        {/* LightRays Background */}
        <div className="fixed inset-0 z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#1a1a1a"
            raysSpeed={0.3}
            lightSpread={1.2}
            rayLength={1.5}
            pulsating={true}
            fadeDistance={0.6}
            saturation={0.3}
            followMouse={true}
            mouseInfluence={0.03}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Header />
          <main className="pt-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

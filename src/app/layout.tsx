import type { Metadata } from "next";
import { Playfair_Display, Inter, Oswald } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import ConditionalHeader from "@/components/layout/ConditionalHeader";

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
        <BackgroundWrapper>
          <ConditionalHeader />
          <main>
            {children}
          </main>
          <Footer />
        </BackgroundWrapper>
      </body>
    </html>
  );
}

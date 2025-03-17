import { Anton, IBM_Plex_Sans } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/css/globals.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Footer } from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { AxiomWebVitals } from "next-axiom";
import { AnimatedGrinch } from "@/components/AnimatedGrinch";
import { AnimatedSnow } from "@/components/AnimatedSnow";
import Script from "next/script";

config.autoAddCss = false;

const a = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});
const b = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const today = new Date();
  const isDecember = today.getMonth() === 11;

  return (
    <html lang="en" className={`${a.variable} ${b.variable}`}>
      <Script src="https://embed.twitch.tv/embed/v1.js" />
      <body suppressHydrationWarning={true}>
        <SpeedInsights />
        <AxiomWebVitals />
        <Analytics />
        {children}
        <Footer />
        {isDecember && (
          <>
            <AnimatedGrinch />
            <AnimatedSnow />
          </>
        )}
      </body>
    </html>
  );
}

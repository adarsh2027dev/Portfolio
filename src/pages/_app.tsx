import type { AppProps } from "next/app";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "@/Styles/globals.css";
import { Chatbot } from "@/components/ui/Chatbot";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${sans.variable} ${mono.variable}`}>
      <Component {...pageProps} />
      <Chatbot />
    </div>
  );
}

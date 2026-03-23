import { Dancing_Script, Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
});

export const roxborough = localFont({
  src: "../public/font/Roxborough-CF.ttf",
  display: "swap",
});

export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

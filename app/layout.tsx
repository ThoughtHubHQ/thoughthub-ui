import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { inter } from "@/lib/font";
import Analytics, { GTM_ID } from "@/lib/analytics";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://thoughthubhq.com"),
  title: "ThoughtHub - Where Thoughts Take Shape",
  description:
    "Innovative solutions for Web & Mobile apps, Creative Design & Editing, Notion Workspace, IT & Network Consultancy.",
  openGraph: {
    title: "ThoughtHub - Where Thoughts Take Shape",
    description:
      "Innovative solutions for Web & Mobile apps, Creative Design & Editing, Notion Workspace, IT & Network Consultancy.",
    type: "website",
    url: "https://thoughthubhq.com",
    siteName: "ThoughtHub",
    images: [
      {
        url: "/banner/th-socialMedia.png",
        width: 1200,
        height: 630,
        alt: "ThoughtHub – Innovative Web & Mobile Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ThoughtHub - Where Thoughts Take Shape",
    description:
      "Innovative solutions for Web & Mobile apps, Creative Design & Editing, Notion Workspace, IT & Network Consultancy.",
    images: ["/banner/th-socialMedia.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.className, "font-sans", geist.variable)}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Analytics />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-right" />
          <main className="grow">
            <TooltipProvider>{children}</TooltipProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

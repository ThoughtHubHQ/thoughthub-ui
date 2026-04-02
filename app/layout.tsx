import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { inter } from "@/lib/font";
import Analytics from "@/lib/analytics";

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
  const GTM_ID = "GT-K558WRQC";

  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body className="font-sans antialiased bg-background text-foreground">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-right" />
          <main className="grow">
            {children}
            <Analytics />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

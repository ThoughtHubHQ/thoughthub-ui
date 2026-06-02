import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { inter } from "@/lib/font";
import AppAnalytics, { GTM_ID } from "@/lib/analytics";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrandAssets } from "@/lib/asset";

export const metadata: Metadata = {
  metadataBase: new URL(BrandAssets.mainUrl),
  title: `${BrandAssets.name} - ${BrandAssets.slogan}`,
  description: BrandAssets.description,
  openGraph: {
    title: BrandAssets.name,
    description: BrandAssets.description,
    type: "website",
    url: BrandAssets.mainUrl,
    siteName: BrandAssets.name,
    images: [
      {
        url: BrandAssets.SocialMediaPreview,
        width: 1200,
        height: 630,
        alt: `${BrandAssets.name} – Innovative Web & Mobile Solutions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BrandAssets.name,
    description: BrandAssets.description,
    images: [BrandAssets.SocialMediaPreview],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BrandAssets.name,
    url: BrandAssets.mainUrl,
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.className, "font-sans", "scroll-smooth")}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Analytics />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-right" />
          <main className="flex flex-col grow">
            <TooltipProvider>{children}</TooltipProvider>
          </main>
        </ThemeProvider>

        <SpeedInsights />
        <AppAnalytics />
      </body>
    </html>
  );
}

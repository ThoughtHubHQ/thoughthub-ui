import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThoughtHub - Where Thoughts Take Shape",
  description:
    "Innovative solutions for Web & Mobile apps, Creative Design & Editing, Notion Workspace, IT & Network Consultancy.",
  manifest: "/manifest.json",
  openGraph: {
    title: "ThoughtHub",
    description:
      "Where Thoughts Take Shape – Innovative solution for Web & Mobile apps, Creative Design & Editing, Notion Workspace, IT & Network Consultancy.",
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
    title: "ThoughtHub",
    description:
      "Where Thoughts Take Shape – Innovative solutions for Web & Mobile apps, Creative Design & Editing, Notion Workspace, IT & Network Consultancy.",
    images: ["/banner/th-socialMedia.png"],
  },
};

const GTM_ID = "GT-K558WRQC";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

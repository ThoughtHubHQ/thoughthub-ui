import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'ThoughtHub - Where Thoughts Take Shape',
  description:
    'Innovative solutions for Web & Mobile apps, Creative Design & Editing, Notion Workspace, IT & Network Consultancy.',
  openGraph: {
    title: 'ThoughtHub',
    description:
      'Where Thoughts Take Shape – Innovative solutions for Web & Mobile apps, Creative Design & Editing, Notion Workspace, IT & Network Consultancy.',
    type: 'website',
    url: 'https://thoughthubhq.com',
    siteName: 'ThoughtHub',
    images: [
      {
        url: '/banner/th-socialMedia.png',
        width: 1200,
        height: 630,
        alt: 'ThoughtHub – Innovative Web & Mobile Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThoughtHub',
    description:
      'Where Thoughts Take Shape – Innovative solutions for Web & Mobile apps, Creative Design & Editing, Notion Workspace, IT & Network Consultancy.',
    images: ['/banner/th-socialMedia.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

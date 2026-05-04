"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-changer";
import { BrandAssets } from "@/lib/asset";
import { roxborough } from "@/lib/font";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const navItems = [
    { name: "Work", href: "#showcase" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent transition-colors duration-500">
      <div className="relative w-full px-8 lg:px-6 py-7 flex justify-between items-center max-w-360 mx-auto">
        <Link href="/"
          className={`${roxborough.className} text-2xl md:text-3xl font-bold text-black dark:text-[#e7eacd] tracking-wide flex items-center`}
        >
          <Image
            src={BrandAssets.darkModeLogo}
            alt="TH Logo"
            width={40}
            height={40}
            className="mr-2 hidden dark:block"
          />
          <Image
            src={BrandAssets.lightModeLogo}
            alt="TH Logo"
            width={40}
            height={40}
            className="mr-2 block dark:hidden"
          />
          {BrandAssets.name}
        </Link>

        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8 text-sm font-medium text-black/70 dark:text-white/70">
          <ul className="flex items-center justify-between gap-5">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hover:text-black dark:hover:text-[#e7eacd] transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-between gap-2">
          <Button className="px-6 py-5 rounded-full bg-black text-[#e7eacd] dark:bg-[#e7eacd] dark:text-black text-sm font-semibold hover:scale-105 transition-transform hidden md:flex">
            Let&apos;s Talk
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
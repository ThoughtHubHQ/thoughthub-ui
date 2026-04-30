"use client";

import { Button } from "@/components/ui/button";
import { BrandName } from "@/lib/asset";
import { roxborough } from "@/lib/font";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Header() {
  const { theme } = useTheme();

  const navItems = [
    { name: "Work", href: "#" },
    { name: "Services", href: "#" },
    { name: "Consultancy", href: "#" },
  ];

  return (
    <div className="bg-[#e7eacd] dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
      <header className="w-full px-4 lg:px-6 py-8 flex justify-between items-center max-w-7xl mx-auto">
        <div
          className={`${roxborough.className} text-2xl md:text-3xl font-bold text-black dark:text-[#e7eacd] tracking-wide flex items-center`}
        >
          {theme === "dark" ? (
            <Image
            src="/logo/th-logo-wt.png"
              alt="Brand Logo"
              width={40}
              height={40}
              className="mr-2"
            />
          ) : (
            <Image
            src="/logo/th-logo-bt.png"
              alt="Brand Logo"
              width={40}
              height={40}
              className="mr-2"
            />
          )}
          {BrandName}
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-black/70 dark:text-white/70">
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

        <Button className="px-6 py-5 rounded-full bg-black text-[#e7eacd] dark:bg-[#e7eacd] dark:text-black text-sm font-semibold hover:scale-105 transition-transform">
          Let&apos;s Talk
        </Button>
      </header>
    </div>
  );
}

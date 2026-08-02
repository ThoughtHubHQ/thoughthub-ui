"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/theme-changer";
import { BrandAssets } from "@/lib/asset";
import { roxborough } from "@/lib/font";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Work", href: "/#showcase" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#e6e9cc] dark:bg-[#0a0a0a] border-b border-[#e6e9cc] dark:border-white/5 py-3"
          : "bg-transparent py-4 lg:py-5"
      }`}
    >
      
      <div className="relative w-full px-6 flex justify-between items-center max-w-360 mx-auto">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className={`${roxborough.className} text-2xl md:text-3xl font-bold text-black dark:text-[#e7eacd] tracking-wide flex items-center z-50`}
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
                <Link
                  href={item.href}
                  className="hover:text-black dark:hover:text-[#e7eacd] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-between gap-3 md:gap-2 z-50">
          <Link
            href="/#contact"
            className="px-6 py-3.5 rounded-full bg-black text-[#e7eacd] dark:bg-[#e7eacd] dark:text-black text-sm font-semibold hover:scale-105 transition-transform hidden md:flex items-center justify-center"
          >
            Let&apos;s Talk
          </Link>

          <ThemeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-black dark:text-[#e7eacd] hover:bg-black/5 dark:hover:bg-white/5 rounded-full outline-none flex items-center justify-center transition-colors relative"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" strokeWidth={1.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" strokeWidth={1.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-4 right-4 mt-2 bg-[#f1f2e1] dark:bg-[#1a1a1a] rounded-3xl p-5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-black/10 dark:border-white/10 md:hidden flex flex-col origin-top"
            >
              <nav className="flex flex-col gap-4 pt-2 pb-5">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-medium text-black/80 dark:text-white/80 hover:text-black dark:hover:text-[#e7eacd] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-2 rounded-xl bg-black text-[#e7eacd] dark:bg-[#e7eacd] dark:text-black text-sm font-medium transition-transform flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                Let&apos;s Talk <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
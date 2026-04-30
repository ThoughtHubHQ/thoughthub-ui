import { Button } from "@/components/ui/button";
import { roxborough } from "@/lib/font";
import React from "react";

interface HeroProps {
  title?: string;
  slogan?: string;
  description?: string;
  brandName?: string;
}

export default function Hero({
  title,
  slogan,
  description,
  brandName,
}: HeroProps) {
  const displayTitle = title || "We don't just build, we CRAFT.";
  const displaySlogan = slogan || "Where Thoughts Take Shape...";
  const displayDescription =
    description ||
    "Innovative solution for Web & Mobile Apps Development, UI/UX & Creative Design, Notion workspace setup & IT Consultancy.";
  const displayBrand = brandName || "ThoughtHub";

  return (
    <section className="relative w-full min-h-screen flex flex-col bg-[#e7eacd] dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
      <header className="w-full px-6 py-8 flex justify-between items-center max-w-7xl mx-auto relative z-20">
        <div className="text-2xl md:text-3xl font-['Roxborough_CF',serif] font-bold text-black dark:text-[#e7eacd] tracking-wide">
          {displayBrand}
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-black/70 dark:text-white/70">
          <a
            href="#"
            className="hover:text-black dark:hover:text-[#e7eacd] transition-colors"
          >
            Work
          </a>
          <a
            href="#"
            className="hover:text-black dark:hover:text-[#e7eacd] transition-colors"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-black dark:hover:text-[#e7eacd] transition-colors"
          >
            Consultancy
          </a>
        </nav>

        <Button className="px-6 py-5 rounded-full bg-black text-[#e7eacd] dark:bg-[#e7eacd] dark:text-black text-sm font-semibold hover:scale-105 transition-transform">
          Let's Talk
        </Button>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10 text-center pb-20">
        <span className="mb-8 px-5 py-2 rounded-full border border-black/20 dark:border-[#e7eacd]/20 text-xs sm:text-sm font-medium tracking-widest uppercase text-black dark:text-[#e7eacd]">
          {displaySlogan}
        </span>

        <h1
          className={`${roxborough.className} text-5xl md:text-7xl lg:text-8xl font-bold text-black dark:text-white tracking-tight leading-[1.1] mb-8 max-w-5xl`}
        >
          {displayTitle.split("CRAFT")[0]}
          <span className="italic font-light text-black dark:text-[#e7eacd]">
            CRAFT.
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-black/70 dark:text-white/70 font-light leading-relaxed mb-12">
          {displayDescription}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto mt-4">
          <Button className="w-full sm:w-auto px-8 py-7.5 rounded-full bg-black dark:bg-[#e7eacd] text-[#e7eacd] dark:text-black font-medium text-lg hover:scale-105 transition-transform duration-300">
            Start a Project
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto px-8 py-7.5 rounded-full border border-black dark:border-[#e7eacd] text-black dark:text-[#e7eacd] font-medium text-lg hover:scale-105 transition-all duration-300"
          >
            Explore Our Work
          </Button>
        </div>
      </div>

      <div className="absolute top-1/4 left-0 w-120 h-120 bg-white/30 dark:bg-[#e7eacd]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-160 h-160 bg-black/5 dark:bg-[#e7eacd]/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}

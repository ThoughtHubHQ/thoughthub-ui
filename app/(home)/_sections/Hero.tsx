import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BrandDescription, BrandMotto, BrandSlogan } from "@/lib/asset";
import { roxborough } from "@/lib/font";

export default function Hero() {
  return (
    <section className="relative w-full py-5 flex flex-col bg-[#e7eacd] dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10 text-center pb-20">
        <Badge
          variant="outline"
          className={`mb-8 px-5 py-5 rounded-full border border-black/20 dark:border-[#e7eacd]/20 text-xs sm:text-sm font-bold tracking-widest  text-black dark:text-[#e7eacd] ${roxborough.className} `}
        >
          {BrandSlogan}
        </Badge>

        <h1
          className={`${roxborough.className} text-5xl md:text-7xl lg:text-8xl font-bold text-black dark:text-[#fafaf8] tracking-tight leading-[1.1] mb-8 max-w-5xl`}
        >
          {BrandMotto.split("CRAFT")[0]}
          <span className="italic font-light text-black dark:text-[#e7eacd]">
            CRAFT.
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-black/70 dark:text-white/70 font-light leading-relaxed mb-12">
          {BrandDescription}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto mt-4">
          <Button className="w-full sm:w-auto px-8 py-7.5 rounded-full bg-black dark:bg-[#e7eacd] text-[#e7eacd] dark:text-black font-medium text-lg hover:scale-105 transition-transform duration-300">
            Start a Project
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto px-8 py-7.5 bg-transparent hover:bg-transparent rounded-full border-2 border-muted-foreground dark:border-[#e7eacd] text-black dark:text-[#e7eacd] font-medium text-lg hover:scale-105 transition-all duration-300"
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

"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BrandDescription, BrandMotto, BrandSlogan } from "@/lib/asset";
import { roxborough } from "@/lib/font";
import { motion } from "framer-motion";
import { floatVariants, itemVariants } from "@/lib/framer-animation";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full pt-15 flex flex-col bg-[#e7eacd] dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10 text-center pb-20">
        <motion.div
          variants={floatVariants}
          initial="hidden"
          animate={["show", "floating"]}
        >
          <Badge
            variant="outline"
            className={`mb-8 px-5 py-5 rounded-full border border-black/20 dark:border-[#e7eacd]/20 text-xs sm:text-sm font-bold tracking-widest text-black dark:text-[#e7eacd] shadow-lg ${roxborough.className}`}
          >
            {BrandSlogan}
          </Badge>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={["show", "floating"]}
          className="flex flex-col justify-center items-center"
        >
          <h1
            className={`${roxborough.className} text-5xl md:text-7xl lg:text-8xl font-bold text-black dark:text-[#fafaf8] tracking-tight leading-[1.1] mb-8 max-w-5xl`}
          >
            {BrandMotto.split("CRAFT")[0]} <br className="block md:hidden" />
            <span className="italic font-light text-black dark:text-[#e7eacd]">
              CRAFT.
            </span>
          </h1>
          <p
            className="text-center max-w-3xl text-lg md:text-xl text-black/70 dark:text-white/70
           font-light leading-relaxed mb-12"
          >
            {BrandDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 w-full sm:w-auto">
            <Button className="w-full sm:w-auto px-5 py-6 rounded-full bg-black text-[#e7eacd] dark:bg-[#e7eacd] dark:text-black text-sm font-semibold hover:scale-105 transition-transform">
              Start a Project <ChevronRight />
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto px-4 py-5.5 bg-transparent hover:bg-transparent rounded-full border-2 border-muted-foreground dark:border-[#e7eacd]
               text-black dark:text-[#e7eacd] font-medium hover:scale-105 transition-all duration-300"
            >
              Explore Our Work
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/4 left-0 w-120 h-120 bg-white/30 dark:bg-[#e7eacd]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-160 h-160 bg-black/5 dark:bg-[#e7eacd]/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}

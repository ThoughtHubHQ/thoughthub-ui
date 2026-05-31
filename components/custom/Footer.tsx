import { BrandAssets } from "@/lib/asset";
import { roxborough } from "@/lib/font";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
  return (
    <div className="py-5 bg-transparent border-t border-black/20 dark:border-[#e7eacd]/20 text-sm text-black/70 dark:text-[#e7eacd]/70">
      <div className="w-full flex flex-col md:flex-row items-center justify-between text-center gap-4 max-w-360 mx-auto px-6 lg:px-8">
        <div>
          &copy; {new Date().getFullYear()}{" "}
          <span
            className={`font-bold text-black dark:text-[#e7eacd] ${roxborough.className}`}
          >
            {BrandAssets.name}
          </span>
          . All rights reserved.
        </div>
        <div className="hidden md:block">
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
}

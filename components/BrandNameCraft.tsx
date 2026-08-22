import { BrandAssets } from "@/lib/asset";
import { roxborough } from "@/lib/font";

export const BrandNameCraft = ({ className = "" }: { className?: string }) => (
  <span
    className={`${roxborough.className} dark:text-[#fafaf8] font-bold ${className}`}
  >
    {BrandAssets.name}
  </span>
);

import { BrandAssets } from "@/lib/asset";
import { roxborough } from "@/lib/font";

const footerLinks = [
  {
    title: "Privacy Policy",
    url: "/privacy-policy",
  },
  {
    title: "Terms & Conditions",
    url: "/terms-and-conditions",
  },
];

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
        <div>
          <ul className="flex gap-6">
            {footerLinks.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  className="hover:text-black dark:hover:text-[#e7eacd] transition-colors text-xs md:text-sm"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

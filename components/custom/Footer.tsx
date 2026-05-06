import { BrandAssets, contactInfo, SocialMediaUrls } from "@/lib/asset";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookMessenger,
} from "react-icons/fa6";
import { SiNotion } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { roxborough } from "@/lib/font";

const encodedMessage = encodeURIComponent(
  "Hello, ThoughtHub! I have a question about your services.",
);

//Social Media Links
export const socialMediaLinks = [
  {
    media: SocialMediaUrls.facebook,
    name: "Facebook",
    href: SocialMediaUrls.facebook,
    icon: FaSquareFacebook,
  },
  {
    media: SocialMediaUrls.linkedin,
    name: "LinkedIn",
    href: SocialMediaUrls.linkedin,
    icon: FaLinkedin,
  },
  {
    media: SocialMediaUrls.notion,
    name: "Notion",
    href: SocialMediaUrls.notion,
    icon: SiNotion,
  },
  {
    media: contactInfo.emailAdmin,
    name: "E-Mail",
    href: `mailto:${contactInfo.emailAdmin}`,
    icon: FaEnvelope,
  },
  {
    media: contactInfo.whatsApp,
    name: "WhatsApp",
    href: `https://api.whatsapp.com/send/?phone=${contactInfo.whatsApp}&text=${encodedMessage}`,
    icon: FaWhatsapp,
  },
  {
    media: contactInfo.fbMessenger,
    name: "Facebook Messanger",
    href: contactInfo.fbMessenger,
    icon: FaFacebookMessenger,
  },
];
export default function Footer() {
  return (
    <div className="py-5 bg-transparent border-t border-black/20 dark:border-[#e7eacd]/20 text-sm text-black/70 dark:text-[#e7eacd]/70">
      <div className="w-full flex flex-col md:flex-row items-center justify-between text-center gap-4 max-w-360 mx-auto">
        {" "}
        <div>
          &copy; {new Date().getFullYear()}{" "}
          <span className={`font-bold text-black dark:text-[#e7eacd] ${roxborough.className}`}>
            {BrandAssets.name}
          </span>
          . All rights reserved.
        </div>
        <div>
          <div className="flex items-center gap-3 lg:gap-4">
            {socialMediaLinks.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg lg:text-2xl text-black/70 dark:text-[#e7eacd]/70 hover:text-black dark:hover:text-[#e7eacd] transition-colors duration-300 inline-flex items-center"
                    >
                      <IconComponent />
                    </a>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

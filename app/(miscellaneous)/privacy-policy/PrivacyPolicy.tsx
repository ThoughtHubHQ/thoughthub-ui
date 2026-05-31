"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/framer-animation";
import { contactInfo } from "@/lib/asset";
import { format } from "date-fns";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const privacyContent = [
  {
    id: "info-collection",
    title: "1. Information Collection",
    content: `We collect information you provide directly to us when you use our services, request a quote, or communicate with us. This may include your name, email address, phone number, and any project-specific details required to deliver our services.`,
  },
  {
    id: "info-use",
    title: "2. Use of Information",
    content: `The information we collect is used strictly to provide, maintain, and improve our services. We use your details to manage project communications, process transactions, and send critical updates regarding your project.`,
  },
  {
    id: "data-security",
    title: "3. Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no internet-based service is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    id: "third-party",
    title: "4. Third-Party Services",
    content: `We do not sell, trade, or rent your personal identification information to others. We may use third-party service providers (such as hosting or analytics platforms) who are bound by confidentiality agreements to assist us in operating our business.`,
  },
  {
    id: "user-rights",
    title: "5. Your Rights",
    content: `You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, please contact us directly using the information provided below.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <section className="w-full py-10 lg:py-20 bg-transparent overflow-hidden my-20">
      <div className="max-w-5xl mx-auto px-10 md:px-16">
        <motion.div
          variants={slideInFromLeft}
          initial="hidden"
          animate="show"
          className="relative mb-12 lg:mb-16 border-b border-black/20 dark:border-[#e7eacd]/20 pb-8"
        >
          <Link
            href="/"
            className="absolute right-full  top-1 md:top-3 text-black/50 hover:text-black dark:text-white/50 dark:hover:text-[#e7eacd] transition-colors cursor-pointer"
            aria-label="Back to Home"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 cursor-pointer" />
          </Link>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-[#fafaf8] tracking-tight leading-tight mb-4">
            Privacy{" "}
            <span className="italic font-light dark:text-[#e7eacd]">
              Policy
            </span>
          </h1>
          <p className="text-sm lg:text-base text-black/70 dark:text-white/70 font-light">
            Last updated: {format(new Date(), "dd-MMM-yyyy")}
          </p>
        </motion.div>

        <div className="flex flex-col gap-10">
          {privacyContent.map((section) => (
            <div key={section.id} className="flex flex-col gap-3">
              <h2 className="text-xl lg:text-2xl font-bold text-black dark:text-[#fafaf8]">
                {section.title}
              </h2>
              <p className="text-black/70 dark:text-white/70 text-sm md:text-base font-light leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}

          <div className="mt-8 p-6 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/10 dark:border-white/10">
            <h3 className="text-lg font-bold text-black dark:text-[#fafaf8] mb-2">
              Contacting Us
            </h3>
            <p className="text-black/70 dark:text-white/70 text-sm md:text-base font-light leading-relaxed">
              If you have questions about this Privacy Policy, please contact us
              at{" "}
              <a
                href={`mailto:${contactInfo.emailAdmin}`}
                className="text-black dark:text-[#e7eacd] font-medium hover:opacity-70 transition-opacity"
              >
                {contactInfo.emailAdmin}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
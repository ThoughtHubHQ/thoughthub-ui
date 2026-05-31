"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/framer-animation";
import { BrandAssets, contactInfo } from "@/lib/asset";
import { format } from "date-fns";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const termsContent = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By accessing and using the services provided by ${BrandAssets.name}, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.`,
  },
  {
    id: "services",
    title: "2. Services Provided",
    content: `We specialize in Web & Mobile Apps Development, UI/UX Design, and IT Consultancy. The specific scope, timeline, and deliverables of any project will be outlined in a separate, formal agreement or Statement of Work (SOW) prior to commencement.`,
  },
  {
    id: "client-responsibilities",
    title: "3. Client Responsibilities",
    content: `Clients are expected to provide clear requirements, necessary assets, and timely feedback. Delays in communication or asset delivery may impact project timelines. We reserve the right to pause projects if necessary resources are withheld.`,
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property",
    content: `Upon full payment, all final deliverables and custom code created specifically for your project transfer to your ownership. ${BrandAssets.name} retains the right to use the final products in our portfolio and showcase them as case studies, unless a prior Non-Disclosure Agreement (NDA) states otherwise.`,
  },
  {
    id: "limitation-liability",
    title: "5. Limitation of Liability",
    content: `In no event shall ${BrandAssets.name} be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services, including but not limited to loss of data, revenue, or business disruption.`,
  },
];

export default function TermsAndConditions() {
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
            className="absolute right-full top-1 md:top-3 text-black/50 hover:text-black dark:text-white/50 dark:hover:text-[#e7eacd] transition-colors cursor-pointer"
            aria-label="Back to Home"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 cursor-pointer" />
          </Link>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-[#fafaf8] tracking-tight leading-tight mb-4">
            Terms & <span className="italic font-light dark:text-[#e7eacd]">Conditions</span>
          </h1>
          <p className="text-sm lg:text-base text-black/70 dark:text-white/70 font-light">
            Last updated: {format(new Date(), "dd-MMM-yyyy")}
          </p>
        </motion.div>

        <div className="flex flex-col gap-10">
          {termsContent.map((section) => (
            <div
              key={section.id}
              className="flex flex-col gap-3"
            >
              <h2 className="text-xl lg:text-2xl font-bold text-black dark:text-[#fafaf8]">
                {section.title}
              </h2>
              <p className="text-black/70 dark:text-white/70 text-sm md:text-base font-light leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}

          <div className="mt-8 p-6 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/10 dark:border-white/10">
             <h3 className="text-lg font-bold text-black dark:text-[#fafaf8] mb-2">
                Questions?
             </h3>
             <p className="text-black/70 dark:text-white/70 text-sm md:text-base font-light leading-relaxed">
                For any inquiries regarding these terms, please contact us at{" "}
                <a href={`mailto:${contactInfo.emailAdmin}`} className="text-black dark:text-[#e7eacd] font-medium hover:opacity-70 transition-opacity">
                   {contactInfo.emailAdmin}
                </a>
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
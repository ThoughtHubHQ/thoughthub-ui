"use client";

import ContactForm from "@/components/form/ContactForm";
import { motion } from "framer-motion";
import { roxborough } from "@/lib/font";
import { contactInfo } from "@/lib/asset";
import {
  smoothFadeUpVariants,
  slideInFromLeft,
  containerVariants,
  itemVariants,
} from "@/lib/framer-animation";

export default function Contact() {
  return (
    <section
      className="w-full py-5 lg:py-10 bg-transparent mb-10 overflow-hidden"
      id="contact"
    >
      <div className="max-w-360 mx-auto px-6 lg:px-8">
        <motion.div
          variants={slideInFromLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-10 lg:mb-16"
        >
          <div className="max-w-2xl text-center md:text-left">
            <h2
              className={`${roxborough.className} text-3xl lg:text-4xl xl:text-5xl font-bold text-black dark:text-[#fafaf8] tracking-tight leading-tight mb-4`}
            >
              Start a{" "}
              <span className="italic font-light dark:text-[#e7eacd]">
                Conversation
              </span>
            </h2>
            <p className="text-sm lg:text-lg text-black/70 dark:text-white/70 font-light">
              Every great project starts with a simple hello. Reach out to us to
              discuss your vision, and let&apos;s see how our crafted approach
              aligns with your goals.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-10 lg:pl-10 mt-8 lg:mt-0 order-last lg:order-first"
          >
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-black/50 dark:text-white/50">
                Direct Inquiries
              </h3>
              <a
                href={`mailto:${contactInfo.emailAdmin}`}
                className={`${roxborough.className} text-2xl font-bold text-black dark:text-[#fafaf8] hover:opacity-70 dark:hover:text-[#e7eacd] transition-colors`}
              >
                {contactInfo.emailAdmin}
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-black/50 dark:text-white/50">
                Phone Support
              </h3>
              <a
                href={`tel:${contactInfo.phone}`}
                className={`${roxborough.className} text-2xl font-bold text-black dark:text-[#fafaf8] hover:opacity-70 dark:hover:text-[#e7eacd] transition-colors`}
              >
                {contactInfo.phone}
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-black/50 dark:text-white/50">
                Location
              </h3>
              <address
                className={`${roxborough.className} text-2xl font-bold text-black dark:text-[#fafaf8] not-italic leading-relaxed max-w-sm`}
              >
                <a
                  href={contactInfo.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 dark:hover:text-[#e7eacd] transition-colors hover:underline"
                >
                  {contactInfo.location}
                </a>
              </address>
            </motion.div>
          </motion.div>
          <motion.div
            variants={smoothFadeUpVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full order-first lg:order-last"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

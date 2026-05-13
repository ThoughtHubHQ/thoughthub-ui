"use client";

import { motion } from "framer-motion";
import { roxborough } from "@/lib/font";
import { slideInFromLeft } from "@/lib/framer-animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BrandAssets } from "@/lib/asset";

const brandNameCraft = (
  <span className={`${roxborough.className} font-bold`}>
    {BrandAssets.name}
  </span>
);

const faqs = [
  {
    id: 1,
    question: "Do you take on rush or urgent projects?",
    answer:
      "Our philosophy is simple: We don’t just build, we CRAFT. Because we are deeply focused on delivering an exceptional user experience and perfecting the fine details, we do not rush our process for the sake of fast shipping. If you are on a very strict, urgent timeline, we might not be the best fit. We partner best with clients who believe that beautiful, innovative solutions take a little time to take shape.",
  },
  {
    id: 2,
    question: "Do you build e-commerce websites?",
    answer:
      "We generally step away from standard, everyday e-commerce builds. However, we are always moved by creativity! If your e-commerce concept is artistic, highly exceptional, or pushes boundaries in a way that truly inspires us, we would absolutely love to hear about it. If your vision captures our imagination, we are open to collaborating.",
  },
  {
    id: 3,
    question: <>What is it like working with {brandNameCraft}?</>,
    answer:
      "We believe that our work goes far beyond simply executing a task. When you partner with us, we seek to build a deep, meaningful connection with you and your vision. We don't just sell a service; we focus on curating a collaborative, supportive experience from start to finish. We are your partners in making sure your thoughts take shape exactly as you dreamed.",
  },
  {
    id: 4,
    question: "What kinds of services do you offer?",
    answer:
      "We provide innovative solutions tailored to your unique needs. Our core expertise includes Web & Mobile Apps Development, UI/UX & Creative Design, comprehensive Notion workspace setups, and strategic IT Consultancy.",
  },
  {
    id: 5,
    question: <>How do I get started with {brandNameCraft}?</>,
    answer:
      "Every great project starts with a simple conversation. Reach out to us through our contact form, and we will schedule a time to connect, discuss your ideas, and see if our crafted approach aligns with your vision",
  },
];

export default function FAQ() {
  return (
    <section className="w-full lg:py-10 bg-transparent mb-10" id="faq">
      <div className="max-w-360 mx-auto px-6 lg:px-8">
        <motion.div
          variants={slideInFromLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-10 lg:mb-16 flex items-right justify-end"
        >
          <div className="max-w-3xl text-center md:text-right">
            <h2
              className={`${roxborough.className} text-3xl lg:text-4xl xl:text-5xl font-bold text-black dark:text-[#fafaf8] tracking-tight leading-tight mb-4`}
            >
              Curated{" "}
              <span className="italic font-light dark:text-[#e7eacd]">
                Inquiries
              </span>
            </h2>
            <p className="text-xs lg:text-lg text-black/70 dark:text-white/70 font-light">
              Every great collaboration begins with mutual understanding.
              Discover more about our approach, our boundaries, and what it
              means to build a deep connection with our team.
            </p>
          </div>
        </motion.div>

        <div className="w-full max-w-4xl mx-auto">
          <Accordion className="w-full">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`faq-${faq.id}`}
                className="border border-muted-foreground dark:border-[#e7eacd] rounded-lg mb-4 p-1 pl-5 md:p-2 md:pl-6"
              >
                <AccordionTrigger className="text-left md:text-lg font-medium text-black dark:text-[#fafaf8] hover:no-underline group">
                  <span className="group-hover:text-black/70 dark:group-hover:text-[#e7eacd]/70 transition-colors duration-300">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="mt-2 text-black/70 dark:text-white/70 text-xs md:text-base font-light leading-relaxed pb-6 pr-6 md:pr-12">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

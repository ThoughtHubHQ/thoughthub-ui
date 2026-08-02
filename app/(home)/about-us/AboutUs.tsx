"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { roxborough } from "@/lib/font";
import {
  smoothFadeUpVariants,
  containerVariants,
  itemVariants,
  slideInFromLeft,
} from "@/lib/framer-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Feather, Anchor } from "lucide-react";

const values = [
  {
    id: 1,
    title: "Uncompromising Craft",
    description:
      "We believe in pixel-perfect execution and robust architecture. Every line of code and every design choice is made with deliberate intention.",
    icon: Feather,
  },
  {
    id: 2,
    title: "Strategic Innovation",
    description:
      "We do not just chase trends. We implement forward-thinking technologies that provide lasting, scalable value for your digital presence.",
    icon: Compass,
  },
  {
    id: 3,
    title: "Deep Partnership",
    description:
      "Your vision becomes our mission. We operate as an extension of your team, anchored in transparency, trust, and mutual ambition.",
    icon: Anchor,
  },
];

export default function AboutUs() {
  return (
    <div className="w-full bg-transparent overflow-hidden pt-20 pb-10 lg:pt-32 lg:pb-20">
      {/* Hero Section */}
      <section className="max-w-360 mx-auto px-6 lg:px-8 mb-20 lg:mb-32">
        <motion.div
          variants={smoothFadeUpVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-black/50 dark:text-[#e7eacd]/70 mb-6 block">
            Who We Are
          </span>
          <h1
            className={`${roxborough.className} text-4xl lg:text-6xl xl:text-7xl font-bold text-black dark:text-[#fafaf8] tracking-tight leading-[1.1] mb-8`}
          >
            We don&apos;t just build. <br />
            <span className="italic font-light dark:text-[#e7eacd]">
              We Craft.
            </span>
          </h1>
          <p className="text-sm lg:text-xl text-black/70 dark:text-white/70 font-light leading-relaxed max-w-2xl">
            We are a collective of digital artisans, strategists, and engineers
            dedicated to bridging the gap between artistic vision and flawless
            technical execution.
          </p>
        </motion.div>
      </section>

      {/* The Story / Philosophy Section */}
      <section className="max-w-360 mx-auto px-6 lg:px-8 mb-20 lg:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full aspect-4/5 lg:aspect-5/6 rounded-3xl overflow-hidden bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10"
          >
            <Image
              src="/random/office.png"
              alt="Our studio and creative process"
              width={800}
              height={1000}
              className="object-cover w-full h-full transition-all duration-700 ease-in-out"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 lg:gap-8"
          >
            <motion.div variants={itemVariants}>
              <h2
                className={`${roxborough.className} text-3xl lg:text-5xl font-bold text-black dark:text-[#fafaf8] tracking-tight leading-tight`}
              >
                Our{" "}
                <span className="italic font-light dark:text-[#e7eacd]">
                  Philosophy
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-6 text-sm lg:text-base text-black/70 dark:text-white/70 font-light leading-relaxed"
            >
              <p>
                Founded on the belief that the digital world deserves more than
                templates and rushed deliveries, we set out to create a studio
                where quality dictates the timeline, not the other way around.
              </p>
              <p>
                Every project we undertake is treated as a bespoke piece of art.
                We meticulously analyze your brand&apos;s DNA, user psychology,
                and market positioning to deliver platforms that don&apos;t just
                function perfectly, but evoke genuine emotion and connection.
              </p>
              <p>
                Whether it is a complex web application, a striking brand
                identity, or a seamless mobile experience, our team approaches
                every challenge with the same rigorous standard: absolute
                excellence.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <Link href="/#team">
                <Button className="px-6 py-6 rounded-full bg-black text-[#e7eacd] dark:bg-[#e7eacd] dark:text-black text-sm font-semibold hover:scale-105 transition-transform">
                  Meet The Team <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-360 mx-auto px-6 lg:px-8">
        <motion.div
          variants={smoothFadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2
            className={`${roxborough.className} text-3xl lg:text-5xl font-bold text-black dark:text-[#fafaf8] tracking-tight leading-tight mb-4`}
          >
            Core{" "}
            <span className="italic font-light dark:text-[#e7eacd]">
              Values
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.id}
                variants={itemVariants}
                className="flex flex-col p-8 lg:p-10 rounded-3xl border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-[#e7eacd]/50 bg-black/5 dark:bg-white/5 transition-colors duration-500"
              >
                <div className="mb-6 p-4 bg-white dark:bg-black w-fit rounded-full shadow-sm">
                  <Icon
                    className="w-6 h-6 text-black dark:text-[#e7eacd]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3
                  className={`${roxborough.className} text-xl lg:text-2xl font-bold text-black dark:text-[#fafaf8] mb-3`}
                >
                  {value.title}
                </h3>
                <p className="text-black/70 dark:text-white/70 text-sm font-light leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}

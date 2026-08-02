"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { roxborough } from "@/lib/font";
import {
  smoothFadeUpVariants,
  containerVariants,
  itemVariants,
} from "@/lib/framer-animation";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "fintech-saas",
    title: "Aura Financial",
    category: "SaaS Development & UI/UX",
    image: "/projects/project-1.jpg", 
    link: "/work/aura-financial",
  },
  {
    id: "ecommerce-app",
    title: "Lumina Edge",
    category: "Mobile Application",
    image: "/projects/project-2.jpg",
    link: "/work/lumina-edge",
  },
  {
    id: "brand-identity",
    title: "Vanguard Studios",
    category: "Creative Design",
    image: "/projects/project-3.jpg",
    link: "/work/vanguard-studios",
  },
  {
    id: "notion-system",
    title: "Nexus Core HQ",
    category: "Notion Workspace",
    image: "/projects/project-4.jpg",
    link: "/work/nexus-core",
  },
  {
    id: "corporate-web",
    title: "Nova Tech",
    category: "Web Development",
    image: "/projects/project-5.jpg",
    link: "/work/nova-tech",
  },
  {
    id: "health-app",
    title: "Vitality Pulse",
    category: "Mobile App & UI/UX",
    image: "/projects/project-6.jpg",
    link: "/work/vitality-pulse",
  },
];

export default function OurWorks() {
  return (
    <div className="w-full bg-transparent overflow-hidden pt-20 pb-10 lg:pt-32 lg:pb-20">
      {/* Header Section */}
      <section className="max-w-360 mx-auto px-6 lg:px-8 mb-16 lg:mb-24">
        <motion.div
          variants={smoothFadeUpVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-black/50 dark:text-[#e7eacd]/70 mb-6 block">
            Our Portfolio
          </span>
          <h1
            className={`${roxborough.className} text-4xl lg:text-6xl xl:text-7xl font-bold text-black dark:text-[#fafaf8] tracking-tight leading-[1.1]`}
          >
            Selected <span className="italic font-light dark:text-[#e7eacd]">Works</span>
          </h1>
        </motion.div>
      </section>

      {/* Minimal Projects Grid */}
      <section className="max-w-360 mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="group">
              <Link href={project.link} className="block w-full">
                {/* Minimal Image Container */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-5 bg-black/5 dark:bg-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={1000}
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-black/30 transition-colors duration-500" />
                </div>

                {/* Minimal Project Details */}
                <div className="flex flex-col px-1">
                  <div className="flex justify-between items-center">
                    <h3 className={`${roxborough.className} text-xl lg:text-2xl font-bold text-black dark:text-[#fafaf8] group-hover:text-black/70 dark:group-hover:text-[#e7eacd] transition-colors`}>
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-black/0 group-hover:text-black dark:group-hover:text-[#e7eacd] -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs lg:text-sm text-black/50 dark:text-white/50 font-medium tracking-wide uppercase mt-1">
                    {project.category}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-360 mx-auto px-6 lg:px-8 mt-24 lg:mt-40 text-center">
        <motion.div
          variants={smoothFadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h3 className={`${roxborough.className} text-3xl lg:text-5xl font-bold text-black dark:text-[#fafaf8] mb-8`}>
            Have a project in <span className="italic font-light dark:text-[#e7eacd]">mind?</span>
          </h3>
          <Link
            href="/#contact"
            className="px-10 py-4 rounded-full bg-black text-[#e7eacd] dark:bg-[#e7eacd] dark:text-black text-sm font-semibold hover:scale-105 transition-transform flex items-center gap-2"
          >
            Let&apos;s Build Together <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
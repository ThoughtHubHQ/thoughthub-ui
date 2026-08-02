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
    id: 1,
    title: "5points Academy",
    category: "EdTech Platform",
    description:
      "A modern digital hub bridging the gap between student mentoring profiles, course management, and streamlined admissions processing.",
    image: "/showcase/5points.png",
    link: "https://beta.5points-academy.com",
  },
  {
    id: 2,
    title: "Foto Perfection Lab",
    category: "Photo Editing Service",
    description:
      "A professional photo editing service website that offers high-quality image retouching, color correction, and enhancement services for photographers and businesses.",
    image: "/showcase/FotoPerfectionLab.png",
    link: "https://fotoperfectionlab.com",
  },
  {
    id: 3,
    title: "Nature Retreat",
    category: "Reservation System",
    description:
      "A comprehensive reservation system for a nature retreat eco-resort, featuring real-time availability, seamless booking management, and personalized guest experiences.",
    image: "/showcase/natureRetreat.png",
    link: "https://nature-retreat.vercel.app",
  },
  {
    id: 4,
    title: "FitLife Gym",
    category: "Professional Website",
    description:
      "A sleek and modern portfolio website for FitLife Gym, showcasing their state-of-the-art facilities, diverse fitness programs, and success stories to attract and engage fitness enthusiasts.",
    image: "/showcase/fitlifeGym.png",
    link: "https://fitnesse-gym.vercel.app",
  },
];

export default function OurWorks() {
  return (
    <div className="w-full bg-transparent overflow-hidden pt-20 pb-10 lg:pt-32 lg:pb-20">
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

      <section className="max-w-360 mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="group">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-black/30 transition-colors duration-500" />
                </div>

                <div className="flex flex-col px-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3
                      className={`${roxborough.className} text-2xl lg:text-3xl font-bold text-black dark:text-[#fafaf8] group-hover:text-black/70 dark:group-hover:text-[#e7eacd] transition-colors`}
                    >
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="w-6 h-6 text-black/0 group-hover:text-black dark:group-hover:text-[#e7eacd] -translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out shrink-0"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="text-[10px] lg:text-xs font-semibold tracking-widest uppercase text-black/50 dark:text-[#e7eacd]/70 mb-4">
                    {project.category}
                  </p>
                  <p className="text-sm lg:text-base text-black/70 dark:text-white/70 font-light leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="max-w-360 mx-auto px-6 lg:px-8 mt-24 lg:mt-40 text-center">
        <motion.div
          variants={smoothFadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h3
            className={`${roxborough.className} text-3xl lg:text-5xl font-bold text-black dark:text-[#fafaf8] mb-8`}
          >
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
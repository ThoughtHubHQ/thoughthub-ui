"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { roxborough } from "@/lib/font";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { smoothFadeUpVariants } from "@/lib/framer-animation";

const projects = [
  {
    id: 1,
    title: "5points Academy",
    category: "EdTech Platform",
    description:
      "A modern digital hub bridging the gap between student mentoring profiles, course management, and streamlined admissions processing.",
    image: "/showcase/5points.png",
    liveUrl: "https://beta.5points-academy.com",
  },
  {
    id: 2,
    title: "Nature Reatreat",
    category: "Reservation System for Nature Retreat Eco-Resort",
    description:
      "A comprehensive reservation system for a nature retreat eco-resort, featuring real-time availability, seamless booking management, and personalized guest experiences.",
    image: "/showcase/natureRetreat.png",
    liveUrl: "https://natureretreat.vercel.app",
  },
  {
    id: 3,
    title: "FitLife Gym",
    category: "Fitness Center Portfolio Website",
    description:
      "A sleek and modern portfolio website for FitLife Gym, showcasing their state-of-the-art facilities, diverse fitness programs, and success stories to attract and engage fitness enthusiasts.",
    image: "/showcase/fitlifeGym.png",
    liveUrl: "https://fitnesse-gym.vercel.app",
  },
];

export default function Work() {
  return (
    <section className="w-full lg:py-20 bg-transparent">
      <div className="max-w-360 mx-auto px-6 lg:px-8">
        <motion.div
          variants={smoothFadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-between items-center mb-10 lg:mb-16"
        >
          <div className="max-w-2xl text-center md:text-left">
            <h2
              className={`${roxborough.className} text-4xl md:text-6xl font-bold text-black dark:text-[#fafaf8] tracking-tight leading-tight mb-4`}
            >
              Our <span className="italic font-light">Showcase</span>
            </h2>
            <p className="text-lg text-black/70 dark:text-white/70 font-light">
               A curated look at some of the
              digital experiences we&apos;ve brought to life.
            </p>
          </div>
          <div className="hidden md:flex">
            <Button
              variant="outline"
              className="px-6 py-6 rounded-full bg-transparent hover:bg-black hover:text-[#e7eacd] dark:hover:bg-[#e7eacd] dark:hover:text-black border-2 border-black/20 dark:border-[#e7eacd]/20 text-black dark:text-[#e7eacd] font-medium transition-all duration-300 group"
            >
              View All Projects
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <a href={project.liveUrl} target="_blank" key={project.id}>
              <div
                className={`group flex flex-col ${
                  index % 2 !== 0 ? "md:mt-24" : ""
                }`}
              >
                <div className="relative w-full aspect-auto rounded-2xl overflow-hidden mb-6 bg-black/5 dark:bg-white/5">
                  <Image
                    src={project.image}
                    alt={`${project.title} mockup`}
                    width={800}
                    height={600}
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>

                <div className="flex flex-col gap-2 px-2">
                  <span className="text-xs font-semibold tracking-widest uppercase text-black/50 dark:text-white/50">
                    {project.category}
                  </span>
                  <h3
                    className={`${roxborough.className} text-2xl md:text-3xl 
                    font-bold text-black dark:text-[#fafaf8] flex items-center justify-between`}
                  >
                    {project.title} <ArrowUpRight />
                  </h3>
                  <p className="text-black/70 dark:text-white/70 font-light leading-relaxed mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="flex md:hidden justify-center mt-8">
          <Button
            variant="outline"
            className="px-6 py-6 rounded-full bg-transparent hover:bg-black hover:text-[#e7eacd] dark:hover:bg-[#e7eacd] dark:hover:text-black border-2 border-black/20 dark:border-[#e7eacd]/20 text-black dark:text-[#e7eacd] font-medium transition-all duration-300 group"
          >
            View All Projects
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}

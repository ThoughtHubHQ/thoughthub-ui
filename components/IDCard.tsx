"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { roxborough } from "@/lib/font";
import { BrandAssets } from "@/lib/asset";
import {
  smoothFadeUpVariants,
  containerVariants,
  itemVariants,
} from "@/lib/framer-animation";

// Sample Data (matching your previous team members)
const teamMembers = [
  {
    employeeId: "TH101",
    name: "Ashikur Rahman",
    designation: "Founder & CEO",
    image: "/teams/ashik.png",
  },
  {
    employeeId: "TH102",
    name: "MD Tanim Hossain",
    designation: "CFO & Marketing Lead",
    image: "/teams/tanim.jpg",
  },
  {
    employeeId: "TH301",
    name: "Fardin Evan",
    designation: "UI/UX Designer",
    image: "/teams/fardin.png",
  },
  {
    employeeId: "TH203",
    name: "MD Ruhul Amin",
    designation: "Full Stack Developer",
    image: "/teams/ruhul.jpg",
  },
];

export default function IdCardShowcase() {
  return (
    <section className="w-full py-10 lg:py-20 bg-transparent overflow-hidden">
      <div className="max-w-360 mx-auto px-6 lg:px-8">
        <motion.div
          variants={smoothFadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-24"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-black/50 dark:text-[#e7eacd]/70 mb-4 block">
            Digital Identity
          </span>
          <h2
            className={`${roxborough.className} text-3xl lg:text-4xl xl:text-5xl font-bold text-black dark:text-[#fafaf8] tracking-tight leading-tight`}
          >
            Official{" "}
            <span className="italic font-light dark:text-[#e7eacd]">
              Badges
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 lg:gap-12"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.employeeId} variants={itemVariants}>
              {/* ID Card Wrapper - Scaled strictly to CR80 PVC Card aspect ratio (2.125 x 3.375) */}
              <div className="relative w-[280px] h-[445px] bg-[#fafaf8] dark:bg-[#0a0a0a] rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl flex flex-col items-center px-6 py-8 overflow-hidden z-10 hover:-translate-y-2 transition-transform duration-500 ease-out group">
                {/* Light Mode Pattern */}
                <div
                  className="absolute inset-0 opacity-[0.1] dark:hidden pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(#000 0.8px, transparent 0.8px)",
                    backgroundSize: "10px 10px",
                  }}
                />

                {/* Dark Mode Pattern */}
                <div
                  className="absolute inset-0 opacity-[0.15] hidden dark:block pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(#e7eacd 0.8px, transparent 0.8px)",
                    backgroundSize: "10px 10px",
                  }}
                />

                {/* Simulated Lanyard Hole Punch */}
                <div className="w-14 h-3 rounded-full bg-black/10 dark:bg-white/10 absolute top-4 z-20 shadow-inner" />

                {/* Card Header */}
                <div className="mt-4 flex flex-col items-center z-20 w-full">
                  <div
                    className={`${roxborough.className} text-xl font-bold text-black dark:text-[#e7eacd] tracking-wide flex items-center`}
                  >
                    <Image
                      src={BrandAssets.darkModeLogo}
                      alt="Logo"
                      width={24}
                      height={24}
                      className="mr-2 hidden dark:block"
                    />
                    <Image
                      src={BrandAssets.lightModeLogo}
                      alt="Logo"
                      width={24}
                      height={24}
                      className="mr-2 block dark:hidden"
                    />
                    {BrandAssets.name}
                  </div>
                </div>

                {/* Employee Photo */}
                <div className="mt-8 relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-[#1a1a1a] shadow-lg z-20 bg-black/5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Employee Details */}
                <div className="mt-6 flex flex-col items-center text-center z-20 w-full">
                  <h3
                    className={`${roxborough.className} text-2xl font-bold text-black dark:text-[#fafaf8] leading-tight`}
                  >
                    {member.name}
                  </h3>
                  <div className="mt-3 inline-block bg-black dark:bg-[#e7eacd] px-4 py-1.5 rounded-full">
                    <p className="text-[#e7eacd] dark:text-black text-[9px] font-bold uppercase tracking-[0.2em]">
                      {member.designation}
                    </p>
                  </div>
                </div>

                {/* Footer & Barcode/ID */}
                <div className="mt-auto flex flex-col items-center w-full z-20">
                  <div className="w-full h-[1px] bg-black/10 dark:bg-white/10 mb-3" />
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-black/50 dark:text-white/50 text-[11px] font-mono tracking-widest uppercase">
                      EMP ID: {member.employeeId}
                    </p>
                    {/* Fake barcode styling for aesthetic */}
                    <div className="flex gap-[2px] h-4 items-center opacity-40 dark:opacity-60 mt-1">
                      {[...Array(24)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-black dark:bg-white h-full"
                          style={{
                            width: `${Math.max(1, Math.random() * 4)}px`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

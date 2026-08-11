"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { roxborough } from "@/lib/font";
import {
  smoothFadeUpVariants,
  containerVariants,
  itemVariants,
} from "@/lib/framer-animation";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { teams } from "@/lib/teams";
import IDCard from "@/components/IDCard";

export default function TeamMembers() {
  return (
    <section className="w-full py-6 lg:py-10 bg-transparent mb-10" id="team">
      <div className="max-w-360 mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={smoothFadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-between items-end mb-10 lg:mb-16"
        >
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
            <h2
              className={`${roxborough.className} text-3xl lg:text-4xl xl:text-5xl font-bold text-black dark:text-[#fafaf8] tracking-tight leading-tight mb-4`}
            >
              Meet The <span className="italic font-light dark:text-[#e7eacd]">Crafters</span>
            </h2>
            <p className="text-sm lg:text-lg text-black/70 dark:text-white/70 font-light">
              The dedicated minds and creative spirits behind our digital
              experiences.
            </p>
          </div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {teams.map((member) => (
            <motion.div key={member.employeeId} variants={itemVariants}>
              <Dialog>
                <DialogTrigger className="group flex flex-col items-center sm:items-start sm:text-left w-full text-left outline-none cursor-pointer">
                  <div className="relative w-full max-w-70 sm:max-w-full aspect-4/5 rounded-2xl overflow-hidden mb-6 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                    <Image
                      src={member.avatar}
                      alt={`${member.name} - ${member.designation}`}
                      width={400}
                      height={500}
                      className="object-cover w-full h-full lg:grayscale lg:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    />
                  </div>

                  <div className="flex flex-col gap-1 w-full px-2">
                    <span className="text-xs font-semibold tracking-widest uppercase text-black/50 dark:text-[#e7eacd]/70">
                      ID: {member.employeeId}
                    </span>
                    <h3
                      className={`${roxborough.className} text-lg md:text-2xl font-bold text-black dark:text-[#fafaf8]`}
                    >
                      {member.name}
                    </h3>
                    <p className="text-black/70 dark:text-white/70 text-sm font-light mt-1">
                      {member.designation}
                    </p>
                  </div>
                </DialogTrigger>

                {/* Dialog Content */}
                <DialogContent className="w-[95vw] md:max-w-3xl lg:max-w-5xl xl:max-w-6xl bg-[#f1f2e1] dark:bg-[#0a0a0a] border-none shadow-2xl p-0 rounded-3xl max-h-[95vh] overflow-y-auto overflow-x-hidden z-50">
                  <DialogTitle className="sr-only">
                    {member.name}&apos;s Profile
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Profile details for {member.name}, {member.designation}
                  </DialogDescription>

                  <div className="flex flex-col lg:flex-row w-full min-h-[60vh]">
                    {/* Modal Left Image Bleed */}
                    <div className="relative w-full lg:w-[40%] bg-black/5 dark:bg-white/5 shrink-0 min-h-80 lg:min-h-full">
                      <Image
                        src={member.avatar}
                        alt={`${member.name} - ${member.designation}`}
                        width={600}
                        height={800}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Modal Right Content Container */}
                    <div className="flex flex-col justify-center w-full p-8 md:p-12 lg:p-16 gap-10">
                      <div className="flex flex-col xl:flex-row justify-between gap-10 xl:gap-8 items-start w-full">
                        
                        {/* Member Information */}
                        <div className="flex flex-col gap-5 max-w-xl">
                          <div className="flex flex-col gap-2">
                            <span className="text-xs font-semibold tracking-widest uppercase text-black/50 dark:text-[#e7eacd]/70">
                              ID: {member.employeeId}
                            </span>
                            <h3
                              className={`${roxborough.className} text-4xl md:text-5xl font-bold text-black dark:text-[#fafaf8] leading-none`}
                            >
                              {member.name}
                            </h3>
                            <p className="text-black/70 dark:text-[#e7eacd] font-medium text-lg tracking-wide">
                              {member.designation}
                            </p>
                          </div>

                          <div className="w-12 h-px bg-black/20 dark:bg-white/20 my-2" />

                          <p className="text-black/70 dark:text-white/70 text-base md:text-md font-light leading-relaxed">
                            {member.bio}
                          </p>

                          <div className="flex items-center gap-4 mt-4">
                            <a
                              href={`mailto:${member.email}`}
                              className="p-3.5 rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 text-black dark:text-white hover:text-green-800 transition-colors cursor-pointer"
                              aria-label={`Email ${member.name}`}
                            >
                              <Mail className="w-5 h-5" strokeWidth={1.5} />
                            </a>
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3.5 rounded-full bg-black/5 hover:bg-black/10 hover:text-[#0a66c2] dark:bg-white/5 dark:hover:bg-white/10 text-black dark:text-white transition-colors cursor-pointer"
                              aria-label={`${member.name}'s LinkedIn`}
                            >
                              <FaLinkedin className="w-5 h-5" strokeWidth={1.5} />
                            </a>
                          </div>
                        </div>

                        {/* ID Card Display */}
                        <div className="shrink-0 flex flex-col items-center xl:items-end w-full xl:w-auto">
                          <IDCard member={member} />
                          <span className="mt-6 text-xs text-black/50 dark:text-white/70 text-center xl:text-right uppercase tracking-wider font-semibold">
                            <span className="md:hidden">Click</span>
                            <span className="hidden md:inline">Hover</span> the ID Card for more details
                          </span>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
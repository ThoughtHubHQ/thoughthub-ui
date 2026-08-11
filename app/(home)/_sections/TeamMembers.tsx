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
              Meet The{" "}
              <span className="italic font-light dark:text-[#e7eacd]">
                Crafters
              </span>
            </h2>
            <p className="text-sm lg:text-lg text-black/70 dark:text-white/70 font-light">
              The dedicated minds and creative spirits behind our digital
              experiences.
            </p>
          </div>
        </motion.div>

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
                <DialogTrigger className="group flex flex-col items-center sm:items-start sm:text-left w-full text-left outline-none">
                  <div className="relative w-full max-w-70 sm:max-w-full aspect-4/5 rounded-2xl overflow-hidden mb-6 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 cursor-pointer">
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
                      className={`${roxborough.className} text-xl md:text-2xl font-bold text-black dark:text-[#fafaf8]`}
                    >
                      {member.name}
                    </h3>
                    <p className="text-black/70 dark:text-white/70 text-sm font-light mt-1">
                      {member.designation}
                    </p>
                  </div>
                </DialogTrigger>

                {/* Dialog Content: Employee Details */}
                <DialogContent className="w-[95vw] md:max-w-2xl lg:max-w-5xl xl:max-w-6xl bg-[#f1f2e1] dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 p-6 md:px-8 rounded-3xl max-h-[95vh] overflow-y-auto overflow-x-hidden gap-0 z-1000">
                  <DialogTitle className="sr-only">
                    {member.name}&apos;s Profile
                  </DialogTitle>

                  <DialogDescription className="sr-only">
                    Profile details for {member.name}, {member.designation}
                  </DialogDescription>

                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
                    {/* Employee Avatar */}
                    <div className="relative w-full max-w-50 md:w-60 aspect-4/5 rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5 shrink-0">
                      <Image
                        src={member.avatar}
                        alt={`${member.name} - ${member.designation}`}
                        width={300}
                        height={375}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Employee Info */}
                    <div className="flex flex-col flex-1 w-full gap-4 text-center lg:text-left mt-2 lg:mt-0">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold tracking-widest uppercase text-black/50 dark:text-[#e7eacd]/70">
                          ID: {member.employeeId}
                        </span>
                        <h3
                          className={`${roxborough.className} text-2xl md:text-4xl font-bold text-black dark:text-[#fafaf8]`}
                        >
                          {member.name}
                        </h3>
                        <p className="text-black/70 dark:text-[#e7eacd] font-medium text-sm md:text-base">
                          {member.designation}
                        </p>
                      </div>

                      <div className="w-8 h-px bg-black/20 dark:bg-white/20 mx-auto lg:mx-0 my-2" />

                      <p className="text-black/70 dark:text-white/70 text-sm font-light leading-relaxed">
                        {member.bio}
                      </p>

                      <div className="flex items-center justify-center lg:justify-start gap-4 mt-4">
                        <a
                          href={`mailto:${member.email}`}
                          className="p-3 rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 text-black dark:text-white hover:text-green-800 transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-5 h-5" strokeWidth={1.5} />
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-black/5 hover:bg-black/10 hover:text-[#0a66c2] dark:bg-white/5 dark:hover:bg-white/10 text-black dark:text-white transition-colors"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <FaLinkedin className="w-5 h-5" strokeWidth={1.5} />
                        </a>
                      </div>
                    </div>

                    {/* ID Card */}
                    <div className="shrink-0 mt-6 lg:mt-0 flex justify-center w-full lg:w-auto pb-4 lg:pb-0">
                      <IDCard member={member} />
                    </div>
                  </div>
                  <span className="lg:mr-10 pt-3 lg:pt-5 text-center md:text-end text-xs text-black/50 dark:text-white/70">
                    <span className="md:hidden">Click</span>
                    <span className="hidden md:inline">Hover</span> the ID Card
                    for more details
                  </span>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

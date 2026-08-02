"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { roxborough } from "@/lib/font";
import { BrandAssets } from "@/lib/asset";
import {
  smoothFadeUpVariants,
  containerVariants,
  itemVariants,
} from "@/lib/framer-animation";
import Barcode from "react-barcode";
import QRCode from "react-qr-code";
import { teamMembers } from "@/lib/teamMembers";

export default function IdCardShowcase() {
  // Added state to track which card is currently flipped via click/tap
  const [flippedId, setFlippedId] = useState<string | null>(null);

  return (
    <section className="w-full pt-5 pb-10 bg-transparent overflow-hidden">
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
          <p className="text-sm lg:text-base text-black/70 dark:text-white/70 font-light mt-4">
            Hover or tap the cards to view employee details.
          </p>
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
              {/* Perspective container for the 3D flip effect - Added onClick and cursor-pointer */}
              <div
                className="group relative w-70 h-111.25 perspective-[1000px] cursor-pointer"
                onClick={() =>
                  setFlippedId(
                    flippedId === member.employeeId ? null : member.employeeId,
                  )
                }
              >
                {/* Inner wrapper that actually rotates - Changed to lg:group-hover and dynamic class based on state */}
                <div
                  className={`w-full h-full transition-transform duration-700 transform-3d lg:group-hover:transform-[rotateY(180deg)] ${
                    flippedId === member.employeeId
                      ? "transform-[rotateY(180deg)]"
                      : ""
                  }`}
                >
                  {/* ======================= FRONT OF CARD ======================= */}
                  <div className="absolute inset-0 bg-[#e6e9cc] dark:bg-[#0a0a0a] rounded-2xl border border-black/10 dark:border-white/10 shadow-lg flex flex-col items-center px-6 py-8 overflow-hidden backface-hidden">
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

                    <div className="mt-4 flex flex-col items-center z-20 w-full">
                      <div
                        className={`${roxborough.className} text-xl font-bold text-black dark:text-[#e7eacd] tracking-wide flex items-center`}
                      >
                        <Image
                          src={BrandAssets.darkModeLogo}
                          alt="Logo"
                          width={30}
                          height={30}
                          className="mr-2 hidden dark:block"
                        />
                        <Image
                          src={BrandAssets.lightModeLogo}
                          alt="Logo"
                          width={30}
                          height={30}
                          className="mr-2 block dark:hidden"
                        />
                        {BrandAssets.name}
                      </div>
                    </div>

                    <div className="mt-8 relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-[#1a1a1a] shadow-lg z-20 bg-black/5">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="mt-6 flex flex-col items-center text-center z-20 w-full">
                      <h3
                        className={`${roxborough.className} text-2xl font-bold text-black dark:text-[#fafaf8] leading-tight`}
                      >
                        {member.nickName}
                      </h3>
                      <div className="mt-3 inline-block bg-black dark:bg-[#e7eacd] px-4 py-1.5 rounded-full">
                        <p className="text-[#e7eacd] dark:text-black text-[9px] font-bold uppercase tracking-[0.2em]">
                          {member.designation}
                        </p>
                      </div>
                    </div>

                    {/* Exact spacing and structure maintained from original snippet */}
                    <div className="mt-auto flex flex-col items-center w-full z-20">
                      <div className="w-full h-px bg-black/10 dark:bg-white/10 mb-3" />
                      <div className="flex flex-col items-center gap-1">
                        <p className="text-black/50 dark:text-white/50 text-[11px] font-mono tracking-widest uppercase">
                          EMP ID: {member.employeeId}
                        </p>
                        <div className="flex h-4 items-center opacity-70 dark:opacity-90 dark:invert mt-1">
                          <Barcode
                            value={member.employeeId}
                            height={16}
                            width={1.2}
                            displayValue={false}
                            background="transparent"
                            lineColor="#000000"
                            margin={0}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ======================= BACK OF CARD ======================= */}
                  <div className="absolute inset-0 bg-[#e6e9cc] dark:bg-[#0a0a0a] rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl flex flex-col px-6 py-8 overflow-hidden backface-hidden transform-[rotateY(180deg)]">
                    {/* Background Patterns */}
                    <div
                      className="absolute inset-0 opacity-[0.1] dark:hidden pointer-events-none"
                      style={{
                        backgroundImage:
                          "radial-gradient(#000 0.8px, transparent 0.8px)",
                        backgroundSize: "10px 10px",
                      }}
                    />
                    <div
                      className="absolute inset-0 opacity-[0.15] hidden dark:block pointer-events-none"
                      style={{
                        backgroundImage:
                          "radial-gradient(#e7eacd 0.8px, transparent 0.8px)",
                        backgroundSize: "10px 10px",
                      }}
                    />

                    <div className="mt-6 flex flex-col z-20 h-full">
                      <h4 className="text-[10px] font-bold tracking-widest uppercase text-black/50 dark:text-[#e7eacd]/70 text-center mb-4 border-b border-black/10 dark:border-white/10 pb-2">
                        Employee Details
                      </h4>

                      <div className="flex flex-col gap-3 flex-1 justify-center">
                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-black/50 dark:text-white/50">
                            Name
                          </p>
                          <p className="text-sm font-semibold text-black dark:text-white">
                            {member.name}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <p className="text-[9px] uppercase tracking-wider text-black/50 dark:text-white/50">
                              Role
                            </p>
                            <p className="text-xs font-medium text-black dark:text-white">
                              {member.designation}
                            </p>
                          </div>
                          <div>
                            <p className="text-[9px] uppercase tracking-wider text-black/50 dark:text-white/50">
                              Department
                            </p>
                            <p className="text-xs font-medium text-black dark:text-white">
                              {member.department}
                            </p>
                          </div>
                        </div>

                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-black/50 dark:text-white/50">
                            Contact Info
                          </p>
                          <p className="text-xs text-black dark:text-white truncate">
                            {member.email}
                          </p>
                          <p className="text-xs text-black dark:text-white">
                            {member.phone}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <p className="text-[9px] uppercase tracking-wider text-black/50 dark:text-white/50">
                              Blood Group
                            </p>
                            <p className="text-sm font-bold text-red-600 dark:text-red-400">
                              {member.bloodGroup}
                            </p>
                          </div>
                          <div>
                            <p className="text-[9px] uppercase tracking-wider text-black/50 dark:text-white/50">
                              Emergency
                            </p>
                            <p className="text-xs font-medium text-black dark:text-white">
                              {member.emergencyContact}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Exact spacing and structure maintained from original snippet */}
                      <div className="mt-auto pt-3  flex justify-between items-end">
                        <div className="flex flex-col items-start">
                          <Image
                            src={BrandAssets.ceoSignLight}
                            alt="Logo"
                            width={80}
                            height={30}
                            className="mr-2 block dark:hidden"
                          />
                          <Image
                            src={BrandAssets.ceoSignDark}
                            alt="Logo"
                            width={80}
                            height={30}
                            className="mr-2 hidden dark:block"
                          />
                          <span className="text-[6px] uppercase tracking-widest text-black/50 dark:text-white/50 border-t border-black/20 dark:border-white/20  mt-1 w-full">
                            Authorized Signature
                          </span>
                        </div>

                        {/* Real QR - exact w-8 h-8 size, no bg, pure transparent */}
                        <div className="w-8 h-8 flex items-center justify-center opacity-80 dark:opacity-90 dark:invert">
                          <QRCode
                            value="https://thoughthubhq.com/#team"
                            size={32}
                            bgColor="transparent"
                            fgColor="#000000"
                            style={{
                              height: "100%",
                              maxWidth: "100%",
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>

                      <p className="text-[7px] text-center text-black/40 dark:text-white/40 mt-3 uppercase tracking-wider">
                        If found, please return to {BrandAssets.name}
                      </p>
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

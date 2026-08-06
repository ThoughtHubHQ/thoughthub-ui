"use client";

import { useState } from "react";
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
import { teamMembers } from "@/lib/teams";
import * as htmlToImage from "html-to-image";
import { ArrowDown } from "lucide-react";

export default function IdCardShowcase() {
  const [flippedId, setFlippedId] = useState<string | null>(null);

  const getSrc = (src: any) => (typeof src === "string" ? src : src.src);

  /* ======================= DOWNLOAD HANDLER ======================= */
  const handleDownload = async (employeeId: string, employeeName: string) => {
    const frontNode = document.getElementById(`front-${employeeId}`);
    const backNode = document.getElementById(`back-${employeeId}`);

    if (!frontNode || !backNode) return;

    try {
      const frontDataUrl = await htmlToImage.toPng(frontNode, {
        quality: 1,
        pixelRatio: 6,
        cacheBust: true,
        style: { transform: "none" },
      });

      const backDataUrl = await htmlToImage.toPng(backNode, {
        quality: 1,
        pixelRatio: 6,
        cacheBust: true,
        style: { transform: "none" },
      });

      const loadImage = (src: string): Promise<HTMLImageElement> => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });
      };

      const frontImg = await loadImage(frontDataUrl);
      const backImg = await loadImage(backDataUrl);

      const canvas = document.createElement("canvas");
      const gap = 100;
      canvas.width = frontImg.width + backImg.width + gap;
      canvas.height = Math.max(frontImg.height, backImg.height);

      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.fillStyle = "transparent";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(frontImg, 0, 0);
        ctx.drawImage(backImg, frontImg.width + gap, 0);

        const combinedDataUrl = canvas.toDataURL("image/png");
        const formattedName = employeeName.replace(/\s+/g, "_");

        const link = document.createElement("a");
        link.download = `${formattedName}_ID_Card.png`;
        link.href = combinedDataUrl;
        link.click();
      }
    } catch (error) {
      console.error("Error generating ID card image:", error);
    }
  };

  return (
    <section className="w-full pt-5 pb-24 bg-transparent overflow-hidden">
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
          className="flex flex-wrap justify-center gap-8 lg:gap-16"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.employeeId} variants={itemVariants}>
              <div
                className="group relative w-70 h-111.25 perspective-[1000px] cursor-pointer"
                onClick={() =>
                  setFlippedId(
                    flippedId === member.employeeId ? null : member.employeeId,
                  )
                }
              >
                <div
                  className={`w-full h-full transition-transform duration-700 transform-3d lg:group-hover:transform-[rotateY(180deg)] ${
                    flippedId === member.employeeId
                      ? "transform-[rotateY(180deg)]"
                      : ""
                  }`}
                >
                  {/* ======================= FRONT OF CARD ======================= */}
                  <div
                    id={`front-${member.employeeId}`}
                    className="absolute inset-0 bg-[#e6e9cc] dark:bg-[#0a0a0a] rounded-2xl border border-black/10 dark:border-white/10 shadow-lg flex flex-col items-center px-6 py-8 overflow-hidden backface-hidden"
                  >
                    <div className="absolute inset-0 opacity-[0.1] dark:hidden pointer-events-none bg-[radial-gradient(#000_0.8px,transparent_0.8px)] bg-[size:10px_10px]" />
                    <div className="absolute inset-0 opacity-[0.15] hidden dark:block pointer-events-none bg-[radial-gradient(#e7eacd_0.8px,transparent_0.8px)] bg-[size:10px_10px]" />

                    <div className="mt-4 flex flex-col items-center z-20 w-full">
                      <div
                        className={`${roxborough.className} text-xl font-bold text-black dark:text-[#e7eacd] tracking-wide flex items-center`}
                      >
                        <img
                          src={getSrc(BrandAssets.darkModeLogo)}
                          alt="Logo"
                          className="w-[30px] h-[30px] mr-2 hidden dark:block"
                        />
                        <img
                          src={getSrc(BrandAssets.lightModeLogo)}
                          alt="Logo"
                          className="w-[30px] h-[30px] mr-2 block dark:hidden"
                        />
                        {BrandAssets.name}
                      </div>
                    </div>

                    <div className="mt-8 relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-[#1a1a1a] shadow-lg z-20 bg-black/5">
                      <img
                        src={getSrc(member.avatar)}
                        alt={member.name}
                        className="object-cover w-full h-full"
                        crossOrigin="anonymous"
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
                  <div
                    id={`back-${member.employeeId}`}
                    className="absolute inset-0 bg-[#e6e9cc] dark:bg-[#0a0a0a] rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl flex flex-col px-6 py-8 overflow-hidden backface-hidden transform-[rotateY(180deg)]"
                  >
                    <div className="absolute inset-0 opacity-[0.1] dark:hidden pointer-events-none bg-[radial-gradient(#000_0.8px,transparent_0.8px)] bg-[size:10px_10px]" />
                    <div className="absolute inset-0 opacity-[0.15] hidden dark:block pointer-events-none bg-[radial-gradient(#e7eacd_0.8px,transparent_0.8px)] bg-[size:10px_10px]" />

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

                      <div className="mt-auto pt-3 flex justify-between items-end">
                        <div className="flex flex-col items-start">
                          <img
                            src={getSrc(BrandAssets.ceoSignLight)}
                            alt="Signature"
                            className="w-[80px] h-[30px] mr-2 block dark:hidden"
                          />
                          <img
                            src={getSrc(BrandAssets.ceoSignDark)}
                            alt="Signature"
                            className="w-[80px] h-[30px] mr-2 hidden dark:block"
                          />
                          <span className="text-[6px] uppercase tracking-widest text-black/50 dark:text-white/50 border-t border-black/20 dark:border-white/20 mt-1 w-full">
                            Authorized Signature
                          </span>
                        </div>

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

                  {/* ======================= FLOATING DOWNLOAD BUTTON ======================= */}
                  <div className="absolute inset-x-0 bottom-8 flex justify-center z-50 backface-hidden transform-[rotateY(180deg)] pointer-events-none">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(member.employeeId, member.name);
                      }}
                      className="pointer-events-auto cursor-pointer bg-[#3a420c] text-white dark:bg-[#e7eacd] dark:text-black p-3.5 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)] dark:shadow-[0_10px_40px_rgba(255,255,255,0.25)] hover:scale-110 active:scale-95 transition-transform duration-300 flex items-center justify-center"
                    >
                      <ArrowDown className="w-5 h-5 stroke-2" />
                    </button>
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

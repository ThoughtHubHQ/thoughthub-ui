"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div
      className="min-h-screen w-full bg-white dark:bg-zinc-950 flex flex-col items-center justify-center 
    relative overflow-hidden transition-colors duration-500"
    >
      <div className="absolute w-125 h-125 bg-[#e7eacd]/10 dark:bg-[#e7eacd]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-10 border border-black/5 dark:border-[#e7eacd]/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-14 border border-black/10 dark:border-zinc-800/50 rounded-full"
          />

          <motion.div
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 
            p-8 rounded-[2.5rem] backdrop-blur-xl shadow-xl dark:shadow-2xl dark:shadow-black"
          >
            <Image
              src="http://cdn.thoughthubhq.com/th-vector-logo.svg"
              alt="ThoughtHub"
              width={100}
              height={100}
              className="brightness-90 dark:brightness-110 transition-all rounded-xl"
              priority
            />
          </motion.div>
        </motion.div>

        <div className="mt-16 flex flex-col items-center space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-zinc-900 dark:text-white font-bold tracking-[0.4em] uppercase text-[10px]">
              Loading{" "}
              <span className="text-[#775d14] dark:text-[#e7eacd]">
                Thoughts....
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <span className="h-px w-4 bg-zinc-200 dark:bg-zinc-800" />
              <p className="text-muted-foreground dark:text-zinc-600 text-[9px] font-medium tracking-[0.2em] uppercase">
                Secure Protocol Active
              </p>
              <span className="h-px w-4 bg-zinc-200 dark:bg-zinc-800" />
            </div>
          </div>

          <div className="w-40 h-px bg-zinc-200 dark:bg-zinc-900 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-[#775d14] dark:via-[#e7eacd] to-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Home, Terminal, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-zinc-950 overflow-hidden selection:bg-[#e7eacd] selection:text-black"
    >
      <motion.div
        className="pointer-events-none absolute z-30 w-80 h-80 rounded-full blur-[120px] opacity-20 lg:opacity-25"
        style={{
          left: springX,
          top: springY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, #e7eacd 0%, #775d14 50%, transparent 100%)",
        }}
      />

      <div className="relative hidden lg:flex flex-col justify-center px-24 bg-[#e7eacd]">
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: "radial-gradient(#000 0.8px, transparent 0.8px)",
            backgroundSize: "10px 10px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative z-10"
        >
          <span className="text-[#775d14] font-bold tracking-[0.4em] uppercase text-sm mb-4 block">
            Error Code: 404
          </span>
          <h1 className="text-[12rem] font-black text-black leading-none tracking-tighter select-none">
            Lost ?
          </h1>
          <p className="text-2xl text-black/70 font-medium max-w-sm mt-4">
            Even the most structured thoughts occasionally wander off the grid.
          </p>
        </motion.div>

        <div className="absolute bottom-12 left-24 flex items-center gap-2 text-black/30 text-[10px] font-bold uppercase tracking-widest">
          <Terminal className="h-3 w-3" />
          <span>ThoughtHub // Path_Not_Defined</span>
        </div>
      </div>

      {/* Navigation Button */}
      <div className="relative flex items-center justify-center p-6 sm:p-12 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full max-w-md space-y-12"
        >
          <div className="space-y-4 text-center">
            <div className="lg:hidden mb-8">
              <h2 className="text-6xl font-black text-white italic">404</h2>
            </div>
            <h2 className="text-4xl font-bold text-white tracking-tight">
              Looking for something?
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              The page you are trying to access has been moved, deleted, or
              never existed in this dimension.
            </p>
          </div>

          <div className="grid gap-4">
            <Link href="/">
              <Button
                variant="outline"
                className="w-full h-16 justify-between px-6 bg-zinc-900/50 border-zinc-800 hover:bg-[#e7eacd] hover:text-black transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-zinc-800 rounded-lg">
                    <Home className="h-5 w-5 text-zinc-400 group-hover:text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold uppercase tracking-wide text-muted-foreground group-hover:text-white">
                      Return Home
                    </div>
                    <div className="text-[11px] text-zinc-500 group-hover:text-muted-foreground">
                      Back to safety
                    </div>
                  </div>
                </div>
                <ChevronLeft className="h-5 w-5 rotate-180 text-muted-foreground group-hover:text-white" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="w-full h-16 justify-between px-6 bg-zinc-900/50 border-zinc-800 hover:bg-[#e7eacd] hover:text-black transition-all group"
              onClick={() => window.history.back()}
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-zinc-800 rounded-lg">
                  <ChevronLeft className="h-5 w-5 text-zinc-400 group-hover:text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold uppercase tracking-wide text-muted-foreground group-hover:text-white">
                    Go Back
                  </div>
                  <div className="text-[11px] text-zinc-500 group-hover:text-muted-foreground">
                    Find your way back
                  </div>
                </div>
              </div>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

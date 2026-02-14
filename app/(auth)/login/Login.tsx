"use client";

import React, { useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Lock, Mail, Loader2, Hash, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { roxborough } from "@/lib/font";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const formSchema = z.object({
  id: z.string().min(1, { message: "ID is required." }),
  email: z.string().email({ message: "Invalid email." }),
  password: z.string().min(8, { message: "Minimum 8 characters." }),
});

export default function Login() {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { id: "", email: "", password: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Access Granted! Welcome To ThoughtHub HQ");
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-zinc-950 overflow-hidden selection:bg-[#e7eacd] selection:text-black"
    >
      {/* Spotlight */}
      <motion.div
        className="pointer-events-none absolute z-30 w-100 h-100 hidden lg:block rounded-full blur-[100px] opacity-20 lg:opacity-25"
        style={{
          left: springX,
          top: springY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, #e7eacd 0%, #775d14 50%, transparent 100%)",
        }}
      />

      <div className="relative hidden lg:flex flex-col justify-center px-12 xl:px-24 bg-[#e7eacd] overflow-hidden">
        {/* BG Dot */}
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
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 space-y-6"
        >
          <div className="bg-black/10 w-fit p-3 rounded-2xl backdrop-blur-sm border border-black/5">
            <Image
              src="http://cdn.thoughthubhq.com/th-vector-logo.svg"
              alt="ThoughtHub Logo"
              width={70}
              height={70}
              className="rounded-lg shadow-xl"
              priority
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl xl:text-6xl font-bold tracking-tight text-black leading-none">
              <span className={roxborough.className}>ThoughtHub</span> <br />
              <span className="text-[#775d14] inline-block mt-1">HQ</span>
            </h1>
            <div className="h-1 w-16 bg-black rounded-full" />
            <p className="text-lg xl:text-xl text-black/80 font-semibold tracking-tight">
              Where Thoughts Take Shape
            </p>
          </div>

          <p className="max-w-md text-sm xl:text-base text-black/60 leading-relaxed font-medium">
            Innovative solutions for Web & Mobile Development, Creative & UI/UX
            Design, Notion Workspace setup, and high-end IT Consultancy.
          </p>
        </motion.div>

        <div className="absolute bottom-10 left-12 xl:left-24 flex items-center gap-4 text-black/40 text-[10px] font-bold uppercase tracking-[0.3em]">
          <span>Design</span>
          <div className="w-6 h-px bg-black/20" />
          <span>Strategy</span>
          <div className="w-6 h-px bg-black/20" />
          <span>Development</span>
        </div>
      </div>

      {/* Login Form */}
      <div className="relative flex items-center justify-center p-6 md:p-12 z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-100 space-y-8"
        >
          <div className="lg:hidden flex justify-center mb-6">
            <div className="bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl backdrop-blur-xl shadow-2xl">
              <Image
                src="http://cdn.thoughthubhq.com/th-vector-logo.svg"
                alt="Logo"
                width={70}
                height={70}
                className="rounded-xl"
              />
            </div>
          </div>

          <Card className="bg-zinc-900/70 border-zinc-800/50 backdrop-blur-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] overflow-hidden">
            <CardContent className="px-7">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Sign In
                </h2>
                <p className="text-zinc-500 text-sm mt-1.5 font-medium">
                  Welcome back. Please enter your details.
                </p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="id"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-zinc-500 text-[9px] font-bold uppercase tracking-[0.2em] ml-1">
                          Employee ID
                        </FormLabel>
                        <FormControl>
                          <div className="group relative">
                            <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-600 transition-colors group-focus-within:text-[#e7eacd]" />
                            <Input
                              placeholder="TH-001"
                              {...field}
                              className="h-11 pl-9 bg-zinc-950/50 border-zinc-800 text-white transition-all
                               focus-visible:ring-3 focus-visible:ring-[#e7eacd]/40"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-[10px] text-red-400/80" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-zinc-500 text-[9px] font-bold uppercase tracking-[0.2em] ml-1">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <div className="group relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-600 transition-colors group-focus-within:text-[#e7eacd]" />
                            <Input
                              placeholder="name@thoughthubhq.com"
                              {...field}
                              className="h-11 pl-9 bg-zinc-950/50 border-zinc-800 text-white transition-all 
                              focus-visible:ring-3 focus-visible:ring-[#e7eacd]/40"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-[10px] text-red-400/80" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5 mb-6">
                        <FormLabel className="text-zinc-500 text-[9px] font-bold uppercase tracking-[0.2em] ml-1">
                          Password
                        </FormLabel>
                        <FormControl>
                          <div className="group relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-600 transition-colors group-focus-within:text-[#e7eacd]" />
                            <Input
                              type="password"
                              placeholder="••••••••"
                              {...field}
                              className="h-11 pl-9 bg-zinc-950/50 border-zinc-800 text-white transition-all 
                              focus-visible:ring-3 focus-visible:ring-[#e7eacd]/40"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-[10px] text-red-400/80" />
                      </FormItem>
                    )}
                  />

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      className="w-full bg-[#e7eacd] hover:bg-white text-black font-extrabold h-11 transition-all shadow-lg"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {form.formState.isSubmitting ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <span className="flex items-center gap-2">
                          Access Workspace{" "}
                          <ArrowRight
                            className={`h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                          />
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </CardContent>
          </Card>

          <footer className="text-center">
            <p className="text-zinc-600 text-[9px] tracking-[0.3em] font-bold uppercase">
              © {new Date().getFullYear()} ThoughtHub | All rights reserved
            </p>
          </footer>
        </motion.div>
      </div>
    </div>
  );
}

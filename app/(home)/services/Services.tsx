"use client";

import { motion } from "framer-motion";
import { roxborough } from "@/lib/font";
import {
  smoothFadeUpVariants,
  containerVariants,
  itemVariants,
} from "@/lib/framer-animation";
import {
  Globe,
  Cloud,
  Smartphone,
  PenTool,
  Palette,
  LayoutTemplate,
  Network,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const detailedServices = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Building fast, secure, and highly scalable websites tailored to your business needs, ensuring a flawless digital presence across all modern browsers.",
    features: [
      "Custom Web Applications",
      "Corporate Websites",
      "E-commerce Platforms",
      "CMS Integration & Migration",
    ],
    icon: Globe,
  },
  {
    id: "saas-development",
    title: "Custom SaaS",
    description:
      "Architecting robust Software-as-a-Service platforms from the ground up, featuring secure multi-tenant backends and seamless subscription management systems.",
    features: [
      "Multi-tenant Architecture",
      "Third-party API Integration",
      "Payment Gateway Setup",
      "Scalable Cloud Infrastructure",
    ],
    icon: Cloud,
  },
  {
    id: "mobile-development",
    title: "Mobile Applications",
    description:
      "Developing high-performance, native-feeling mobile applications for both iOS and Android ecosystems to deeply engage your users on the go.",
    features: [
      "iOS & Android Development",
      "Cross-Platform Frameworks",
      "App Store Deployment",
      "Mobile-First UI/UX",
    ],
    icon: Smartphone,
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "Designing intuitive user experiences and interfaces that prioritize accessibility, user psychology, and seamless digital navigation.",
    features: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Usability Testing",
      "Comprehensive Design Systems",
    ],
    icon: PenTool,
  },
  {
    id: "creative-design",
    title: "Creative Design",
    description:
      "Crafting stunning visual assets that capture your brand's essence, bridging the gap between aesthetic beauty and functional communication.",
    features: [
      "Brand Identity & Logos",
      "Digital Illustrations",
      "Marketing Materials",
      "Motion Graphics & Animation",
    ],
    icon: Palette,
  },
  {
    id: "notion-workspace",
    title: "Notion Workspaces",
    description:
      "Structuring and optimizing bespoke Notion workspaces to centralize your company knowledge, streamline project management, and boost team productivity.",
    features: [
      "Custom Workspace Architecture",
      "Automated Workflows",
      "Team Onboarding Systems",
      "Project Management Dashboards",
    ],
    icon: LayoutTemplate,
  },
  {
    id: "it-consultancy",
    title: "IT Consultancy",
    description:
      "Providing hands-on technical guidance for your physical and digital operations, ensuring your team has the robust infrastructure they need to succeed.",
    features: [
      "Office Network Setup",
      "Hardware & Device Configuration",
      "Security Implementation",
      "Tech Infrastructure Strategy",
    ],
    icon: Network,
  },
];

export default function Services() {
  return (
    <div className="w-full bg-transparent overflow-hidden pt-20 pb-10 lg:pt-32 lg:pb-20">
      {/* Header Section */}
      <section className="max-w-360 mx-auto px-6 lg:px-8 mb-20 lg:mb-32">
        <motion.div
          variants={smoothFadeUpVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-black/50 dark:text-[#e7eacd]/70 mb-6 block">
            What We Do
          </span>
          <h1
            className={`${roxborough.className} text-4xl lg:text-6xl xl:text-7xl font-bold text-black dark:text-[#fafaf8] tracking-tight leading-[1.1] mb-8`}
          >
            Capabilities & <br />
            <span className="italic font-light dark:text-[#e7eacd]">
              Craftsmanship
            </span>
          </h1>
          <p className="text-sm lg:text-xl text-black/70 dark:text-white/70 font-light leading-relaxed max-w-3xl">
            From deep technical architecture to breathtaking visual design, our
            comprehensive suite of services is built to elevate your brand and
            dominate the digital landscape.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-360 mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 "
        >
          {detailedServices.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group flex flex-col p-8 lg:p-10 rounded-3xl border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-[#e7eacd]/50 bg-black/5 dark:bg-white/5 transition-all duration-500 ease-in-out hover:scale-105"
              >
                <div className="mb-8 p-5 bg-white dark:bg-black w-fit rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <Icon
                    className="w-8 h-8 text-black dark:text-[#e7eacd]"
                    strokeWidth={1.5}
                  />
                </div>

                <h3
                  className={`${roxborough.className} text-2xl lg:text-3xl font-bold text-black dark:text-[#fafaf8] mb-4`}
                >
                  {service.title}
                </h3>

                <p className="text-black/70 dark:text-white/70 text-sm lg:text-base font-light leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>

                <div className="w-full h-px bg-black/10 dark:bg-white/10 mb-6" />

                <ul className="flex flex-col gap-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-black/40 dark:text-[#e7eacd]/60 shrink-0 mt-0.5"
                        strokeWidth={1.5}
                      />
                      <span className="text-sm font-medium text-black/80 dark:text-white/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-360 mx-auto px-6 lg:px-8 mt-20 lg:mt-32">
        <motion.div
          variants={smoothFadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full bg-[#c3c7ae] dark:bg-[#1a1a1a] rounded-3xl p-10 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 border border-black/10 dark:border-white/10"
        >
          <div className="max-w-2xl text-center md:text-left">
            <h3
              className={`${roxborough.className} text-3xl lg:text-5xl font-bold text-black dark:text-[#fafaf8] mb-4`}
            >
              Ready to start your{" "}
              <span className="italic font-light dark:text-[#e7eacd]">
                Project?
              </span>
            </h3>
            <p className="text-sm lg:text-lg text-black/70 dark:text-white/70 font-light">
              Let&apos;s collaborate to build something exceptional. Reach out
              to discuss your vision and see how our expertise aligns with your
              goals.
            </p>
          </div>
          <Link
            href="/#contact"
            className="shrink-0 px-8 py-5 rounded-full bg-black text-[#e7eacd] dark:bg-[#e7eacd] dark:text-black text-base font-semibold hover:scale-105 transition-transform"
          >
            Start a Conversation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

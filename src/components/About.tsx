"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Layers, Rocket } from "lucide-react";

const features = [
  {
    icon: <Code2 size={18} />,
    title: "Scalable Frontend Architecture",
    desc: "Building modular, reusable component systems with clean folder structures and predictable state management.",
  },
  {
    icon: <Layers size={18} />,
    title: "UI From Scratch",
    desc: "Designed and developed complete production UIs independently without dedicated designers.",
  },
  {
    icon: <Rocket size={18} />,
    title: "Performance & Optimization",
    desc: "Improved application performance using lazy loading, memoization, efficient state handling and API optimization.",
  },
  {
    icon: <Briefcase size={18} />,
    title: "3.5+ Years of Experience",
    desc: "Experienced in building scalable, production-ready frontend applications handling the complete lifecycle from UI to deployment.",
  },
];

const stats = [
  { value: "3.5+", label: "Years Experience" },
  { value: "10+", label: "Projects Shipped" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-white dark:bg-zinc-950 transition-colors overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-zinc-100/80 dark:bg-slate-200/3 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-zinc-400 dark:text-slate-500 mb-4">
            Who I am
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-slate-200 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-zinc-700 to-zinc-500 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-zinc-500 dark:text-slate-400 max-w-xs text-sm leading-relaxed">
              Frontend Developer with 3.5+ years of experience building
              scalable, production-ready web applications.
            </p>
          </div>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-300 to-transparent dark:from-zinc-700 dark:via-zinc-600 dark:to-transparent" />
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            {/* Bio card */}
            <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-7 overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-zinc-200/60 dark:from-zinc-700/30 to-transparent rounded-bl-full" />

              <div className="space-y-4 text-sm text-zinc-600 dark:text-slate-400 leading-relaxed">
                <p>
                  Frontend Developer focused on building scalable,
                  high-performance, and user-centric web applications using{" "}
                  <span className="font-semibold text-zinc-800 dark:text-slate-200">
                    JavaScript (ES6+), React, Next.js, and Angular
                  </span>
                  . I create responsive, production-ready interfaces aligned
                  with real business needs.
                </p>
                <p>
                  I have hands-on experience implementing secure authentication,
                  protected routing, REST API integration, and structured state
                  management with Redux Toolkit. I've built dynamic dashboards
                  with pagination, advanced form handling, and rich text
                  editors.
                </p>
                <p>
                  My approach emphasizes clean architecture, reusable
                  components, and performance optimization. I take ownership of
                  the complete frontend lifecycle — from planning to deployment.
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center justify-center gap-1 py-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900"
                >
                  <span className="text-2xl font-bold text-zinc-900 dark:text-slate-200">
                    {stat.value}
                  </span>
                  <span className="text-xs text-zinc-400 dark:text-slate-500 text-center leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="
                  group flex flex-col gap-4 p-5 rounded-2xl
                  border border-zinc-200 dark:border-zinc-800
                  bg-zinc-50 dark:bg-zinc-900
                  hover:border-zinc-300 dark:hover:border-zinc-700
                  hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-black/30
                  transition-all duration-300 overflow-hidden relative
                "
              >
                <div className="h-9 w-9 flex items-center justify-center rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  {feat.icon}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-slate-200 leading-snug">
                    {feat.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-zinc-500 dark:text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-zinc-300 to-transparent dark:from-zinc-600 dark:to-transparent transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

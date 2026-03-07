"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Layout,
  Terminal,
  Cpu,
  ArrowDown,
  Download,
} from "lucide-react";
import FloatingIcon from "./FloatingIcon";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white dark:bg-zinc-950 transition-colors overflow-hidden"
    >
      {/* ================= GRID PATTERN ================= */}
      <div className="absolute inset-0 z-0">
        {/* Light grid */}
        <div
          className="block dark:hidden absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `linear-gradient(to right, #e4e4e7 1px, transparent 1px),
                              linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        {/* Dark grid */}
        <div
          className="hidden dark:block absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(to right, #3f3f46 1px, transparent 1px),
                              linear-gradient(to bottom, #3f3f46 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* ================= GLOW ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="hidden dark:block absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-slate-100/5 blur-[140px]" />
        <div className="block dark:hidden absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-zinc-300/40 blur-[160px]" />
      </div>

      {/* ================= FLOATING ICONS ================= */}
      <div className="absolute inset-0 z-10">
        <FloatingIcon
          icon={<Code2 size={42} />}
          className="top-[18%] left-[6%] md:left-[10%]"
          delay={0}
        />
        <FloatingIcon
          icon={<Terminal size={38} />}
          className="top-[35%] right-[8%] md:right-[12%]"
          delay={1}
        />
        <FloatingIcon
          icon={<Layout size={44} />}
          className="bottom-[32%] left-[10%] md:left-[18%]"
          delay={2}
        />
        <FloatingIcon
          icon={<Cpu size={40} />}
          className="bottom-[18%] right-[12%] md:right-[20%]"
          delay={3}
        />
        <FloatingIcon
          icon={<Rocket size={46} />}
          className="top-[12%] right-[30%]"
          delay={4}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-8 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-slate-400"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="text-zinc-900 dark:text-zinc-100">Hi, I'm </span>
          <br />
          <span
            className="
            text-zinc-900
            dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-300 dark:to-slate-400
            dark:bg-clip-text dark:text-transparent
          "
          >
            Dharmesh
          </span>
        </motion.h1>

        {/* Role pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-xs font-semibold tracking-widest uppercase text-zinc-500 dark:text-slate-400"
        >
          Frontend Developer
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-7 text-base md:text-lg text-zinc-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed"
        >
          Crafting clean, scalable, and user-friendly web experiences using
          modern technologies like React, Next.js and Angular.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.68 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#projects"
            className="
              inline-flex items-center gap-2
              px-7 py-3 rounded-xl font-medium text-sm
              bg-zinc-900 text-white
              dark:bg-zinc-100 dark:text-zinc-900
              hover:opacity-90 transition-all
              shadow-lg shadow-zinc-400/20 dark:shadow-zinc-200/10
            "
          >
            View My Work
          </a>

          <a
            href="/Dharmesh_Resume.pdf"
            rel="noopener noreferrer"
            download
            className="
              inline-flex items-center gap-2
              px-7 py-3 rounded-xl font-medium text-sm
              bg-white dark:bg-zinc-900
              text-zinc-700 dark:text-slate-300
              border border-zinc-200 dark:border-zinc-800
              hover:bg-zinc-50 dark:hover:bg-zinc-800
              hover:border-zinc-300 dark:hover:border-zinc-700
              transition-all
            "
          >
            <Download size={14} />
            Resume
          </a>
        </motion.div>

        {/* Divider with tech stack hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="mt-14 flex items-center gap-4 text-xs text-zinc-400 dark:text-zinc-600"
        >
          <div className="h-px w-16 bg-zinc-200 dark:bg-zinc-800" />
          <span className="tracking-widest uppercase">
            React · Next.js · Angular · TypeScript
          </span>
          <div className="h-px w-16 bg-zinc-200 dark:bg-zinc-800" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}

const ScrollIndicator = () => {
  const handleScroll = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1 }}
    >
      <motion.button
        onClick={handleScroll}
        animate={{ y: [0, 10, 0], opacity: [0.8, 0.4, 0.8] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="
          flex items-center justify-center
          h-10 w-10 rounded-full
          border border-zinc-200 dark:border-zinc-700
          bg-white/80 dark:bg-zinc-900/80
          backdrop-blur-sm shadow-md cursor-pointer
        "
        aria-label="Scroll to next section"
      >
        <ArrowDown size={16} className="text-zinc-500 dark:text-slate-400" />
      </motion.button>
    </motion.div>
  );
};

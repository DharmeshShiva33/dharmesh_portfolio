"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Layout, Terminal, Cpu, ArrowDown } from "lucide-react";

import FloatingIcon from "./FloatingIcon";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen
        flex items-center justify-center
        bg-white dark:bg-zinc-950
        transition-colors overflow-hidden
      "
    >
      {/* ================= FLOATING ICON LAYER ================= */}
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

      {/* ================= GLOW BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        {/* Dark */}
        <div className="hidden dark:block absolute top-[-25%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-slate-100/5 blur-[160px]" />
        {/* Light */}
        <div className="block dark:hidden absolute top-[-30%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/30 blur-[180px]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
          inline-flex items-center gap-2
          px-4 py-1.5 rounded-full text-sm
          bg-zinc-100 dark:bg-zinc-900
          border border-zinc-200 dark:border-zinc-800
          text-zinc-700 dark:text-slate-300
          mb-6
        "
        >
          <span className="h-3 w-3 rounded-full bg-emerald-500 dark:bg-emerald-500 animate-pulse" />
          Available for work
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="
            text-4xl md:text-6xl font-bold tracking-tight
            text-zinc-900 dark:text-zinc-100
          "
        >
          Hi, I’m{" "}
          <span
            className="
              bg-gradient-to-r
              from-sky-500 via-cyan-500 to-teal-400
              dark:from-slate-200 dark:via-slate-300 dark:to-slate-400
              bg-clip-text text-transparent
            "
          >
            Dharmesh
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="
            mt-6 text-lg md:text-xl
            text-zinc-600 dark:text-slate-400
            max-w-2xl mx-auto
          "
        >
          A Frontend Developer crafting clean, scalable, and user-friendly web
          experiences using modern technologies.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="
              px-8 py-3 rounded-xl font-medium
              bg-gradient-to-r
              from-zinc-800 to-zinc-700
              dark:from-slate-200 dark:to-slate-400
              text-white dark:text-zinc-900
              shadow-lg shadow-zinc-400/20 dark:shadow-slate-400/30
              hover:opacity-90
              transition
            "
          >
            View My Work
          </a>

          <a
            href="#about"
            className="
              px-8 py-3 rounded-xl font-medium
              bg-zinc-100 dark:bg-zinc-900
              text-zinc-700 dark:text-slate-300
              border border-zinc-200 dark:border-zinc-800
              hover:bg-zinc-200 dark:hover:bg-zinc-800
              transition
            "
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}

const ScrollIndicator = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.button
        onClick={handleScroll}
        animate={{ y: [0, 12, 0], opacity: [1, 0.6, 1] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          flex items-center justify-center
          h-12 w-12 rounded-full
          border border-zinc-300 dark:border-zinc-700
          bg-white/70 dark:bg-zinc-900/70
          backdrop-blur
          shadow-lg
          cursor-pointer
        "
        aria-label="Scroll to next section"
      >
        <ArrowDown size={20} className="text-zinc-800 dark:text-slate-200" />
      </motion.button>
    </motion.div>
  );
};

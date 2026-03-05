"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-20 md:py-32 bg-white dark:bg-zinc-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Light grid */}
        <div
          className="block dark:hidden absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: `linear-gradient(to right, #e4e4e7 1px, transparent 1px),
                              linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        {/* Dark grid */}
        <div
          className="hidden dark:block absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `linear-gradient(to right, #3f3f46 1px, transparent 1px),
                              linear-gradient(to bottom, #3f3f46 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-zinc-100 dark:bg-zinc-800/20 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-zinc-400 dark:text-slate-500 mb-4">
            Career Journey
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-slate-200 leading-tight">
              Work{" "}
              <span className="bg-gradient-to-r from-zinc-700 to-zinc-500 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-zinc-500 dark:text-slate-400 max-w-sm text-sm leading-relaxed">
              Building scalable frontend systems and delivering production-ready
              applications across real-world business domains.
            </p>
          </div>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-300 to-transparent dark:from-zinc-700 dark:via-zinc-600 dark:to-transparent" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop center line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="hidden md:block absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-zinc-300 via-zinc-200 to-transparent dark:from-zinc-600 dark:via-zinc-700/50 dark:to-transparent"
          />

          {/* Mobile left line */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-300 via-zinc-200 to-transparent dark:from-zinc-600 dark:via-zinc-700/50 dark:to-transparent" />

          <div className="flex flex-col gap-8 md:gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`
                  relative flex w-full pl-14 md:pl-0
                  ${
                    exp.side === "left"
                      ? "md:justify-start md:pr-[52%]"
                      : "md:justify-end md:pl-[52%]"
                  }
                `}
              >
                {/* Mobile node */}
                <div className="md:hidden absolute left-5 top-7 -translate-x-1/2 z-10">
                  <span className="flex h-3 w-3 rounded-full bg-zinc-700 dark:bg-zinc-300 ring-4 ring-white dark:ring-zinc-950" />
                </div>

                {/* Desktop connector */}
                <span
                  className={`
                  hidden md:block absolute top-11
                  ${exp.side === "left" ? "right-[50%] mr-2" : "left-[50%] ml-2"}
                  w-8 h-px bg-gradient-to-r
                  ${
                    exp.side === "left"
                      ? "from-transparent to-zinc-300 dark:to-zinc-600"
                      : "from-zinc-300 dark:from-zinc-600 to-transparent"
                  }
                `}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="group relative w-full flex flex-col gap-5 rounded-2xl overflow-hidden
                    bg-white dark:bg-zinc-900
                    border border-zinc-200 dark:border-zinc-800
                    hover:border-zinc-300 dark:hover:border-zinc-700
                    hover:shadow-2xl hover:shadow-zinc-200/70 dark:hover:shadow-black/50
                    transition-all duration-300
                  "
                >
                  {/* Card top color strip */}
                  <div className="h-1 w-full bg-gradient-to-r from-zinc-300 via-zinc-200 to-transparent dark:from-zinc-600 dark:via-zinc-700 dark:to-transparent group-hover:from-zinc-500 dark:group-hover:from-zinc-400 transition-all duration-500" />

                  <div className="px-6 pb-6 flex flex-col gap-5">
                    {/* Top row: period + index */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-slate-400 border border-zinc-200 dark:border-zinc-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {exp.period}
                      </span>
                      <span className="text-2xl font-black text-zinc-100 dark:text-zinc-800 select-none tabular-nums">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Company + role */}
                    <div className="flex items-center gap-4">
                      <div
                        className="
                        h-12 w-12 rounded-2xl flex items-center justify-center shrink-0
                        font-bold text-base
                        bg-zinc-900 dark:bg-zinc-100
                        text-white dark:text-zinc-900
                        shadow-lg group-hover:scale-105 transition-transform duration-300
                      "
                      >
                        {exp.logo}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-bold text-zinc-900 dark:text-slate-100 leading-tight">
                          {exp.company}
                        </h3>
                        <p className="text-xs text-zinc-500 dark:text-slate-400 mt-0.5 font-medium tracking-wide">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-zinc-100 dark:bg-zinc-800" />

                    {/* Intro */}
                    <p className="text-sm text-zinc-500 dark:text-slate-400 leading-relaxed">
                      {exp.intro}
                    </p>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item: string, i: number) => (
                        <li
                          key={i}
                          className="text-sm text-zinc-600 dark:text-slate-400 flex gap-3"
                        >
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((tech: string) => (
                        <span
                          key={tech}
                          className="
                            px-2.5 py-1 text-xs rounded-lg font-medium
                            border border-zinc-200 dark:border-zinc-700/60
                            text-zinc-600 dark:text-slate-400
                            bg-zinc-50 dark:bg-zinc-800/60
                            hover:border-zinc-300 dark:hover:border-zinc-500
                            hover:text-zinc-800 dark:hover:text-slate-300
                            transition-all cursor-default
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Desktop timeline node */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-11 z-10">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="relative flex h-4 w-4 items-center justify-center"
                  >
                    <span className="absolute h-4 w-4 rounded-full bg-zinc-200 dark:bg-zinc-700 animate-ping opacity-50" />
                    <span className="relative h-3 w-3 rounded-full bg-zinc-800 dark:bg-zinc-200 ring-2 ring-white dark:ring-zinc-950 shadow-md" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

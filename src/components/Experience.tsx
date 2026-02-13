"use client";

import { motion } from "framer-motion";

import { experiences } from "@/data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-36 overflow-hidden bg-white dark:bg-zinc-900"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-zinc-800/5 dark:bg-slate-200/5 blur-[180px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-slate-200">
            Work{" "}
            <span className="bg-gradient-to-r from-zinc-800 to-zinc-700 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-slate-400">
            A journey of building scalable frontend systems, designing clean
            user experiences, and delivering production-ready applications
            across real-world business domains.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Gradient timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="
              absolute left-1/2 top-0 w-[2px]
              bg-gradient-to-b
              from-zinc-800/40 via-zinc-600/20 to-transparent
              dark:from-slate-200/40 dark:via-slate-400/20 dark:to-transparent
              -translate-x-1/2
            "
          />

          <div className="space-y-22">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex ${
                  exp.side === "left"
                    ? "justify-start pr-12"
                    : "justify-end pl-12"
                }`}
              >
                {/* Connector line */}
                <span
                  className={`
                    hidden md:block absolute top-14
                    ${exp.side === "left" ? "right-[46%]" : "left-[46%]"}
                    w-12 h-px
                    bg-gradient-to-r
                    from-zinc-800/40 to-transparent
                    dark:from-slate-200/40 dark:to-transparent
                  `}
                />

                {/* Gradient border wrapper */}
                <div
                  className="
                    relative w-full md:w-[46%] p-[1px] rounded-3xl
                    bg-gradient-to-r
                    from-zinc-800/30 to-zinc-700/20
                    dark:from-slate-200/30 dark:to-slate-400/20
                  "
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="
                      rounded-3xl p-7
                      bg-white/90 dark:bg-zinc-900/90
                      backdrop-blur-xl
                      border border-zinc-200/60 dark:border-zinc-800/60
                      shadow-xl shadow-black/5 dark:shadow-black/40
                    "
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className="
                          h-14 w-14 rounded-2xl flex items-center justify-center
                          font-semibold text-lg
                          bg-gradient-to-r
                          from-zinc-800 to-zinc-700
                          dark:from-slate-200 dark:to-slate-400
                          text-white dark:text-zinc-900
                          shadow-md
                        "
                      >
                        {exp.logo}
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-slate-200">
                          {exp.company}
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-slate-400">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    {/* Intro */}
                    <p className="text-zinc-600 dark:text-slate-400 leading-relaxed mb-5">
                      {exp.intro}
                    </p>

                    {/* Responsibilities */}
                    <ul className="space-y-2 mb-5">
                      {exp.responsibilities.map((item: string, i: number) => (
                        <li
                          key={i}
                          className="text-zinc-600 dark:text-slate-400 flex gap-2"
                        >
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-zinc-500 dark:bg-slate-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {exp.tech.map((tech: string) => (
                        <span
                          key={tech}
                          className="
                            px-3 py-1 text-xs rounded-full
                            border border-zinc-200 dark:border-zinc-600
                            text-zinc-700 dark:text-slate-300
                            bg-white dark:bg-zinc-900
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Period */}
                    <span className="text-xs tracking-wide text-zinc-500 dark:text-slate-400 tracking-widest">
                      {exp.period}
                    </span>
                  </motion.div>
                </div>

                {/* Timeline node */}
                <div className="absolute left-1/2 -translate-x-1/2 top-14">
                  <span
                    className="
                      relative flex h-5 w-5 rounded-full
                      bg-gradient-to-r
                      from-zinc-800 to-zinc-700
                      dark:from-slate-200 dark:to-slate-400
                      shadow-lg
                    "
                  >
                    <span className="absolute inset-0 rounded-full blur-md bg-zinc-800/30 dark:bg-slate-300/40" />
                  </span>
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

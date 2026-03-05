"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32 bg-white dark:bg-zinc-900 transition-colors overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-zinc-100/80 dark:bg-slate-200/3 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* Label */}
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-zinc-400 dark:text-slate-500 mb-4">
            What I work with
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-slate-200 leading-tight">
              Technical{" "}
              <span className="bg-gradient-to-r from-zinc-700 to-zinc-500 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-zinc-500 dark:text-slate-400 max-w-sm text-sm leading-relaxed">
              A strong foundation in modern frontend architecture and scalable
              development practices.
            </p>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-300 to-transparent dark:from-zinc-700 dark:via-zinc-600 dark:to-transparent" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="
                    group h-full flex flex-col gap-5
                    rounded-2xl p-6
                    bg-zinc-50 dark:bg-zinc-950
                    border border-zinc-200/80 dark:border-zinc-800
                    hover:border-zinc-300 dark:hover:border-zinc-700
                    hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-black/30
                    transition-all duration-300
                  "
                >
                  {/* Card header */}
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        h-9 w-9 rounded-xl shrink-0
                        flex items-center justify-center
                        bg-zinc-900 dark:bg-zinc-100
                        text-white dark:text-zinc-900
                        group-hover:scale-110 transition-transform duration-300
                      "
                    >
                      <Icon size={17} />
                    </div>
                    <h3 className="font-semibold text-zinc-900 dark:text-slate-200 tracking-tight">
                      {category.title}
                    </h3>

                    {/* Skill count badge */}
                    <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-zinc-200/70 dark:bg-zinc-800 text-zinc-500 dark:text-slate-400">
                      {category.skills.length}
                    </span>
                  </div>

                  {/* Thin divider */}
                  <div className="h-px bg-zinc-200 dark:bg-zinc-800" />

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 + i * 0.04 }}
                        className="
                          px-3 py-1 text-xs font-medium rounded-lg
                          bg-white dark:bg-zinc-900
                          border border-zinc-200 dark:border-zinc-700/60
                          text-zinc-700 dark:text-slate-300
                          hover:border-zinc-400 dark:hover:border-zinc-500
                          hover:text-zinc-900 dark:hover:text-slate-100
                          transition-all duration-200 cursor-default
                          tracking-wide
                        "
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

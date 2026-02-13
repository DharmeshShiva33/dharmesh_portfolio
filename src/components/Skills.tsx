"use client";

import { motion } from "framer-motion";

import { skillCategories } from "@/data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-32 bg-white dark:bg-zinc-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-slate-200">
            Technical{" "}
            <span className="bg-gradient-to-r from-zinc-800 to-zinc-700 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="mt-6 text-lg text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto">
            A strong foundation in modern frontend architecture and scalable
            development practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-full"
              >
                <div
                  className="
                    h-full
                    p-[1px] rounded-3xl
                    bg-gradient-to-r
                    from-zinc-800/30 to-zinc-700/20
                    dark:from-slate-200/20 dark:to-slate-400/10
                  "
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="
                      h-full
                      min-h-[320px]
                      flex flex-col
                      rounded-3xl p-8
                      bg-white/90 dark:bg-zinc-950
                      backdrop-blur-xl
                      border border-zinc-200/60 dark:border-zinc-800/60
                      shadow-xl shadow-black/5 dark:shadow-black/40
                      transition-all
                    "
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="
                  h-10 w-10 rounded-2xl
                  flex items-center justify-center
                  bg-gradient-to-r
                  from-zinc-800 to-zinc-700
                  dark:from-slate-200 dark:to-slate-400
                  text-white dark:text-zinc-900
                  shadow-md
                "
                      >
                        <Icon size={20} />
                      </div>

                      <h3 className="text-xl font-semibold text-zinc-900 dark:text-slate-200">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="
                          px-3 py-1.5
                          text-sm
                          rounded-xl
                          bg-zinc-200 dark:bg-zinc-800
                          text-zinc-700 dark:text-slate-300
                          transition-colors
                          hover:bg-zinc-300 dark:hover:bg-zinc-700 tracking-wider
                          "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

"use client";

import { useState } from "react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Info } from "lucide-react";

import { PROJECTS_DETAILS } from "@/data/projects";
import { Project } from "@/types";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const handleScroll = () => {
    const nextSection = document.getElementById("projects");
    nextSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="projects"
      className="
        py-32
        bg-white dark:bg-zinc-950
        transition-colors
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADING ================= */}
        {!selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-slate-200">
              Featured{" "}
              <span className="bg-gradient-to-r from-zinc-800 to-zinc-700 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-slate-400 max-w-xl mx-auto">
              Real-world applications I’ve built professionally and
              independently
            </p>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {/* ================= GRID ================= */}
          {!selectedProject && (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {PROJECTS_DETAILS.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="
                    group relative overflow-hidden rounded-3xl
                    border border-zinc-200 dark:border-zinc-800
                    bg-white/90 dark:bg-zinc-900/80
                    backdrop-blur
                    shadow-lg shadow-black/5 dark:shadow-black/40
                  "
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-slate-200">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm text-zinc-600 dark:text-slate-400">
                      {project.description}
                    </p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="
                            px-3 py-1 text-xs rounded-full
                            border border-zinc-300 dark:border-zinc-700
                            text-zinc-700 dark:text-slate-300
                            bg-white dark:bg-zinc-900
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-6 mt-7 items-center text-sm">
                      <button
                        onClick={() => {
                          setSelectedProject(project);
                          handleScroll;
                        }}
                        className="
                          px-5 py-2 
                          border border-zinc-200
                          rounded-xl
                          font-medium
                          bg-gradient-to-r
                          from-zinc-800 to-zinc-700
                          text-white
                          hover:opacity-90
                          transition
                        "
                      >
                        View Details →
                      </button>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          px-5 py-2
                          border border-zinc-200
                          rounded-xl
                          font-medium
                          bg-gradient-to-r
                          from-zinc-800 to-zinc-700
                          text-white
                          hover:opacity-90
                          transition
                        "
                      >
                        <ExternalLink size={14} />
                        Live
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ================= DETAILS ================= */}
          {selectedProject && (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="mb-10 text-sm text-zinc-600 dark:text-slate-400 hover:text-zinc-900 dark:hover:text-slate-200"
              >
                ← Back to Projects
              </button>

              <h2 className="text-4xl font-bold text-zinc-900 dark:text-slate-200">
                {selectedProject.title}
              </h2>

              <p className="mt-6 text-zinc-600 dark:text-slate-400 leading-relaxed">
                {selectedProject.details.overview}
              </p>

              {/* Detail blocks */}
              {[
                ["My Role", selectedProject.details.role],
                ["Challenges", selectedProject.details.challenges],
                ["Outcome", selectedProject.details.outcome],
              ].map(([title, value]) => (
                <div
                  key={title}
                  className="
                    mt-12 p-6 rounded-2xl
                    border border-zinc-200 dark:border-zinc-800
                    bg-white dark:bg-zinc-900
                  "
                >
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-slate-200">
                    {title}
                  </h3>
                  <p className="mt-2 text-zinc-600 dark:text-slate-400">
                    {value}
                  </p>
                </div>
              ))}

              {/* Features */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-slate-200">
                  Key Features
                </h3>
                <ul className="mt-4 space-y-2 text-zinc-600 dark:text-slate-400 list-disc list-inside">
                  {selectedProject.details.features.map((f: string) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              {/* Infrastructure (Optional) */}
              {selectedProject.details.infrastructure && (
                <div className="mt-12">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-slate-200">
                    Infrastructure & Optimization
                  </h3>

                  <div className="flex flex-wrap gap-3 mt-4">
                    {selectedProject.details.infrastructure.map(
                      (item: string) => (
                        <span
                          key={item}
                          className="
                            px-4 py-2 text-sm rounded-xl
                            border border-zinc-200 dark:border-zinc-700
                            bg-zinc-50 dark:bg-zinc-800
                            text-zinc-700 dark:text-slate-300
                          "
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              )}

              {/* NDA */}
              <div
                className="
                mt-16
                flex items-start gap-3
                p-6
                rounded-xl
                border border-zinc-200 dark:border-zinc-800
                bg-zinc-100 dark:bg-zinc-900
                text-sm
                text-zinc-700 dark:text-slate-300
              "
              >
                <Info
                  size={18}
                  className="mt-1 text-zinc-500 dark:text-slate-400 shrink-0"
                />

                <p>
                  Due to company confidentiality, the source code and live demo
                  cannot be shared publicly. The information above represents my
                  actual technical contributions and responsibilities within the
                  project.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;

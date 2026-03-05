"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowLeft,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { PROJECTS_DETAILS } from "@/data/projects";
import { Project } from "@/types";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelect = (project: Project) => {
    setSelectedProject(project);
    setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <section
      id="projects"
      className="relative py-32 bg-white dark:bg-zinc-950 transition-colors overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-zinc-100/80 dark:bg-slate-200/3 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {/* ================= GRID VIEW ================= */}
          {!selectedProject && (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-zinc-400 dark:text-slate-500 mb-4">
                  Selected Work
                </p>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-slate-200 leading-tight">
                    Featured{" "}
                    <span className="bg-gradient-to-r from-zinc-700 to-zinc-500 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                      Projects
                    </span>
                  </h2>
                  <p className="text-zinc-500 dark:text-slate-400 max-w-xs text-sm leading-relaxed">
                    Real-world applications built professionally and
                    independently.
                  </p>
                </div>
                <div className="mt-8 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-300 to-transparent dark:from-zinc-700 dark:via-zinc-600 dark:to-transparent" />
              </motion.div>

              {/* Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS_DETAILS.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="group flex flex-col rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-black/40 transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Live button on hover */}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-zinc-900/90 text-zinc-800 dark:text-slate-200 text-xs font-medium shadow-md"
                        >
                          <ExternalLink size={12} />
                          Live
                        </a>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-5 gap-4">
                      <div>
                        <h3 className="font-semibold text-zinc-900 dark:text-slate-200 tracking-tight">
                          {project.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-zinc-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 text-xs rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-slate-400 bg-white dark:bg-zinc-800"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-2.5 py-0.5 text-xs rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-400 dark:text-slate-500 bg-white dark:bg-zinc-800">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>

                      {/* View details */}
                      <button
                        onClick={() => handleSelect(project)}
                        className="mt-auto flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:opacity-90 transition"
                      >
                        View Details
                        <ChevronRight size={15} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ================= DETAIL VIEW ================= */}
          {selectedProject && (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35 }}
              className="max-w-3xl mx-auto"
            >
              {/* Back */}
              <button
                onClick={() => setSelectedProject(null)}
                className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-slate-400 hover:text-zinc-900 dark:hover:text-slate-200 transition-colors"
              >
                <ArrowLeft size={15} />
                Back to Projects
              </button>

              {/* Hero image */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 mb-10">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-5 left-6">
                  <h2 className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h2>
                </div>
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-zinc-900/90 text-zinc-800 dark:text-slate-200 text-xs font-medium shadow"
                  >
                    <ExternalLink size={12} />
                    Live Demo
                  </a>
                )}
              </div>

              {/* Overview */}
              <p className="text-zinc-600 dark:text-slate-400 leading-relaxed text-base">
                {selectedProject.details.overview}
              </p>

              {/* Tech used */}
              <div className="mt-8 flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Detail blocks */}
              <div className="mt-10 grid gap-4">
                {(
                  [
                    ["My Role", selectedProject.details.role],
                    ["Challenges", selectedProject.details.challenges],
                    ["Outcome", selectedProject.details.outcome],
                  ] as [string, string][]
                ).map(([title, value]) => (
                  <div
                    key={title}
                    className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900"
                  >
                    <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-slate-500 mb-2">
                      {title}
                    </p>
                    <p className="text-zinc-700 dark:text-slate-300 text-sm leading-relaxed">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Features */}
              <div className="mt-10">
                <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-slate-500 mb-4">
                  Key Features
                </p>
                <ul className="space-y-2">
                  {selectedProject.details.features.map((f: string) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-zinc-600 dark:text-slate-400"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-slate-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Infrastructure */}
              {selectedProject.details.infrastructure && (
                <div className="mt-10">
                  <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-slate-500 mb-4">
                    Infrastructure & Optimization
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.infrastructure.map(
                      (item: string) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 text-sm rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-slate-300"
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              )}

              {/* NDA Notice */}
              <div className="mt-12 flex items-start gap-3 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <ShieldCheck
                  size={17}
                  className="mt-0.5 text-zinc-400 dark:text-slate-500 shrink-0"
                />
                <p className="text-sm text-zinc-500 dark:text-slate-400 leading-relaxed">
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

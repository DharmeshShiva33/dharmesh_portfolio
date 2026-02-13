"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Layers, Rocket } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative py-32
        bg-white dark:bg-zinc-950
        transition-colors
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-950 dark:text-slate-200">
            About{" "}
            <span className="bg-gradient-to-r from-zinc-800 to-zinc-700 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mt-4 text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto">
            Frontend Developer with 3.5+ years of experience building scalable,
            production-ready web applications.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-zinc-700 dark:text-slate-300 leading-relaxed"
          >
            <p>
              Frontend Developer focused on building scalable, high-performance,
              and user-centric web applications using{" "}
              <strong>JavaScript (ES6+), React, Next.js, and Angular</strong>. I
              create responsive, production-ready interfaces aligned with real
              business needs.
            </p>

            <p>
              I have hands-on experience implementing secure authentication,
              protected routing, REST API integration, and structured state
              management with Redux Toolkit. I’ve built dynamic dashboards with
              pagination, advanced form handling, and rich text editors.
            </p>

            <p>
              My approach emphasizes clean architecture, reusable components,
              and performance optimization through lazy loading, code splitting,
              and efficient rendering techniques. I take ownership of the
              complete frontend lifecycle — from planning to deployment.
            </p>
          </motion.div>

          {/* Right Cards */}
          <div className="space-y-6">
            <FeatureCard
              icon={<Code2 size={20} />}
              title="Scalable Frontend Architecture"
              desc="Building modular, reusable component systems with clean folder structures and predictable state management."
            />

            <FeatureCard
              icon={<Layers size={20} />}
              title="UI From Scratch"
              desc="Designed and developed complete production UIs independently without dedicated designers."
            />

            <FeatureCard
              icon={<Rocket size={20} />}
              title="Performance & Optimization"
              desc="Improved application performance using lazy loading, memoization, efficient state handling and API optimization."
            />

            <FeatureCard
              icon={<Briefcase size={20} />}
              title="3.5+ Years of Frontend Experience"
              desc="Experienced in building scalable, production-ready frontend applications and handling the complete lifecycle from UI development to optimization and deployment."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Feature Card ---------- */

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="
        flex gap-5 p-6 rounded-2xl
        bg-white dark:bg-zinc-900
        border border-zinc-200 dark:border-zinc-800
        hover:bg-zinc-200 dark:hover:bg-zinc-800
        transition-all duration-300
      "
    >
      <div
        className="
          h-12 w-12 flex shrink-0 items-center justify-center rounded-xl
          border border-zinc-200 dark:border-zinc-800
          text-zinc-700 dark:text-slate-300
        "
      >
        {icon}
      </div>

      <div>
        <h4 className="text-lg font-semibold text-zinc-900 dark:text-slate-200">
          {title}
        </h4>
        <p className="mt-1 text-sm text-zinc-700 dark:text-slate-300 leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    icon: <Mail size={18} />,
    title: "Email",
    value: "dharmeshyadav3434@gmail.com",
    href: "mailto:dharmeshyadav3434@gmail.com",
  },
  {
    icon: <Phone size={18} />,
    title: "Phone",
    value: "+91 9702256522",
    href: "tel:9702256522",
  },
  {
    icon: <Linkedin size={18} />,
    title: "LinkedIn",
    value: "linkedin.com/in/dharmesh-yadav",
    href: "https://www.linkedin.com/in/dharmesh-yadav-44010b1a5",
  },
  {
    icon: <Github size={18} />,
    title: "GitHub",
    value: "github.com/DharmeshShiva33",
    href: "https://github.com/DharmeshShiva33",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative pt-32 pb-0 overflow-x-hidden bg-white dark:bg-zinc-950 transition-colors"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-zinc-100 dark:bg-slate-200/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-zinc-400 dark:text-slate-500 mb-4">
            Get in touch
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-slate-200 leading-tight">
              Let's Work{" "}
              <span className="bg-gradient-to-r from-zinc-700 to-zinc-500 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-zinc-500 dark:text-slate-400 max-w-xs text-sm leading-relaxed">
              Open to frontend roles, freelance projects, and impactful
              collaborations.
            </p>
          </div>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-300 to-transparent dark:from-zinc-700 dark:via-zinc-600 dark:to-transparent" />
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            {/* Big CTA card */}
            <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-8">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-zinc-200/60 dark:from-zinc-700/30 to-transparent rounded-bl-full" />

              <p className="text-zinc-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of something great.
              </p>

              <motion.a
                href="mailto:dharmeshyadav3434@gmail.com"
                whileHover={{ y: -2 }}
                className="
                  mt-8 inline-flex items-center gap-2
                  px-6 py-3 rounded-xl font-medium text-sm
                  bg-zinc-900 dark:bg-zinc-100
                  text-white dark:text-zinc-900
                  hover:opacity-90 transition shadow-lg shadow-zinc-300/30 dark:shadow-black/30
                "
              >
                <Mail size={15} />
                Send Me an Email
              </motion.a>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 w-fit">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <p className="text-sm text-zinc-600 dark:text-slate-400">
                Currently available for new opportunities
              </p>
            </div>

            {/* Response time */}
            <p className="text-xs text-zinc-400 dark:text-slate-500 pl-1">
              ⚡ Typically responds within 24 hours
            </p>
          </motion.div>

          {/* RIGHT — Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {contacts.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="
                  group relative flex flex-col gap-3 p-5 rounded-2xl
                  border border-zinc-200 dark:border-zinc-800
                  bg-zinc-50 dark:bg-zinc-900
                  hover:border-zinc-300 dark:hover:border-zinc-700
                  hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-black/30
                  transition-all duration-300 overflow-hidden
                "
              >
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <div className="h-9 w-9 flex items-center justify-center rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <ArrowUpRight
                    size={15}
                    className="text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors"
                  />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-slate-500">
                    {item.title}
                  </p>
                  <p className="text-sm font-medium text-zinc-800 dark:text-slate-200 truncate mt-0.5">
                    {item.value}
                  </p>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-zinc-400 to-zinc-200 dark:from-slate-400 dark:to-slate-600 transition-all duration-500" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="mt-24 py-6 border-t border-zinc-100 dark:border-zinc-800 flex justify-center items-center text-xs text-zinc-400 dark:text-slate-500"
        suppressHydrationWarning
      >
        <p>© {new Date().getFullYear()} Dharmesh Yadav. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;

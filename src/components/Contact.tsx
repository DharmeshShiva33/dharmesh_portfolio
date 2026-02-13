"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const contacts = [
  {
    icon: <Mail size={20} />,
    title: "Email",
    value: "dharmeshyadav3434@gmail.com",
    href: "mailto:dharmeshyadav3434@gmail.com",
  },
  {
    icon: <Phone size={20} />,
    title: "Phone",
    value: "+91 9702256522",
    href: "tel:9702256522",
  },
  {
    icon: <Linkedin size={20} />,
    title: "LinkedIn",
    value: "linkedin.com/in/dharmesh-yadav-44010b1a5",
    href: "https://www.linkedin.com/in/dharmesh-yadav-44010b1a5",
  },
  {
    icon: <Github size={20} />,
    title: "GitHub",
    value: "github.com/DharmeshShiva33",
    href: "https://github.com/DharmeshShiva33",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        pt-32
        bg-white
        dark:bg-zinc-950
        text-zinc-700 dark:text-slate-300
        transition-colors
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-slate-200">
              Let’s Work{" "}
              <span className="bg-gradient-to-r from-zinc-800 to-zinc-700 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                Together
              </span>
            </h2>

            <p className="mt-6 leading-relaxed max-w-md text-zinc-700 dark:text-slate-300">
              I’m open to frontend development roles, freelance projects, and
              collaborative opportunities. If you're building something
              impactful, I’d love to contribute.
            </p>

            <motion.a
              href="mailto:dharmeshyadav3434@gmail.com"
              whileHover={{ y: -2 }}
              className="
                inline-block mt-10
                px-8 py-4
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
              Send Me an Email
            </motion.a>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {contacts.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="
                  flex items-center gap-5
                  p-6 rounded-2xl
                  bg-white dark:bg-zinc-900
                  border border-zinc-200 dark:border-zinc-800
                  text-zinc-700 dark:text-slate-300
                  hover:bg-zinc-200 dark:hover:bg-zinc-800
                  transition-all duration-300
                "
              >
                <div
                  className="
                    h-12 w-12 flex items-center justify-center
                    rounded-xl
                    border border-zinc-200 dark:border-zinc-600
                    text-zinc-700 dark:text-slate-300
                  "
                >
                  {item.icon}
                </div>

                <div>
                  <p className="text-sm text-zinc-500 dark:text-slate-400">
                    {item.title}
                  </p>
                  <p className="text-base font-medium break-all">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Footer */}
      <div
        className="mt-20 py-5 flex justify-center items-center text-sm text-zinc-500 dark:text-slate-400"
        suppressHydrationWarning
      >
        <p>© {new Date().getFullYear()} Dharmesh Yadav. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;

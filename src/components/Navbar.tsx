"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

const Navbar = () => {
  const { scrollY } = useScroll();

  const glassOpacity = useTransform(scrollY, [0, 80], [0.15, 0.35]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.25]);
  const shadowOpacity = useTransform(scrollY, [0, 80], [0, 0.12]);
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(22px)"]);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        backdropFilter: blur,
        WebkitBackdropFilter: blur,
      }}
      className="fixed top-0 w-full z-50"
    >
      {/* Glass layer */}
      <motion.div
        style={{ opacity: glassOpacity }}
        className="
          absolute inset-0
          bg-gradient-to-r
          from-zinc-800/10 to-zinc-700/10
          dark:from-slate-200/10 dark:to-slate-400/10
        "
      />

      {/* Border + shadow */}
      <motion.div
        style={{ opacity: borderOpacity, boxShadow: shadowOpacity }}
        className="
          absolute inset-0
          border-b border-zinc-300/30 dark:border-slate-400/40
        "
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="
            font-bold text-xl
            text-zinc-900 dark:text-slate-200 tracking-wider
          "
        >
          Dharmesh
        </motion.h1>

        {/* Links */}
        <ul className="flex items-center gap-6 font-medium">
          {navItems.map((item) => (
            <li key={item.href} className="relative">
              <motion.a
                href={item.href}
                whileHover="hover"
                className="
                  text-zinc-700 dark:text-slate-400
                  hover:text-zinc-900 dark:hover:text-slate-200
                  transition-colors
                "
              >
                {item.label}

                {/* underline */}
                <motion.span
                  variants={{ hover: { width: "100%" } }}
                  initial={{ width: 0 }}
                  transition={{ duration: 0.25 }}
                  className="
                    absolute left-0 -bottom-1 h-[2px]
                    bg-gradient-to-r
                    from-zinc-800 to-zinc-700
                    dark:from-slate-200 dark:to-slate-400
                  "
                />
              </motion.a>
            </li>
          ))}

          <ThemeToggle />
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;

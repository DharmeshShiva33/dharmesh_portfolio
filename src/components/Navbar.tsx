"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const glassOpacity = useTransform(scrollY, [0, 80], [0.15, 0.35]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.25]);
  const boxShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0px 0px 0 rgba(0,0,0,0)", "0 4px 24px 0 rgba(0,0,0,0.12)"],
  );
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(22px)"]);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ backdropFilter: blur, WebkitBackdropFilter: blur }}
        className="fixed top-0 w-full z-50"
      >
        {/* Glass layer */}
        <motion.div
          style={{ opacity: glassOpacity }}
          className="absolute inset-0 bg-gradient-to-r from-zinc-800/10 to-zinc-700/10 dark:from-slate-200/10 dark:to-slate-400/10"
        />

        {/* Border + shadow */}
        <motion.div
          style={{ opacity: borderOpacity, boxShadow }}
          className="absolute inset-0 border-b border-zinc-300/30 dark:border-slate-400/40"
        />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="font-bold text-xl text-zinc-900 dark:text-slate-200 tracking-wider z-10"
          >
            Dharmesh
          </motion.h1>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 font-medium">
            {navItems.map((item) => (
              <li key={item.href} className="relative">
                <motion.a
                  href={item.href}
                  whileHover="hover"
                  className="text-zinc-700 dark:text-slate-400 hover:text-zinc-900 dark:hover:text-slate-200 transition-colors"
                >
                  {item.label}
                  <motion.span
                    variants={{ hover: { width: "100%" } }}
                    initial={{ width: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-zinc-800 to-zinc-700 dark:from-slate-200 dark:to-slate-400"
                  />
                </motion.a>
              </li>
            ))}
            <ThemeToggle />
          </ul>

          {/* Mobile: theme + hamburger */}
          <div className="flex md:hidden items-center gap-3 z-10">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Toggle menu"
              className="w-8 h-8 flex flex-col justify-center items-center gap-[5px]"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-6 h-[2px] bg-zinc-800 dark:bg-slate-200 rounded-full origin-center"
              />
              <motion.span
                animate={
                  menuOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.2 }}
                className="block w-6 h-[2px] bg-zinc-800 dark:bg-slate-200 rounded-full"
              />
              <motion.span
                animate={
                  menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.25 }}
                className="block w-6 h-[2px] bg-zinc-800 dark:bg-slate-200 rounded-full origin-center"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 dark:bg-black/40 md:hidden"
            />

            {/* Dropdown panel */}
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                fixed top-[65px] left-4 right-4 z-50 md:hidden
                rounded-2xl overflow-hidden
                bg-white/90 dark:bg-zinc-900/90
                backdrop-blur-xl
                border border-zinc-200/60 dark:border-zinc-700/60
                shadow-xl shadow-black/10
              "
            >
              <ul className="flex flex-col p-2">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="
                        block px-4 py-3 rounded-xl font-medium
                        text-zinc-700 dark:text-slate-300
                        hover:text-zinc-900 dark:hover:text-slate-100
                        hover:bg-zinc-100/70 dark:hover:bg-zinc-800/70
                        transition-colors
                      "
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

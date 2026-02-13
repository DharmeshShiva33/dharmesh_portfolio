"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      className="
      p-2 rounded-full
      bg-zinc-100 dark:bg-zinc-900
      text-zinc-700 dark:text-zinc-200
      transition-opacity duration-300

      opacity-80
      hover:opacity-100

      dark:opacity-100
      dark:hover:opacity-70
    "
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </motion.button>
  );
}

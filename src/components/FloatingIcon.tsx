"use client";

import { motion } from "framer-motion";

type FloatingIconProps = {
  icon: React.ReactNode;
  className: string;
  delay: number;
};

export default function FloatingIcon({
  icon,
  className,
  delay,
}: FloatingIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, -18, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`
        absolute
        pointer-events-none
        text-zinc-400/70 dark:text-zinc-500/60
        ${className}
      `}
    >
      {icon}
    </motion.div>
  );
}

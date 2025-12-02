"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none" | "zoom";
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  distance = 50,
  once = true,
  className = ""
}: ScrollRevealProps) {

  const directions = {
    up: { y: distance, x: 0, scale: 1 },
    down: { y: -distance, x: 0, scale: 1 },
    left: { x: distance, y: 0, scale: 1 },
    right: { x: -distance, y: 0, scale: 1 },
    zoom: { y: 0, x: 0, scale: 0.8 },
    none: { y: 0, x: 0, scale: 1 }
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...directions[direction]
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
      }}
      viewport={{ once: once, margin: "-80px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1] // easeOutExpo
      }}
    >
      {children}
    </motion.div>
  );
}

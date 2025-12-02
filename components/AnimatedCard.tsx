"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedCard({
  children,
  delay = 0,
  className = ""
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className={className}
    >
      <motion.div
        whileHover={{
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

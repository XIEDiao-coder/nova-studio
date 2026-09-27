"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
export default function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  // 服务端内容保持可见，动效不影响无 JS 阅读。
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduced ? undefined : { y: [16, 0] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

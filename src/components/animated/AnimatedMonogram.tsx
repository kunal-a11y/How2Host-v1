import { motion } from "framer-motion";

export function AnimatedMonogram({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 36 36"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Outer rounded plate */}
      <motion.rect
        x="1.5"
        y="1.5"
        width="33"
        height="33"
        rx="8"
        stroke="#111111"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      {/* Precision H stem left */}
      <motion.path
        d="M10 11V25"
        stroke="#111111"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
      {/* Crossbar */}
      <motion.path
        d="M10 18H18"
        stroke="#111111"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      />
      {/* Precision H stem right */}
      <motion.path
        d="M18 11V25"
        stroke="#111111"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
      {/* Clean 2 / H glyph progression */}
      <motion.path
        d="M22 13C22 11.5 24 11 25.5 12C27 13 24 16.5 22 18.5H27"
        stroke="#111111"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      />
      {/* Minimal status indicator dot */}
      <motion.circle
        cx="25.5"
        cy="24"
        r="1.5"
        fill="#111111"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1.1 }}
      />
    </motion.svg>
  );
}

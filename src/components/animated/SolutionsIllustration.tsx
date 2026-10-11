import { motion } from "framer-motion";

export function SolutionsIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 460 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="230" cy="254" rx="150" ry="12" fill="#EAEAEA" />

      {/* 1. Main Application Dashboard Panel */}
      <motion.rect
        x="90"
        y="42"
        width="280"
        height="170"
        rx="10"
        fill="#FFFFFF"
        stroke="#111111"
        strokeWidth="2.5"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
      <rect x="90" y="42" width="280" height="26" fill="#F7F7F5" />
      <circle cx="106" cy="55" r="3.5" fill="#D1D5DB" />
      <circle cx="117" cy="55" r="3.5" fill="#E5E7EB" />
      <rect x="135" y="49" width="100" height="11" rx="5" fill="#EAEAEA" />

      {/* Sidebar Nav Panels */}
      <rect x="90" y="68" width="56" height="144" fill="#FAFAFA" />
      <rect x="102" y="80" width="32" height="6" rx="2" fill="#111111" />
      <rect x="102" y="94" width="26" height="5" rx="2" fill="#D1D5DB" />
      <rect x="102" y="106" width="28" height="5" rx="2" fill="#D1D5DB" />
      <rect x="102" y="118" width="24" height="5" rx="2" fill="#D1D5DB" />

      {/* 2. Rising Data Visualization Analytics Bars */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <rect x="162" y="80" width="90" height="44" rx="5" fill="#111111" />
        <rect x="172" y="88" width="36" height="5" rx="2" fill="#A3A3A3" />
        <rect x="172" y="98" width="55" height="10" rx="2" fill="#FFFFFF" />

        {/* Rising bars inside mini-chart */}
        <motion.rect
          x="264"
          y="106"
          width="12"
          height="18"
          rx="2"
          fill="#D1D5DB"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ transformOrigin: "264px 124px" }}
        />
        <motion.rect
          x="282"
          y="94"
          width="12"
          height="30"
          rx="2"
          fill="#9CA3AF"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{ transformOrigin: "282px 124px" }}
        />
        <motion.rect
          x="300"
          y="82"
          width="12"
          height="42"
          rx="2"
          fill="#111111"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ transformOrigin: "300px 124px" }}
        />
      </motion.g>

      {/* 3. Workflow Paths from Node to Node */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <rect x="162" y="136" width="194" height="62" rx="6" fill="#F7F7F5" stroke="#E6E6E6" strokeWidth="1.5" />
        {/* Node 1 */}
        <circle cx="188" cy="167" r="10" fill="#111111" />
        <rect x="184" y="163" width="8" height="8" rx="2" fill="#FFFFFF" />

        {/* Connecting Animated Path */}
        <motion.path
          d="M198 167H248"
          stroke="#111111"
          strokeWidth="2"
          strokeDasharray="3 3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.1 }}
        />

        {/* Node 2 */}
        <circle cx="258" cy="167" r="10" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
        <circle cx="258" cy="167" r="4" fill="#111111" />

        {/* Connecting Animated Path */}
        <motion.path
          d="M268 167H318"
          stroke="#111111"
          strokeWidth="2"
          strokeDasharray="3 3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.3 }}
        />

        {/* Node 3 */}
        <circle cx="328" cy="167" r="10" fill="#111111" />
        <path d="M324 167L327 170L333 164" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
    </svg>
  );
}

import { motion } from "framer-motion";

export function FounderWorkstationIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 460 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="230" cy="254" rx="160" ry="12" fill="#EAEAEA" />

      {/* Desk Base */}
      <motion.rect
        x="60"
        y="210"
        width="340"
        height="12"
        rx="3"
        fill="#111111"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
      {/* Desk Legs */}
      <rect x="80" y="222" width="10" height="30" rx="2" fill="#27272A" />
      <rect x="370" y="222" width="10" height="30" rx="2" fill="#27272A" />

      {/* Central High-Resolution Monitor Frame */}
      <motion.rect
        x="130"
        y="50"
        width="200"
        height="130"
        rx="8"
        fill="#FFFFFF"
        stroke="#111111"
        strokeWidth="2.5"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      {/* Monitor Stand */}
      <rect x="222" y="180" width="16" height="30" fill="#27272A" />
      <rect x="200" y="206" width="60" height="4" rx="2" fill="#111111" />

      {/* Code Editor and Architecture Schematics on Screen */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <rect x="138" y="58" width="184" height="114" rx="4" fill="#0D0D12" />
        {/* Code window tab bar */}
        <rect x="138" y="58" width="184" height="16" fill="#181820" />
        <circle cx="148" cy="66" r="2.5" fill="#52525B" />
        <circle cx="156" cy="66" r="2.5" fill="#52525B" />
        <circle cx="164" cy="66" r="2.5" fill="#52525B" />

        {/* Code lines */}
        <rect x="150" y="82" width="60" height="4" rx="1.5" fill="#FFFFFF" />
        <rect x="160" y="92" width="90" height="4" rx="1.5" fill="#9CA3AF" />
        <rect x="160" y="102" width="75" height="4" rx="1.5" fill="#D1D5DB" />
        <rect x="170" y="112" width="110" height="4" rx="1.5" fill="#FFFFFF" />
        <rect x="160" y="122" width="65" height="4" rx="1.5" fill="#9CA3AF" />
        <rect x="150" y="132" width="40" height="4" rx="1.5" fill="#FFFFFF" />
      </motion.g>

      {/* Floating Precision Technology Monogram Accent */}
      <motion.g
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <circle cx="360" cy="90" r="24" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
        <text x="348" y="95" fill="#111111" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
          H2H
        </text>
      </motion.g>

      {/* Architect's Notebook & Coffee Companion */}
      <rect x="90" y="196" width="30" height="14" rx="2" fill="#F7F7F5" stroke="#E6E6E6" strokeWidth="1" />
      <circle cx="340" cy="203" r="7" fill="#E5E7EB" stroke="#111111" strokeWidth="1.5" />
    </svg>
  );
}

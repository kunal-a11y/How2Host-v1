import { motion } from "framer-motion";

export function HostingIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 460 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="230" cy="254" rx="140" ry="12" fill="#EAEAEA" />

      {/* 1. Server Rack Cabinet Outline - Draws in */}
      <motion.rect
        x="150"
        y="34"
        width="160"
        height="195"
        rx="10"
        fill="#111111"
        stroke="#27272A"
        strokeWidth="2.5"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
      <rect x="158" y="42" width="144" height="179" rx="6" fill="#18181B" />

      {/* 2. Server Units (4 Racks) Illuminating in Sequence */}
      {[0, 1, 2, 3].map((idx) => (
        <motion.g
          key={idx}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + idx * 0.15 }}
        >
          <rect
            x="166"
            y={52 + idx * 40}
            width="128"
            height="32"
            rx="4"
            fill="#27272A"
            stroke="#3F3F46"
            strokeWidth="1"
          />

          {/* Activity Status LEDs */}
          <motion.circle
            cx="178"
            cy={68 + idx * 40}
            r="3"
            fill="#FFFFFF"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: idx * 0.3,
            }}
          />
          <circle cx="188" cy={68 + idx * 40} r="3" fill="#71717A" />
          <circle cx="198" cy={68 + idx * 40} r="3" fill="#71717A" />

          {/* Drive Bay / Architecture lines */}
          <rect x="214" y={64 + idx * 40} width="68" height="8" rx="2" fill="#18181B" />
        </motion.g>
      ))}

      {/* 3. Data Packets Travelling along animated Network Paths */}
      <motion.path
        d="M80 135H150"
        stroke="#71717A"
        strokeWidth="2"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
      <motion.circle
        cx="80"
        cy="135"
        r="4"
        fill="#FFFFFF"
        animate={{ cx: [80, 150] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
      />

      <motion.path
        d="M310 135H380"
        stroke="#71717A"
        strokeWidth="2"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
      <motion.circle
        cx="310"
        cy="135"
        r="4"
        fill="#FFFFFF"
        animate={{ cx: [310, 380] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
      />

      {/* 4. Left Node (Cloud / Deployment Pipeline Stage) */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <circle cx="65" cy="135" r="18" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
        <path d="M57 135H73M65 127V143" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
      </motion.g>

      {/* 5. Right Node (Edge CDN Routing Gateway) */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <circle cx="395" cy="135" r="18" fill="#111111" />
        <circle cx="395" cy="135" r="10" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="395" cy="135" r="3" fill="#FFFFFF" />
      </motion.g>

      {/* Server Base Feet */}
      <rect x="168" y="229" width="18" height="7" rx="2" fill="#111111" />
      <rect x="274" y="229" width="18" height="7" rx="2" fill="#111111" />
    </svg>
  );
}

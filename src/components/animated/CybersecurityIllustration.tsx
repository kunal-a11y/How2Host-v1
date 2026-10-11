import { motion } from "framer-motion";

export function CybersecurityIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 460 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="230" cy="254" rx="150" ry="12" fill="#EAEAEA" />

      {/* 1. Shield Outline - Draws Itself */}
      <motion.path
        d="M230 38L304 66V132C304 182 272 218 230 232C188 218 156 182 156 132V66L230 38Z"
        fill="#FFFFFF"
        stroke="#111111"
        strokeWidth="2.5"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />

      {/* Inner Chamber */}
      <motion.path
        d="M230 54L288 76V130C288 168 262 198 230 210C198 198 172 168 172 130V76L230 54Z"
        fill="#111111"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />

      {/* 2. Security Lock Icon - Outlines to Solid Completed Transition */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <path
          d="M218 116V104C218 97.4 223.4 92 230 92C236.6 92 242 97.4 242 104V116"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <rect x="210" y="116" width="40" height="30" rx="6" fill="#FFFFFF" />
        <circle cx="230" cy="128" r="3.5" fill="#111111" />
        <rect x="228.5" y="128" width="3" height="10" rx="1.5" fill="#111111" />
      </motion.g>

      {/* 3. Horizontal Security Scanning Beam across shield */}
      <motion.line
        x1="180"
        y1="90"
        x2="280"
        y2="90"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeDasharray="4 4"
        initial={{ y1: 75, y2: 75, opacity: 0 }}
        animate={{
          y1: [75, 185, 75],
          y2: [75, 185, 75],
          opacity: [0.3, 0.9, 0.3],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 4. Left Side Node Network Diagram - Connecting Paths */}
      <g>
        <motion.circle
          cx="80"
          cy="90"
          r="7"
          fill="#FFFFFF"
          stroke="#111111"
          strokeWidth="2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        />
        <motion.circle
          cx="60"
          cy="150"
          r="7"
          fill="#111111"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.7 }}
        />
        <motion.circle
          cx="100"
          cy="190"
          r="7"
          fill="#FFFFFF"
          stroke="#111111"
          strokeWidth="2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.8 }}
        />
        {/* Connecting Paths */}
        <motion.path
          d="M80 90L60 150L100 190L160 150"
          stroke="#9CA3AF"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.9 }}
        />
      </g>

      {/* 5. Right Side - Assembled Security Report Document */}
      <motion.g
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 1.0 }}
      >
        <rect
          x="330"
          y="70"
          width="75"
          height="105"
          rx="6"
          fill="#FFFFFF"
          stroke="#111111"
          strokeWidth="2"
          style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.06))" }}
        />
        {/* Document lines assembling */}
        <line x1="344" y1="88" x2="385" y2="88" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
        <line x1="344" y1="102" x2="392" y2="102" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
        <line x1="344" y1="114" x2="390" y2="114" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
        <line x1="344" y1="126" x2="375" y2="126" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
        {/* Verified Validation Badge */}
        <circle cx="380" cy="150" r="9" fill="#111111" />
        <path d="M376 150L379 153L385 147" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
    </svg>
  );
}

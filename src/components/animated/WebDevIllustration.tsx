import { motion } from "framer-motion";

export function WebDevIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 460 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Studio Floor Shadow */}
      <ellipse cx="230" cy="254" rx="170" ry="14" fill="#EAEAEA" />

      {/* 1. Main Laptop Outer Body - Draw in */}
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

      {/* Screen Inner Bezel */}
      <motion.rect
        x="100"
        y="52"
        width="260"
        height="150"
        rx="5"
        fill="#FFFFFF"
        stroke="#E6E6E6"
        strokeWidth="1.5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />

      {/* Browser Chrome Nav Bar */}
      <motion.g
        initial={{ opacity: 0, y: -4 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <rect x="100" y="52" width="260" height="22" fill="#F7F7F5" />
        <circle cx="114" cy="63" r="3" fill="#D1D5DB" />
        <circle cx="124" cy="63" r="3" fill="#E5E7EB" />
        <circle cx="134" cy="63" r="3" fill="#E5E7EB" />
        <rect x="152" y="58" width="120" height="10" rx="5" fill="#EAEAEA" />
      </motion.g>

      {/* Website Header Block */}
      <motion.rect
        x="116"
        y="88"
        width="95"
        height="12"
        rx="3"
        fill="#111111"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        style={{ transformOrigin: "116px 88px" }}
      />
      <motion.rect
        x="116"
        y="106"
        width="115"
        height="6"
        rx="2"
        fill="#9CA3AF"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.8 }}
      />
      <motion.rect
        x="116"
        y="118"
        width="80"
        height="6"
        rx="2"
        fill="#D1D5DB"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.9 }}
      />

      {/* Interactive CTA Button */}
      <motion.rect
        x="116"
        y="136"
        width="48"
        height="16"
        rx="4"
        fill="#111111"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.0 }}
      />

      {/* Code Syntax Bracket Glyphs inside Screen */}
      <motion.text
        x="172"
        y="148"
        fill="#9CA3AF"
        fontSize="12"
        fontFamily="monospace"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        &lt;/&gt;
      </motion.text>

      {/* 2. Floating Mobile Device Preview Outline */}
      <motion.g
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        <rect
          x="300"
          y="80"
          width="54"
          height="100"
          rx="8"
          fill="#FFFFFF"
          stroke="#111111"
          strokeWidth="2"
          style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.06))" }}
        />
        <rect x="306" y="86" width="42" height="78" rx="4" fill="#F7F7F5" />
        <rect x="312" y="94" width="30" height="6" rx="2" fill="#111111" />
        <rect x="312" y="104" width="24" height="4" rx="2" fill="#9CA3AF" />
        <rect x="312" y="112" width="28" height="18" rx="3" fill="#E5E7EB" />
        <circle cx="327" cy="172" r="3" fill="#D1D5DB" />
      </motion.g>

      {/* 3. Smooth Moving Cursor Arrow pointing at CTA */}
      <motion.g
        initial={{ x: 200, y: 200, opacity: 0 }}
        whileInView={{ x: 146, y: 144, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
      >
        <polygon points="0,0 4,14 8,10 14,14 16,11 10,7 14,4" fill="#111111" />
      </motion.g>

      {/* Laptop Base Stand */}
      <motion.path
        d="M50 212C50 212 75 212 95 212L105 215H355L365 212C385 212 410 212 410 212C418 212 422 216 420 224L408 232H52L40 224C38 216 42 212 50 212Z"
        fill="#18181B"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      />
      <rect x="205" y="215" width="50" height="4" rx="2" fill="#52525B" />
    </svg>
  );
}

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

/**
 * FeatureOrbit — one cohesive, self-animating SVG scene:
 * seven service chips sit evenly on an orbit around a detailed "your future
 * website" blueprint. Dashed rings rotate (SMIL), data dashes flow along the
 * spokes (CSS), LEDs blink, chips float, and traveler dots ride the orbit.
 * Everything runs automatically; reduced-motion renders a static composition.
 */

const R = 150; // orbit radius

const features = [
  { label: "DOMAIN", angle: -90, icon: "globe" },
  { label: "HOSTING", angle: -38.6, icon: "server" },
  { label: "SECURITY", angle: 12.9, icon: "shield" },
  { label: "MAINTENANCE", angle: 64.3, icon: "wrench" },
  { label: "SUPPORT", angle: 115.7, icon: "chat" },
  { label: "DEVELOPMENT", angle: 167.1, icon: "code" },
  { label: "DESIGN", angle: 218.6, icon: "pen" },
] as const;

const pos = (angle: number, radius = R) => {
  const a = (angle * Math.PI) / 180;
  return { x: 340 + Math.cos(a) * radius, y: 330 + Math.sin(a) * radius };
};

function ChipIcon({ name, x, y }: { name: string; x: number; y: number }) {
  const s = { stroke: "#45c8aa", strokeWidth: 1.4, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "globe":
      return (
        <g transform={`translate(${x - 6} ${y - 6})`} {...{}}>
          <circle cx="6" cy="6" r="5.2" {...s} />
          <path d="M0.8 6h10.4M6 0.8c1.7 1.6 2.6 3.4 2.6 5.2S7.7 9.6 6 11.2 3.4 8 3.4 6 4.3 2.4 6 0.8z" stroke="#45c8aa" strokeWidth="1.1" fill="none" />
        </g>
      );
    case "server":
      return (
        <g transform={`translate(${x - 6} ${y - 6})`} {...{}}>
          <rect x="0.8" y="1.5" width="10.4" height="3.8" rx="1.2" {...s} />
          <rect x="0.8" y="7.7" width="10.4" height="3.8" rx="1.2" {...s} />
          <path d="M3 3.4h.01M3 9.6h.01" stroke="#45c8aa" strokeWidth="1.7" strokeLinecap="round" />
        </g>
      );
    case "shield":
      return (
        <g transform={`translate(${x - 6} ${y - 6})`} {...{}}>
          <path d="M6 0.7 11 2.5v3.6c0 3-2 5.2-5 6.2-3-1-5-3.2-5-6.2V2.5L6 0.7z" {...s} />
          <path d="m4.2 6 1.4 1.4L8.4 4.6" stroke="#45c8aa" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      );
    case "wrench":
      return (
        <g transform={`translate(${x - 6} ${y - 6})`} {...{}}>
          <path d="M9.8 2a3.4 3.4 0 0 0-4.4 4.4L1.6 10.2a1.4 1.4 0 0 0 0 2l.2.2a1.4 1.4 0 0 0 2 0l3.8-3.8A3.4 3.4 0 0 0 12 4.2l-2.2 2.2-1.6-1.6L10.4 2.6A3.4 3.4 0 0 0 9.8 2z" {...s} />
        </g>
      );
    case "chat":
      return (
        <g transform={`translate(${x - 6} ${y - 6})`} {...{}}>
          <path d="M11 5.4a4.8 4.8 0 0 1-4.8 4.8H4l-2.6 1.6.5-2.7a4.8 4.8 0 1 1 9.1-3.7z" {...s} />
          <path d="M4.4 5.6h4.8M4.4 7.4h3" stroke="#45c8aa" strokeWidth="1.1" strokeLinecap="round" fill="none" />
        </g>
      );
    case "code":
      return (
        <g transform={`translate(${x - 6} ${y - 6})`} {...{}}>
          <path d="m4 3.4-3 2.8 3 2.8M8 3.4l3 2.8-3 2.8" {...s} />
        </g>
      );
    default:
      return (
        <g transform={`translate(${x - 6} ${y - 6})`} {...{}}>
          <path d="M2 10.6 3 7.2l5.6-5.6a1.3 1.3 0 0 1 1.9 0l.7.7a1.3 1.3 0 0 1 0 1.9L5.6 9.8l-3.6.8z" {...s} />
        </g>
      );
  }
}

export function FeatureHighlight() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/[0.07] blur-[140px]"
      />

      <div className="container-site">
        <Reveal from="down">
          <h2 className="text-balance text-center text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl">
            One Monthly Plan.
            <br />
            <span className="text-gradient">Everything Managed.</span>
          </h2>
        </Reveal>

        <Reveal from="scale" amount={0.3}>
          <div className="relative mx-auto mt-10 max-w-3xl sm:mt-14">
            <svg viewBox="0 0 680 660" fill="none" className="h-auto w-full" role="img" aria-label="Diagram of everything included in one How2Host plan, orbiting your future website">
              <defs>
                <radialGradient id="fo-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#45c8aa" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#45c8aa" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="fo-site" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#14141c" />
                  <stop offset="100%" stopColor="#0c0c11" />
                </linearGradient>
              </defs>

              {/* center glow */}
              <circle cx="340" cy="330" r="200" fill="url(#fo-glow)" />

              {/* orbits */}
              <circle cx="340" cy="330" r={R} stroke="rgba(255,255,255,0.10)" strokeWidth="1.2" />
              <circle cx="340" cy="330" r={R - 34} stroke="rgba(255,255,255,0.06)" strokeDasharray="3 7" />
              <circle cx="340" cy="330" r={R + 44} stroke="rgba(255,255,255,0.05)" strokeDasharray="2 9" />
              {!reduce && (
                <g>
                  <animateTransform attributeName="transform" type="rotate" from="0 340 330" to="360 340 330" dur="46s" repeatCount="indefinite" />
                  <circle cx="340" cy="330" r={R + 44} stroke="rgba(69,200,170,0.28)" strokeWidth="1.2" strokeDasharray="40 260" strokeLinecap="round" />
                </g>
              )}
              {!reduce && (
                <g>
                  <animateTransform attributeName="transform" type="rotate" from="360 340 330" to="0 340 330" dur="34s" repeatCount="indefinite" />
                  <circle cx="340" cy="330" r={R - 34} stroke="rgba(69,200,170,0.30)" strokeWidth="1.2" strokeDasharray="26 180" strokeLinecap="round" />
                </g>
              )}

              {/* traveler dots riding the main orbit */}
              {!reduce &&
                [0, 1, 2].map((i) => (
                  <g key={i}>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from={`${i * 120} 340 330`}
                      to={`${i * 120 + 360} 340 330`}
                      dur="26s"
                      repeatCount="indefinite"
                    />
                    <circle cx="340" cy={330 - R} r="3.2" fill="#7adcc4" />
                  </g>
                ))}

              {/* spokes from chips to center */}
              {features.map((f) => {
                const p = pos(f.angle, R - 52);
                return (
                  <motion.path
                    key={f.label}
                    d={`M${pos(f.angle, R - 24).x} ${pos(f.angle, R - 24).y} L${p.x} ${p.y}`}
                    stroke="rgba(69,200,170,0.45)"
                    strokeWidth="1.4"
                    strokeDasharray="3 9"
                    strokeLinecap="round"
                    className={reduce ? "" : "animate-dash-flow"}
                    style={{ animationDuration: "3.2s", animationDelay: `${(f.angle + 90) * 0.012}s` }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                );
              })}

              {/* ------------------ central website blueprint ------------------ */}
              <motion.g
                initial={{ opacity: 0, y: 30, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, ease: [0.22, 0.61, 0.28, 0.99] }}
                style={{ transformOrigin: "340px 330px" }}
              >
                <rect x="244" y="248" width="192" height="168" rx="14" fill="url(#fo-site)" stroke="rgba(255,255,255,0.14)" strokeWidth="1.4" />
                <path d="M244 274h192" stroke="rgba(255,255,255,0.10)" />
                <circle cx="260" cy="261" r="3.2" fill="#ff5f57" opacity="0.9" />
                <circle cx="272" cy="261" r="3.2" fill="#febc2e" opacity="0.9" />
                <circle cx="284" cy="261" r="3.2" fill="#28c840" opacity="0.9" />
                <rect x="298" y="256" width="118" height="10" rx="5" fill="rgba(255,255,255,0.07)" />
                <circle cx="306" cy="261" r="2.2" fill="#45c8aa" className={reduce ? "" : "animate-led"} />

                {/* headline blocks */}
                <rect x="262" y="294" width="90" height="10" rx="5" fill="rgba(255,255,255,0.75)" />
                <rect x="262" y="310" width="58" height="10" rx="5" fill="rgba(255,255,255,0.4)" />
                {/* text lines */}
                <rect x="262" y="332" width="108" height="4.5" rx="2.25" fill="rgba(255,255,255,0.16)" />
                <rect x="262" y="343" width="88" height="4.5" rx="2.25" fill="rgba(255,255,255,0.11)" />
                {/* buttons */}
                <rect x="262" y="360" width="60" height="18" rx="9" fill="#45c8aa" opacity="0.9" />
                <rect x="330" y="360" width="46" height="18" rx="9" stroke="rgba(255,255,255,0.25)" />
                {/* right image panel */}
                <rect x="386" y="294" width="38" height="84" rx="7" stroke="rgba(255,255,255,0.14)" fill="rgba(69,200,170,0.06)" />
                <path d="M390 366l10-12 7 8 6-7 8 11" stroke="rgba(122,220,196,0.6)" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="413" cy="306" r="3" stroke="rgba(122,220,196,0.6)" strokeWidth="1.2" fill="none" />
                {/* footer strip */}
                <path d="M262 390h150" stroke="rgba(255,255,255,0.07)" />
                <rect x="262" y="396" width="34" height="4.5" rx="2.25" fill="rgba(255,255,255,0.12)" />
                <rect x="304" y="396" width="34" height="4.5" rx="2.25" fill="rgba(255,255,255,0.12)" />
                {/* status LEDs under the card */}
                {[0, 1, 2].map((i) => (
                  <circle key={i} cx={327 + i * 13} cy="428" r="2.6" fill="#45c8aa" className={reduce ? "" : "animate-led"} style={{ animationDelay: `${i * 0.4}s` }} />
                ))}
              </motion.g>

              {/* ------------------------- orbit chips ------------------------- */}
              {features.map((f, i) => {
                const p = pos(f.angle);
                // adaptive width so every label fits its pill
                const w = Math.max(116, 66 + f.label.length * 8);
                return (
                  <motion.g
                    key={f.label}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.55, delay: 0.2 + i * 0.09, ease: [0.22, 0.61, 0.28, 0.99] }}
                    style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                  >
                    <g style={reduce ? undefined : { animation: `floaty ${6.5 + (i % 3)}s ease-in-out ${i * 0.55}s infinite` }}>
                      {/* chip body */}
                      <rect
                        x={p.x - w / 2}
                        y={p.y - 17}
                        width={w}
                        height="34"
                        rx="17"
                        fill="#0d0d13"
                        stroke="rgba(255,255,255,0.16)"
                        strokeWidth="1.2"
                      />
                      <rect x={p.x - w / 2} y={p.y - 17} width={w} height="34" rx="17" fill="url(#fo-glow)" opacity="0.35" />
                      <ChipIcon name={f.icon} x={p.x - w / 2 + 22} y={p.y} />
                      <text x={p.x - w / 2 + 38} y={p.y + 4} fill="#e6e6ee" fontSize="10.5" fontWeight="600" letterSpacing="1.4" fontFamily="inherit">
                        {f.label}
                      </text>
                      {/* connector nub toward center */}
                      <circle cx={pos(f.angle, R - 24).x} cy={pos(f.angle, R - 24).y} r="2.2" fill="#45c8aa" opacity="0.9" />
                    </g>
                  </motion.g>
                );
              })}
            </svg>

            {/* mobile chip list (keeps semantics + a11y on small screens) */}
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2.5 lg:hidden">
              {features.map((f, i) => (
                <motion.span
                  key={f.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold tracking-[0.18em] text-mist-200"
                >
                  {f.label}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { motion, useReducedMotion } from "framer-motion";
import { Reveal, Section, SectionHeading } from "./Reveal";

const youItems = ["Business", "Customers", "Growth", "Ideas"];
const usItems = ["Website", "Hosting", "Security", "Maintenance", "Performance"];

/**
 * PipelineVisual — a continuously self-animating SVG scene:
 * scattered technical chaos (DNS, SSL, CDN…) flows along dashed paths into
 * the How2Host core, which streams out as a clean finished website card.
 * All motion is CSS/framer-driven and runs automatically (no hover needed),
 * with gentle idle drift; reduced-motion disables the loops.
 */
function PipelineVisual() {
  const reduce = useReducedMotion();

  const chaos = [
    { label: "DNS", x: 40, y: 34 },
    { label: "SSL", x: 30, y: 96 },
    { label: "CDN", x: 46, y: 158 },
    { label: "PHP", x: 26, y: 208 },
    { label: "DB", x: 52, y: 258 },
    { label: "SSH", x: 28, y: 300 },
  ];

  // paths from each chaos chip into the core
  const feeds = [
    "M118 42 C 190 42, 230 130, 296 168",
    "M108 104 C 190 104, 230 140, 296 168",
    "M124 166 C 190 166, 230 158, 296 168",
    "M104 216 C 190 216, 230 178, 296 168",
    "M130 266 C 190 266, 230 198, 296 168",
    "M106 308 C 190 308, 230 188, 296 168",
  ];

  return (
    <div className="relative mx-auto w-full max-w-xl" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-72 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/12 blur-[110px]" />

      <svg viewBox="0 0 640 380" fill="none" className="h-auto w-full">
        <defs>
          <linearGradient id="coreGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2ba88e" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#2ba88e" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#45c8aa" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#45c8aa" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* faint grid backdrop */}
        {Array.from({ length: 9 }).map((_, i) => (
          <path key={`h${i}`} d={`M0 ${40 + i * 38}H640`} stroke="rgba(255,255,255,0.035)" />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <path key={`v${i}`} d={`M${40 + i * 56} 0V380`} stroke="rgba(255,255,255,0.035)" />
        ))}

        {/* feed paths — dashed accent, continuously flowing */}
        {feeds.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            stroke="#45c8aa"
            strokeOpacity={0.5}
            strokeWidth="1.5"
            strokeDasharray="3 10"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, delay: 0.15 + i * 0.1 }}
          />
        ))}
        {!reduce &&
          feeds.map((d, i) => (
            <path
              key={`flow-${i}`}
              d={d}
              stroke="#7adcc4"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="0.1 42"
              className="animate-dash-flow"
              style={{ animationDelay: `${i * 0.4}s`, animationDuration: "2.4s" }}
            />
          ))}

        {/* chaos chips */}
        {chaos.map((c, i) => (
          <motion.g
            key={c.label}
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            style={reduce ? undefined : { animation: `floaty ${7 + (i % 3)}s ease-in-out ${i * 0.7}s infinite` }}
          >
            <rect x={c.x} y={c.y} width="66" height="28" rx="9" fill="#101016" stroke="rgba(255,255,255,0.16)" />
            <circle cx={c.x + 13} cy={c.y + 14} r="2.6" fill="#45c8aa" opacity="0.85" className={reduce ? "" : "animate-led"} style={{ animationDelay: `${i * 0.3}s` }} />
            <text x={c.x + 26} y={c.y + 18.5} fill="rgba(255,255,255,0.6)" fontSize="12" fontWeight="500" fontFamily="inherit">
              {c.label}
            </text>
          </motion.g>
        ))}

        {/* How2Host core — hexagonal processor */}
        <g transform="translate(370 190)">
          <circle r="86" fill="url(#coreGlow)" />
          <motion.g
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.28, 0.99] }}
            style={{ transformOrigin: "0px 0px" }}
          >
            {/* rotating outer ring */}
            <g className={reduce ? "" : "animate-spin-slow"} style={{ transformOrigin: "0px 0px" }}>
              <path
                d="M0 -64 55 -32 55 32 0 64 -55 32 -55 -32Z"
                stroke="#45c8aa"
                strokeOpacity="0.55"
                strokeWidth="1.5"
                fill="url(#coreGrad)"
              />
              {Array.from({ length: 6 }).map((_, i) => (
                <circle
                  key={i}
                  cx={0}
                  cy={-64}
                  r="3.4"
                  fill="#45c8aa"
                  transform={`rotate(${i * 60})`}
                />
              ))}
            </g>
            {/* counter-rotating inner detail */}
            <g className={reduce ? "" : "animate-spin-slow"} style={{ transformOrigin: "0px 0px", animationDirection: "reverse", animationDuration: "20s" }}>
              <circle r="44" stroke="rgba(255,255,255,0.18)" strokeDasharray="4 8" fill="none" />
            </g>
            <circle r="30" stroke="rgba(255,255,255,0.3)" fill="#0d0d13" />
            <text textAnchor="middle" y="-2" fill="#ffffff" fontSize="13.5" fontWeight="700" fontFamily="inherit">
              How2
            </text>
            <text textAnchor="middle" y="14" fill="#45c8aa" fontSize="13.5" fontWeight="700" fontFamily="inherit">
              Host
            </text>
          </motion.g>
          {/* pulsing halo */}
          {!reduce && <circle r="86" stroke="#45c8aa" strokeOpacity="0.25" fill="none" className="animate-pulse-glow" style={{ borderRadius: "50%" }} />}
        </g>

        {/* output stream into the finished site */}
        <motion.path
          d="M470 188 C 500 184, 498 136, 486 106"
          stroke="#45c8aa"
          strokeOpacity="0.6"
          strokeWidth="1.5"
          strokeDasharray="3 9"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.9 }}
        />
        {!reduce && (
          <path
            d="M470 188 C 500 184, 498 136, 486 106"
            stroke="#7adcc4"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="0.1 36"
            className="animate-dash-flow"
            style={{ animationDuration: "2s" }}
          />
        )}

        {/* -------- the finished product: YOUR WEBSITE card (pure SVG) -------- */}
        <motion.g
          initial={{ opacity: 0, scale: 0.85, y: 18 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 1.15, ease: [0.22, 0.61, 0.28, 0.99] }}
          style={{ transformOrigin: "557px 100px" }}
        >
          {/* card + glow */}
          <circle cx="557" cy="100" r="86" fill="url(#coreGlow)" opacity="0.35" />
          <rect x="486" y="52" width="142" height="98" rx="10" fill="#0d0d13" stroke="rgba(255,255,255,0.16)" strokeWidth="1.3" />
          {/* chrome */}
          <path d="M486 72h142" stroke="rgba(255,255,255,0.10)" />
          <circle cx="498" cy="62" r="2.8" fill="#ff5f57" opacity="0.9" />
          <circle cx="508" cy="62" r="2.8" fill="#febc2e" opacity="0.9" />
          <circle cx="518" cy="62" r="2.8" fill="#28c840" opacity="0.9" />
          <rect x="530" y="57.5" width="88" height="9" rx="4.5" fill="rgba(255,255,255,0.07)" />
          <circle cx="536" cy="62" r="1.8" fill="#45c8aa" className={reduce ? "" : "animate-led"} />
          {/* mini hero */}
          <rect x="498" y="84" width="64" height="8" rx="4" fill="rgba(255,255,255,0.72)" />
          <rect x="498" y="97" width="42" height="8" rx="4" fill="rgba(255,255,255,0.4)" />
          <rect x="498" y="113" width="78" height="4" rx="2" fill="rgba(255,255,255,0.14)" />
          <rect x="498" y="121" width="60" height="4" rx="2" fill="rgba(255,255,255,0.10)" />
          <rect x="498" y="132" width="36" height="13" rx="6.5" fill="#45c8aa" opacity="0.92" />
          {/* image panel with landscape sketch */}
          <rect x="584" y="84" width="32" height="56" rx="6" stroke="rgba(255,255,255,0.14)" fill="rgba(69,200,170,0.06)" />
          <path d="M588 132l9-11 6 7 5-6 7 10" stroke="rgba(122,220,196,0.65)" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="608" cy="94" r="2.6" stroke="rgba(122,220,196,0.65)" strokeWidth="1.1" fill="none" />
          {/* footer strip (inside the card) */}
          <path d="M498 142h118" stroke="rgba(255,255,255,0.07)" />
          <rect x="498" y="145" width="24" height="3.5" rx="1.75" fill="rgba(255,255,255,0.12)" />
          {/* label under the card */}
          <text x="557" y="172" textAnchor="middle" fill="#7adcc4" fontSize="10.5" fontWeight="700" letterSpacing="2.6" fontFamily="inherit">
            YOUR WEBSITE
          </text>
        </motion.g>
      </svg>

      <p className="mt-1 text-center text-xs uppercase tracking-[0.22em] text-mist-400">
        One simple website. Fully managed.
      </p>
    </div>
  );
}

export function WhyHow2Host() {
  return (
    <Section className="overflow-hidden">
      <SectionHeading
        eyebrow="Why How2Host"
        title={
          <>
            More Than <span className="text-gradient">A Website.</span>
          </>
        }
        copy="You run the business. We run the website. Here's how the responsibilities split."
      />

      <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
        {/* comparison columns */}
        <div className="flex flex-col gap-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {/* YOU column */}
            <Reveal from="left" className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mist-400">You</p>
                <ul className="mt-4 flex flex-1 flex-col gap-2.5">
                  {youItems.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.45, delay: 0.08 * i }}
                      className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3.5 py-2.5 text-sm font-medium text-white/85"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/[0.06]">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <circle cx="6" cy="6" r="4.4" stroke="currentColor" strokeWidth="1.2" />
                        </svg>
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <p className="mt-5 text-[13px] leading-relaxed text-mist-400">
                  Stay focused on what actually grows your business.
                </p>
              </div>
            </Reveal>

            {/* HOW2HOST column */}
            <Reveal from="right" delay={0.1} className="h-full">
              <div className="relative flex h-full flex-col rounded-3xl border border-accent-400/25 bg-gradient-to-b from-accent-500/[0.08] to-white/[0.015] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-300">How2Host</p>
                <ul className="mt-4 flex flex-1 flex-col gap-2.5">
                  {usItems.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.45, delay: 0.08 * i }}
                      className="flex items-center gap-2.5 rounded-xl border border-accent-400/[0.14] bg-accent-500/[0.06] px-3.5 py-2.5 text-sm font-medium text-white"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-400/15 text-accent-300">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="m3 6.2 2 2 4-4.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <p className="text-lg font-medium leading-relaxed text-white/90">
              "You shouldn't have to become a developer to have a great website."
            </p>
          </Reveal>
        </div>

        {/* self-animating pipeline visual */}
        <Reveal from="scale" amount={0.3}>
          <PipelineVisual />
        </Reveal>
      </div>
    </Section>
  );
}

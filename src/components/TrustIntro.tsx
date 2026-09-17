import { motion, useReducedMotion } from "framer-motion";
import { Reveal, Section } from "./Reveal";
import { BrowserFrame } from "./mockups/BrowserFrame";
import { CafeSite } from "./mockups/SiteScenes";

const worries = [
  { label: "Hosting", icon: "server" },
  { label: "Domain", icon: "globe" },
  { label: "Security", icon: "shield" },
  { label: "Updates", icon: "refresh" },
  { label: "Maintenance", icon: "wrench" },
  { label: "Technical problems", icon: "alert" },
] as const;

function WorryIcon({ name }: { name: (typeof worries)[number]["icon"] }) {
  const p = { width: 15, height: 15, viewBox: "0 0 16 16", fill: "none", "aria-hidden": true } as const;
  switch (name) {
    case "server":
      return (
        <svg {...p}>
          <rect x="2" y="2.5" width="12" height="4.5" rx="1.4" stroke="currentColor" strokeWidth="1.3" />
          <rect x="2" y="9" width="12" height="4.5" rx="1.4" stroke="currentColor" strokeWidth="1.3" />
          <path d="M4.6 4.75h.01M4.6 11.25h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "globe":
      return (
        <svg {...p}>
          <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.3" />
          <path d="M1.8 8h12.4M8 1.8c1.8 1.7 2.8 3.9 2.8 6.2S9.8 12.5 8 14.2C6.2 12.5 5.2 10.3 5.2 8S6.2 3.5 8 1.8z" stroke="currentColor" strokeWidth="1.1" />
        </svg>
      );
    case "shield":
      return (
        <svg {...p}>
          <path d="M8 1.7 13.4 3.6v3.9c0 3.2-2.2 5.6-5.4 6.8-3.2-1.2-5.4-3.6-5.4-6.8V3.6L8 1.7z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
      );
    case "refresh":
      return (
        <svg {...p}>
          <path d="M13.5 8a5.5 5.5 0 1 1-1.6-3.9M13.5 1.8v3h-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...p}>
          <path
            d="M10.8 2.2a3.6 3.6 0 0 0-4.6 4.6L2.4 10.6a1.5 1.5 0 0 0 0 2.1l.9.9a1.5 1.5 0 0 0 2.1 0l3.8-3.8a3.6 3.6 0 0 0 4.6-4.6L11.5 7.5 8.5 4.5l2.3-2.3z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.3" />
          <path d="M8 4.8v3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M8 10.9h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
  }
}

/** Layered "website assembling itself" visual: three slabs converge into one site. */
function AssemblyVisual() {
  const reduce = useReducedMotion();

  const slab =
    "absolute inset-x-0 mx-auto rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] shadow-float";

  return (
    <div className="relative mx-auto w-full max-w-lg [perspective:1400px]" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/12 blur-[90px]" />

      <motion.div
        className="relative [transform-style:preserve-3d]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
      >
        {/* top slab — design layer */}
        <motion.div
          variants={{
            hidden: reduce ? { opacity: 0 } : { opacity: 0, y: -110, rotateX: 38, z: 90 },
            visible: { opacity: 1, y: -78, rotateX: 30, z: 90, transition: { duration: 0.9, ease: [0.22, 0.61, 0.28, 0.99] } },
          }}
          className={`${slab} h-24 w-[86%]`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex h-full flex-col justify-center gap-1.5 px-5">
            <div className="h-1.5 w-1/3 rounded-full bg-white/35" />
            <div className="h-1.5 w-2/3 rounded-full bg-white/15" />
          </div>
          <span className="absolute -top-2.5 left-4 rounded-full bg-ink-800 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-accent-300">
            Design
          </span>
        </motion.div>

        {/* middle — the real site */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60, scale: 0.94 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, delay: 0.15, ease: [0.22, 0.61, 0.28, 0.99] } },
          }}
        >
          <BrowserFrame url="https://www.yourbusiness.com" className="relative z-10 w-full">
            <CafeSite />
          </BrowserFrame>
        </motion.div>

        {/* bottom slab — infrastructure layer */}
        <motion.div
          variants={{
            hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 110, rotateX: -38, z: 90 },
            visible: { opacity: 1, y: 78, rotateX: -30, z: 90, transition: { duration: 0.9, delay: 0.28, ease: [0.22, 0.61, 0.28, 0.99] } },
          }}
          className={`${slab} h-24 w-[86%]`}
        >
          <div className="flex h-full items-center justify-between px-5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent-400 motion-safe:animate-pulse-glow" />
              <span className="text-[11px] font-medium tracking-wide text-mist-300">Hosting · SSL · CDN · Backups</span>
            </div>
            <div className="h-1.5 w-16 rounded-full bg-white/15" />
          </div>
          <span className="absolute -bottom-2.5 right-4 rounded-full bg-ink-800 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-accent-300">
            Managed Infra
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function TrustIntro() {
  return (
    <Section id="why" className="overflow-hidden">
      {/* soft section divider glow */}
      <div aria-hidden="true" className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 accent-line opacity-60" />

      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col items-start gap-7">
          <Reveal from="down">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-mist-300">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              The How2Host Way
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="text-balance text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl">
              From Idea To
              <br />
              <span className="text-gradient">Online Presence.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="max-w-md text-lg leading-relaxed text-mist-300">
              You focus on your business.{" "}
              <span className="text-white">We handle the website.</span>
            </p>
          </Reveal>

          <Reveal delay={0.2} className="w-full">
            <p className="mb-4 text-sm uppercase tracking-[0.18em] text-mist-400">
              You never have to worry about
            </p>
            <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {worries.map((w, i) => (
                <motion.li
                  key={w.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: 0.06 * i }}
                  className="glass flex items-center gap-2 rounded-xl px-3 py-2.5 text-[13px] text-mist-200"
                >
                  <span className="text-accent-300">
                    <WorryIcon name={w.icon} />
                  </span>
                  {w.label}
                </motion.li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.28}>
            <p className="max-w-md text-[15px] leading-relaxed text-mist-400">
              How2Host handles everything — from the first design sketch to hosting, security and maintenance. You
              get a finished website, not a list of technical tasks.
            </p>
          </Reveal>
        </div>

        <Reveal from="scale" amount={0.35}>
          <AssemblyVisual />
        </Reveal>
      </div>
    </Section>
  );
}

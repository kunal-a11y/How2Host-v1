import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GetStartedButton } from "./GetStartedButton";
import { BrowserFrame } from "./mockups/BrowserFrame";
import heroShot from "../assets/bakersway-hero.png";
import { Ambient3DLoader } from "./Ambient3DLoader";

const trust = ["Free Domain", "Free Hosting", "Security Included", "Maintenance Included"];

const indicators = [
  { label: "Free Domain", icon: "globe", pos: "-left-2 -top-4 sm:left-[2%] sm:top-[10%] lg:-left-10 lg:top-[16%]", hideOnMobile: false, delay: 0 },
  { label: "SSL Security", icon: "shield", pos: "-right-2 top-[38%] sm:right-[3%] sm:top-[22%] lg:-right-12 lg:top-[32%]", hideOnMobile: true, delay: 0.9 },
  { label: "Hosting", icon: "uptime", pos: "-left-2 bottom-[30%] sm:left-[4%] sm:bottom-[12%] lg:-left-6 lg:bottom-[10%]", hideOnMobile: true, delay: 1.7 },
  { label: "Maintenance", icon: "managed", pos: "-right-2 -bottom-5 sm:right-[4%] sm:bottom-[18%] lg:-right-8 lg:-bottom-8", hideOnMobile: false, delay: 2.4 },
] as const;

function IndicatorIcon({ name }: { name: (typeof indicators)[number]["icon"] }) {
  const common = { width: 14, height: 14, viewBox: "0 0 16 16", fill: "none", "aria-hidden": true } as const;
  if (name === "uptime")
    return (
      <svg {...common}>
        <rect x="1.8" y="3" width="12.4" height="4.4" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
        <rect x="1.8" y="9" width="12.4" height="4.4" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M4.2 5.2h.01M4.2 11.2h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  if (name === "shield")
    return (
      <svg {...common}>
        <path
          d="M8 1.7 13.4 3.6v3.9c0 3.2-2.2 5.6-5.4 6.8-3.2-1.2-5.4-3.6-5.4-6.8V3.6L8 1.7z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="m5.8 8 1.6 1.6L10.4 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (name === "globe")
    return (
      <svg {...common}>
        <circle cx="8" cy="8" r="6.3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M1.7 8h12.6M8 1.7c1.9 1.7 2.9 3.9 2.9 6.3s-1 4.6-2.9 6.3c-1.9-1.7-2.9-3.9-2.9-6.3s1-4.6 2.9-6.3z" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M2.5 8.5 6 12l7.5-7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StaggerLine({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 0.61, 0.28, 0.99] }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [mockW, setMockW] = useState<number | null>(null);

  // Shrink the mockup so the whole hero fits one screen on desktop.
  // The browser's 16/10.4 frame ≈ 0.65 × width tall (+ captions), so the
  // available height converts to a width via the 1.54 aspect factor.
  useEffect(() => {
    const calc = () => {
      if (window.innerWidth < 1024) {
        setMockW(null);
        return;
      }
      const copyH = copyRef.current?.offsetHeight ?? 320;
      // Size primarily by WIDTH (big, showroom-scale), with a soft height guard
      // that allows ~100px of scroll on short screens.
      const byWidth = Math.min(1080, window.innerWidth - 120);
      const byHeight = (window.innerHeight - copyH - 130) * 2.322 + 16;
      setMockW(Math.max(500, Math.min(byWidth, byHeight)));
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mockY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const mockRotate = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 4]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative overflow-hidden pb-6 pt-20 sm:pb-8 sm:pt-24 lg:pb-6 lg:pt-24">
      {/* ambient layers */}
      <div className="grid-veil absolute inset-0" aria-hidden="true" />
      <motion.div style={{ opacity: glowOpacity }} className="absolute inset-0" aria-hidden="true">
        <div className="hero-halo absolute left-1/2 top-[-18%] h-[560px] w-[860px] -translate-x-1/2 rounded-full" />
        <div className="absolute left-1/2 top-[8%] h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[130px]" />
      </motion.div>
      <Ambient3DLoader />

      <div className="container-site relative z-10">
        <div className="flex flex-col items-center gap-8 sm:gap-9 lg:gap-10">
          {/* ------------------------------ copy ------------------------------ */}
          <motion.div ref={copyRef} style={{ y: textY }} className="flex max-w-3xl flex-col items-center gap-3.5 text-center">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-mist-300 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </span>
              Your Business. Your Website. We Build It.
            </motion.div>

            <h1 className="text-balance text-[2.2rem] font-bold leading-[1.03] tracking-[-0.02em] sm:text-[2.7rem] lg:text-[3.3rem]">
              <StaggerLine text="Your Business Deserves" delay={0.12} />
              <StaggerLine text="A Website That Works." delay={0.24} className="text-gradient" />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="max-w-xl text-balance text-base leading-relaxed text-mist-300 sm:text-lg"
            >
              How2Host designs, develops, hosts and maintains professional websites for businesses — all in one
              simple monthly plan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.54 }}
              className="mt-1 flex flex-col items-center gap-3.5 sm:flex-row"
            >
              <GetStartedButton href="#contact">Build My Website</GetStartedButton>
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
              >
                View Our Work
                <svg
                  className="h-3.5 w-3.5 text-accent-300 transition-transform duration-300 group-hover:translate-y-0.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.72 }}
              className="mt-1 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-mist-400"
            >
              {trust.map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="m3.5 8.5 3 3 6-7" stroke="#45c8aa" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* --------------------------- hero visual --------------------------- */}
          <motion.div
            style={{ y: mockY, rotate: mockRotate, width: mockW ?? undefined }}
            className="relative w-full [perspective:1600px]"
          >
            <motion.div
              initial={{ opacity: 0, y: 80, rotateX: 14 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 0.61, 0.28, 0.99] }}
              whileHover={reduce ? undefined : { rotateY: -2.5, rotateX: 1.5, transition: { duration: 0.5 } }}
              className="relative mx-auto w-full px-2 [transform-style:preserve-3d] sm:px-0"
            >
              {/* glow under the browser */}
              <div
                aria-hidden="true"
                className="absolute -inset-x-10 bottom-[-8%] top-[30%] rounded-[48px] bg-accent-500/14 blur-[80px]"
              />

              {/* main browser window — real website screenshot, edge-to-edge */}
              <BrowserFrame
                url="https://www.thebakersway.com"
                className="relative z-10"
                aspect="1918 / 826"
              >
                <img
                  src={heroShot}
                  alt="The Bakersway — a website designed and hosted by How2Host"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </BrowserFrame>

              {/* back layer window — peeking from behind */}
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-9 z-0 hidden w-[46%] opacity-60 md:block"
                style={{ transform: "translateZ(-60px)" }}
              >
                <BrowserFrame url="https://www.yourbusiness.com">
                  <div className="absolute inset-0 bg-[#101318]">
                    <div className="h-[14%] w-full border-b border-white/[0.06] bg-white/[0.02]" />
                    <div className="flex h-full items-center justify-center">
                      <div className="h-2 w-40 rounded-full bg-white/10" />
                    </div>
                  </div>
                </BrowserFrame>
              </div>

              {/* floating indicator cards */}
              {indicators.map((ind) => (
                <motion.div
                  key={ind.label}
                  initial={{ opacity: 0, scale: 0.7, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1 + ind.delay * 0.22, ease: [0.22, 0.61, 0.28, 0.99] }}
                  className={`absolute z-20 ${ind.pos} ${ind.hideOnMobile ? "hidden sm:block" : ""}`}
                >
                  <div
                    className={`flex items-center gap-2 rounded-xl border border-white/60 bg-white/90 px-3 py-2 shadow-float backdrop-blur sm:gap-2.5 sm:rounded-2xl sm:px-4 sm:py-3 ${
                      reduce ? "" : "animate-floaty-slow"
                    }`}
                    style={{ animationDelay: `${ind.delay}s` }}
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-accent-500/15 text-accent-600 sm:h-7 sm:w-7">
                      <IndicatorIcon name={ind.icon} />
                    </span>
                    <span className="whitespace-nowrap text-xs font-semibold text-ink-950 sm:text-[13px]">{ind.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* fade into next section */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-950" />
    </section>
  );
}

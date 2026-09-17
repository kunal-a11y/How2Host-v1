import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Reveal, Section, SectionHeading } from "./Reveal";
import { BrowserFrame } from "./mockups/BrowserFrame";
import {
  CafeSite,
  GymSite,
  RestaurantSite,
  SalonSite,
  ServicesSite,
  ShopSite,
  StartupSite,
  StudioSite,
} from "./mockups/SiteScenes";

/* --------------------------------- projects -------------------------------- */

const projects = [
  { title: "Cafe & Bistro", category: "Cafes", url: "cafeaurelia.com", Scene: CafeSite, tag: "Website Concept" },
  { title: "Fine Dining", category: "Restaurants", url: "masons-table.com", Scene: RestaurantSite, tag: "Website Concept" },
  { title: "SaaS Startup", category: "Startups", url: "nimbusops.io", Scene: StartupSite, tag: "Demo Website" },
  { title: "Neighborhood Store", category: "Local Businesses", url: "greenleafmarket.com", Scene: ShopSite, tag: "Website Concept" },
  { title: "Corporate Site", category: "Companies", url: "meridian-consulting.com", Scene: ServicesSite, tag: "Demo Website" },
  { title: "Salon & Spa", category: "Service Businesses", url: "vellure-salon.com", Scene: SalonSite, tag: "Design Concept" },
  { title: "Fitness Studio", category: "Gyms & Fitness", url: "atlasfit.com", Scene: GymSite, tag: "Website Concept" },
  { title: "Creative Studio", category: "Service Businesses", url: "studionova.film", Scene: StudioSite, tag: "Demo Website" },
] as const;

/* -------------------------------- marquee card ------------------------------- */

type Project = (typeof projects)[number];

function MarqueeCard({ p, i }: { p: Project; i: number }) {
  const reduce = useReducedMotion();
  const Scene = p.Scene;

  // per-card 3D personality: alternate depth direction, tilt and float phase
  const depth = i % 2 === 0 ? -1 : 1; // toward / away from viewer
  const tilt = (i % 3 - 1) * 2.2; // -2.2° | 0° | 2.2°
  const phase = i * 0.9;

  return (
    <div className="marquee-item group relative w-[min(78vw,420px)] shrink-0 lg:w-[440px]" style={{ perspective: "1400px" }}>
      {/* floating wrapper — phase-shifted so neighbors bob out of sync */}
      <div
        className={reduce ? "" : "animate-floaty"}
        style={{ animationDelay: `${phase}s`, animationDuration: `${6.5 + (i % 3)}s` }}
      >
        {/* 3D pose */}
        <div
          className="transition-transform duration-700 ease-out"
          style={{
            transform: `rotateY(${tilt * 2}deg) rotateX(${depth * 1.4}deg) translateZ(${depth * 26}px)`,
            transformStyle: "preserve-3d",
          }}
        >
          <BrowserFrame url={`https://${p.url}`}>
            <Scene />
          </BrowserFrame>
        </div>

        {/* caption plate */}
        <div
          className="mt-5 flex items-start justify-between gap-3 px-1"
          style={{ transform: "translateZ(40px)" }}
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-300">{p.category}</p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight text-white">{p.title}</h3>
          </div>
          <span className="mt-1 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] text-mist-300 backdrop-blur">
            {p.tag}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ the marquee rail ------------------------------ */

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // duplicate content once for a seamless -50% loop
  const items = [...projects, ...projects];

  // pause when hovered / when off-screen
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setPaused(!e.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className={`flex w-max items-stretch gap-8 pr-8 ${reduce ? "" : "marquee-track"}`}
        style={{
          animationDirection: reverse ? "reverse" : "normal",
          animationPlayState: paused ? "paused" : "running",
        }}
        aria-hidden={reverse ? true : undefined}
      >
        {items.map((p, i) => (
          <MarqueeCard key={`${p.title}-${i}`} p={p} i={i} />
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------- section ---------------------------------- */

export function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // scroll-driven depth: the whole showroom tilts while you walk past
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rowAY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 36, reduce ? 0 : -36]);
  const rowBZ = useTransform(scrollYProgress, [0, 0.5, 1], [reduce ? 0 : -50, 0, reduce ? 0 : -50]);
  const sceneRotate = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 2.5, reduce ? 0 : -2.5]);
  const glow = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.4, 1, 0.4]);

  return (
    <Section id="portfolio" bleed className="overflow-hidden py-24 sm:py-28 lg:py-32">
      <motion.div style={{ opacity: glow }} aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/[0.07] blur-[130px]" />
      </motion.div>

      <div className="container-site relative z-10">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Websites We've <span className="text-gradient">Built.</span>
            </>
          }
          copy="The kind of finished websites we create for businesses like yours — drifting through the showroom. Examples are concepts and demos, not client claims."
        />
      </div>

      {/* the 3D showcase */}
      <motion.div
        ref={ref}
        style={{ rotateX: sceneRotate, transformPerspective: 1800 }}
        className="relative z-10 mt-16 [transform-style:preserve-3d]"
      >
        {/* front row */}
        <motion.div style={{ y: rowAY }}>
          <MarqueeRow />
        </motion.div>

        {/* back row — smaller, deeper, opposite direction */}
        <motion.div style={{ z: rowBZ }} className="mt-12 hidden opacity-55 [transform:scale(0.86)] lg:block">
          <MarqueeRow reverse />
        </motion.div>
      </motion.div>

      <div className="container-site relative z-10">
        <Reveal delay={0.1}>
          <p className="mt-12 flex items-center justify-center gap-2 text-center text-sm text-mist-400">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            The gallery keeps moving — hover a card to pause and look closer
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

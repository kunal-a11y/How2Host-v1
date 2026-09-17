/**
 * LiveSiteFrame — a real, running website rendered inside our 3D browser
 * chrome via iframe, with a photographic poster while it loads.
 *
 * Hovering the preview swaps the mouse for an animated custom cursor
 * (accent ring easing behind the pointer + "View live" pill). Leaving the
 * frame — or reduced-motion / touch devices — restores the normal cursor.
 * The transparent overlay captures the pointer (iframes swallow mouse
 * events) and opens the real site on click.
 */
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BrowserFrame } from "./BrowserFrame";
import poster from "../../assets/bakersway-poster.png";

export function LiveSiteFrame({ url, className = "" }: { url: string; className?: string }) {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [inside, setInside] = useState(false);
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [dot, setDot] = useState({ x: -100, y: -100 });
  const [loaded, setLoaded] = useState(false);

  const cursorActive = inside && !reduce;

  const track = (e: React.MouseEvent) => {
    const r = wrapRef.current!.getBoundingClientRect();
    setDot({ x: e.clientX - r.left, y: e.clientY - r.top });
    setRing({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  const reset = () => {
    setInside(false);
    setRing({ x: -100, y: -100 });
    setDot({ x: -100, y: -100 });
  };

  return (
    <div ref={wrapRef} className={`relative ${className}`} style={{ cursor: cursorActive ? "none" : "auto" }}>
      <BrowserFrame url={url} reflection={false}>
        {/* poster while the live site loads */}
        <img
          src={poster}
          alt=""
          aria-hidden={loaded}
          className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700"
          style={{ opacity: loaded ? 0 : 1 }}
        />
        {/* the real site (non-interactive — the overlay handles pointer + click) */}
        <iframe
          src={url}
          title="Live website preview — The Bakersway"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className="pointer-events-none absolute inset-0 h-full w-full border-0 bg-white transition-opacity duration-700"
          style={{ opacity: loaded ? 1 : 0 }}
          tabIndex={-1}
        />
      </BrowserFrame>

      {/* LIVE badge */}
      <div className="absolute -top-3 right-6 z-20 flex items-center gap-2 rounded-full border border-accent-400/30 bg-ink-900/95 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-accent-300 shadow-float backdrop-blur">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-70 motion-reduce:animate-none" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-400" />
        </span>
        LIVE
      </div>

      {/* transparent interaction layer: tracks the pointer, opens the site */}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label="Open The Bakersway live website in a new tab"
        className="absolute inset-0 z-20 rounded-xl"
        style={{ cursor: cursorActive ? "none" : "pointer" }}
        onMouseEnter={() => setInside(true)}
        onMouseLeave={reset}
        onMouseMove={track}
      />

      {/* custom animated cursor (desktop hover only) — unmounts instantly on leave */}
      {cursorActive && (
        <motion.div
          key="cursor"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.18 }}
            className="pointer-events-none absolute inset-0 z-30 hidden md:block"
            aria-hidden="true"
          >
            {/* trailing ring — eases behind the pointer */}
            <motion.div
              className="absolute rounded-full border border-accent-400/80 bg-accent-400/10"
              style={{
                width: 56,
                height: 56,
                left: 0,
                top: 0,
                translateX: "-50%",
                translateY: "-50%",
                boxShadow: "0 0 22px rgba(69,200,170,0.35)",
              }}
              animate={{ x: ring.x, y: ring.y }}
              transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.6 }}
            >
              {/* pill label under the ring */}
              <span className="absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2 whitespace-nowrap rounded-full bg-accent-400 px-2.5 py-1 text-[10px] font-bold tracking-wide text-ink-950 shadow-[0_4px_14px_rgba(69,200,170,0.5)]">
                VIEW LIVE ↗
              </span>
            </motion.div>
            {/* precise dot — tracks 1:1 */}
            <motion.div
              className="absolute h-1.5 w-1.5 rounded-full bg-white"
              style={{ left: 0, top: 0, translateX: "-50%", translateY: "-50%" }}
              animate={{ x: dot.x, y: dot.y }}
              transition={{ duration: 0.05 }}
            />
          </motion.div>
        )}
    </div>
  );
}

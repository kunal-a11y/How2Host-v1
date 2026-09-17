import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** "up" | "down" | "left" | "right" | "scale" | "rotate" | "none" */
  from?: "up" | "down" | "left" | "right" | "scale" | "rotate" | "none";
  /** viewport amount that triggers the reveal */
  amount?: number;
  as?: "div" | "section" | "li" | "span" | "article";
  once?: boolean;
};

const offsets: Record<NonNullable<RevealProps["from"]>, { x?: number; y?: number; scale?: number; rotate?: number }> = {
  up: { y: 44 },
  down: { y: -44 },
  left: { x: -56 },
  right: { x: 56 },
  scale: { scale: 0.9 },
  rotate: { rotate: -4, y: 30 },
  none: {},
};

export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
  amount = 0.3,
  as = "div",
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;

  const variants: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, ...offsets[from] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 0.61, 0.28, 0.99] },
    },
  };

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "center",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={`${
        align === "center" ? "mx-auto text-center items-center" : "text-left items-start"
      } flex max-w-2xl flex-col gap-4 ${className}`}
    >
      <Reveal from="down">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-mist-300">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {copy ? (
        <Reveal delay={0.16}>
          <p className="max-w-xl text-base leading-relaxed text-mist-400 sm:text-lg">{copy}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
  bleed = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bleed?: boolean;
}) {
  return (
    <section id={id} className={`relative ${bleed ? "" : "py-24 sm:py-28 lg:py-32"} ${className}`}>
      {bleed ? children : <div className="container-site">{children}</div>}
    </section>
  );
}

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { Reveal, Section, SectionHeading } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Tell Us About Your Business",
    copy: "A short conversation about what you do, your customers and the style you like. No technical knowledge needed.",
    icon: "chat",
  },
  {
    n: "02",
    title: "We Design Your Website",
    copy: "How2Host designs a professional, custom website around your brand, content and goals.",
    icon: "pen",
  },
  {
    n: "03",
    title: "You Review The Design",
    copy: "You see the design, request changes and approve it. Nothing goes live until you're happy.",
    icon: "eye",
  },
  {
    n: "04",
    title: "We Develop & Launch",
    copy: "We build, optimize, connect your free domain, secure it and put your website online.",
    icon: "rocket",
  },
  {
    n: "05",
    title: "We Host & Maintain It",
    copy: "Hosting, SSL, backups, updates and support — handled by us for as long as you're with us.",
    icon: "shield",
  },
] as const;

function StepIcon({ name }: { name: (typeof steps)[number]["icon"] }) {
  const p = { width: 18, height: 18, viewBox: "0 0 20 20", fill: "none", "aria-hidden": true } as const;
  switch (name) {
    case "chat":
      return (
        <svg {...p}>
          <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v6a2.5 2.5 0 0 1-2.5 2.5H9l-4.5 3.5V14A2.5 2.5 0 0 1 3 11.5v-6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      );
    case "pen":
      return (
        <svg {...p}>
          <path d="m4 16 .8-3.2L14.6 3a1.8 1.8 0 0 1 2.5 0l-.1-.1a1.8 1.8 0 0 1 0 2.5L7.2 15.2 4 16z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="m13 5 2 2" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "eye":
      return (
        <svg {...p}>
          <path d="M2 10s3-5.5 8-5.5S18 10 18 10s-3 5.5-8 5.5S2 10 2 10z" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="10" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...p}>
          <path
            d="M10 2.5c3 1.5 4.5 4.6 4.5 8l-2 2h-5l-2-2c0-3.4 1.5-6.5 4.5-8z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="8.4" r="1.5" stroke="currentColor" strokeWidth="1.3" />
          <path d="M8.5 14.5 7 17.5M11.5 14.5l1.5 3M10 15.5V18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <path d="M10 2 16.5 4.4v4.9c0 4.4-3 7.7-6.5 9.2-3.5-1.5-6.5-4.8-6.5-9.2V4.4L10 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="m7.3 10 1.9 1.9 3.5-3.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function HowItWorks() {
  const railRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 0.75", "end 0.6"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const lineScale = useTransform(progress, [0, 1], [0, 1]);

  return (
    <Section id="how-it-works" className="overflow-hidden">
      {/* faint diagonal glow */}
      <div
        aria-hidden="true"
        className="absolute right-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-accent-500/[0.07] blur-[120px]"
      />

      <SectionHeading
        eyebrow="How It Works"
        title={
          <>
            From Conversation <span className="text-gradient">To Website.</span>
          </>
        }
        copy="A simple, guided pipeline. You talk — we build. Here's exactly what happens after you contact us."
      />

      <div ref={railRef} className="relative mx-auto mt-20 max-w-3xl">
        {/* vertical rail */}
        <div className="absolute left-[27px] top-2 bottom-2 w-px bg-white/[0.08]" aria-hidden="true">
          <motion.div
            style={{ scaleY: reduce ? 1 : lineScale, originY: 0 }}
            className="absolute inset-0 w-px bg-gradient-to-b from-accent-300 to-accent-600 shadow-[0_0_12px_rgba(69,200,170,0.6)]"
          />
        </div>

        <ol className="space-y-10">
          {steps.map((step, i) => (
            <li key={step.n}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.65, ease: [0.22, 0.61, 0.28, 0.99] }}
                className="group relative flex gap-6"
              >
                {/* node */}
                <div className="relative z-10 shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-ink-850 text-accent-300 shadow-glass transition-colors duration-300 group-hover:border-accent-400/40">
                    <StepIcon name={step.icon} />
                  </div>
                  <span className="absolute -right-1.5 -top-1.5 rounded-full bg-accent-400 px-1.5 py-0.5 text-[9px] font-bold text-ink-950">
                    {step.n}
                  </span>
                </div>

                {/* card */}
                <div className="glass flex-1 rounded-2xl p-5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none sm:p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-white">{step.title}</h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-mist-400">{step.copy}</p>
                </div>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

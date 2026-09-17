import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, Section, SectionHeading } from "./Reveal";

const faqs = [
  {
    q: "What is included in the ₹999 plan?",
    a: "The Starter plan includes a custom professional website designed around your business, hosting, a free domain, SSL security, a mobile-responsive layout, basic maintenance, performance optimization and technical support — all for one monthly price.",
  },
  {
    q: "Do I need to buy hosting separately?",
    a: "No. Hosting is included in every How2Host plan. We set it up, configure it, monitor it and maintain it for you — you never touch a hosting panel.",
  },
  {
    q: "Is the domain included?",
    a: "Yes. A domain is included with your website plan. We register it, connect it and configure it for you as part of the service.",
  },
  {
    q: "Can you build a website for my cafe or restaurant?",
    a: "Absolutely. Cafes, restaurants, salons, gyms, shops and local service businesses are exactly who How2Host is built for. We design around your menu, services, atmosphere and customers.",
  },
  {
    q: "Can I request design changes?",
    a: "Yes. You review the design before launch and we refine it with you. After launch, maintenance covers content updates, and larger redesigns can be discussed any time.",
  },
  {
    q: "What happens if I need additional features?",
    a: "Tell us what you need — booking systems, menus, galleries, forms and more can be added. Bigger features may move you to the Business or Custom plan, and we'll always explain the options first.",
  },
  {
    q: "Do you maintain the website after launch?",
    a: "Yes, that's the core of How2Host. Updates, backups, security patches, performance checks and support are ongoing. Your website stays current without you lifting a finger.",
  },
  {
    q: "Can you build websites for large companies?",
    a: "Yes. Our Custom plan covers advanced UI/UX, custom functionality, integrations, advanced security and scalable infrastructure for larger organizations and ambitious startups.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.3), ease: [0.22, 0.61, 0.28, 0.99] }}
    >
      <div
        className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
          open ? "border-accent-400/25 bg-white/[0.045]" : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.16]"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
        >
          <span className="text-[15px] font-medium text-white sm:text-base">{q}</span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
              open ? "border-accent-400/40 text-accent-300" : "border-white/15 text-mist-300"
            }`}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M6 1.5v9M1.5 6h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="px-5 pb-5 text-sm leading-relaxed text-mist-400 sm:px-6 sm:pb-6">{a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function Faq() {
  return (
    <Section id="faq">
      <SectionHeading
        eyebrow="FAQ"
        title={
          <>
            Questions, <span className="text-gradient">Answered.</span>
          </>
        }
        copy="Everything businesses usually ask before we start building. Something else on your mind? Just ask."
      />

      <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-3.5">
        {faqs.map((f, i) => (
          <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
        ))}
      </div>
    </Section>
  );
}

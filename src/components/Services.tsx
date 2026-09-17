import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Reveal";
import { ServiceArt, type ArtKind } from "./mockups/ServiceArt";

/* ------------------------------ card metadata ------------------------------ */

const services: {
  n: string;
  title: string;
  copy: string;
  art: ArtKind;
  tag: string;
}[] = [
  {
    n: "01",
    title: "Custom Website",
    copy: "Beautiful, responsive websites designed around your business.",
    art: "site",
    tag: "DESIGN & BUILD",
  },
  {
    n: "02",
    title: "Hosting",
    copy: "Reliable hosting managed by How2Host.",
    art: "hosting",
    tag: "SERVERS & UPTIME",
  },
  {
    n: "03",
    title: "Free Domain",
    copy: "Get a domain included with your website plan.",
    art: "domain",
    tag: "YOUR .COM INCLUDED",
  },
  {
    n: "04",
    title: "Security",
    copy: "SSL, security configuration and ongoing protection.",
    art: "security",
    tag: "SSL & FIREWALL",
  },
  {
    n: "05",
    title: "Maintenance",
    copy: "We keep your website updated and running smoothly.",
    art: "maintenance",
    tag: "ALWAYS CURRENT",
  },
  {
    n: "06",
    title: "Performance",
    copy: "Fast, responsive and optimized for modern devices.",
    art: "performance",
    tag: "SPEED OPTIMIZED",
  },
];

/* --------------------------------- section --------------------------------- */

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="What We Do"
        title={
          <>
            Everything Your Website <span className="text-gradient">Needs.</span>
          </>
        }
        copy="One team, one plan, zero technical homework. Every service below is included in your How2Host plan."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.article
            key={s.n}
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: (i % 3) * 0.09, ease: [0.22, 0.61, 0.28, 0.99] }}
            className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/25 hover:shadow-float motion-reduce:transition-none"
          >
            {/* themed infrastructure illustration as the visual lead */}
            <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80">
              <div className="relative aspect-[2/1]">
                <ServiceArt kind={s.art} />
              </div>
              {/* sheen */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(115deg,rgba(255,255,255,0.06),transparent_35%)]"
              />
              {/* corner tag */}
              <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/40 px-2.5 py-0.5 text-[9px] font-semibold tracking-[0.2em] text-accent-300 backdrop-blur">
                {s.tag}
              </span>
            </div>

            <div className="relative flex flex-col gap-3 px-4 pb-4">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold tracking-tight text-white">{s.title}</h3>
                <span className="text-sm font-medium tracking-[0.2em] text-white/20">{s.n}</span>
              </div>
              <p className="text-sm leading-relaxed text-mist-400">{s.copy}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

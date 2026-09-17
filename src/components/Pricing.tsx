import { motion } from "framer-motion";
import { Reveal, Section, SectionHeading } from "./Reveal";
import { GetStartedButton } from "./GetStartedButton";

type Plan = {
  name: string;
  price: string;
  period?: string;
  tagline: string;
  badge?: string;
  featured?: boolean;
  features: string[];
  cta: string;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "₹999",
    period: "/month",
    tagline: "For small businesses and local businesses.",
    badge: "Perfect For Small Businesses",
    features: [
      "Custom professional website",
      "Hosting included",
      "Free domain",
      "SSL security",
      "Mobile responsive",
      "Basic maintenance",
      "Performance optimization",
      "Technical support",
    ],
    cta: "Get Started",
  },
  {
    name: "Business",
    price: "₹2,500",
    period: "/month",
    tagline: "For growing businesses that need a stronger online presence.",
    badge: "Most Popular",
    featured: true,
    features: [
      "Everything in Starter",
      "Advanced website design",
      "More pages",
      "Advanced animations",
      "Enhanced performance",
      "Priority maintenance",
      "Advanced customization",
      "Business-focused design",
    ],
    cta: "Choose Business",
  },
  {
    name: "Custom",
    price: "Custom Pricing",
    tagline: "For large companies, startups, organizations and businesses requiring custom solutions.",
    features: [
      "Fully custom website",
      "Advanced UI/UX",
      "Custom functionality",
      "Advanced integrations",
      "Custom animations",
      "Dedicated support",
      "Advanced security",
      "Scalable infrastructure",
      "Custom maintenance plan",
    ],
    cta: "Talk To Us",
  },
];

function Check({ muted = false }: { muted?: boolean }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`mt-0.5 shrink-0 ${muted ? "text-white/30" : "text-accent-400"}`}
    >
      <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Pricing() {
  return (
    <Section id="pricing" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[16%] h-[460px] w-[720px] -translate-x-1/2 rounded-full bg-accent-500/[0.06] blur-[130px]"
      />

      <SectionHeading
        eyebrow="Pricing"
        title={
          <>
            Choose Your <span className="text-gradient">Plan.</span>
          </>
        }
        copy="A clear monthly plan that covers design, development, hosting, security and maintenance. No hidden setup games."
      />

      <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <div key={plan.name} className={plan.featured ? "lg:-translate-y-3 lg:scale-[1.02]" : ""}>
          <motion.article
            initial={{ opacity: 0, y: 52 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 0.61, 0.28, 0.99] }}
            className={`relative flex h-full flex-col rounded-3xl p-7 sm:p-8 ${
              plan.featured
                ? "border border-accent-400/35 bg-gradient-to-b from-accent-500/[0.1] to-white/[0.02] shadow-float"
                : "glass"
            }`}
          >
            {plan.badge && (
              <span
                className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                  plan.featured
                    ? "bg-gradient-to-r from-accent-300 to-accent-500 text-ink-950 shadow-[0_8px_24px_-8px_rgba(69,200,170,0.7)]"
                    : "border border-white/10 bg-ink-800 text-mist-300"
                }`}
              >
                {plan.badge}
              </span>
            )}

            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-mist-300">{plan.name}</h3>

            <div className="mt-5 flex items-baseline gap-1.5">
              <span
                className={`font-bold tracking-tight ${
                  plan.featured ? "text-gradient text-5xl" : "text-4xl text-white"
                }`}
              >
                {plan.price}
              </span>
              {plan.period && <span className="text-sm text-mist-400">{plan.period}</span>}
            </div>

            <p className="mt-3 min-h-[42px] text-sm leading-relaxed text-mist-400">{plan.tagline}</p>

            <div aria-hidden="true" className="my-6 h-px w-full bg-white/[0.07]" />

            <ul className="flex flex-col gap-3 text-sm text-mist-200">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check muted={f === "Everything in Starter"} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-2 mt-auto">
              <GetStartedButton href="#contact" full>
                {plan.cta}
              </GetStartedButton>
            </div>
          </motion.article>
          </div>
        ))}
      </div>

      <Reveal delay={0.15}>
        <p className="mt-10 text-center text-sm text-mist-400">
          Every plan includes design, development, hosting, domain, security and maintenance — the difference is how
          far we take it.
        </p>
      </Reveal>
    </Section>
  );
}

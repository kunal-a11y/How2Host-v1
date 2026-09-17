import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Reveal, Section } from "./Reveal";

/* NOTE: placeholder contact details — replace with real ones before launch. */
const WHATSAPP_HREF = "#contact"; // replace with https://wa.me/<number>

const businessTypes = [
  "Cafe",
  "Restaurant",
  "Salon",
  "Gym / Fitness",
  "Local Shop",
  "Startup",
  "Company",
  "Service Business",
  "Other",
];

const planOptions = ["Starter — ₹999/month", "Business — ₹2,500/month", "Custom — Let's talk"];

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-mist-400/60 outline-none transition-all duration-200 focus:border-accent-400/50 focus:bg-white/[0.06] focus:ring-2 focus:ring-accent-400/20";

/* ------------------------- custom animated select ------------------------- */

function Select({
  placeholder,
  options,
  value,
  onChange,
  labelId,
}: {
  placeholder: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  labelId: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close on outside click / Escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={labelId}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "Enter") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className={`${inputCls} flex items-center justify-between gap-2 text-left ${
          open ? "border-accent-400/50 bg-white/[0.06] ring-2 ring-accent-400/20" : ""
        } ${value ? "" : "text-mist-400/60"}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <motion.svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-accent-300"
        >
          <path d="m2.5 4.5 3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>

      {open && (
        <motion.ul
          role="listbox"
          initial={{ opacity: 0, y: -8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.22, ease: [0.22, 0.61, 0.28, 0.99] }}
          className="absolute z-40 mt-2 max-h-64 w-full overflow-auto rounded-xl border border-white/10 bg-ink-850/95 p-1.5 shadow-float backdrop-blur-xl"
        >
          {options.map((o, i) => (
            <motion.li
              key={o}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.18, delay: i * 0.035 }}
            >
              <button
                type="button"
                role="option"
                aria-selected={o === value}
                onClick={() => {
                  onChange(o);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2 rounded-lg px-3.5 py-2.5 text-left text-sm transition-colors duration-150 ${
                  o === value
                    ? "bg-accent-500/15 font-medium text-accent-200"
                    : "text-mist-200 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {o}
                {o === value && (
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 text-accent-300">
                    <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </motion.li>
          ))}
        </motion.ul>
      )}
      {/* validation anchor */}
      <input type="hidden" aria-required="true" value={value} />
    </div>
  );
}

function Field({
  label,
  id,
  children,
  span = false,
}: {
  label: string;
  id?: string;
  children: React.ReactNode;
  span?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${span ? "sm:col-span-2" : ""}`}>
      <span id={id} className="text-xs font-medium uppercase tracking-[0.16em] text-mist-400">
        {label}
      </span>
      {children}
    </div>
  );
}

/* --------------------------------- section -------------------------------- */

export function Contact() {
  const [sent, setSent] = useState(false);
  const [bType, setBType] = useState("");
  const [plan, setPlan] = useState("");
  const [missing, setMissing] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!bType || !plan) {
      setMissing(true);
      return;
    }
    setMissing(false);
    // Front-end only for now: wire this to your backend / form service later.
    setSent(true);
  }

  return (
    <Section id="contact" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-accent-500/[0.07] blur-[130px]"
      />

      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* left copy */}
        <div className="flex flex-col items-start gap-6">
          <Reveal from="down">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-mist-300">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              Contact
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="text-balance text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl">
              Let's Build
              <br />
              <span className="text-gradient">Your Website.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="max-w-md text-lg leading-relaxed text-mist-300">
              Tell us about your business and we'll help you create a professional online presence.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="flex flex-col gap-3 text-sm text-mist-300">
              {[
                "A short, friendly conversation — no jargon",
                "We propose a design direction for your business",
                "You get a clear plan and monthly price",
              ].map((t, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.45, delay: 0.08 * i }}
                  className="flex items-center gap-2.5"
                >
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="text-accent-400">
                    <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </motion.li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="glass mt-2 flex flex-col gap-3 rounded-2xl p-5">
              <p className="text-sm font-medium text-white">Prefer WhatsApp?</p>
              <p className="text-[13px] text-mist-400">
                Chat with How2Host directly — we usually reply within a day.
              </p>
              <a
                href={WHATSAPP_HREF}
                className="group inline-flex w-fit items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-[#062b16] transition-all duration-300 hover:brightness-110 hover:shadow-[0_12px_32px_-10px_rgba(37,211,102,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2a9.9 9.9 0 0 0-8.57 14.87L2 22l5.27-1.38A9.9 9.9 0 1 0 12.04 2zm0 1.67a8.23 8.23 0 1 1-4.2 15.3l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1 6.99-12.59zm-3.3 4.16c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.68 2.66 4.14 3.62 2.05.8 2.46.64 2.91.6.45-.04 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.4-.54-.41l-.46-.01z" />
                </svg>
                Chat With How2Host
              </a>
            </div>
          </Reveal>
        </div>

        {/* form */}
        <Reveal from="right" amount={0.2}>
          <div className="glass-strong relative rounded-3xl p-6 sm:p-8">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex min-h-[480px] flex-col items-center justify-center gap-4 text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-400/15 text-accent-300">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <path d="m7 14.5 5 5 9-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="text-xl font-semibold">Request received.</h3>
                <p className="max-w-sm text-sm leading-relaxed text-mist-400">
                  Thanks for reaching out — we'll get back to you shortly to talk about your website.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-2 text-sm font-medium text-accent-300 underline-offset-4 hover:underline"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <Field label="Name">
                  <input required name="name" autoComplete="name" placeholder="Your name" className={inputCls} />
                </Field>
                <Field label="Business Name">
                  <input required name="business" autoComplete="organization" placeholder="Your business" className={inputCls} />
                </Field>
                <Field label="Phone Number">
                  <input
                    required
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 ..."
                    className={inputCls}
                  />
                </Field>
                <Field label="Email">
                  <input required name="email" type="email" autoComplete="email" placeholder="you@business.com" className={inputCls} />
                </Field>

                <Field label="Business Type" id="ftype">
                  <Select labelId="ftype" placeholder="Select type" options={businessTypes} value={bType} onChange={setBType} />
                </Field>
                <Field label="Choose Plan" id="fplan">
                  <Select labelId="fplan" placeholder="Select plan" options={planOptions} value={plan} onChange={setPlan} />
                </Field>
                {missing && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs font-medium text-rose-300 sm:col-span-2"
                    role="alert"
                  >
                    Please choose a business type and a plan.
                  </motion.p>
                )}

                <Field label="Message" span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us a little about your business and what you need..."
                    className={`${inputCls} resize-none`}
                  />
                </Field>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-b from-accent-300 to-accent-500 px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-[0_12px_36px_-10px_rgba(69,200,170,0.55)] transition-all duration-300 hover:shadow-[0_18px_44px_-12px_rgba(69,200,170,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full motion-reduce:transition-none"
                    />
                    <span className="relative">Send Request</span>
                  </button>
                  <p className="mt-3 text-center text-xs text-mist-400/70">
                    No spam, no obligation — we'll only talk about your website.
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

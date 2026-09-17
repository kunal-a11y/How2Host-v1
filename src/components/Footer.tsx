import { Logo } from "./Logo";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Services", href: "#services" },
      { label: "Pricing", href: "#pricing" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "How It Works", href: "#how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
      { label: "Get Your Website", href: "#contact" },
      { label: "Back To Top", href: "#home" },
    ],
  },
  {
    title: "What's Included",
    links: [
      { label: "Custom Design", href: "#services" },
      { label: "Free Domain", href: "#services" },
      { label: "Managed Hosting", href: "#services" },
      { label: "Security & Maintenance", href: "#services" },
    ],
  },
];

function SocialIcon({ kind }: { kind: "instagram" | "whatsapp" }) {
  if (kind === "instagram")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    );
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.57 14.87L2 22l5.27-1.38A9.9 9.9 0 1 0 12.04 2zm0 1.67a8.23 8.23 0 1 1-4.2 15.3l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1 6.99-12.59zm-3.3 4.16c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.68 2.66 4.14 3.62 2.05.8 2.46.64 2.91.6.45-.04 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.4-.54-.41l-.46-.01z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-ink-900/60">
      {/* top light seam */}
      <div aria-hidden="true" className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 accent-line opacity-60" />
      {/* ambient glows */}
      <div
        aria-hidden="true"
        className="absolute bottom-[-45%] left-1/2 h-[340px] w-[720px] -translate-x-1/2 rounded-full bg-accent-500/[0.06] blur-[120px]"
      />
      <div aria-hidden="true" className="grid-veil absolute inset-0 opacity-40" />

      <div className="container-site relative">
        {/* ------------------------------ top CTA row ------------------------------ */}
        <div className="flex flex-col items-start justify-between gap-6 py-12 lg:flex-row lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent-300">Ready when you are</p>
            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Let's put your business online.
            </h2>
          </div>
          <a
            href="#contact"
            className="group relative inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-b from-accent-300 to-accent-500 px-7 py-3 text-sm font-semibold text-ink-950 shadow-[0_12px_36px_-10px_rgba(69,200,170,0.55)] transition-all duration-300 hover:shadow-[0_18px_44px_-12px_rgba(69,200,170,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full motion-reduce:transition-none"
            />
            <span className="relative">Get Your Website</span>
            <svg className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2.5 8h10M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* ------------------------------ brand + links ------------------------------ */}
        <div className="grid gap-12 py-12 lg:grid-cols-[1.3fr_2fr]">
          {/* brand block */}
          <div className="flex flex-col items-start gap-5">
            <a href="#home" className="flex items-center gap-3" aria-label="How2Host home">
              <Logo className="h-11 w-11" />
              <span className="text-2xl font-bold tracking-tight">
                How2<span className="text-accent-400">Host</span>
              </span>
            </a>
            <p className="max-w-sm text-balance text-lg font-medium leading-relaxed text-mist-300">
              Websites. Hosting. Everything Managed.
            </p>
            <p className="max-w-sm text-[13px] leading-relaxed text-mist-400/80">
              We design, develop, host and maintain professional websites for businesses — one team, one simple
              monthly plan.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="#contact"
                aria-label="How2Host on Instagram (placeholder link)"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-mist-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/40 hover:text-accent-300"
              >
                <SocialIcon kind="instagram" />
              </a>
              <a
                href="#contact"
                aria-label="How2Host on WhatsApp (placeholder link)"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-mist-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/40 hover:text-accent-300"
              >
                <SocialIcon kind="whatsapp" />
              </a>
            </div>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist-400">{col.title}</p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="group inline-flex items-center gap-1.5 text-sm text-mist-300 transition-colors duration-200 hover:text-white"
                      >
                        <span className="h-px w-0 bg-accent-400 transition-all duration-300 group-hover:w-3" aria-hidden="true" />
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------------------ bottom bar ------------------------------ */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] py-7 sm:flex-row">
          <p className="text-[13px] text-mist-400/80">© 2026 How2Host. All rights reserved.</p>
          <p className="flex items-center gap-2 text-[13px] text-mist-400/80">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-400" />
            </span>
            Designed, built &amp; managed by How2Host
          </p>
        </div>
      </div>
    </footer>
  );
}

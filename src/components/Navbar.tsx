import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Logo } from "./Logo";
import { GetStartedButton } from "./GetStartedButton";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.07] bg-ink-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-ink-950/60"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-site flex h-16 items-center justify-between lg:h-[4.5rem]" aria-label="Main">
        <a href="#home" className="flex items-center gap-2.5" aria-label="How2Host home">
          <Logo className="h-8 w-8" />
          <span className="text-lg font-bold tracking-tight">
            How2<span className="text-accent-400">Host</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm text-mist-300 transition-colors duration-200 hover:bg-white/[0.05] hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <GetStartedButton />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-[18px] w-[18px]">
            <AnimatePresence initial={false}>
              {open ? (
                <motion.svg
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                  className="absolute inset-0"
                >
                  <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="open"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                  className="absolute inset-0"
                >
                  <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </motion.svg>
              )}
            </AnimatePresence>
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-16 z-40 bg-ink-950/95 backdrop-blur-2xl transition-opacity duration-300 lg:hidden ${
          open ? "" : "pointer-events-none"
        }`}
        style={{ opacity: open ? 1 : 0 }}
        aria-hidden={!open}
      >
        <ul className="container-site flex flex-col gap-1 py-8">
          {links.map((l, i) => (
            <li
              key={l.href}
              className={`transition-all duration-500 ${reduce ? "" : "motion-safe:-translate-x-4"}`}
              style={{
                transitionDelay: open ? `${0.05 + i * 0.05}s` : "0s",
                opacity: open ? 1 : 0,
                transform: open || reduce ? "none" : undefined,
              }}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="block rounded-2xl px-4 py-4 text-2xl font-semibold tracking-tight text-white/90 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li
            className="mt-4 px-4 transition-all duration-500"
            style={{
              transitionDelay: open ? "0.4s" : "0s",
              opacity: open ? 1 : 0,
              transform: open || reduce ? "none" : "translateY(12px)",
            }}
          >
            <GetStartedButton full />
          </li>
        </ul>
      </div>
    </header>
  );
}

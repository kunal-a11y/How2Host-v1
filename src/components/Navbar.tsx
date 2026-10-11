import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Updates", href: "/updates" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile navigation on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#E6E6E6] bg-white/95 backdrop-blur-md py-3.5 shadow-subtle"
          : "border-b border-transparent bg-white/70 backdrop-blur-sm py-5"
      }`}
    >
      <nav className="container-site flex items-center justify-between" aria-label="Main Navigation">
        {/* Logo and Wordmark */}
        <Link
          to="/"
          className="group flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
          aria-label="How2Host Home"
        >
          <Logo className="h-8 w-8 text-[#111111] transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-[#111111]">
              How2<span className="font-semibold text-[#666666]">Host</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active ? "text-[#111111]" : "text-[#666666] hover:text-[#111111]"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-x-3 -bottom-1 h-[2px] bg-[#111111]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#111111] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-[#262626] hover:shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
          >
            Discuss a Project
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-[#E6E6E6] bg-white text-[#111111] transition-colors hover:bg-[#F7F7F5] md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="flex flex-col items-center justify-center gap-1.5 w-5">
            <span
              className={`h-[1.5px] w-5 bg-[#111111] transition-transform duration-300 ${
                mobileMenuOpen ? "translate-y-[4.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-[#111111] transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-[#111111] transition-transform duration-300 ${
                mobileMenuOpen ? "-translate-y-[4.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 top-[65px] z-40 flex flex-col bg-white px-6 py-8 md:hidden shadow-xl"
          >
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-2xl font-semibold tracking-tight transition-colors ${
                        active ? "text-[#111111]" : "text-[#666666] hover:text-[#111111]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto border-t border-[#E6E6E6] pt-8">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-lg bg-[#111111] py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white"
              >
                Discuss a Project
              </Link>
              <div className="mt-6 flex flex-col gap-1 text-xs text-[#666666]">
                <p>Email: mindcraftgamer26@gmail.com</p>
                <p>WhatsApp: +91 98991 13229</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

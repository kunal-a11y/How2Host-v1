import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Shield, Terminal, Server } from "lucide-react";
import { Logo } from "./Logo";

const servicesSubLinks = [
  {
    label: "Web Development",
    href: "/services/web-development",
    desc: "Custom high-performance websites",
    icon: Globe,
  },
  {
    label: "Cybersecurity & Pentesting",
    href: "/services/cybersecurity",
    desc: "Authorized assessments & vulnerability reports",
    icon: Shield,
  },
  {
    label: "Technology Solutions",
    href: "/services/technology-solutions",
    desc: "Business tools, dashboards & integrations",
    icon: Terminal,
  },
  {
    label: "Hosting Solutions",
    href: "/services/hosting",
    desc: "Managed high-availability cloud — Soon",
    icon: Server,
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLLIElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Click outside listener for services dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <li>
            <Link
              to="/"
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive("/") ? "text-[#111111]" : "text-[#666666] hover:text-[#111111]"
              }`}
            >
              Home
              {isActive("/") && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-x-3 -bottom-1 h-[2px] bg-[#111111]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </li>

          {/* Services with Hover & Click Dropdown */}
          <li
            ref={servicesDropdownRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="flex items-center">
              <Link
                to="/services"
                className={`relative pl-4 pr-1 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive("/services") ? "text-[#111111]" : "text-[#666666] hover:text-[#111111]"
                }`}
              >
                Services
                {isActive("/services") && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-x-3 -bottom-1 h-[2px] bg-[#111111]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="p-1 text-[#666666] hover:text-[#111111] transition-transform duration-200"
                aria-expanded={servicesOpen}
                aria-label="Toggle services menu"
              >
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-[#E6E6E6] bg-white p-2 shadow-card"
                >
                  <div className="space-y-1">
                    <Link
                      to="/services"
                      className="block rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#111111] hover:bg-[#F7F7F5] transition-colors"
                    >
                      Overview &amp; Methodology →
                    </Link>
                    <div className="h-px bg-[#E6E6E6] my-1" />
                    {servicesSubLinks.map((sub) => {
                      const Icon = sub.icon;
                      return (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className="flex items-start gap-3 rounded-lg p-2.5 hover:bg-[#F7F7F5] transition-colors"
                        >
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#111111] text-white mt-0.5">
                            <Icon className="h-3.5 w-3.5" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-[#111111]">{sub.label}</p>
                            <p className="text-[11px] text-[#666666]">{sub.desc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link
              to="/projects"
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive("/projects") ? "text-[#111111]" : "text-[#666666] hover:text-[#111111]"
              }`}
            >
              Projects
              {isActive("/projects") && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-x-3 -bottom-1 h-[2px] bg-[#111111]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive("/about") ? "text-[#111111]" : "text-[#666666] hover:text-[#111111]"
              }`}
            >
              About
              {isActive("/about") && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-x-3 -bottom-1 h-[2px] bg-[#111111]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </li>

          <li>
            <Link
              to="/updates"
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive("/updates") ? "text-[#111111]" : "text-[#666666] hover:text-[#111111]"
              }`}
            >
              Updates
              {isActive("/updates") && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-x-3 -bottom-1 h-[2px] bg-[#111111]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive("/contact") ? "text-[#111111]" : "text-[#666666] hover:text-[#111111]"
              }`}
            >
              Contact
              {isActive("/contact") && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-x-3 -bottom-1 h-[2px] bg-[#111111]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </li>
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#111111] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-[#262626] hover:shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] active:scale-95"
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

      {/* Mobile Slide-out Menu with Direct Sub-routes */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 top-[65px] z-40 flex flex-col bg-white px-6 py-8 md:hidden shadow-xl overflow-y-auto"
          >
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-xl font-bold tracking-tight transition-colors ${
                    isActive("/") ? "text-[#111111]" : "text-[#666666]"
                  }`}
                >
                  Home
                </Link>
              </li>

              <li className="border-y border-[#E6E6E6] py-3">
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-xl font-bold tracking-tight transition-colors ${
                    isActive("/services") ? "text-[#111111]" : "text-[#666666]"
                  }`}
                >
                  Services
                </Link>
                <div className="mt-2 ml-3 flex flex-col gap-2">
                  {servicesSubLinks.map((sub) => (
                    <Link
                      key={sub.href}
                      to={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs font-medium text-[#666666] hover:text-[#111111]"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </li>

              <li>
                <Link
                  to="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-xl font-bold tracking-tight transition-colors ${
                    isActive("/projects") ? "text-[#111111]" : "text-[#666666]"
                  }`}
                >
                  Projects &amp; Portfolio
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-xl font-bold tracking-tight transition-colors ${
                    isActive("/about") ? "text-[#111111]" : "text-[#666666]"
                  }`}
                >
                  About &amp; Founder
                </Link>
              </li>

              <li>
                <Link
                  to="/updates"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-xl font-bold tracking-tight transition-colors ${
                    isActive("/updates") ? "text-[#111111]" : "text-[#666666]"
                  }`}
                >
                  Updates &amp; Roadmap
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-xl font-bold tracking-tight transition-colors ${
                    isActive("/contact") ? "text-[#111111]" : "text-[#666666]"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="mt-auto border-t border-[#E6E6E6] pt-6">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-lg bg-[#111111] py-3.5 text-center text-xs font-bold uppercase tracking-wider text-white"
              >
                Discuss a Project
              </Link>
              <div className="mt-4 flex flex-col gap-1 text-[11px] text-[#666666]">
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

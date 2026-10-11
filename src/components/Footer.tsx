import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { AnimatedMonogram } from "./animated/AnimatedMonogram";
import { companyConfig } from "../data/companyConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#111111] text-white overflow-hidden">
      {/* Animated Top Stroke Divider Line */}
      <svg className="w-full h-1 block" fill="none">
        <motion.line
          x1="0"
          y1="0.5"
          x2="100%"
          y2="0.5"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </svg>

      {/* Top CTA Row */}
      <div className="border-b border-white/10">
        <div className="container-site py-16 lg:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-[#A3A3A3] font-semibold mb-3">
              Start an Engagement
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white max-w-xl">
              Technology Built for Businesses That Think Ahead.
            </h2>
          </div>
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center rounded-lg bg-white px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#111111] transition-all hover:bg-[#F0F0EE] shrink-0 active:scale-95"
          >
            <span>Start a Project</span>
          </Link>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand & Summary Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              {/* Animated H2H Monogram */}
              <div className="rounded-lg p-1 bg-white">
                <AnimatedMonogram className="h-7 w-7" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                How2<span className="text-[#A3A3A3]">Host</span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-[#A3A3A3] max-w-sm">
              How2Host builds high-performance websites, helps organizations strengthen their security, and develops technology solutions designed for real-world business needs.
            </p>
            <div className="mt-6 flex items-center gap-4 text-xs text-[#A3A3A3]">
              <span>Founder: {companyConfig.founder}</span>
              <span>·</span>
              <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 text-[11px] text-white">
                Hosting Solutions — Coming Soon
              </span>
            </div>
          </div>

          {/* Navigation Links with Underline Transitions */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#A3A3A3]">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Services Overview", href: "/services" },
                { label: "Projects & Portfolio", href: "/projects" },
                { label: "About How2Host", href: "/about" },
                { label: "Updates & Roadmap", href: "/updates" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-1 text-[#D1D5DB] hover:text-white transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dedicated Services Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#A3A3A3]">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/services/web-development" className="text-[#D1D5DB] hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurity" className="text-[#D1D5DB] hover:text-white transition-colors">
                  Cybersecurity & Pentesting
                </Link>
              </li>
              <li>
                <Link to="/services/technology-solutions" className="text-[#D1D5DB] hover:text-white transition-colors">
                  Business Tech Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/hosting" className="text-[#D1D5DB] hover:text-white transition-colors flex items-center gap-2">
                  <span>Hosting Solutions</span>
                  <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-white/80">Soon</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Inquiries & Brand Icons */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#A3A3A3]">
              Direct Inquiries
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${companyConfig.contact.email}`}
                  className="text-[#D1D5DB] hover:text-white transition-colors break-all"
                >
                  {companyConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={companyConfig.contact.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D1D5DB] hover:text-white transition-colors"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-[#25D366]" />
                  <span>WhatsApp: {companyConfig.contact.phoneFormatted}</span>
                </a>
              </li>
              <li className="pt-2">
                <div className="flex items-center gap-3">
                  {/* GitHub Brand Accent */}
                  <a
                    href={companyConfig.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-[#E6E6E6] hover:border-white hover:text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  {/* LinkedIn Brand Accent */}
                  <a
                    href={companyConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all hover:scale-105 active:scale-95"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  {/* WhatsApp Brand Accent */}
                  <a
                    href={companyConfig.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all hover:scale-105 active:scale-95"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.04 2a9.9 9.9 0 0 0-8.57 14.87L2 22l5.27-1.38A9.9 9.9 0 1 0 12.04 2zm0 1.67a8.23 8.23 0 1 1-4.2 15.3l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1 6.99-12.59zm-3.3 4.16c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.68 2.66 4.14 3.62 2.05.8 2.46.64 2.91.6.45-.04 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.4-.54-.41l-.46-.01z" />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Return to Top */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A3A3A3]">
          <p>© {currentYear} How2Host. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            {/* Subtle Return-to-Top Control */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#D1D5DB] hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

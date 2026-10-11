import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ServiceVisualArt } from "./ServiceVisualArt";
import type { ServiceItem } from "../data/servicesData";

export function ServiceCard({ service }: { service: ServiceItem }) {
  const isDark = service.isComingSoon;
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={false}
      animate={
        reduceMotion
          ? {}
          : {
              y: hovered ? -6 : 0,
              boxShadow: hovered
                ? isDark
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.7)"
                  : "0 25px 45px -12px rgba(0, 0, 0, 0.12)"
                : isDark
                ? "0 10px 30px -10px rgba(0, 0, 0, 0.5)"
                : "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
            }
      }
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col justify-between rounded-2xl border transition-colors duration-300 ${
        isDark
          ? "border-[#262626] bg-[#111111] text-white"
          : "border-[#E6E6E6] bg-white text-[#111111] hover:border-[#111111]/40"
      }`}
    >
      <div className="p-7 sm:p-8">
        {/* Layered Visual Header with Controlled Perspective Shift */}
        <div
          className={`relative mb-8 flex h-52 w-full items-center justify-center overflow-hidden rounded-xl border p-4 ${
            isDark ? "border-white/10 bg-[#161616]" : "border-[#E6E6E6] bg-[#F7F7F5]"
          }`}
          style={{ perspective: "1000px" }}
        >
          {/* Subtle animated background grid line */}
          <motion.div
            animate={{ opacity: hovered ? 0.8 : 0.3 }}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#9CA3AF_1px,transparent_1px)] [background-size:16px_16px]"
          />

          {/* Foreground Illustration - Shifts slightly on hover */}
          <motion.div
            animate={
              reduceMotion
                ? {}
                : {
                    scale: hovered ? 1.03 : 1,
                    y: hovered ? -3 : 0,
                  }
            }
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full flex items-center justify-center relative z-10"
          >
            <ServiceVisualArt kind={service.visualType} />
          </motion.div>

          {service.isComingSoon && (
            <div className="absolute top-3 right-3 z-20 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              Coming Soon
            </div>
          )}
        </div>

        {/* Headings */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
          {service.title}
        </h3>
        <p className={`mt-1 text-xs font-semibold uppercase tracking-wider ${isDark ? "text-[#A3A3A3]" : "text-[#666666]"}`}>
          {service.subtitle}
        </p>

        {/* Description */}
        <p className={`mt-4 text-sm leading-relaxed ${isDark ? "text-[#D1D5DB]" : "text-[#4B5563]"}`}>
          {service.description}
        </p>

        {/* Deliverables */}
        <div className="mt-6 border-t border-current/10 pt-5">
          <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? "text-[#A3A3A3]" : "text-[#666666]"}`}>
            Key Capabilities
          </p>
          <ul className="space-y-2 text-xs">
            {service.deliverables.slice(0, 4).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2
                  className={`h-4 w-4 shrink-0 mt-0.5 ${
                    isDark ? "text-white" : "text-[#111111]"
                  }`}
                />
                <span className={isDark ? "text-[#E5E7EB]" : "text-[#374151]"}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Footer with Animated Arrow Shift */}
      <div
        className={`flex items-center justify-between border-t px-7 py-4 sm:px-8 ${
          isDark ? "border-white/10 bg-[#161616]" : "border-[#E6E6E6] bg-[#F7F7F5]"
        }`}
      >
        <Link
          to={`/services/${service.slug}`}
          className={`group/btn inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
            isDark ? "text-white hover:text-white/80" : "text-[#111111] hover:text-[#4B5563]"
          }`}
        >
          <span>View Details</span>
          <motion.span
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </motion.span>
        </Link>
        <Link
          to={service.ctaLink}
          className={`rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-transform active:scale-95 ${
            isDark
              ? "bg-white text-[#111111] hover:bg-[#F3F4F6]"
              : "bg-[#111111] text-white hover:bg-[#262626]"
          }`}
        >
          {service.ctaText}
        </Link>
      </div>
    </motion.article>
  );
}

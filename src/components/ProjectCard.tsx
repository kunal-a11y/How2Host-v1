import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "../data/projectsData";

export function ProjectCard({ project }: { project: ProjectItem }) {
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
                ? "0 25px 45px -12px rgba(0, 0, 0, 0.12)"
                : "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
            }
      }
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col justify-between rounded-2xl border border-[#E6E6E6] bg-white p-6 sm:p-7 transition-colors hover:border-[#111111]/40"
    >
      <div>
        {/* Project Thumbnail with Controlled Scale & Mask Reveal */}
        <div className="relative mb-6 h-56 w-full overflow-hidden rounded-xl border border-[#E6E6E6] bg-[#F7F7F5] flex items-center justify-center">
          <motion.div
            animate={reduceMotion ? {} : { scale: hovered ? 1.04 : 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            {project.slug === "waffcoff" ? (
              <div className="relative w-full h-full p-5 flex flex-col justify-between bg-gradient-to-br from-[#111111] to-[#262626] text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#A3A3A3]">
                    WaffCoff · QR Menu
                  </span>
                  <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-white font-medium">
                    Live Concept
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-bold tracking-tight">Artisan Coffee &amp; Waffles</p>
                  <p className="text-xs text-[#A3A3A3]">Digital Smartphone Browsing Experience</p>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-white/10 text-[11px] text-[#D1D5DB]">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  <span>Instant Mobile Load · Zero App Downloads</span>
                </div>
              </div>
            ) : project.slug === "bakersway" ? (
              <div className="relative w-full h-full p-5 flex flex-col justify-between bg-[#F7F7F5] text-[#111111]">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#666666]">
                    BakersWay · Showcase
                  </span>
                  <span className="rounded bg-[#111111]/5 px-2 py-0.5 text-[10px] text-[#111111] font-medium">
                    Verified Case
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-bold tracking-tight">Confectionery &amp; Bakery</p>
                  <p className="text-xs text-[#666666]">Catalog &amp; Direct Order Pathways</p>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-[#E6E6E6] text-[11px] text-[#4B5563]">
                  <span className="h-2 w-2 rounded-full bg-[#111111]" />
                  <span>Responsive Visual Grid &amp; WhatsApp Integration</span>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full p-5 flex flex-col justify-between bg-[#111111] text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#A3A3A3]">
                    Security Assessment
                  </span>
                  <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-white font-medium">
                    Confidential
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-bold tracking-tight">Web Application Pentest</p>
                  <p className="text-xs text-[#A3A3A3]">Authorized Vulnerability Identification</p>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-white/10 text-[11px] text-[#D1D5DB]">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  <span>Written Authorization · Defined Scope</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Category Label */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#666666]">
            {project.category}
          </span>
          {project.statusLabel && (
            <span className="rounded-full border border-[#E6E6E6] bg-[#F7F7F5] px-2.5 py-0.5 text-[10px] font-medium text-[#111111]">
              {project.statusLabel}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mt-2 text-xl font-bold tracking-tight text-[#111111]">
          {project.name}
        </h3>

        {/* Summary */}
        <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
          {project.overview}
        </p>

        {/* Delivered Capabilities */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.servicesDelivered.slice(0, 3).map((s, idx) => (
            <span
              key={idx}
              className="rounded-md bg-[#F7F7F5] px-2.5 py-1 text-[11px] font-medium text-[#4B5563]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Case Study Link with Directional Arrow Physics */}
      <div className="mt-6 border-t border-[#E6E6E6] pt-4">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111111] transition-colors hover:text-[#4B5563]"
        >
          <span>View Case Study</span>
          <motion.span
            animate={{
              x: hovered ? 3 : 0,
              y: hovered ? -3 : 0,
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </motion.span>
        </Link>
      </div>
    </motion.article>
  );
}

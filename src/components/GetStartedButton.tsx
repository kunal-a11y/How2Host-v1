import type { ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

export function GetStartedButton({
  children = "Get Your Website",
  href = "#contact",
  full = false,
}: {
  children?: ReactNode;
  href?: string;
  full?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-b from-accent-300 to-accent-500 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-[0_10px_30px_-10px_rgba(69,200,170,0.55)] transition-all duration-300 hover:shadow-[0_16px_40px_-12px_rgba(69,200,170,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400 ${
        full ? "w-full py-3.5 text-base" : ""
      }`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full motion-reduce:transition-none"
      />
      <span className="relative">{children}</span>
      <svg
        className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d={reduce ? "M3 8h10" : "M3 8h10M9 4l4 4-4 4"}
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

/**
 * Realistic browser "device" frame.
 *
 * Renders believable chrome around any scene, with glass sheen, a soft floor
 * reflection and physical-feeling depth so frames read as floating objects.
 */
import type { ReactNode } from "react";

export function BrowserFrame({
  url,
  children,
  className = "",
  reflection = true,
  aspect = "16 / 10.4",
}: {
  url: string;
  children: ReactNode;
  className?: string;
  reflection?: boolean;
  /** CSS aspect-ratio of the viewport, e.g. "16 / 10.4" or "1918 / 826". */
  aspect?: string;
}) {
  return (
    <div className={`group relative ${className}`}>
      <div
        className="relative overflow-hidden rounded-xl border border-white/[0.12] bg-[#0d0d13] shadow-float-lg ring-1 ring-black/40"
        role="img"
        aria-label={`Website preview — ${url}`}
      >
        {/* chrome */}
        <div className="relative flex items-center gap-2 border-b border-white/[0.07] bg-gradient-to-b from-white/[0.09] to-white/[0.03] px-3.5 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] shadow-[inset_0_0_2px_rgba(0,0,0,0.4)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e] shadow-[inset_0_0_2px_rgba(0,0,0,0.4)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840] shadow-[inset_0_0_2px_rgba(0,0,0,0.4)]" />
          <span className="ml-2 flex flex-1 items-center gap-1.5 truncate rounded-md bg-black/45 px-3 py-1 text-[10px] leading-none text-mist-400 ring-1 ring-white/[0.06]">
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="shrink-0 text-emerald-400">
              <rect x="2" y="4.4" width="6" height="4.6" rx="1" fill="currentColor" />
              <path d="M3.4 4.4V3.2a1.6 1.6 0 0 1 3.2 0v1.2" stroke="currentColor" strokeWidth="1.1" fill="none" />
            </svg>
            <span className="truncate">{url}</span>
          </span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="text-white/30">
            <path d="M4 2.5 7.5 6 4 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>

        {/* viewport */}
        <div className="relative bg-[#101014]" style={{ aspectRatio: aspect }}>{children}</div>

        {/* glass sheen across the whole frame */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_22%,transparent_38%,transparent_78%,rgba(255,255,255,0.05)_100%)]"
        />
        {/* inner top highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
        />
      </div>

      {/* floor reflection */}
      {reflection && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-full h-16 origin-top scale-y-[-1] overflow-hidden rounded-b-xl opacity-[0.14] [mask-image:linear-gradient(to_top,transparent_10%,black_85%)]"
        >
          <div className="h-[400%] w-full -scale-y-100 bg-gradient-to-b from-white/25 to-transparent blur-[2px]" />
        </div>
      )}
    </div>
  );
}

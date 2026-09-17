/**
 * Service artwork — sophisticated line-art SVG scenes themed to each service
 * (servers, globe, shield, gears, gauge, layered browsers).
 *
 * These are ILLUSTRATIONS of infrastructure — intentionally NOT website
 * screenshots. Strokes are white/20–35 with accent highlights; motion is
 * subtle (blinking LEDs, flowing dashes, sweeping needle, slow rotation).
 * All animations respect the global prefers-reduced-motion override.
 */

type ArtKind = "site" | "hosting" | "domain" | "security" | "maintenance" | "performance";

/** Backdrop shared by all six scenes: faint grid + accent corner glow. */
function ArtBackdrop() {
  return (
    <>
      <defs>
        <pattern id="sgrid" width="22" height="22" patternUnits="userSpaceOnUse">
          <path d="M22 0H0V22" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </pattern>
        <radialGradient id="sglow" cx="50%" cy="100%" r="80%">
          <stop offset="0%" stopColor="#2ba88e" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#2ba88e" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="200" fill="url(#sgrid)" />
      <rect width="400" height="200" fill="url(#sglow)" />
    </>
  );
}

const stroke = "rgba(255,255,255,0.32)";
const faint = "rgba(255,255,255,0.14)";
const bright = "#45c8aa";

/* ------------------------------- 01 · site ------------------------------- */

function SiteArt() {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="h-full w-full" aria-hidden="true">
      <ArtBackdrop />
      {/* rear browser */}
      <g transform="translate(150 34) rotate(3)">
        <rect width="230" height="130" rx="10" fill="#101016" stroke={faint} strokeWidth="1.5" />
        <path d="M0 22h230" stroke={faint} />
        <circle cx="14" cy="11" r="3" stroke={faint} />
        <circle cx="26" cy="11" r="3" stroke={faint} />
        <rect x="52" y="6" width="120" height="10" rx="5" stroke={faint} />
      </g>
      {/* front browser */}
      <g transform="translate(96 62) rotate(-2)">
        <rect
          width="220"
          height="122"
          rx="10"
          fill="#0d0d13"
          stroke={stroke}
          strokeWidth="1.5"
          style={{ filter: "drop-shadow(0 14px 24px rgba(0,0,0,0.5))" }}
        />
        <path d="M0 22h220" stroke={stroke} />
        <circle cx="14" cy="11" r="3" stroke={bright} />
        <circle cx="26" cy="11" r="3" stroke={stroke} />
        <circle cx="38" cy="11" r="3" stroke={stroke} />
        <rect x="56" y="6" width="110" height="10" rx="5" stroke={stroke} />
        <path d="M20 44h96M20 58h64" stroke={faint} strokeWidth="5" strokeLinecap="round" />
        <rect x="150" y="40" width="50" height="26" rx="4" stroke={bright} strokeWidth="1.5" />
        <path d="M20 86h180M20 100h180" stroke={faint} />
        <rect x="20" y="86" width="76" height="14" fill="rgba(69,200,170,0.18)" />
      </g>
      {/* build ticks */}
      <g className="animate-led" style={{ animationDelay: "0.4s" }}>
        <rect x="332" y="152" width="26" height="4" rx="2" fill={bright} opacity="0.8" />
      </g>
      <g className="animate-led" style={{ animationDelay: "0.9s" }}>
        <rect x="364" y="152" width="18" height="4" rx="2" fill={bright} opacity="0.55" />
      </g>
    </svg>
  );
}

/* ----------------------------- 02 · hosting ------------------------------ */

function HostingArt() {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="h-full w-full" aria-hidden="true">
      <ArtBackdrop />
      {/* stacked racks */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(112 ${40 + i * 46})`}>
          <rect width="176" height="38" rx="8" fill="#101016" stroke={stroke} strokeWidth="1.5" />
          <circle cx="18" cy="19" r="4" fill={i === 1 ? "#45c8aa" : "rgba(69,200,170,0.35)"} className="animate-led" style={{ animationDelay: `${i * 0.55}s` }} />
          <path d="M36 13h64M36 25h44" stroke={faint} strokeWidth="4" strokeLinecap="round" />
          <path
            d={`M118 ${19 - 8}h${26 + i * 8}`}
            stroke={bright}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeDasharray="3 9"
            className="animate-dash-flow"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
          <circle cx="158" cy="19" r="4" stroke={faint} />
        </g>
      ))}
      {/* uplink to cloud */}
      <path d="M212 30c14-22 42-22 56-6 16-8 34 2 32 18" stroke={bright} strokeWidth="1.5" strokeDasharray="4 10" strokeLinecap="round" className="animate-dash-flow" />
      <g transform="translate(262 12)">
        <path
          d="M14 28C5 28 0 22 0 16 0 9 6 5 12 6 14 1 22-1 28 3c7-4 16 0 17 8 6 1 10 6 10 11 0 4-3 6-8 6H14z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

/* ------------------------------ 03 · domain ------------------------------ */

function DomainArt() {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="h-full w-full" aria-hidden="true">
      <ArtBackdrop />
      {/* globe */}
      <g transform="translate(118 44)">
        <circle cx="70" cy="70" r="58" stroke={stroke} strokeWidth="1.5" />
        <ellipse cx="70" cy="70" rx="26" ry="58" stroke={faint} />
        <ellipse cx="70" cy="70" rx="58" ry="22" stroke={faint} />
        <path d="M12 70h116" stroke={faint} />
        <circle cx="70" cy="70" r="58" stroke={bright} strokeWidth="1.2" strokeDasharray="3 11" strokeLinecap="round" className="animate-dash-flow" opacity="0.9" />
        <circle cx="126" cy="46" r="4.5" fill={bright} className="animate-led" />
      </g>
      {/* address bar chip */}
      <g transform="translate(280 84)">
        <rect width="86" height="30" rx="15" fill="#0d0d13" stroke={stroke} strokeWidth="1.5" />
        <circle cx="15" cy="15" r="3.5" fill="none" stroke={bright} strokeWidth="1.5" />
        <path d="M15 11.5a3.5 3.5 0 0 1 0 7" stroke={bright} strokeWidth="1.5" />
        <path d="M28 15h44" stroke={faint} strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/* ----------------------------- 04 · security ----------------------------- */

function SecurityArt() {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="h-full w-full" aria-hidden="true">
      <ArtBackdrop />
      {/* shield */}
      <g transform="translate(146 30)">
        <path
          d="M54 0 104 18v34c0 30-21 52-50 62C25 104 4 82 4 52V18L54 0z"
          fill="rgba(69,200,170,0.06)"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M54 8 96 23v29c0 26-18 45-42 54-24-9-42-28-42-54V23L54 8z" stroke={faint} />
        {/* check */}
        <path d="m36 52 13 13 24-26" stroke={bright} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        {/* keyhole */}
        <circle cx="54" cy="86" r="4" stroke={faint} />
        <path d="M54 90v8" stroke={faint} strokeLinecap="round" />
        {/* orbiting scan */}
        <path d="M54 -6a60 60 0 0 1 60 60" stroke={bright} strokeWidth="1.4" strokeDasharray="4 12" strokeLinecap="round" className="animate-dash-flow" opacity="0.85" />
      </g>
      {/* lock chip */}
      <g transform="translate(296 118)">
        <rect width="42" height="34" rx="8" fill="#0d0d13" stroke={stroke} strokeWidth="1.5" />
        <rect x="13" y="14" width="16" height="12" rx="3" stroke={bright} strokeWidth="1.5" />
        <path d="M16.5 14v-3.5a4.5 4.5 0 0 1 9 0V14" stroke={bright} strokeWidth="1.5" />
      </g>
    </svg>
  );
}

/* ---------------------------- 05 · maintenance --------------------------- */

function MaintenanceArt() {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="h-full w-full" aria-hidden="true">
      <ArtBackdrop />
      {/* big gear */}
      <g transform="translate(196 96)">
        <g className="animate-spin-slow" style={{ transformOrigin: "0px 0px" }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <rect key={i} x="-3.5" y="-52" width="7" height="14" rx="2" stroke={stroke} fill="#101016" transform={`rotate(${i * 45})`} />
          ))}
          <circle r="38" stroke={stroke} strokeWidth="1.5" fill="#101016" />
          <circle r="16" stroke={faint} />
          <circle r="4" fill={bright} opacity="0.9" />
        </g>
      </g>
      {/* small gear */}
      <g transform="translate(268 128)">
        <g className="animate-spin-slow" style={{ transformOrigin: "0px 0px", animationDirection: "reverse", animationDuration: "9s" }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <rect key={i} x="-3" y="-38" width="6" height="10" rx="2" stroke={faint} fill="#101016" transform={`rotate(${i * 45 + 22.5})`} />
          ))}
          <circle r="27" stroke={faint} strokeWidth="1.5" fill="#101016" />
          <circle r="10" stroke={faint} />
        </g>
      </g>
      {/* wrench */}
      <g transform="translate(104 58) rotate(-18)">
        <path
          d="M14 4a11 11 0 0 0-13 13l30 30 8-8-30-30a11 11 0 0 1 5-5z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M32 38 56 62" stroke={bright} strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* activity pulse */}
      <path d="M300 52h14l6-12 8 26 6-14h14" stroke={bright} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="animate-led" style={{ animationDuration: "2.8s" }} />
    </svg>
  );
}

/* ---------------------------- 06 · performance --------------------------- */

function PerformanceArt() {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="h-full w-full" aria-hidden="true">
      <ArtBackdrop />
      {/* gauge */}
      <g transform="translate(112 108)">
        <path d="M-64 0a64 64 0 0 1 128 0" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M-64 0a64 64 0 0 1 128 0" stroke={faint} strokeWidth="6" strokeLinecap="round" fill="none" transform="scale(0.86)" />
        {[-60, -30, 0, 30, 60].map((a) => (
          <path key={a} d="M0 -54v8" stroke={faint} transform={`rotate(${a})`} />
        ))}
        <g className="animate-gauge-sweep" style={{ transformOrigin: "0px 0px" }}>
          <path d="M0 0 -42 -30" stroke={bright} strokeWidth="2" strokeLinecap="round" />
          <circle r="4.5" fill={bright} />
        </g>
        <path d="M-64 0a64 64 0 0 1 64 -64" stroke={bright} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.55" />
      </g>
      {/* signal bars */}
      <g transform="translate(252 118)">
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={i * 13}
            y={30 - i * 9}
            width="8"
            height={6 + i * 9}
            rx="2"
            stroke={i === 3 ? bright : faint}
            fill={i === 3 ? "rgba(69,200,170,0.2)" : "none"}
            strokeWidth="1.4"
            className="animate-led"
            style={{ animationDelay: `${i * 0.3}s`, animationDuration: "2.4s" }}
          />
        ))}
      </g>
      {/* bolt */}
      <path d="M232 42 216 66h12l-6 20 20-26h-12l8-18h-6z" stroke={bright} strokeWidth="1.5" strokeLinejoin="round" fill="rgba(69,200,170,0.08)" />
    </svg>
  );
}

/* --------------------------------- map ----------------------------------- */

const art: Record<ArtKind, () => JSX.Element> = {
  site: SiteArt,
  hosting: HostingArt,
  domain: DomainArt,
  security: SecurityArt,
  maintenance: MaintenanceArt,
  performance: PerformanceArt,
};

export function ServiceArt({ kind }: { kind: ArtKind }) {
  const Art = art[kind];
  return <Art />;
}

export type { ArtKind };

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="h2h-logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7dd8c3" />
          <stop offset="1" stopColor="#1f8f7c" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="#0e0e14" stroke="url(#h2h-logo-g)" strokeOpacity="0.5" />
      <path d="M9 23V9h3.2v5.2h7.6V9H23v14h-3.2v-5.6h-7.6V23z" fill="url(#h2h-logo-g)" />
      <circle cx="24.4" cy="7.6" r="2.1" fill="#45c8aa" />
    </svg>
  );
}

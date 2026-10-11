export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      focusable="false"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Precision geometric H2H monogram emblem */}
      <rect width="32" height="32" rx="7" fill="#111111" />
      {/* Outer frame hairline */}
      <rect x="0.5" y="0.5" width="31" height="31" rx="6.5" stroke="#FFFFFF" strokeOpacity="0.15" />
      {/* Refined H geometry */}
      <path
        d="M8.5 22V10H11.5V14.6H14.5V10H17.5V22H14.5V17H11.5V22H8.5Z"
        fill="#FFFFFF"
      />
      {/* Subtle modern accent dot / server node indicator */}
      <circle cx="23.5" cy="11.5" r="2.2" fill="#FFFFFF" />
      <path
        d="M20 22V19.5H23.5V17H21V14.5H25V19.5H22V22H25.5V22H20Z"
        fill="#E6E6E6"
      />
    </svg>
  );
}

/** Night Archive style reminder: the threshold mark is a quiet archival signature, never a decorative flourish. */
type TempleMarkProps = {
  size?: number;
  className?: string;
};

export function TempleMark({ size = 38, className = "" }: TempleMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Eternal Heritage threshold mark"
      width={size}
      height={size}
      className={`temple-mark ${className}`}
    >
      <title>Eternal Heritage threshold mark</title>
      <g fill="none" stroke="currentColor" strokeWidth="3">
        <circle cx="32" cy="32" r="25" />
        <circle cx="32" cy="32" r="16" />
        <path d="M32 7v50M7 32h50M14.3 14.3l35.4 35.4M49.7 14.3 14.3 49.7" />
      </g>
      <circle cx="32" cy="32" r="5" fill="currentColor" />
    </svg>
  );
}

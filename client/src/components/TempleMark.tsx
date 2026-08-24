/** Night Archive style reminder: the threshold mark is a quiet archival signature, never a decorative flourish. */
import { archiveArt } from "@/data/temples";

type TempleMarkProps = {
  size?: number;
  className?: string;
};

export function TempleMark({ size = 38, className = "" }: TempleMarkProps) {
  return (
    <img
      src={archiveArt.mark}
      alt="Eternal Heritage threshold mark"
      width={size}
      height={size}
      className={`temple-mark ${className}`}
    />
  );
}

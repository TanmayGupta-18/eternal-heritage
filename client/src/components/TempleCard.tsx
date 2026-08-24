/** Night Archive style reminder: archive cards are photographic field notes with modest gold orientation cues. */
import { MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import type { Temple } from "@/data/temples";

export function TempleCard({ temple }: { temple: Temple }) {
  const cardContents = (includeCredit: boolean) => (
    <>
      <div className="temple-card__image-wrap">
        <img src={temple.image} alt={temple.imageAlt} className="temple-card__image" />
        <div className="temple-card__scrim" />
        <span className="temple-card__number">Archive / 0{temple.name === "Meenakshi Amman" ? "1" : temple.name === "Konark Sun Temple" ? "2" : "3"}</span>
      </div>
      <div className="temple-card__body">
        <p className="eyebrow eyebrow--compact"><MapPin size={13} /> {temple.location}</p>
        <h3>{temple.name}</h3>
        <span className="temple-card__rule" />
        <p className="temple-card__summary">{temple.summary}</p>
        <div className="temple-card__foot">
          {temple.slug ? (
            <span className="temple-card__open">Enter archive <ArrowUpRight size={15} /></span>
          ) : (
            <span className="temple-card__status">{temple.status}</span>
          )}
          {includeCredit && (
            <a href={temple.sourceUrl} target="_blank" rel="noreferrer" className="temple-card__credit">
              Image credit
            </a>
          )}
        </div>
      </div>
    </>
  );

  if (temple.slug) {
    return (
      <article className="temple-card temple-card--link">
        <Link href={temple.slug} className="temple-card__main-link" aria-label={`Open the ${temple.name} archive entry`}>
          {cardContents(false)}
        </Link>
        <a href={temple.sourceUrl} target="_blank" rel="noreferrer" className="temple-card__credit temple-card__credit--external">
          Image credit
        </a>
      </article>
    );
  }

  return <article className="temple-card">{cardContents(true)}</article>;
}

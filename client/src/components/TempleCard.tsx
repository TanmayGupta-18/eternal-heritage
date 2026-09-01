/** Night Archive style reminder: archive cards are photographic field notes with modest gold orientation cues. */
import { MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import type { Temple } from "@/data/temples";
import { useLanguage } from "@/contexts/LanguageContext";
import { VoiceGuide } from "@/components/VoiceGuide";

export function TempleCard({ temple }: { temple: Temple }) {
  const { t } = useLanguage();
  const cardContents = (includeCredit: boolean) => (
    <>
      <div className="temple-card__image-wrap">
        <img src={temple.image} alt={t(temple.imageAlt)} className="temple-card__image" />
        <div className="temple-card__scrim" />
        <span className="temple-card__number">Archive / 0{temple.name === "Meenakshi Amman" ? "1" : temple.name === "Konark Sun Temple" ? "2" : "3"}</span>
      </div>
      <div className="temple-card__body">
        <p className="eyebrow eyebrow--compact"><MapPin size={13} /> {t(temple.location)}</p>
        <h3>{t(temple.name)}</h3>
        <span className="temple-card__rule" />
        <p className="temple-card__summary">{t(temple.summary)}</p>
        {includeCredit && <VoiceGuide title={t(temple.name)} text={t(temple.voiceDescription)} compact />}
        <div className="temple-card__foot">
          {temple.slug ? (
            <span className="temple-card__open">{t("Enter archive")} <ArrowUpRight size={15} /></span>
          ) : (
            <span className="temple-card__status">{t(temple.status ?? "Archive entry in preparation")}</span>
          )}
          {includeCredit && (
            <a href={temple.sourceUrl} target="_blank" rel="noreferrer" className="temple-card__credit">
              {t("Image credit")}
            </a>
          )}
        </div>
      </div>
    </>
  );

  if (temple.slug) {
    return (
      <article className="temple-card temple-card--link">
        <Link href={temple.slug} className="temple-card__main-link" aria-label={`${t("Enter archive")}: ${t(temple.name)}`}>
          {cardContents(false)}
        </Link>
        <VoiceGuide title={t(temple.name)} text={t(temple.voiceDescription)} compact />
        <a href={temple.sourceUrl} target="_blank" rel="noreferrer" className="temple-card__credit temple-card__credit--external">
          {t("Image credit")}
        </a>
      </article>
    );
  }

  return <article className="temple-card">{cardContents(true)}</article>;
}

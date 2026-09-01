/** Night Archive style reminder: this detail page is a spacious visual essay of authentic Meenakshi photography and restrained gold indexing. */
import { useEffect } from "react";
import { ArrowLeft, Columns3, Landmark, Orbit, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { archiveArt, templePhotography } from "@/data/temples";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { VoiceGuide } from "@/components/VoiceGuide";

const architectureStudies = [
  {
    icon: Orbit,
    title: "The Mandalas",
    text: "The temple is experienced as a sequence of nested thresholds: tank, courtyards, halls, shrines, and processional paths. Geometry here is lived through movement rather than encountered as an abstract diagram.",
  },
  {
    icon: Landmark,
    title: "The Gopurams",
    text: "Its gateway towers act as visible orientation points across the city. Their sculptural surfaces turn ascent into a dense public field of stories, guardians, and celestial figures.",
  },
  {
    icon: Columns3,
    title: "Aiyram Kaal",
    text: "The Thousand Pillar Hall is celebrated for its ordered forest of carved supports. The name describes a civic scale of gathering, craft, and visual rhythm rather than a single isolated monument.",
  },
];

export default function MeenakshiAmman() {
  const { t } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site-shell detail-page">
      <SiteHeader />
      <main>
        <section className="detail-hero">
          <img
            className="detail-hero__photo"
            src={templePhotography.meenakshiPond}
            alt="Meenakshi Amman Temple pond and gopurams in Madurai."
          />
          <img className="detail-hero__archive-sky" src={archiveArt.archiveSky} alt="" aria-hidden="true" />
          <div className="detail-hero__shade" />
          <div className="detail-hero__content container">
            <Link href="/" className="back-link">
              <ArrowLeft size={16} /> {t("Back to temples")}
            </Link>
            <div className="detail-hero__title-block">
              <p className="eyebrow">{t("Madurai, Tamil Nadu · Archive / 01")}</p>
              <h1>{t("Meenakshi")}<br /><em>{t("Amman")}</em></h1>
              <p className="detail-hero__lede">{t("A living temple city where devotion, water, sculpture, and monumental gateways compose the historic heart of Madurai.")}</p>
            </div>
          </div>
          <div className="detail-hero__vertical-note">
            <span>{t("A visual field guide to a living sacred complex")}</span>
            <VoiceGuide title={t("Meenakshi Amman")} text={t("Meenakshi voice explanation")} />
          </div>
        </section>

        <section className="detail-section container divine-section">
          <div className="divine-section__copy">
            <p className="eyebrow">{t("I. The Divine Presence")}</p>
            <h2>{t("At the center of")}<br /><em>{t("Madurai’s memory.")}</em></h2>
            <span className="gold-rule" />
            <p>
              {t("Meenakshi is revered as a form of Parvati, while Sundareswarar is Shiva in his local manifestation. Their paired shrines shape the temple’s devotional rhythm and its powerful sense of sacred reciprocity.")}
            </p>
            <p>
              {t("The experience is architectural as much as spiritual: passages gather into halls, filtered light falls across stone, and the complex unfolds through ceremony, study, commerce, and return.")}
            </p>
          </div>
          <figure className="editorial-figure editorial-figure--pillars">
            <img src={templePhotography.meenakshiPillars} alt="The richly ornamented corridor of the Thousand Pillar Hall at Meenakshi Temple." />
            <figcaption>{t("Thousand Pillar Hall · Madurai Meenakshi Temple")}</figcaption>
          </figure>
        </section>

        <section className="architecture-section" style={{ backgroundImage: `linear-gradient(rgba(10, 16, 27, 0.94), rgba(10, 16, 27, 0.97)), url(${archiveArt.mandala})` }}>
          <div className="container">
            <div className="section-heading section-heading--center">
              <p className="eyebrow">{t("II. Architectural Field Notes")}</p>
              <h2>{t("Sacred")} <em>{t("architecture")}</em></h2>
              <p>{t("The complex is best read as a sequence of thresholds, towers, circulation, and crafted stone—an architecture continually renewed by use.")}</p>
            </div>
            <div className="architecture-grid">
              {architectureStudies.map((study, index) => {
                const Icon = study.icon;
                return (
                  <article className="architecture-study" key={study.title}>
                    <span className="architecture-study__index">0{index + 1}</span>
                    <Icon size={25} strokeWidth={1.25} className="architecture-study__icon" />
                    <h3>{t(study.title)}</h3>
                    <p>{t(study.text)}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="detail-section container ritual-section">
          <figure className="editorial-figure editorial-figure--sculpture">
            <img src={templePhotography.meenakshiSculpture} alt="Stone sculpture in the Meenakshi Amman Temple, Madurai." />
            <figcaption>{t("Sculptural detail · Meenakshi Amman Temple")}</figcaption>
          </figure>
          <div className="ritual-section__copy">
            <p className="eyebrow">{t("III. Ritual & Ornamentation")}</p>
            <h2>{t("Adornment as")}<br /><em>{t("an act of presence.")}</em></h2>
            <span className="gold-rule" />
            <div className="ritual-note">
              <Sparkles size={19} strokeWidth={1.35} />
              <div>
                <p className="ritual-note__label">{t("The Thirukalyanam")}</p>
                <p>
                  {t("The ceremonial wedding of Meenakshi and Sundareswarar is the emotional high point of the Chithirai festival. It gathers theology, music, dress, procession, and public participation into a single seasonal event.")}
                </p>
              </div>
            </div>
            <p className="ritual-section__body">
              {t("Ornament is not simply surface at Meenakshi. Colour, metal, flowers, textiles, and illuminated stone make ritual visible—reframing the temple’s architecture for each occasion while retaining its enduring spatial order.")}
            </p>
          </div>
        </section>

        <section className="archive-coda" style={{ backgroundImage: `linear-gradient(90deg, rgba(9, 14, 24, 0.98), rgba(9, 14, 24, 0.64)), url(${archiveArt.bronzeStudy})` }}>
          <div className="container archive-coda__content">
            <p className="eyebrow">{t("Continue the archive")}</p>
            <h2>{t("Follow the stones")}<br />{t("into the")} <em>{t("collection.")}</em></h2>
            <Link href="/" className="coda-link">{t("Return to Indian temples")} <ArrowLeft size={16} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

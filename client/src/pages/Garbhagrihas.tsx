/** Night Archive style reminder: this sanctum page uses restraint, material darkness, and a quiet editorial pace rather than visual spectacle. */
import { useEffect } from "react";
import { ArrowLeft, CircleDotDashed, Flame, Frame, MoveRight, Orbit, RectangleVertical } from "lucide-react";
import { Link } from "wouter";
import { archiveArt, templePhotography } from "@/data/temples";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const sanctumStudies = [
  { icon: Frame, title: "A nested threshold", text: "The sanctum is reached through a sequence of increasingly concentrated spaces. Architecture makes the act of approach tangible." },
  { icon: RectangleVertical, title: "The weight of stone", text: "Its compact form and reduced light concentrate attention on mass, boundary, and the carved material of the shrine." },
  { icon: Orbit, title: "Cosmic orientation", text: "Temple planning connects spatial order to ritual direction, making the shrine a focused point within a larger sacred field." },
  { icon: CircleDotDashed, title: "The circumambulatory path", text: "Movement around the inner core gives the body a way to read stillness, repetition, and enclosure." },
];

export default function Garbhagrihas() {
  const { t } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site-shell archive-subpage sanctum-page">
      <SiteHeader />
      <main>
        <section className="sanctum-hero">
          <img src={templePhotography.hoysaleshwaraSanctum} alt="A stone sanctum inside the Hoysaleshwara Temple in Halebidu." className="sanctum-hero__photo" />
          <img src={archiveArt.archiveSky} alt="" aria-hidden="true" className="sanctum-hero__art" />
          <div className="sanctum-hero__shade" />
          <div className="container sanctum-hero__content">
            <Link href="/" className="back-link"><ArrowLeft size={16} /> {t("Back to temples")}</Link>
            <div className="sanctum-hero__title-block">
              <p className="eyebrow">{t("The innermost chamber · Archive / 03")}</p>
              <h1>{t("The")} <em>{t("Garbhagrihas")}</em></h1>
              <p>{t("Step into the sacred heart of the temple: an architecture of enclosure, directed attention, and quiet ritual presence.")}</p>
            </div>
          </div>
        </section>

        <section className="sanctum-legend container">
          <div className="sanctum-legend__copy">
            <p className="eyebrow">{t("I. The inner room")}</p>
            <h2>{t("Where the temple")}<br /><em>{t("becomes still.")}</em></h2>
            <span className="gold-rule" />
            <p>
              {t("The garbhagriha, literally the “womb chamber,” is the spatial core of a Hindu temple. Its deliberately contained scale gives the structure a gravitational center—one that anchors larger halls, gateways, and routes of circulation.")}
            </p>
            <p>
              {t("The experience shifts at the threshold. Light is reduced, sound is gathered, and the elaborate narratives of the exterior fall away in favour of a more concentrated encounter.")}
            </p>
          </div>
          <figure className="sanctum-legend__figure">
            <img src={archiveArt.stoneStudy} alt="An abstract close study of weathered dark granite texture." />
            <figcaption>{t("Stone, shadow, threshold")}</figcaption>
          </figure>
        </section>

        <section className="sanctum-marvels" style={{ backgroundImage: `linear-gradient(180deg, rgba(10, 16, 27, 0.95), rgba(10, 16, 27, 0.98)), url(${archiveArt.mandala})` }}>
          <div className="container">
            <div className="section-heading section-heading--center">
              <p className="eyebrow">{t("II. A concentrated architecture")}</p>
              <h2>{t("Architectural")} <em>{t("marvel")}</em></h2>
              <p>{t("Four ways to look closely at the small, potent core of a temple plan.")}</p>
            </div>
            <div className="sanctum-marvels__grid">
              {sanctumStudies.map((study, index) => {
                const Icon = study.icon;
                return (
                  <article className={`sanctum-study sanctum-study--${index + 1}`} key={study.title}>
                    <Icon size={index === 0 ? 34 : 28} strokeWidth={1.25} />
                    <span>0{index + 1}</span>
                    <h3>{t(study.title)}</h3>
                    <p>{t(study.text)}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="eternal-flame container">
          <div className="eternal-flame__panel">
            <Flame size={27} strokeWidth={1.2} />
            <p className="eyebrow">{t("III. The eternal flame")}</p>
            <h2>{t("Light held")}<br /><em>{t("in the dark.")}</em></h2>
            <span className="gold-rule" />
            <p>
              {t("Within the visual culture of the temple, a lamp does more than illuminate. Its small circle of light marks a moment of attention, revealing surface slowly and allowing darkness to retain its depth.")}
            </p>
            <p className="eternal-flame__note">{t("This page uses architectural studies rather than photographs of restricted ritual interiors.")}</p>
          </div>
          <div className="eternal-flame__image-wrap">
            <img src={archiveArt.bronzeStudy} alt="An abstract low-light study of aged bronze ritual metalwork." className="eternal-flame__image" />
          </div>
        </section>

        <section className="sanctum-coda" style={{ backgroundImage: `linear-gradient(90deg, rgba(9, 14, 24, 0.96), rgba(9, 14, 24, 0.55)), url(${templePhotography.hoysaleshwaraSanctum})` }}>
          <div className="container sanctum-coda__content">
            <p className="eyebrow">{t("Return to the archive")}</p>
            <h2>{t("Experience the")}<br /><em>{t("sanctum.")}</em></h2>
            <Link href="/" className="coda-link">{t("Explore the temple gallery")} <MoveRight size={16} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

/** Night Archive style reminder: this is a deep, atmospheric study of assembly halls—photographic, architectural, and quietly indexed in gold. */
import { useEffect } from "react";
import { ArrowDown, ArrowLeft, Columns3, Music2, PawPrint, Sparkles, Waypoints } from "lucide-react";
import { Link } from "wouter";
import { archiveArt, templePhotography } from "@/data/temples";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const hallNotes = [
  {
    icon: PawPrint,
    number: "01",
    title: "Pillar as presence",
    text: "Columns in a mandapa are more than supports. Their repeated spacing sets a rhythm for movement, gathering, and the gradual reading of carved surfaces.",
  },
  {
    icon: Music2,
    number: "02",
    title: "A measured pause",
    text: "The hall creates a shared interval between public court and inner shrine—a place where festivals, music, processions, and quiet waiting can take shape.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Carved encounter",
    text: "Close looking rewards the visitor: animal guardians, figures, and ornamental details animate the stone and make architectural scale feel intimate.",
  },
];

export default function Mandapas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site-shell archive-subpage mandapas-page">
      <SiteHeader />
      <main>
        <section className="assembly-hero">
          <img src={templePhotography.meenakshiMandapaCorridor} alt="A carved corridor leading to a mandapa at Meenakshi Amman Temple." className="assembly-hero__photo" />
          <img src={archiveArt.archiveSky} alt="" aria-hidden="true" className="assembly-hero__art" />
          <div className="assembly-hero__shade" />
          <div className="container assembly-hero__content">
            <Link href="/" className="back-link"><ArrowLeft size={16} /> Back to temples</Link>
            <div className="assembly-hero__title-block">
              <p className="eyebrow">Architectural marvels · Archive / 02</p>
              <h1>Mandapas</h1>
              <p>Enter the halls of assembly, where processional movement, crafted stone, and shared ceremony give architecture its social life.</p>
            </div>
            <a href="#pillar-halls" className="assembly-hero__scroll">Read the study <ArrowDown size={16} /></a>
          </div>
        </section>

        <section className="pillar-halls container" id="pillar-halls">
          <figure className="pillar-halls__figure">
            <img src={templePhotography.meenakshiPillars} alt="A richly detailed passage through the Thousand Pillar Hall at Meenakshi Temple." />
            <figcaption>Ayiram Kaal Mandapam · Madurai</figcaption>
          </figure>
          <div className="pillar-halls__copy">
            <p className="eyebrow">I. Architectural Marvels</p>
            <h2>The <em>pillar halls</em></h2>
            <span className="gold-rule" />
            <p>
              Mandapas are the expansive, columned rooms that make the temple a place of assembly. They absorb the scale of festivals and daily passage, while offering a deliberate transition toward more restricted inner spaces.
            </p>
            <p>
              Their visual force lies in recurrence. One support leads to another; open bays frame fragments of light; intricate carving keeps the eye moving even as the body slows.
            </p>
          </div>
        </section>

        <section className="thousand-hall" style={{ backgroundImage: `linear-gradient(180deg, rgba(8, 13, 22, 0.92), rgba(8, 13, 22, 0.98)), url(${archiveArt.mandala})` }}>
          <div className="container">
            <div className="section-heading section-heading--center">
              <p className="eyebrow">II. A field note from Madurai</p>
              <h2>Ayiram Kaal <em>Mandapam</em></h2>
              <p>A study in density, repetition, and the visual tempo of stone.</p>
            </div>
            <div className="thousand-hall__grid">
              <div className="hall-note-stack">
                {hallNotes.slice(0, 1).map((note) => <HallNote note={note} key={note.title} />)}
                <div className="hall-note hall-note--quiet">
                  <Waypoints size={24} strokeWidth={1.35} />
                  <span className="hall-note__number">04</span>
                  <h3>Wayfinding in stone</h3>
                  <p>The order of the hall offers orientation without signage, guiding the visitor through structural rhythm and framed sightlines.</p>
                </div>
              </div>
              <figure className="thousand-hall__image">
                <img src={templePhotography.meenakshiMandapaCorridor} alt="A long corridor of sculpted columns at Meenakshi Amman Temple." />
                <figcaption>A corridor toward the mandapa</figcaption>
              </figure>
              <div className="hall-note-stack hall-note-stack--right">
                {hallNotes.slice(1).map((note) => <HallNote note={note} key={note.title} />)}
              </div>
            </div>
          </div>
        </section>

        <section className="hall-hierarchy container">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">III. Sequence and scale</p>
            <h2>The hierarchy of <em>halls</em></h2>
          </div>
          <div className="hall-hierarchy__grid">
            <article className="hall-hierarchy__feature" style={{ backgroundImage: `linear-gradient(0deg, rgba(9, 14, 24, 0.97), rgba(9, 14, 24, 0.18)), url(${archiveArt.stoneStudy})` }}>
              <p className="eyebrow">Main hall</p>
              <h3>Maha Mandapa</h3>
              <p>The larger public hall, where the approach slows and the community gathers before the more focused spaces of worship.</p>
            </article>
            <article className="hall-hierarchy__aside">
              <PawPrint size={32} strokeWidth={1.2} />
              <p className="eyebrow">Pavilion</p>
              <h3>Nandi Mandapa</h3>
              <p>A separate, often axial pavilion that becomes a visual and ceremonial hinge in a Shaiva temple complex.</p>
            </article>
            <article className="hall-hierarchy__threshold" style={{ backgroundImage: `linear-gradient(90deg, rgba(9, 14, 24, 0.88), rgba(9, 14, 24, 0.6)), url(${archiveArt.bronzeStudy})` }}>
              <p className="eyebrow">Ante-chamber</p>
              <h3>Ardha Mandapa</h3>
              <p>The smaller transitional room that tunes attention before the threshold of the sanctum.</p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function HallNote({ note }: { note: (typeof hallNotes)[number] }) {
  const Icon = note.icon;
  return (
    <article className="hall-note">
      <Icon size={24} strokeWidth={1.35} />
      <span className="hall-note__number">{note.number}</span>
      <h3>{note.title}</h3>
      <p>{note.text}</p>
    </article>
  );
}

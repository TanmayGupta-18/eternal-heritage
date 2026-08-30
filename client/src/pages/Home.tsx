/** Night Archive style reminder: the home route is an asymmetric, photographic archive corridor with restrained gilded wayfinding. */
import { useEffect, useMemo, useState } from "react";
import { ArrowDown, BookOpenText, Compass, SlidersHorizontal } from "lucide-react";
import { archiveArt, templePhotography, temples } from "@/data/temples";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TempleCard } from "@/components/TempleCard";

const filterOptions = {
  state: ["All states", "Tamil Nadu", "Odisha", "Uttarakhand"],
  deity: ["All deities", "Meenakshi & Sundareswarar", "Surya", "Shiva"],
  style: ["All styles", "Dravidian", "Kalinga", "Himalayan stone tradition"],
};

export default function Home() {
  // The useAuth hook provides authentication state.
  // To implement login/logout, call logout(), or start login from an event
  // handler: onClick={() => startLogin()} (imported from "@/const"). Never call
  // startLogin() during render (no href={startLogin()}) — it mints a one-time
  // nonce cookie and must run only at the moment of navigation.
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [stateFilter, setStateFilter] = useState("All states");
  const [deityFilter, setDeityFilter] = useState("All deities");
  const [styleFilter, setStyleFilter] = useState("All styles");

  useEffect(() => {
    const scrollToRequestedSection = () => {
      const section = new URLSearchParams(window.location.hash.split("?")[1] || "").get("section");
      if (section) window.setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }), 0);
    };

    scrollToRequestedSection();
    window.addEventListener("hashchange", scrollToRequestedSection);
    return () => window.removeEventListener("hashchange", scrollToRequestedSection);
  }, []);

  const filteredTemples = useMemo(
    () =>
      temples.filter(
        (temple) =>
          (stateFilter === "All states" || temple.state === stateFilter) &&
          (deityFilter === "All deities" || temple.deity === deityFilter) &&
          (styleFilter === "All styles" || temple.style === styleFilter),
      ),
    [stateFilter, deityFilter, styleFilter],
  );

  return (
    <div className="site-shell home-page">
      <SiteHeader />
      <main>
        <section className="archive-hero">
          <img className="archive-hero__photo" src={templePhotography.meenakshiPond} alt="" aria-hidden="true" />
          <img className="archive-hero__art" src={archiveArt.archiveSky} alt="" aria-hidden="true" />
          <div className="archive-hero__shade" />
          <div className="archive-hero__content container">
            <div className="archive-hero__edition">An evolving visual archive · Edition 01</div>
            <div className="archive-hero__title-block">
              <p className="eyebrow">India’s living sacred landscapes</p>
              <h1>Indian Temples<br /><em>Gallery</em></h1>
              <p className="archive-hero__lede">
                A visual index of structures shaped by devotion, geometry, craftsmanship, and the long memory of place.
              </p>
              <a href={import.meta.env.BASE_URL === "/" ? "#gallery" : "#/"} className="hero-explore">Explore the collection <ArrowDown size={16} /></a>
            </div>
            <div className="archive-hero__edge-note"><span /> Scroll to enter</div>
          </div>
        </section>

        <section className="archive-intro container" id="archive-notes">
          <div className="archive-intro__label"><BookOpenText size={19} /> A photographic field archive</div>
          <div className="archive-intro__copy">
            <p className="eyebrow">The collection</p>
            <h2>Not monuments alone—<br /><em>living cultural worlds.</em></h2>
          </div>
          <p className="archive-intro__text">
            Each entry follows a temple through the materials of its presence: landmark architecture, ritual circulation, carved surfaces, and the human histories carried in its setting. The first archive room opens in Madurai.
          </p>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="container">
            <div className="gallery-section__topline">
              <div>
                <p className="eyebrow">Select a path</p>
                <h2>Temple <em>index</em></h2>
              </div>
              <p>Filter the first three entries by regional setting, principal deity, or architectural tradition.</p>
            </div>

            <div className="filter-bar" aria-label="Filter temple entries">
              <div className="filter-bar__label"><SlidersHorizontal size={16} /> Filter the archive</div>
              <label className="archive-select">
                <span className="sr-only">Filter by state</span>
                <select value={stateFilter} onChange={(event) => setStateFilter(event.target.value)}>
                  {filterOptions.state.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label className="archive-select">
                <span className="sr-only">Filter by deity</span>
                <select value={deityFilter} onChange={(event) => setDeityFilter(event.target.value)}>
                  {filterOptions.deity.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label className="archive-select">
                <span className="sr-only">Filter by style</span>
                <select value={styleFilter} onChange={(event) => setStyleFilter(event.target.value)}>
                  {filterOptions.style.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
            </div>

            {filteredTemples.length > 0 ? (
              <div className="temple-grid">
                {filteredTemples.map((temple) => <TempleCard temple={temple} key={temple.name} />)}
              </div>
            ) : (
              <div className="empty-archive">
                <Compass size={25} />
                <p>No entries meet this combination. Try a wider path through the archive.</p>
              </div>
            )}
          </div>
        </section>

        <section className="archive-notice" style={{ backgroundImage: `linear-gradient(90deg, rgba(12, 19, 31, 0.98) 0%, rgba(12, 19, 31, 0.7) 56%, rgba(12, 19, 31, 0.96) 100%), url(${archiveArt.stoneStudy})` }}>
          <div className="container archive-notice__content">
            <p className="eyebrow">A note on the archive</p>
            <h2>Built for looking<br /><em>with care.</em></h2>
            <p>Photography in this prototype is sourced from reusable Wikimedia Commons files and linked back to its original credit record.</p>
            <a href="https://commons.wikimedia.org/wiki/Category:Madurai_Meenakshi_Temple" target="_blank" rel="noreferrer" className="notice-link">View image credits</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

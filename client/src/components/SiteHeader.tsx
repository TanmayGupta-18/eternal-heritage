/** Night Archive style reminder: navigation is an unobtrusive, gold-indexed layer over photographic darkness. */
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { TempleMark } from "@/components/TempleMark";

const navItems = [
  { label: "Temples", href: "/#gallery" },
  { label: "Mandapas", href: "/mandapas" },
  { label: "Garbhagrihas", href: "/garbhagrihas" },
  { label: "Iconography", href: "/#archive-notes" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const isActive = (label: string) => {
    if (label === "Temples") return location === "/" || location.startsWith("/temples/");
    if (label === "Mandapas") return location === "/mandapas";
    if (label === "Garbhagrihas") return location === "/garbhagrihas";
    return false;
  };

  return (
    <header className={`masthead ${isScrolled ? "masthead--solid" : ""}`}>
      <div className="masthead__inner">
        <Link href="/" className="brand-lockup" aria-label="Eternal Heritage home">
          <TempleMark size={40} />
          <span className="brand-lockup__text">Eternal Heritage</span>
        </Link>

        <nav className="masthead__nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.label} className={`masthead__link ${isActive(item.label) ? "masthead__link--active" : ""}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="/#gallery" className="journey-link">
          Begin journey <ArrowUpRight size={15} strokeWidth={1.7} />
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
        {navItems.map((item) => (
          <a href={item.href} key={item.label} className={`mobile-menu__link ${isActive(item.label) ? "mobile-menu__link--active" : ""}`}>
            {item.label}
          </a>
        ))}
        <a href="/#gallery" className="mobile-menu__journey">
          Begin journey <ArrowUpRight size={16} strokeWidth={1.7} />
        </a>
      </div>
    </header>
  );
}

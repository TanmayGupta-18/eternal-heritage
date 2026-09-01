/** Night Archive style reminder: navigation is an unobtrusive, gold-indexed layer over photographic darkness. */
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { TempleMark } from "@/components/TempleMark";
import { languageOptions, useLanguage } from "@/contexts/LanguageContext";

const isGitHubPagesBuild = import.meta.env.BASE_URL !== "/";
const navItems = [
  { label: "Temples", href: isGitHubPagesBuild ? "#/" : "/#gallery" },
  { label: "Mandapas", href: "/mandapas" },
  { label: "Garbhagrihas", href: "/garbhagrihas" },
  { label: "Iconography", href: isGitHubPagesBuild ? "#/" : "/#archive-notes" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();

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
  const renderItem = (item: (typeof navItems)[number], mobile = false) => item.href.startsWith("#") ? (
    <a href={item.href} key={item.label} className={`${mobile ? "mobile-menu__link" : "masthead__link"} ${isActive(item.label) ? `${mobile ? "mobile-menu__link" : "masthead__link"}--active` : ""}`}>{t(item.label)}</a>
  ) : (
    <Link href={item.href} key={item.label} className={`${mobile ? "mobile-menu__link" : "masthead__link"} ${isActive(item.label) ? `${mobile ? "mobile-menu__link" : "masthead__link"}--active` : ""}`}>{t(item.label)}</Link>
  );

  return (
    <header className={`masthead ${isScrolled ? "masthead--solid" : ""}`}>
      <div className="masthead__inner">
        <Link href="/" className="brand-lockup" aria-label={t("Eternal Heritage home")}><TempleMark size={40} /><span className="brand-lockup__text">Eternal Heritage</span></Link>
        <nav className="masthead__nav" aria-label={t("Primary navigation")}>{navItems.map((item) => renderItem(item))}</nav>
        <a href={isGitHubPagesBuild ? "#/" : "/#gallery"} className="journey-link">{t("Begin journey")} <ArrowUpRight size={15} strokeWidth={1.7} /></a>
        <label className="language-picker"><span className="sr-only">{t("Language")}</span><select value={language} onChange={(event) => setLanguage(event.target.value as "en" | "hi" | "te")} aria-label={t("Language")}>{languageOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}</select></label>
        <button className="mobile-menu-toggle" type="button" onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? t("Close navigation") : t("Open navigation")} aria-expanded={isOpen}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
        {navItems.map((item) => renderItem(item, true))}
        <a href={isGitHubPagesBuild ? "#/" : "/#gallery"} className="mobile-menu__journey">{t("Begin journey")} <ArrowUpRight size={16} strokeWidth={1.7} /></a>
        <label className="mobile-language-picker"><span>{t("Language")}</span><select value={language} onChange={(event) => setLanguage(event.target.value as "en" | "hi" | "te")} aria-label={t("Language")}>{languageOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}</select></label>
      </div>
    </header>
  );
}

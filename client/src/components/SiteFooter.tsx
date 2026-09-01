/** Night Archive style reminder: the footer reads like a restrained archival colophon, not a marketing endpoint. */
import { TempleMark } from "@/components/TempleMark";
import { useLanguage } from "@/contexts/LanguageContext";

const isGitHubPagesBuild = import.meta.env.BASE_URL !== "/";
const archiveLink = isGitHubPagesBuild ? "#/" : "/#gallery";
const notesLink = isGitHubPagesBuild ? "#/" : "/#archive-notes";

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__identity">
          <div className="site-footer__brand">
            <TempleMark size={36} />
            <span>Eternal Heritage</span>
          </div>
          <p>{t("Preserving the sacred silence through a living visual archive.")}</p>
        </div>

        <div className="site-footer__links" aria-label={t("Primary navigation")}>
          <a href={archiveLink}>{t("The archives")}</a>
          <a href={notesLink}>{t("Architectural heritage")}</a>
          <a href={notesLink}>{t("Vedic studies")}</a>
          <a href="https://commons.wikimedia.org/wiki/Category:Madurai_Meenakshi_Temple" target="_blank" rel="noreferrer">
            {t("View image credits")}
          </a>
        </div>

        <p className="site-footer__copyright">© {new Date().getFullYear()} Eternal Heritage</p>
      </div>
    </footer>
  );
}

/** Night Archive style reminder: the footer reads like a restrained archival colophon, not a marketing endpoint. */
import { TempleMark } from "@/components/TempleMark";

const isGitHubPagesBuild = import.meta.env.BASE_URL !== "/";
const archiveLink = isGitHubPagesBuild ? "#/?section=gallery" : "/#gallery";
const notesLink = isGitHubPagesBuild ? "#/?section=archive-notes" : "/#archive-notes";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__identity">
          <div className="site-footer__brand">
            <TempleMark size={36} />
            <span>Eternal Heritage</span>
          </div>
          <p>Preserving the sacred silence through a living visual archive.</p>
        </div>

        <div className="site-footer__links" aria-label="Footer navigation">
          <a href={archiveLink}>The archives</a>
          <a href={notesLink}>Architectural heritage</a>
          <a href={notesLink}>Vedic studies</a>
          <a href="https://commons.wikimedia.org/wiki/Category:Madurai_Meenakshi_Temple" target="_blank" rel="noreferrer">
            Image credits
          </a>
        </div>

        <p className="site-footer__copyright">© {new Date().getFullYear()} Eternal Heritage</p>
      </div>
    </footer>
  );
}

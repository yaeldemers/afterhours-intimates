import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t: _t, i18n } = useTranslation();
  const t = _t as (key: string) => string;

  const underlineHoverClass =
  "relative inline-block text-plum font-body transition-colors duration-200 " +
  "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] " +
  "after:bg-plum after:transition-all after:duration-300 after:w-0 hover:after:w-full";

  return (
    <footer className="bg-lace text-plum text-sm font-body px-4 py-10 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
        
        {/* Left: Logo + Tagline */}
        <div className="text-center md:text-left">
          <Link
            to="/"
            className="text-2xl font-serif text-mocha hover:opacity-80 transition-opacity block mb-2"
          >
            afterhours
          </Link>
          <p>{t("footer.tagline")}</p>
          <p>
            &copy; {new Date().getFullYear()} afterhours intimates
          </p>
        </div>

        {/* Middle: Explore Links */}
        <div className="flex flex-col items-center gap-2 md:items-start">
          <span className="uppercase tracking-wide text-xs text-plum/70">{t("footer.explore")}</span>
          <a href="/shop" className={underlineHoverClass}>{t("footer.shop")}</a>
          <a href="/measurements" className={underlineHoverClass}>{t("footer.measurements")}</a>
          <a href="/care" className={underlineHoverClass}>{t("footer.care")}</a>
          <a href="/lookbook" className={underlineHoverClass}>{t("footer.lookbook")}</a>
          <a href="/order" className={underlineHoverClass}>{t("footer.order")}</a>
        </div>

        {/* Right: Social + Contact */}
        <div className="flex flex-col items-center gap-4 md:items-end">
          <a
            href="https://www.instagram.com/afterhours_intimates"
            target="_blank"
            rel="noopener noreferrer"
            className="text-plum hover:text-mocha transition-all duration-300 transform hover:-translate-y-0.5"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
            </svg>
          </a>
          <a href={`mailto:${t("footer.email")}`} className={underlineHoverClass}>
            {t("footer.email")}
          </a>
        </div>
      </div>
    </footer>
  );
}

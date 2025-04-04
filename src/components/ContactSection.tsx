import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const instagramUrl = "https://instagram.com/afterhours_intimates";

const underlineHoverClass =
  "relative inline-block text-plum font-body transition-colors duration-200 " +
  "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] " +
  "after:bg-plum after:transition-all after:duration-300 after:w-0 hover:after:w-full";

export default function ContactCTA() {
  const { t: _t } = useTranslation();
  const t = _t as (key: string) => string;

  return (
    <section className="bg-lace py-24 px-6 fade-in-scroll">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-mocha mb-6">
          {t("contactCTA.title")}
        </h2>

        <p className="text-base text-plum/80 flex justify-center items-center gap-2 flex-wrap">
          {/* Subtitle text */}
          {t("contactCTA.subtitle")}

          {/* Instagram icon */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="text-plum hover:text-mocha transition-all duration-300 transform hover:-translate-y-0.5"
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

          {/* Text link */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${underlineHoverClass} text-base text-plum/80 font-normal`}
          >
            {t("contactCTA.follow")}
          </a>
        </p>
      </div>
    </section>
  );
}

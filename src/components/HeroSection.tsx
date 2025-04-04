import { Link } from "react-router-dom";
import headerImage from "../assets/afterhours-intimates-header.png";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
    const { t: _t, i18n } = useTranslation();
    const t = _t as (key: string) => string;

    return (
        <section className="relative bg-lace h-[48vh] md:h-[64vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
        <img
            src={headerImage}
            alt="Afterhours aesthetic, woman in a night lingerie set on a vintage couch"
            className="w-full h-full object-[center_30%] md:object-center object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-lace/5 backdrop-blur-sm" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-12 md:pb-24 flex flex-col md:items-start items-center text-center md:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-serif text-mocha leading-tight mb-4">
                {t("hero.headlineLine1")}<br />
                {t("hero.headlineLine2")}
            </h1>
            <p className="text-lg md:text-xl text-plum mb-8 max-w-xl">
                {t("hero.subtext")}
            </p>
            <Link
            to="/lookbook"
            className="inline-block rounded-full bg-plum text-lace px-8 py-3 text-sm font-medium shadow-md hover:bg-mocha transition-colors"
            >
            {t("hero.cta")}
            </Link>
        </div>
        </section>
    );
    }

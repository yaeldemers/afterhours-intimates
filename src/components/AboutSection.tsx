import { useEffect } from "react";
import { useTranslation } from "react-i18next";


export default function AboutSection() {
    const { t: _t, i18n } = useTranslation();
    const t = _t as (key: string) => string;

    useEffect(() => {
        const elements = document.querySelectorAll(".fade-in-scroll");
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("opacity-0", "translate-y-4");
                    entry.target.classList.add("opacity-100", "translate-y-0");
                  }
            });
        },
        { threshold: 0.1 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);

    return (
        <section className="bg-lace py-24 px-6">
            <div className="max-w-3xl mx-auto text-center text-plum font-body">
                <p className="text-2xl md:text-3xl leading-relaxed font-serif italic text-plum opacity-0 translate-y-4 transition-all duration-700 fade-in-scroll">
                    “{t("about.quote")}”
                </p>
                <p className="mt-12 text-base md:text-lg text-plum/80 opacity-0 translate-y-4 transition-all duration-700 delay-300 fade-in-scroll">
                {t("about.description")}
                </p>
            </div>
        </section>
    );
}

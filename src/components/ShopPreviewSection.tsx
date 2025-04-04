import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import temporary from "../assets/afterhours-sewing-kit.png";

const models = [
  {
    name: "Coquette Set",
    price: "$180 CAD",
    slug: "coquette",
    image: temporary,
    tag: "new",
  },
  {
    name: "Fleur Bralette",
    price: "$95 CAD",
    slug: "fleur",
    image: temporary,
    tag: "promo",
  },
  {
    name: "Luna Bodysuit",
    price: "$140 CAD",
    slug: "luna",
    image: temporary,
  },
];

const underlineHoverClass =
"relative inline-block text-lace font-body transition-colors duration-200 " +
"after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] " +
"after:bg-lace after:transition-all after:duration-300 after:w-0 hover:after:w-full";

export default function ShopPreviewSection() {
    const { t: _t, i18n } = useTranslation();
    const t = _t as (key: string) => string;

  return (
    <section className="bg-lace pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <hr className="border-t border-plum/10 mb-24" />
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-mocha fade-in-scroll opacity-0 translate-y-4 transition-all duration-700">
            {t("shopPreview.title")}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model) => (
            <Link
              to={`/model/${model.slug}`}
              key={model.slug}
              className="group block bg-white rounded-xl overflow-hidden shadow-sm"
            >
            <div className="relative overflow-hidden">
            {/* Image */}
            <div className="relative w-full h-80">
            <img
              loading="lazy"
              src={model.image}
              alt={model.name}
              className="w-full h-full object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-plum/60 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center">
            <span
              className={`
                ${underlineHoverClass}
                text-lace text-sm uppercase tracking-wide font-medium
                opacity-0 md:group-hover:opacity-100
                transition-opacity duration-500 delay-150
              `}
            >
                {t("shopPreview.cta")}
              </span>
            </div>

            {/* Optional Tag */}
            {model.tag && (
              <span
              className="
                absolute top-3 right-3 
                bg-white text-mocha 
                text-xs px-2 py-1 rounded-full shadow-sm 
                uppercase tracking-wide font-medium 
                transition-colors duration-300
                md:group-hover:bg-white md:group-hover:text-mocha
              "
            >
              {t(`shopPreview.tags.${model.tag}`)}
            </span>
            )}
          </div>
          </div>
              <div className="p-4 text-left">
                <h3 className="text-lg font-medium text-mocha">{model.name}</h3>
                <p className="text-sm text-plum/70 mt-1">{model.price}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-block rounded-full bg-plum text-lace px-8 py-3 text-sm font-medium shadow-md hover:bg-mocha transition-colors"
          >
            {t("shopPreview.viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}

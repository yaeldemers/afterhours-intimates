import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import sample1 from "../assets/afterhours-sewing-kit.png";
import sample2 from "../assets/afterhours-sewing-kit.png";
import sample3 from "../assets/afterhours-sewing-kit.png";
import sample4 from "../assets/afterhours-sewing-kit.png";

// Your underline animation
const underlineHoverClass =
  "relative inline-block text-lace font-body transition-colors duration-200 " +
  "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] " +
  "after:bg-lace after:transition-all after:duration-300 after:w-0 hover:after:w-full";

const previews = [
  { image: sample1, model: "Coquette Set" },
  { image: sample2, model: "Fleur Bralette" },
  { image: sample3, model: "Luna Bodysuit" },
  { image: sample4, model: "Nocturne Set" },
];

export default function LookbookPreview() {
  const { t: _t } = useTranslation();
  const t = _t as (key: string) => string;

  return (
    <section className="bg-white py-24 px-6 fade-in-scroll">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-mocha text-center mb-12">
          {t("lookbookPreview.title")}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {previews.map((item, i) => (
            <Link
              to="/lookbook"
              key={i}
              className="relative group rounded-xl overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.model}
                loading="lazy"
                className="w-full aspect-square object-cover"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-plum/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span
                  className={`${underlineHoverClass} text-lace text-sm uppercase tracking-wide font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150`}
                >
                  {item.model}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

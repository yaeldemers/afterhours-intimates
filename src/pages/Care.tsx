import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  SparklesIcon,
  ShieldCheckIcon,
  HandRaisedIcon,
  CubeIcon,
} from "@heroicons/react/24/solid";

const underlineHoverClass =
  "relative inline-block text-mocha font-body transition-colors duration-200 " +
  "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] " +
  "after:bg-mocha after:transition-all after:duration-300 after:w-0 hover:after:w-full";

const careSteps = [
  {
    icon: HandRaisedIcon,
    title: "Hand wash in cold water",
    text: "Use a gentle detergent and avoid harsh wringing or scrubbing.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Use a lingerie bag if machine washing",
    text: (
      <>
        Select a delicate cycle and use our{" "}
        <Link to="/shop" className={underlineHoverClass}>
          lingerie care kit
        </Link>{" "}
        for best results.
      </>
    ),
  },
  {
    icon: SparklesIcon,
    title: "Lay flat to dry",
    text: "Heat from the dryer can weaken delicate fibers.",
  },
  {
    icon: CubeIcon,
    title: "Store properly",
    text: "Fold or hang your lingerie to prevent snags.",
  },
];

export default function Care() {
  const { t: _t } = useTranslation();
  const t = _t as (key: string) => string;

  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center fade-in-scroll">
        <h1 className="text-3xl md:text-4xl font-serif text-mocha mb-6">
          lingerie care guide
        </h1>
        <p className="text-plum/80 mb-12 italic">
            With the right care, your lingerie will maintain its elegance and quality for years to come.
        </p>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {careSteps.map((step, index) => (
            <div
              key={index} 
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-plum/10 rounded-full flex items-center justify-center flex-shrink-0">
                <step.icon className="h-6 w-6 text-plum" />
              </div>
              <div>
                <h3 className="text-mocha font-medium font-serif mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-plum/80">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Care Kit CTA */}
        <hr className="border-t border-plum/10 my-16 w-full" />

        <div className="text-center fade-in-scroll">
          <p className="text-mocha text-lg font-serif mb-2">
            Looking to care for your lingerie the right way?
          </p>
          <p className="text-sm text-plum/80 mb-6 max-w-xl mx-auto">
            Our curated Lingerie Care Kit includes a branded lingerie bag, drawer sachet, and more.
          </p>
          <Link
            to="/shop"
            className="inline-block rounded-full bg-plum text-lace px-6 py-3 text-sm font-medium shadow-md hover:bg-mocha transition-colors"
          >
            browse the kit
          </Link>
        </div>
      </div>
    </section>
  );
}

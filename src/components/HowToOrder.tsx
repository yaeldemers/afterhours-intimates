import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
    SparklesIcon,
    PencilIcon,
    TruckIcon,
    ArrowRightIcon,
    ArrowDownIcon,
  } from "@heroicons/react/24/solid";

const steps = [
  {
    titleKey: "step1.title",
    descKey: "step1.description",
    icon: SparklesIcon,
  },
  {
    titleKey: "step2.title",
    descKey: "step2.description",
    icon: PencilIcon,
  },
  {
    titleKey: "step3.title",
    descKey: "step3.description",
    icon: TruckIcon,
  },
];

export default function HowToOrderSection() {
    const { t: _t, i18n } = useTranslation();
    const t = _t as (key: string) => string;

  return (
    <section className="bg-lace py-12 px-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <hr className="border-t border-plum/10 mb-24" />
        <h2 className="text-3xl md:text-4xl font-serif text-mocha mb-16">
          {t("howToOrder.title")}
        </h2>

        {/* Steps */}
        {/* Mobile version */}
        <div className="flex flex-col items-center gap-12 md:hidden">
        {steps.map((step, index) => {
            const Icon = step.icon;
            const title = `howToOrder.${step.titleKey}`;
            const desc = `howToOrder.${step.descKey}`;

            return (
            <div key={index} className="flex flex-col items-center text-center text-plum fade-in-scroll opacity-0 translate-y-4 transition-all duration-700">
                <div className="w-12 h-12 mb-4 bg-plum/10 rounded-full flex items-center justify-center">
                <Icon className="h-6 w-6 text-plum" />
                </div>
                <h3 className="text-lg font-medium mb-2 font-serif text-mocha">
                {t(title)}
                </h3>
                <p className="text-sm text-plum/80 px-4">{t(desc)}</p>

                {/* ↓ Arrow between steps */}
                {index < steps.length - 1 && (
                <ArrowDownIcon className="w-5 h-5 text-plum/30 mt-6" />
                )}
            </div>
            );
        })}
        </div>

        {/* Desktop version */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 text-center relative">
            {steps.map((step, index) => {
                const Icon = step.icon;
                const title = `howToOrder.${step.titleKey}`;
                const desc = `howToOrder.${step.descKey}`;

                return (
                <div
                    key={index}
                    className="flex flex-col items-center text-center text-plum fade-in-scroll opacity-0 translate-y-4 transition-all duration-700 relative"
                >
                    <div className="w-12 h-12 mb-4 bg-plum/10 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-plum" />
                    </div>
                    <h3 className="text-lg font-medium mb-2 font-serif text-mocha">
                    {t(title)}
                    </h3>
                    <p className="text-sm text-plum/80 px-2">{t(desc)}</p>

                    {/* → Arrow aligned with title */}
                    {index < steps.length - 1 && (
                    <ArrowRightIcon className="w-5 h-5 text-plum/30 absolute top-[2.5rem] right-[-1.75rem]" />
                    )}
                </div>
                );
            })}
            </div>


        {/* CTA */}
        <div className="mt-16">
          <Link
            to="/how-to-order"
            className="inline-block rounded-full bg-plum text-lace px-8 py-3 text-sm font-medium shadow-md hover:bg-mocha transition-colors"
          >
            {t("howToOrder.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}

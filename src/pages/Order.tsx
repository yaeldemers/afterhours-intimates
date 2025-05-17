import { Link } from "react-router-dom";
import {
  UserIcon,
  HeartIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

const steps = [
  {
    icon: UserIcon,
    title: "Take your measurements",
    desc: "Visit our measurements page to learn how to accurately take your size at home.",
    link: "/measurements",
  },
  {
    icon: HeartIcon,
    title: "Choose your model",
    desc: "Browse the boutique and let us know which design caught your eye. Message us if you’re unsure!",
    link: "/shop",
  },
  {
    icon: SparklesIcon,
    title: "Customize & confirm",
    desc: "Add custom requests and extras like belts or care kits. We'll confirm everything before sending a receipt.",
  },
];

export default function Order() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-serif text-mocha text-center mb-6">
          how to order
        </h1>
        <p className="text-plum/80 text-center max-w-2xl mx-auto mb-12 italic">
          Every afterhours piece is made to order. Follow the steps below to begin
          your custom lingerie journey.
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 text-left">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-plum"
            >
              <div className="w-12 h-12 mb-4 bg-plum/10 rounded-full flex items-center justify-center">
                <step.icon className="h-6 w-6 text-plum" />
              </div>
              <h3 className="text-lg font-medium font-serif text-mocha mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-plum/80">
                {step.link ? (
                  <>
                    {step.desc.split(" ").slice(0, -1).join(" ")} {" "}
                    <Link
                      to={step.link}
                      className="underline text-mocha hover:text-mocha/80 transition-colors"
                    >
                      {step.link === "/shop" ? "boutique" : "guide"}
                    </Link>
                    .
                  </>
                ) : (
                  step.desc
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <p className="text-lg text-mocha font-serif mb-2">
            Ready to place your order?
          </p>
          <p className="text-sm text-plum/80 mb-6">
            Send us an email at{' '}
            <a
              href="mailto:hello@afterhours.ca"
              className="underline hover:text-mocha transition-colors"
            >
              hello@afterhours.ca
            </a>{' '}
            with your model, dimensions and requests.
          </p>
        </div>

        {/* Shipping & Returns */}
        <div className="mt-20 border-t border-plum/10 pt-12 text-sm text-plum/70 space-y-4 max-w-2xl mx-auto text-center">
          <div>
            <strong className="text-plum font-medium">Shipping:</strong> We currently ship within Canada only. Stay tuned for international options!
          </div>
          <div>
            <strong className="text-plum font-medium">Returns:</strong> We accept returns and exchanges within 5 days of delivery. Reshipment fees are not included.
          </div>
        </div>
      </div>
    </section>
  );
}

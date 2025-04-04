import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  const { t: _t, i18n } = useTranslation();
  const t = _t as (key: string) => string;

  const currentLang = i18n.language;
  const switchLanguage = (lang: string) => i18n.changeLanguage(lang);
  const [isOpen, setIsOpen] = useState(false);

  const underlineHoverClass =
  "relative inline-block text-plum font-body transition-colors duration-200 " +
  "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] " +
  "after:bg-plum after:transition-all after:duration-300 after:w-0 hover:after:w-full";

  const languageToggle = currentLang.startsWith("fr") ? (
    <button onClick={() => switchLanguage("en")} className={underlineHoverClass}>
      english
    </button>
  ) : (
    <button onClick={() => switchLanguage("fr")} className={underlineHoverClass}>
      french
    </button>
  );

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative inline-block text-plum font-body transition-colors duration-200
     after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px]
     after:bg-plum after:transition-all after:duration-300 after:w-0
     hover:after:w-full
     ${isActive ? "font-semibold" : ""}`;
  
    const ctaClass = ({ isActive }: { isActive: boolean }) =>
      `inline-block rounded-full px-8 py-2 text-sm font-medium shadow-subtle transition-colors ${
        isActive ? "bg-mocha text-lace" : "bg-plum text-lace hover:bg-mocha"
      }`;

  return (
    <header className="bg-lace shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        <NavLink  to="/" className="font-serif text-3xl md:text-4xl text-mocha">
          {t("navbar.title")}
        </NavLink >

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-body text-plum">
          <NavLink to="/shop" className={navLinkClass}>{t("navbar.shop")}</NavLink>
          <NavLink to="/measurements" className={navLinkClass}>{t("navbar.measurements")}</NavLink>
          <NavLink to="/care" className={navLinkClass}>{t("navbar.care")}</NavLink>
          <NavLink to="/lookbook" className={navLinkClass}>{t("navbar.lookbook")}</NavLink>
          {languageToggle}
          <NavLink to="/how-to-order" className={ctaClass}>{t("navbar.howToOrder")}</NavLink>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-mocha md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-150 ease-in"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <nav className="md:hidden px-6 pb-6 text-plum text-sm font-body space-y-4 flex flex-col">
          <NavLink to="/shop" onClick={() => setIsOpen(false)} className={navLinkClass}>{t("navbar.shop")}</NavLink>
          <NavLink to="/measurements" onClick={() => setIsOpen(false)} className={navLinkClass}>{t("navbar.measurements")}</NavLink>
          <NavLink to="/care" onClick={() => setIsOpen(false)} className={navLinkClass}>{t("navbar.care")}</NavLink>
          <NavLink to="/lookbook" onClick={() => setIsOpen(false)} className={navLinkClass}>{t("navbar.lookbook")}</NavLink>
          <div>{languageToggle}</div>
          <NavLink
            to="/how-to-order"
            onClick={() => setIsOpen(false)}
            className={ctaClass}
          >
            {t("navbar.howToOrder")}
          </NavLink>
        </nav>
      </Transition>
    </header>
  );
}
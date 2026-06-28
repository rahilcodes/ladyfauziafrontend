import Link from "next/link";
import { Suspense } from "react";
import { isObject } from "@/utils/type-guards";
import { getThemeCustomization } from "@/utils/bagisto";
import LogoIcon from "@components/common/icons/LogoIcon";
import FaceBookIcon from "@components/common/icons/social-icon/FaceBookIcon";
import InstaGramIcon from "@components/common/icons/social-icon/InstaGramIcon";
import TwitterIcon from "@components/common/icons/social-icon/TwitterIcon";
import Subscribe from "./Subscribe";
import FooterMenu from "./FooterMenu";
import ServiceContent from "./ServiceContent";
import { ThemeCustomizationTranslationEdge, FooterColumns, ThemeOptions } from "@/types/theme/theme-customization";
import { safeParse } from "@/utils/helper";
import { JSX } from "react";
const { COMPANY_NAME } = process.env;

const BRAND_LINKS = [
  { name: "Our Story", href: "/about" },
  { name: "The Founder", href: "/founder" },
  { name: "Craftsmanship", href: "/craftsmanship" },
  { name: "Lookbook", href: "/lookbook" },
  { name: "Journal", href: "/journal" },
];

const SHOP_LINKS = [
  { name: "New Arrivals", href: "/collections/new-arrivals" },
  { name: "Dresses", href: "/search/dresses" },
  { name: "Hijabs", href: "/search/hijabs" },
  { name: "Jewelry", href: "/search/jewelry" },
  { name: "Accessories", href: "/search/accessories" },
];

const HELP_LINKS = [
  { name: "Size Guide", href: "/size-guide" },
  { name: "Shipping & Returns", href: "/shipping-returns" },
  { name: "Contact Us", href: "/page/contact-us" },
  { name: "FAQ", href: "/page/faq" },
];

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2010 + (currentYear > 2010 ? `-${currentYear}` : "");
  const skeleton =
    "w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700";
  const menu = await getThemeCustomization();
  const copyrightName = COMPANY_NAME || "";
  const services =
    menu?.services_content?.themeCustomizations?.edges?.[0]?.node;

  const footerLinksNode = menu?.footer_links?.themeCustomizations?.edges?.[0]?.node;
  const footerTranslation = footerLinksNode?.translations?.edges?.[0]?.node;
  const footerOptions: FooterColumns | null | undefined = typeof footerTranslation?.options === "string"
    ? safeParse(footerTranslation.options)
    : footerTranslation?.options;
  const socialLinks = footerOptions?.column_3 || [];

  const socialIconMapping: Record<string, JSX.Element> = {
    facebook: <FaceBookIcon />,
    instagram: <InstaGramIcon />,
    twitter: <TwitterIcon />,
    x: <TwitterIcon />,
  };

  const getSocialIcon = (title: string) => {
    const key = title.toLowerCase();
    return socialIconMapping[key] || null;
  };

  return (
    <>
      {isObject(services) && services?.translations?.edges && (
        <ServiceContent
          name={services?.name}
          serviceData={services?.translations?.edges?.map(
            (edge: ThemeCustomizationTranslationEdge) => edge.node,
          )}
        />
      )}

      {/* Desktop Footer */}
      <footer className="hidden lg:block border-t border-[#EAE5DA] bg-[#F5F2EB] text-sm text-selected-black dark:border-[#262626] dark:bg-[#151515] dark:text-selected-white">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col justify-between gap-6 gap-y-6 px-6 py-16 text-sm dark:border-neutral-700 min-[880px]:flex-row min-[880px]:gap-12 min-[880px]:gap-y-20 min-[880px]:px-4">
          <div className="flex flex-col gap-4">
            <Link
              className="flex items-center gap-2 md:pt-1 cursor-pointer"
              href="/"
              aria-label="Go to homepage"
              title="Go to homepage"
            >
              <LogoIcon />
              <span className="sr-only">Go to homepage</span>
            </Link>
            <p className="text-xs text-stone-500 dark:text-stone-400 tracking-[0.1em] font-light max-w-xs leading-relaxed">
              Premium modesty luxury brand launching initially in Miami, FL. Timeless elegance and joyful self-expression.
            </p>
            <div className="flex gap-3.5 mt-2">
              {socialLinks.map((item: ThemeOptions, index: number) => {
                const icon = getSocialIcon(item.title);
                if (!icon) return null;
                return (
                  <Link
                    key={item.title ?? index}
                    href={item.url}
                    aria-label={`Visit Lady Fauzia on ${item.title}`}
                    title={item.title}
                    target="_blank"
                    className="cursor-pointer text-stone-600 hover:text-primary dark:text-stone-400 dark:hover:text-primary transition-colors"
                  >
                    {icon}
                    <span className="sr-only">{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex gap-x-12 lg:gap-x-16">
            {/* Shop Column */}
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-foreground/70 dark:text-foreground/50 mb-4">
                Shop
              </h3>
              <ul className="space-y-2.5">
                {SHOP_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs tracking-[0.05em] text-stone-600 dark:text-stone-400 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brand Column */}
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-foreground/70 dark:text-foreground/50 mb-4">
                About
              </h3>
              <ul className="space-y-2.5">
                {BRAND_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs tracking-[0.05em] text-stone-600 dark:text-stone-400 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Column */}
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-foreground/70 dark:text-foreground/50 mb-4">
                Customer Care
              </h3>
              <ul className="space-y-2.5">
                {HELP_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs tracking-[0.05em] text-stone-600 dark:text-stone-400 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <Subscribe />
            </div>
          </div>
        </div>
        <div className="border-t border-[#EAE5DA] py-8 text-[11px] uppercase tracking-[0.2em] font-medium text-stone-500 dark:border-[#262626] dark:text-stone-400">
          <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
            <p className="text-center">
              &copy; {copyrightDate} {copyrightName || "Lady Fauzia Co"}. All rights reserved.
            </p>
            <p className="text-center font-semibold text-primary dark:text-primary">
              Joyful. Always.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="lg:hidden border-t border-[#EAE5DA] bg-[#F5F2EB] dark:border-[#262626] dark:bg-[#151515] pb-20">
        <div className="px-6 py-10">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center text-center mb-8">
            <Link href="/" aria-label="Go to homepage" className="mb-3">
              <LogoIcon />
            </Link>
            <p className="text-xs text-stone-500 dark:text-stone-400 tracking-[0.1em] font-light max-w-xs leading-relaxed">
              Premium modesty luxury brand. Timeless elegance and joyful self-expression.
            </p>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div>
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/60 mb-3">
                Shop
              </h3>
              <ul className="space-y-2">
                {SHOP_LINKS.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[11px] tracking-[0.05em] text-stone-600 dark:text-stone-400 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/60 mb-3">
                About
              </h3>
              <ul className="space-y-2">
                {BRAND_LINKS.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[11px] tracking-[0.05em] text-stone-600 dark:text-stone-400 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/60 mb-3">
                Help
              </h3>
              <ul className="space-y-2">
                {HELP_LINKS.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[11px] tracking-[0.05em] text-stone-600 dark:text-stone-400 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center justify-center gap-4 mb-6">
            {socialLinks.map((item: ThemeOptions, index: number) => {
              const icon = getSocialIcon(item.title);
              if (!icon) return null;
              return (
                <Link
                  key={item.title ?? index}
                  href={item.url}
                  aria-label={`Visit Lady Fauzia on ${item.title}`}
                  target="_blank"
                  className="text-stone-500 hover:text-primary dark:text-stone-400 dark:hover:text-primary transition-colors"
                >
                  {icon}
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-[#EAE5DA] dark:border-[#262626] pt-6 space-y-2">
            <p className="text-[10px] uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
              &copy; {copyrightDate} {copyrightName || "Lady Fauzia Co"}. All rights reserved.
            </p>
            <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-primary">
              Joyful. Always.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface SubCategory {
  name: string;
  slug: string;
}

interface MenuCategory {
  name: string;
  slug: string;
  subcategories?: SubCategory[];
  featured?: boolean;
}

const MENU_DATA: MenuCategory[] = [
  {
    name: "Shop All",
    slug: "/search",
  },
  {
    name: "Dresses",
    slug: "/search/dresses",
    subcategories: [
      { name: "Luxury Dresses", slug: "/search/luxury-dresses" },
      { name: "Kaftans", slug: "/search/kaftans" },
      { name: "Evening Gowns", slug: "/search/evening-gowns" },
      { name: "Maxi Dresses", slug: "/search/maxi-dresses" },
    ],
  },
  {
    name: "Hijabs",
    slug: "/search/hijabs",
    subcategories: [
      { name: "Premium Silk", slug: "/search/premium-silk-hijabs" },
      { name: "Crystal Embellished", slug: "/search/crystal-embellished-hijabs" },
      { name: "Everyday Elegance", slug: "/search/everyday-hijabs" },
      { name: "Occasion Wear", slug: "/search/occasion-hijabs" },
    ],
  },
  {
    name: "Jewelry",
    slug: "/search/jewelry",
    subcategories: [
      { name: "Rings", slug: "/search/rings" },
      { name: "Necklaces", slug: "/search/necklaces" },
      { name: "Bracelets", slug: "/search/bracelets" },
      { name: "Earrings", slug: "/search/earrings" },
      { name: "Sets", slug: "/search/jewelry-sets" },
    ],
  },
  {
    name: "Accessories",
    slug: "/search/accessories",
    subcategories: [
      { name: "Bags", slug: "/search/bags" },
      { name: "Scarves", slug: "/search/scarves" },
      { name: "Belts", slug: "/search/belts" },
    ],
  },
  {
    name: "Collections",
    slug: "/collections",
    subcategories: [
      { name: "New Arrivals", slug: "/collections/new-arrivals" },
      { name: "Best Sellers", slug: "/collections/best-sellers" },
      { name: "Miami Launch", slug: "/miami-launch" },
      { name: "The Kaftan Edit", slug: "/collections/the-kaftan-edit" },
    ],
    featured: true,
  },
];

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [renderedCategory, setRenderedCategory] = useState<MenuCategory | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const activeCategory = MENU_DATA.find((c) => c.name === activeMenu);

  useEffect(() => {
    if (activeCategory?.subcategories && activeCategory.subcategories.length > 0) {
      setRenderedCategory(activeCategory);
    } else if (!activeMenu) {
      const timer = setTimeout(() => {
        setRenderedCategory(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeCategory, activeMenu]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const isDropdownOpen = activeMenu === renderedCategory?.name;

  return (
    <div ref={menuRef} className="hidden lg:block relative">
      {/* Top-level links */}
      <ul className="flex items-center gap-1 xl:gap-2">
        {MENU_DATA.map((item) => {
          const isActive = activeMenu === item.name;
          const hasSubs = item.subcategories && item.subcategories.length > 0;

          return (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.slug}
                className={`group flex items-center gap-1 px-2.5 py-2 text-[13px] font-medium tracking-[0.08em] uppercase whitespace-nowrap transition-colors duration-300 ${isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"}`}
                prefetch={true}
                aria-label={`Browse ${item.name}`}
              >
                {item.name}
                {hasSubs && (
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${isActive ? "rotate-180 text-primary" : ""}`}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mega-menu dropdown */}
      {renderedCategory && (
        <div
          className={`absolute left-0 top-full z-50 w-[480px] transition-all duration-300 ease-out
            ${isDropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
          `}
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mt-1 rounded-xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-xl shadow-black/5 dark:border-neutral-700/50 dark:bg-surface-darkest/95 dark:shadow-black/20 overflow-hidden">
            {/* Header */}
            <div className="px-6 pt-5 pb-3 border-b border-border/30 dark:border-neutral-700/30">
              <Link
                href={renderedCategory.slug}
                className="text-sm font-semibold tracking-[0.12em] text-primary uppercase hover:text-primary-strong transition-colors"
              >
                {renderedCategory.name}
              </Link>
              {renderedCategory.featured && (
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-[0.15em] uppercase bg-primary/10 text-primary">
                  Curated
                </span>
              )}
            </div>

            {/* Subcategories */}
            <div className="px-6 py-4">
              <ul className="grid grid-cols-2 gap-x-8 gap-y-1">
                {renderedCategory.subcategories!.map((sub) => (
                  <li key={sub.slug}>
                    <Link
                      href={sub.slug}
                      className="group/sub flex items-center gap-2 px-0 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
                      prefetch={true}
                    >
                      <span className="h-px w-0 bg-primary transition-all duration-300 group-hover/sub:w-3" />
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer tagline */}
            <div className="px-6 py-3 bg-primary/5 dark:bg-primary/10 border-t border-border/20 dark:border-neutral-700/20">
              <p className="text-[10px] tracking-[0.2em] text-muted uppercase text-center">
                Joyful. Always.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

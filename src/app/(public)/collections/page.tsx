import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Collections | Lady Fauzia Co.",
  description:
    "Explore our curated collections. New Arrivals, Best Sellers, The Kaftan Edit, Miami Launch, and more — premium modest fashion for the modern woman.",
  openGraph: {
    title: "Collections | Lady Fauzia Co.",
    description:
      "Explore our curated collections of premium modest fashion.",
    type: "website",
  },
};

const COLLECTIONS = [
  {
    name: "New Arrivals",
    slug: "new-arrivals",
    description: "The latest additions to our collection. Fresh styles, timeless elegance.",
    image: "/image/kaftan_hero.png",
    badge: "Just Landed",
  },
  {
    name: "Best Sellers",
    slug: "best-sellers",
    description: "Our most loved pieces, chosen by women around the world.",
    image: "/image/hijab_hero.png",
    badge: "Most Popular",
  },
  {
    name: "The Kaftan Edit",
    slug: "the-kaftan-edit",
    description: "Timeless silhouettes crafted from premium fabrics for effortless elegance.",
    image: "/image/kaftan_hero.png",
    badge: "Signature",
  },
  {
    name: "Miami Launch",
    slug: "miami-launch",
    description: "Our debut collection celebrating the spirit of Miami — vibrant, elegant, joyful.",
    image: "/image/jewelry_hero.png",
    badge: "Exclusive",
    href: "/miami-launch",
  },
  {
    name: "Evening Wear",
    slug: "evening-wear",
    description: "Sophisticated gowns and dresses for life's most memorable moments.",
    image: "/image/brand_story.png",
    badge: "Luxury",
  },
  {
    name: "Everyday Elegance",
    slug: "everyday-elegance",
    description: "Refined essentials that bring joy to your daily wardrobe.",
    image: "/image/lookbook_teaser.png",
    badge: "Essential",
  },
];

export default function CollectionsPage() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 xss:px-7.5">
      {/* Hero */}
      <section className="py-12 sm:py-16 text-center">
        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-3 block pl-[0.3em]">
          Explore
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[0.15em] text-foreground uppercase mb-4">
          Collections
        </h1>
        <p className="text-sm font-light tracking-wide text-muted max-w-lg mx-auto leading-relaxed">
          Curated edits and seasonal collections designed to inspire your personal style journey.
        </p>
      </section>

      {/* Collection Grid */}
      <section className="pb-16 sm:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {COLLECTIONS.map((collection) => (
            <Link
              key={collection.slug}
              href={collection.href || `/collections/${collection.slug}`}
              className="group relative block aspect-[3/4] overflow-hidden rounded-xl"
              aria-label={`View ${collection.name} collection`}
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 bg-black/30 backdrop-blur-sm text-[9px] font-bold tracking-[0.2em] text-[#C5A880] uppercase rounded-full">
                  {collection.badge}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h2 className="text-lg sm:text-xl font-light tracking-[0.12em] text-white uppercase mb-1.5 group-hover:text-[#C5A880] transition-colors duration-300">
                  {collection.name}
                </h2>
                <p className="text-[11px] sm:text-xs font-light text-neutral-300 tracking-wide leading-relaxed line-clamp-2">
                  {collection.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-3 text-[10px] font-semibold tracking-[0.15em] text-[#C5A880] uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Explore
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { GET_PRODUCTS } from "@/graphql";
import { cachedGraphQLRequest } from "@/utils/hooks/useCache";
import { ProductsResponse } from "@/components/catalog/type";
import { GridTileImage } from "@/components/theme/ui/grid/Tile";
import { ThemeSkeleton } from "@/components/common/skeleton/ThemeSkeleton";

interface CollectionMeta {
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
}

const COLLECTION_DATA: Record<string, CollectionMeta> = {
  "new-arrivals": {
    name: "New Arrivals",
    slug: "new-arrivals",
    description: "The latest additions to our collection.",
    longDescription:
      "Discover the freshest additions to the Lady Fauzia collection. Each piece represents our commitment to timeless elegance, premium craftsmanship, and the joy of self-expression through modest luxury fashion.",
    image: "/image/kaftan_hero.png",
  },
  "best-sellers": {
    name: "Best Sellers",
    slug: "best-sellers",
    description: "Our most loved pieces.",
    longDescription:
      "These are the pieces our community can't stop wearing. From signature kaftans to crystal-embellished hijabs, discover why these styles have become wardrobe staples for women who value both elegance and comfort.",
    image: "/image/hijab_hero.png",
  },
  "the-kaftan-edit": {
    name: "The Kaftan Edit",
    slug: "the-kaftan-edit",
    description: "Timeless silhouettes crafted from premium fabrics.",
    longDescription:
      "Our signature kaftan collection celebrates the beauty of flowing silhouettes and luxurious fabrics. Each kaftan is designed for the woman who values comfort without compromising on sophistication — perfect for everything from intimate dinners to grand celebrations.",
    image: "/image/kaftan_hero.png",
  },
  "evening-wear": {
    name: "Evening Wear",
    slug: "evening-wear",
    description: "Sophisticated gowns for memorable moments.",
    longDescription:
      "For life's most cherished occasions, our evening wear collection offers gowns and dresses that combine modest elegance with showstopping sophistication. Hand-finished details and premium materials ensure you feel extraordinary.",
    image: "/image/brand_story.png",
  },
  "everyday-elegance": {
    name: "Everyday Elegance",
    slug: "everyday-elegance",
    description: "Refined essentials for your daily wardrobe.",
    longDescription:
      "Elevate your everyday with pieces that bring quiet luxury to daily life. Our Everyday Elegance collection features refined essentials crafted from premium fabrics — because you deserve to feel beautiful every day.",
    image: "/image/lookbook_teaser.png",
  },
};

export async function generateStaticParams() {
  return Object.keys(COLLECTION_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = COLLECTION_DATA[slug];
  const name = collection?.name || "Collection";

  return {
    title: `${name} | Lady Fauzia Co.`,
    description:
      collection?.description ||
      "Explore this curated collection from Lady Fauzia Co.",
    openGraph: {
      title: `${name} | Lady Fauzia Co.`,
      description: collection?.description,
      type: "website",
    },
  };
}

async function CollectionProducts() {
  let products: any[] = [];

  try {
    const data = await cachedGraphQLRequest<ProductsResponse>(
      "collection",
      GET_PRODUCTS,
      {
        sortKey: "CREATED_AT",
        first: 12,
        reverse: true,
      }
    );
    products =
      data?.products?.edges?.map((edge) => edge.node) || [];
  } catch {
    return null;
  }

  if (!products.length) {
    return (
      <div className="text-center py-16">
        <p className="text-sm text-muted tracking-wide">
          Products coming soon. Check back for our latest pieces.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {products.map((product, index) => (
        <Link
          key={product.id}
          href={`/product/${product.urlKey}`}
          className="group relative block aspect-[3/4] overflow-hidden rounded-lg"
          aria-label={`View ${product.name}`}
        >
          <GridTileImage
            src={product.baseImageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            priority={index < 4}
            label={{
              position: "bottom",
              title: product.name,
              amount: String(
                product.type === "configurable" ||
                  product.type === "grouped" ||
                  product.type === "bundle"
                  ? product.minimumPrice || "0"
                  : product.price || "0"
              ),
              currencyCode: "USD",
            }}
          />
        </Link>
      ))}
    </div>
  );
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = COLLECTION_DATA[slug];

  if (!collection) {
    return (
      <div className="w-full max-w-screen-2xl mx-auto px-4 xss:px-7.5 py-24 text-center">
        <h1 className="text-2xl font-light tracking-[0.15em] text-foreground uppercase mb-4">
          Collection Not Found
        </h1>
        <Link href="/collections" className="text-sm text-primary hover:text-primary-strong transition-colors">
          ← Back to Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 xss:px-7.5">
      {/* Hero */}
      <section className="relative w-full aspect-[21/8] overflow-hidden rounded-xl mt-6">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-[#C5A880] uppercase mb-2 pl-[0.3em]">
            Collection
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-[0.15em] text-white uppercase">
            {collection.name}
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 py-6 text-xs text-muted">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/collections" className="hover:text-foreground transition-colors">Collections</Link>
        <span>/</span>
        <span className="text-foreground">{collection.name}</span>
      </nav>

      {/* Description */}
      <div className="max-w-2xl mb-10">
        <p className="text-sm font-light leading-relaxed text-foreground/70 tracking-wide">
          {collection.longDescription}
        </p>
      </div>

      {/* Products */}
      <Suspense fallback={<ThemeSkeleton />}>
        <CollectionProducts />
      </Suspense>

      {/* Back link */}
      <div className="py-12 text-center">
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-primary uppercase hover:text-primary-strong transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M11 7H3M3 7L6 4M3 7L6 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          All Collections
        </Link>
      </div>
    </div>
  );
}

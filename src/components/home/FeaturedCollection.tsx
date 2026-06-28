import { FC } from "react";
import Link from "next/link";
import { cachedGraphQLRequest } from "@/utils/hooks/useCache";
import { GridTileImage } from "@/components/theme/ui/grid/Tile";
import { GET_PRODUCTS } from "@/graphql";
import { ProductsResponse } from "@/components/catalog/type";

interface FeaturedCollectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  categorySlug?: string;
}

const FeaturedCollection: FC<FeaturedCollectionProps> = async ({
  title = "The Kaftan Edit",
  subtitle = "Timeless silhouettes crafted from premium fabrics, designed for the woman who values elegance without compromise.",
  ctaText = "Shop the Collection",
  ctaLink = "/search/kaftans",
  categorySlug,
}) => {
  let products: any[] = [];

  try {
    const data = await cachedGraphQLRequest<ProductsResponse>(
      "featured-collection",
      GET_PRODUCTS,
      {
        sortKey: "CREATED_AT",
        first: 4,
        reverse: true,
      }
    );

    products =
      data?.products?.edges?.slice(0, 4).map((edge) => edge.node) || [];
  } catch (error) {
    console.error("Error fetching featured collection:", error);
  }

  if (!products.length) return null;

  return (
    <section className="py-12 sm:py-20">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12">
        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-3 block pl-[0.3em]">
          Featured Collection
        </span>
        <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.15em] text-foreground uppercase mb-3">
          {title}
        </h2>
        <p className="text-xs sm:text-sm font-light tracking-wide text-muted max-w-lg mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
              sizes="(min-width: 1024px) 25vw, 50vw"
              priority={index < 2}
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

      {/* CTA */}
      <div className="text-center mt-8 sm:mt-10">
        <Link
          href={ctaLink}
          className="inline-block border border-primary bg-transparent text-primary hover:bg-primary hover:text-white font-semibold tracking-[0.2em] text-[10px] sm:text-xs px-8 py-3 sm:px-10 sm:py-3.5 transition-all duration-500 uppercase"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCollection;

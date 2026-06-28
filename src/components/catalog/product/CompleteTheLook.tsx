import { GET_RELATED_PRODUCTS, GET_PRODUCTS } from "@/graphql";
import { SingleProductResponse, ProductsResponse } from "@/components/catalog/type";
import { cachedProductRequest, cachedGraphQLRequest } from "@/utils/hooks/useCache";
import Link from "next/link";
import { NextImage } from "@/components/common/NextImage";
import { Price } from "@/components/theme/ui/Price";
import ProductCardActions from "@/components/catalog/product/ProductCardActions";
import { baseUrl, getImageUrl, NOT_IMAGE } from "@/utils/constants";

export async function CompleteTheLook({
  fullPath,
  categoryId,
}: {
  fullPath: string;
  categoryId?: string;
}) {
  let lookProducts: any[] = [];

  try {
    // 1. Attempt to fetch configured related products from Bagisto
    const dataById = await cachedProductRequest<SingleProductResponse>(
      fullPath,
      GET_RELATED_PRODUCTS,
      {
        urlKey: fullPath,
        first: 4,
      }
    );
    lookProducts = dataById?.product?.relatedProducts?.edges?.map((e) => e.node) || [];
  } catch (error) {
    console.error("Error fetching related products", error);
  }

  // 2. If no related products, fetch default modest styling pieces (e.g. hijabs, jewelry, accessories)
  if (lookProducts.length === 0) {
    try {
      const fallbackData = await cachedGraphQLRequest<ProductsResponse>(
        "product",
        GET_PRODUCTS,
        {
          first: 4,
          sortKey: "CREATED_AT",
          reverse: true,
        }
      );
      lookProducts = fallbackData?.products?.edges?.map((e) => e.node) || [];
    } catch (error) {
      console.error("Error fetching fallback products for Complete the Look", error);
    }
  }

  if (lookProducts.length === 0) return null;

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 xss:px-7.5 mt-16 sm:mt-24 flex flex-col gap-y-8 sm:gap-y-12">
      <div className="text-center md:text-left font-outfit">
        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-2 block">
          Editorial Styling
        </span>
        <h2 className="text-2xl sm:text-3xl font-light tracking-[0.15em] text-foreground uppercase">
          Complete The Look
        </h2>
        <p className="text-xs sm:text-sm font-light text-muted tracking-wide max-w-2xl mt-3 leading-relaxed">
          Curated combinations designed to perfectly complement this piece. Elevate your silhouette with our signature modest accessories and jewelry.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {lookProducts.slice(0, 4).map((item, index) => {
          const imageUrl = getImageUrl(item?.baseImageUrl, baseUrl, NOT_IMAGE);
          const productPrice =
            item?.type === "configurable" || item?.type === "grouped" || item?.type === "bundle"
              ? item?.minimumPrice ?? "0"
              : item?.price ?? "0";

          return (
            <div key={item.id ?? index} className="flex flex-col group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#F6F5F2] dark:bg-[#1A1A1A] w-full">
                <Link href={`/product/${item.urlKey}`} aria-label={`View ${item.name}`}>
                  <div className="w-full h-full">
                    <NextImage
                      alt={item?.name || "Product image"}
                      src={imageUrl || ""}
                      width={350}
                      height={466}
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-103 w-full h-full"
                    />
                  </div>
                </Link>
                {/* Gold/Champagne Quick Add Overlay on Hover */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-[calc(100%-24px)] flex items-center justify-center rounded-lg border border-white/50 bg-white/90 dark:bg-black/85 shadow-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <ProductCardActions
                    productType={item.type}
                    productId={item.id}
                    productUrlKey={item.urlKey || item.sku}
                    isSaleable={item.isSaleable}
                  />
                </div>
              </div>

              <div className="flex flex-col mt-4 font-outfit">
                <h3 className="font-light text-sm tracking-[0.05em] text-foreground truncate group-hover:text-primary transition-colors">
                  {item?.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  {(item?.type === "configurable" || item?.type === "grouped") && !item?.specialPrice && (
                    <span className="text-[10px] text-muted tracking-wide">
                      As low as
                    </span>
                  )}
                  {item?.specialPrice ? (
                    <div className="flex items-center gap-2">
                      <Price
                        amount={String(productPrice)}
                        className="text-xs text-muted line-through"
                        currencyCode="USD"
                      />
                      <Price
                        amount={String(item.specialPrice)}
                        className="text-sm font-semibold text-primary"
                        currencyCode="USD"
                      />
                    </div>
                  ) : (
                    <Price
                      amount={String(productPrice)}
                      className="text-sm font-semibold text-foreground"
                      currencyCode="USD"
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

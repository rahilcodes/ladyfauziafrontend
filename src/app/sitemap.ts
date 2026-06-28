import type { MetadataRoute } from "next";
import { GET_PRODUCTS, GET_TREE_CATEGORIES } from "@/graphql";
import { cachedGraphQLRequest } from "@/utils/hooks/useCache";
import { ProductsResponse } from "@/components/catalog/type";

interface TreeCategoryResponse {
  treeCategories: Array<{
    translation?: {
      slug?: string | null;
      urlPath?: string | null;
    } | null;
  }>;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ladyfauzia.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/founder",
    "/craftsmanship",
    "/lookbook",
    "/size-guide",
    "/shipping-returns",
    "/collections",
    "/journal",
    "/miami-launch",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic journal articles (statically defined since they are static in CMS / journal page)
  const journalRoutes = [
    "/journal/the-art-of-modest-luxury",
    "/journal/miami-our-first-chapter",
    "/journal/styling-the-perfect-kaftan",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Collections
  const collectionRoutes = [
    "/collections/new-arrivals",
    "/collections/best-sellers",
    "/collections/the-kaftan-edit",
    "/collections/evening-wear",
    "/collections/everyday-elegance",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  // Fetch dynamic products from Bagisto
  let productRoutes: MetadataRoute.Sitemap = [];
  try {
    const productsData = await cachedGraphQLRequest<ProductsResponse>(
      "product",
      GET_PRODUCTS,
      {
        first: 100,
      }
    );
    const edges = productsData?.products?.edges || [];
    productRoutes = edges
      .map((edge) => edge.node?.urlKey)
      .filter((urlKey): urlKey is string => !!urlKey)
      .map((urlKey) => ({
        url: `${baseUrl}/product/${urlKey}`,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: 0.9,
      }));
  } catch (error) {
    console.error("Failed to fetch products for sitemap", error);
  }

  // Fetch dynamic categories from Bagisto
  let categoryRoutes: MetadataRoute.Sitemap = [];
  try {
    const categoriesData = await cachedGraphQLRequest<TreeCategoryResponse>(
      "category",
      GET_TREE_CATEGORIES,
      {}
    );
    const categories = categoriesData?.treeCategories || [];
    categoryRoutes = categories
      .map((cat) => cat.translation?.urlPath || cat.translation?.slug)
      .filter((slug): slug is string => !!slug)
      .map((slug) => ({
        url: `${baseUrl}/categories/${slug}`,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: 0.8,
      }));
  } catch (error) {
    console.error("Failed to fetch categories for sitemap", error);
  }

  return [
    ...staticRoutes,
    ...journalRoutes,
    ...collectionRoutes,
    ...productRoutes,
    ...categoryRoutes,
  ];
}

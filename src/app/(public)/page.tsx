import { Suspense } from "react";
import { GET_THEME_CUSTOMIZATION } from "@/graphql";
import { ThemeCustomizationResponse } from "@/types/theme/theme-customization";
import { cachedGraphQLRequest } from "@/utils/hooks/useCache";
import ImageCarousel from "@components/home/ImageCarousel";
import BrandPromiseStrip from "@components/home/BrandPromiseStrip";
import CategoryCarousel from "@components/home/CategoryCarousel";
import FeaturedCollection from "@components/home/FeaturedCollection";
import BrandStoryTeaser from "@components/home/BrandStoryTeaser";
import ProductCarousel from "@components/home/ProductCarousel";
import EditorialTeaser from "@components/home/EditorialTeaser";
import NewsletterSection from "@components/home/NewsletterSection";
import InstagramGrid from "@components/home/InstagramGrid";
import { MobileSearchBar } from "@components/layout/navbar/MobileSearch";
import { CategoryCarouselSkeleton } from "@components/common/skeleton/CategoryCarouselSkeleton";
import { ThemeSkeleton } from "@components/common/skeleton/ThemeSkeleton";
import { ThreeItemGridSkeleton } from "@components/theme/ui/grid/ThreeItemsSkeleton";

export const revalidate = 3600;

export default async function Home() {
  // Fetch theme customization data for the hero carousel
  const data = await cachedGraphQLRequest<ThemeCustomizationResponse>(
    "home",
    GET_THEME_CUSTOMIZATION,
    { first: 20 }
  );

  return (
    <>
      <MobileSearchBar />
      <section className="w-full max-w-screen-2xl mx-auto pb-4 px-4 xss:px-7.5">
        {/* 1. Hero Carousel */}
        <ImageCarousel options={{}} />

        {/* 2. Brand Promise Strip */}
        <BrandPromiseStrip />

        {/* 3. Shop by Category */}
        <Suspense fallback={<CategoryCarouselSkeleton />}>
          <CategoryCarousel options={{ filters: {} }} />
        </Suspense>

        {/* 4. Featured Collection — The Kaftan Edit */}
        <Suspense fallback={<ThemeSkeleton />}>
          <FeaturedCollection
            title="The Kaftan Edit"
            subtitle="Timeless silhouettes crafted from premium fabrics, designed for the woman who values elegance without compromise."
            ctaText="Shop the Collection"
            ctaLink="/search/kaftans"
          />
        </Suspense>

        {/* 5. Brand Story Teaser */}
        <BrandStoryTeaser />

        {/* 6. Trending Products */}
        <Suspense fallback={<ThemeSkeleton />}>
          <ProductCarousel
            options={{
              title: "Trending Now",
              filters: { sort: "created_at-desc" },
            }}
            itemCount={4}
          />
        </Suspense>

        {/* 7. Editorial / Lookbook Teaser */}
        <EditorialTeaser />

        {/* 8. Newsletter Signup */}
        <NewsletterSection />

        {/* 9. Instagram Grid */}
        <InstagramGrid />
      </section>
    </>
  );
}

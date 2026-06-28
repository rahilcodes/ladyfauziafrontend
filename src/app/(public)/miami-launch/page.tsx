import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import CountdownTimer from "@/components/campaign/CountdownTimer";
import CampaignEmailCapture from "@/components/campaign/CampaignEmailCapture";
import { GET_PRODUCTS } from "@/graphql";
import { cachedGraphQLRequest } from "@/utils/hooks/useCache";
import { ProductsResponse } from "@/components/catalog/type";
import { baseUrl, getImageUrl, NOT_IMAGE } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Miami Launch | Lady Fauzia Co. — Joyful. Always.",
  description:
    "Be the first to experience our Miami debut collection. Sign up for early access, view exclusive sneak peeks, and follow our countdown to modest luxury.",
  openGraph: {
    title: "Miami Launch | Lady Fauzia Co.",
    description:
      "Be the first to experience our Miami debut collection. Sign up for early access.",
    type: "website",
    images: ["/image/miami_hero.png"],
  },
};

async function TeaserProducts() {
  let products: any[] = [];
  try {
    const data = await cachedGraphQLRequest<ProductsResponse>(
      "product",
      GET_PRODUCTS,
      {
        first: 4,
      }
    );
    products = data?.products?.edges?.map((e) => e.node) || [];
  } catch (error) {
    console.error("Failed to fetch teaser products", error);
  }

  if (products.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
      {products.map((product, index) => {
        const image = getImageUrl(product.baseImageUrl, baseUrl, NOT_IMAGE);
        return (
          <div key={product.id || index} className="group relative flex flex-col">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#F6F5F2] dark:bg-[#1A1A1A]">
              <Image
                src={image || NOT_IMAGE}
                alt="Teaser Product"
                fill
                className="object-cover filter blur-md scale-102 group-hover:blur-sm transition duration-750 ease-out"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Teaser Overlay */}
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-4 text-center">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#C5A880] uppercase mb-1">
                  Revealing Soon
                </span>
                <span className="text-[9px] text-white/70 tracking-widest uppercase">
                  Look {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
            <div className="mt-3 text-center">
              <div className="h-4 w-24 bg-neutral-200 dark:bg-neutral-800 rounded mx-auto animate-pulse" />
              <div className="h-3 w-16 bg-neutral-100 dark:bg-neutral-900 rounded mx-auto mt-2 animate-pulse" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function MiamiLaunchPage() {
  // Use env variable or default to Nov 1st, 2026
  const launchDate =
    process.env.NEXT_PUBLIC_MIAMI_LAUNCH_DATE || "2026-11-01T00:00:00Z";

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center text-white px-6 overflow-hidden rounded-b-3xl">
        <Image
          src="/image/miami_hero.png"
          alt="Lady Fauzia Co. Miami Launch"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/80" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-8 py-12">
          <div>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.35em] text-[#C5A880] uppercase mb-3 block pl-[0.35em]">
              The Miami Debut
            </span>
            <h1 className="font-outfit text-4xl sm:text-6xl lg:text-7xl font-extralight tracking-[0.18em] uppercase text-white leading-tight">
              Joyful.<br className="sm:hidden" /> Always.
            </h1>
          </div>

          <p className="text-sm sm:text-base font-light text-white/80 max-w-xl mx-auto tracking-wide leading-relaxed">
            Introducing our inaugural collection of premium modest fashion to the United States. Designed in Miami, crafted with luxury silks and hand-finished details, tailored for the modern modest woman.
          </p>

          {/* Countdown Timer */}
          <div className="py-4">
            <CountdownTimer targetDate={launchDate} />
          </div>

          {/* Email Capture */}
          <div className="max-w-md mx-auto pt-2">
            <CampaignEmailCapture campaignName="Miami Launch" />
          </div>
        </div>
      </section>

      {/* Story - Why Miami? */}
      <section className="max-w-screen-xl mx-auto px-6 py-20 md:py-28 md:px-12">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase block">
              Our Journey
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl font-light tracking-[0.15em] text-foreground uppercase leading-tight">
              Why Miami?
            </h2>
            <div className="space-y-5 text-sm sm:text-base font-light text-muted-strong leading-relaxed">
              <p>
                Miami is more than a city; it is a canvas of light, culture, and joyful expression. Its vibrant spirit and diverse communities represent the exact intersection of heritage and modernity that Lady Fauzia Co. embodies.
              </p>
              <p>
                From our sun-filled studio in South Florida, we draw inspiration from Art Deco silhouettes, warm coastal palette, and the elegant ease of resort living. Every dress, kaftan, and hijab in the launch collection is a reflection of this environment.
              </p>
              <p>
                This launch marks our first chapter in bringing Modest Luxury to the US market, with dedicated local fulfillment to ensure an effortless experience.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/image/about_miami.png"
              alt="Miami Design Inspiration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sneak Peek Teasers */}
      <section className="bg-primary-soft/50 dark:bg-neutral-950/40 py-20 md:py-28 border-t border-b border-border/50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase block mb-2">
              The Collection
            </span>
            <h2 className="font-outfit text-2xl sm:text-3xl font-light tracking-[0.15em] text-foreground uppercase">
              First Look Preview
            </h2>
            <p className="text-xs sm:text-sm font-light text-muted tracking-wide mt-3 leading-relaxed">
              A private preview of our debut silhouettes. Register for early access to reveal the full collection and shop before the official release.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="aspect-[3/4] bg-neutral-200 dark:bg-neutral-800 rounded-xl animate-pulse" />
                ))}
              </div>
            }
          >
            <TeaserProducts />
          </Suspense>
        </div>
      </section>

      {/* Press & Mentions */}
      <section className="max-w-screen-xl mx-auto px-6 py-20 md:py-28 text-center md:px-12">
        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-10 block">
          As Featured In
        </span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-40 grayscale contrast-125 dark:invert">
          <div className="text-sm sm:text-base font-outfit tracking-[0.3em] uppercase font-bold text-foreground">
            Modest Vogue
          </div>
          <div className="text-sm sm:text-base font-outfit tracking-[0.25em] uppercase font-semibold text-foreground">
            Miami Luxury
          </div>
          <div className="text-sm sm:text-base font-outfit tracking-[0.3em] uppercase font-light text-foreground">
            L&apos;Elegance
          </div>
          <div className="text-sm sm:text-base font-outfit tracking-[0.2em] uppercase font-medium text-foreground">
            Elegancia Modesta
          </div>
        </div>
      </section>

      {/* Campaign CTA */}
      <section className="bg-black text-white py-20 text-center rounded-t-3xl">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <p className="font-outfit text-xl font-light tracking-[0.25em] text-[#C5A880] uppercase">
            Joyful. Always.
          </p>
          <h2 className="font-outfit text-2xl sm:text-3xl font-light tracking-[0.15em] uppercase">
            Be Part of the Beginning
          </h2>
          <p className="text-xs sm:text-sm font-light text-white/70 tracking-wide max-w-md mx-auto leading-relaxed">
            Spaces on our private preview guestlist are strictly limited. Register today to secure your invitation.
          </p>
          <div className="max-w-md mx-auto pt-4">
            <CampaignEmailCapture campaignName="Miami Launch Bottom" />
          </div>
        </div>
      </section>
    </div>
  );
}

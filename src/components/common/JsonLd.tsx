interface OrganizationJsonLdProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
}

interface WebSiteJsonLdProps {
  name?: string;
  url?: string;
  description?: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

interface ProductJsonLdProps {
  name: string;
  description?: string;
  image?: string;
  sku?: string;
  price?: string;
  currency?: string;
  availability?: "InStock" | "OutOfStock" | "PreOrder";
  brand?: string;
}

export function OrganizationJsonLd({
  name = "Lady Fauzia Co.",
  url = "https://ladyfauzia.com",
  logo = "https://ladyfauzia.com/image/lady fauzia logo.png",
  description = "Premium modest fashion brand. Luxury dresses, kaftans, hijabs, and jewelry. Handcrafted with joy.",
  sameAs = [
    "https://instagram.com/ladyfauziaco",
    "https://facebook.com/ladyfauziaco",
    "https://twitter.com/ladyfauziaco",
  ],
}: OrganizationJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@ladyfauzia.com",
      contactType: "customer service",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteJsonLd({
  name = "Lady Fauzia Co.",
  url = "https://ladyfauzia.com",
  description = "Premium modest fashion brand. Luxury dresses, kaftans, hijabs, and jewelry.",
}: WebSiteJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ProductJsonLd({
  name,
  description,
  image,
  sku,
  price,
  currency = "USD",
  availability = "InStock",
  brand = "Lady Fauzia Co.",
}: ProductJsonLdProps) {
  const jsonLd: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    brand: {
      "@type": "Brand",
      name: brand,
    },
  };

  if (description) jsonLd.description = description;
  if (image) jsonLd.image = image;
  if (sku) jsonLd.sku = sku;

  if (price) {
    jsonLd.offers = {
      "@type": "Offer",
      price,
      priceCurrency: currency,
      availability: `https://schema.org/${availability}`,
      seller: {
        "@type": "Organization",
        name: brand,
      },
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
